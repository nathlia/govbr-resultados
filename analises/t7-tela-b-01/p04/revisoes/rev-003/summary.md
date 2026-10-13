# Resumo da análise — Vistorias (vistorias)

Revisão 3 · substitui [a revisão anterior](../rev-002/summary.md) (sem alterar o pacote bruto) · gerado em 2026-10-13T00:02:35.208Z (UTC)

## 1. Status técnico

Análise: **pronta**

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261008-114725-vistorias-sem-3eaf | sem | rodou até o fim e o relatório foi aceito | — | aceita | final (revisão fechada) |
| 20261008-113221-vistorias-com-c0f6 | com | rodou até o fim e o relatório foi aceito | — | aceita | final (revisão fechada) |

Uma execução pode ter rodado bem e ainda estar esperando revisão: isso é normal. A pontuação só é final quando todos os cartões dela foram decididos.

## 2. Identidade

| | sem | com |
|---|---|---|
| Tela | Vistorias (vistorias @ govbr-telas-site-1a6e8daf3cdb) | Vistorias (vistorias @ govbr-telas-site-1a6e8daf3cdb) |
| Braço | sem oráculo | com oráculo |
| Modelo (família) | claude | claude |
| ID pedido | claude-opus-5-5 | claude-opus-5-5 |
| ID efetivo | claude-opus-5-5 (client-log) | claude-opus-5-5 (client-log) |
| Esforço | high | high |
| Cliente | claude-code 2.1.288 \(Claude Code\) | claude-code 2.1.288 \(Claude Code\) |
| Início (UTC) | 2026-10-08T11:47:48Z | 2026-10-08T11:32:46Z |
| Início (local) | 08/10/2026, 08:47:48 (horário de Brasília) | 08/10/2026, 08:32:46 (horário de Brasília) |
| Commit do harness | 7f189a9a0984459418e210aa1453acbee54e1160 | 7f189a9a0984459418e210aa1453acbee54e1160 |
| Repetição · tentativa | 4 · 1 | 4 · 1 |
| Campanha · slot · par | t7-tela-b-01 · p04-sem · p04 | t7-tela-b-01 · p04-com · p04 |

## 3. Resultado científico

| Medida | sem | com |
|---|---|---|
| Defeitos da referência confirmados | 33 de 102 | 31 de 102 |
| Recall (cobertura da referência) | 32,4% | 30,4% |
| Precisão sobre a referência — D/(D+F) | 94,3% | 93,9% |
| Precisão das afirmações — (D+N)/(D+N+F) | 97,6% | 97,5% |
| Afirmações incorretas (falsos positivos) | 2 | 2 |
| Defeitos novos corretos (fora da referência) | 48 | 46 |
| Duplicadas | 0 | 0 |
| Cartões pendentes de revisão | 0 | 0 |
| Maturidade | final (revisão fechada) | final (revisão fechada) |
| Entra na comparação principal | sim | sim |
| Achados enviados | 30 | 35 |

Recall e precisão só aparecem com a revisão fechada; enquanto houver cartão pendente ficam “indisponível” (nunca 0). “Achados enviados = 0” é um resultado válido (o agente olhou e não alegou nada); submissão recusada ou ausente é outra coisa.

Linha de base determinística (união das varreduras comparáveis), por unidade da referência:

| Unidades | sem | com |
|---|---|---|
| Agente e linha de base | 24 | 24 |
| Só o agente | 9 | 7 |
| Só a linha de base | 14 | 14 |
| Nenhum | 55 | 57 |
| Estado | provisório | provisório |

Linha de base: usada (lb-20261008-113138-vistorias-e91aae)

## 4. Comparação com − sem

_n = 1 par, sem inferência. Nenhum braço é declarado melhor por contagem bruta._

Estado: final (as duas revisões fechadas)

- Diferença de defeitos confirmados (com − sem): -2
- Diferença de recall (com − sem): −2,0 p.p.
- Só o com detectou: nenhuma
- Só o sem detectou: B-01 (&lt;pnip-root&gt; &quot;U Olá, Usuária de Teste, SUPERVISOR Programa Nac&quot;); B-25 (&lt;title&gt; &quot;PNIP&quot;)
- Os dois detectaram: B-11 (&lt;span&gt; &quot;Cidade&quot;); B-17 (&lt;div#avatar-menu&gt; &quot;Usuária de Teste usuaria.teste@exemplo.invalid S&quot;); B-06 (&lt;input&gt;); B-06 (&lt;input&gt;); B-11 (&lt;span&gt; &quot;Status&quot;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-06 (&lt;input&gt;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-13 (&lt;span&gt; &quot;Nenhum filtro de data aplicado&quot;); B-06 (&lt;input&gt;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-19 (&lt;span&gt; &quot;Trocar unidade&quot;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-06 (&lt;input&gt;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-06 (&lt;input&gt;); B-06 (&lt;input&gt;); B-06 (&lt;input&gt;); B-11 (&lt;span&gt; &quot;Vistoriador&quot;); B-02 (&lt;h2&gt; &quot;Vistorias&quot;); B-06 (&lt;input&gt;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-16 (&lt;img&gt;); B-06 (&lt;input&gt;); B-26 (&lt;th&gt;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-06 (&lt;input&gt;); B-11 (&lt;span&gt; &quot;Porto&quot;)
- Nenhum detectou: B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-14 (&lt;span&gt; &quot;U&quot;); B-07 (&lt;button&gt; \[shadow\]); B-10 (&lt;button&gt; &quot;Exibir lista&quot;); B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-29 (&lt;button&gt; &quot;Exibir lista&quot;); B-20 (&lt;textarea&gt;); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-09 (&lt;button&gt; &quot;Buscar&quot;); B-08 (&lt;button&gt; \[shadow\]); B-15 (&lt;hr&gt;); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-23 (&lt;div&gt; &quot;0%&quot;); B-24 (&lt;div&gt; &quot;Trocar embarcação da vistoria Busque e selecione&quot;); B-05 (&lt;input#br-input-8&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-04 (&lt;input#search&gt; &quot;Pesquise aqui ...&quot; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-21 (&lt;h3&gt; &quot;Programa Nacional de Regularização de Embarcação&quot;); B-03 (&lt;table&gt; &quot;# Nome da embarcação RAEP Data/Hora Vistoria Loc&quot;); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-18 (&lt;button&gt; &quot;Sair&quot;); B-08 (&lt;button&gt; \[shadow\]); B-27 (&lt;div&gt; &quot;Trocar embarcação da vistoria Busque e selecione&quot;); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-22 (&lt;table&gt; &quot;Status Data Hora Visualizado 06/03/2026 08:21:00&quot;); B-28 (&lt;button&gt; &quot;Buscar&quot;); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-10 (&lt;button&gt; &quot;Exibir lista&quot;); B-08 (&lt;button&gt; \[shadow\]); B-29 (&lt;button&gt; &quot;Exibir lista&quot;); B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-05 (&lt;input#br-input-9&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\])

## 5. MCP e isolamento

| | sem | com |
|---|---|---|
| Isolamento | passed | passed |
| Oráculo anunciado ao cliente | não | sim |
| Oráculo (pacote) | nenhum | govbr-ds-validator-server 2.7.0 (combined) |
| Uso do oráculo | ausente (confirmado) | não verificado |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 28 (ponte MCP do oráculo) |
| Protocolo | unverified | unverified |
| Ferramentas anunciadas | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for, get\_ds\_rules, get\_design\_tokens, get\_emag\_rules, get\_pag… |
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_snapshot, browser\_take\_screenshot, browser\_press\_key, browser\_click, browser\_navigate\_back, browser\_console\_messages, browser\_type | browser\_navigate, browser\_evaluate, browser\_snapshot, scan\_page, get\_finding\_details, browser\_take\_screenshot, browser\_press\_key, browser\_click, browser\_type, get\_emag\_rules, get\_ds\_rules |
| Erros de ferramenta | 4 (tool-events.ndjson \(eventos com isError: true\)) | 2 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 8 aprovado(s); falhos: nenhum | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | nenhuma | nenhuma |

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 6. Custo e tempo

| | sem | com |
|---|---|---|
| Tempo de relógio (s) | 717 (runner) | 717 (runner) |
| Turnos | 119 (stream-json do cliente \(result.num\_turns\)) | 143 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 118 (ponte MCP) | 142 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 28 (ponte MCP do oráculo) |
| Tokens de entrada | 128 (stream-json do cliente \(result.usage\)) | 164 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 44216 (stream-json do cliente \(result.usage\)) | 44617 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 5159924 (stream-json do cliente \(result.usage\)) | 9625360 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 153403 (stream-json do cliente \(result.usage\)) | 203238 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 3.1440408 (estimativa do cliente \(result.total\_cost\_usd\)) | 4.4439720000000005 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 174 cartão(ões), estimativa 1044 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 7. Detalhes e evidências

**sem** (20261008-114725-vistorias-sem-3eaf): [pacote](../../../../../restauracoes/20261008-114725-vistorias-sem-3eaf/2026-10-08T11-47-25Z__vistorias__opus__sem__rep-04__20261008-114725-vistorias-sem-3eaf) · [run.json](../../../../../restauracoes/20261008-114725-vistorias-sem-3eaf/2026-10-08T11-47-25Z__vistorias__opus__sem__rep-04__20261008-114725-vistorias-sem-3eaf/run.json) · [findings.json](../../../../../restauracoes/20261008-114725-vistorias-sem-3eaf/2026-10-08T11-47-25Z__vistorias__opus__sem__rep-04__20261008-114725-vistorias-sem-3eaf/findings.json) · [isolation.json](../../../../../restauracoes/20261008-114725-vistorias-sem-3eaf/2026-10-08T11-47-25Z__vistorias__opus__sem__rep-04__20261008-114725-vistorias-sem-3eaf/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261008-114725-vistorias-sem-3eaf/2026-10-08T11-47-25Z__vistorias__opus__sem__rep-04__20261008-114725-vistorias-sem-3eaf/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261008-114725-vistorias-sem-3eaf/2026-10-08T11-47-25Z__vistorias__opus__sem__rep-04__20261008-114725-vistorias-sem-3eaf/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261008-114725-vistorias-sem-3eaf/2026-10-08T11-47-25Z__vistorias__opus__sem__rep-04__20261008-114725-vistorias-sem-3eaf/evidence/cliente.json) [#3](../../../../../restauracoes/20261008-114725-vistorias-sem-3eaf/2026-10-08T11-47-25Z__vistorias__opus__sem__rep-04__20261008-114725-vistorias-sem-3eaf/evidence/container-config.json) [#4](../../../../../restauracoes/20261008-114725-vistorias-sem-3eaf/2026-10-08T11-47-25Z__vistorias__opus__sem__rep-04__20261008-114725-vistorias-sem-3eaf/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261008-114725-vistorias-sem-3eaf/2026-10-08T11-47-25Z__vistorias__opus__sem__rep-04__20261008-114725-vistorias-sem-3eaf/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261008-114725-vistorias-sem-3eaf/2026-10-08T11-47-25Z__vistorias__opus__sem__rep-04__20261008-114725-vistorias-sem-3eaf/evidence/preflight.json) [#7](../../../../../restauracoes/20261008-114725-vistorias-sem-3eaf/2026-10-08T11-47-25Z__vistorias__opus__sem__rep-04__20261008-114725-vistorias-sem-3eaf/evidence/prompt.txt) [#8](../../../../../restauracoes/20261008-114725-vistorias-sem-3eaf/2026-10-08T11-47-25Z__vistorias__opus__sem__rep-04__20261008-114725-vistorias-sem-3eaf/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261008-114725-vistorias-sem-3eaf/2026-10-08T11-47-25Z__vistorias__opus__sem__rep-04__20261008-114725-vistorias-sem-3eaf/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261008-114725-vistorias-sem-3eaf/2026-10-08T11-47-25Z__vistorias__opus__sem__rep-04__20261008-114725-vistorias-sem-3eaf/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261008-114725-vistorias-sem-3eaf/2026-10-08T11-47-25Z__vistorias__opus__sem__rep-04__20261008-114725-vistorias-sem-3eaf/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261008-114725-vistorias-sem-3eaf/2026-10-08T11-47-25Z__vistorias__opus__sem__rep-04__20261008-114725-vistorias-sem-3eaf/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261008-114725-vistorias-sem-3eaf/2026-10-08T11-47-25Z__vistorias__opus__sem__rep-04__20261008-114725-vistorias-sem-3eaf/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261008-114725-vistorias-sem-3eaf/2026-10-08T11-47-25Z__vistorias__opus__sem__rep-04__20261008-114725-vistorias-sem-3eaf/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261008-114725-vistorias-sem-3eaf/2026-10-08T11-47-25Z__vistorias__opus__sem__rep-04__20261008-114725-vistorias-sem-3eaf/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261008-114725-vistorias-sem-3eaf/2026-10-08T11-47-25Z__vistorias__opus__sem__rep-04__20261008-114725-vistorias-sem-3eaf/evidence/raw/probe/probe.json) [#17](../../../../../restauracoes/20261008-114725-vistorias-sem-3eaf/2026-10-08T11-47-25Z__vistorias__opus__sem__rep-04__20261008-114725-vistorias-sem-3eaf/evidence/raw/probe/sonda-escrita-1791460067725.txt) [#18](../../../../../restauracoes/20261008-114725-vistorias-sem-3eaf/2026-10-08T11-47-25Z__vistorias__opus__sem__rep-04__20261008-114725-vistorias-sem-3eaf/evidence/raw/task/mcp.json) [#19](../../../../../restauracoes/20261008-114725-vistorias-sem-3eaf/2026-10-08T11-47-25Z__vistorias__opus__sem__rep-04__20261008-114725-vistorias-sem-3eaf/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261008-114725-vistorias-sem-3eaf/2026-10-08T11-47-25Z__vistorias__opus__sem__rep-04__20261008-114725-vistorias-sem-3eaf/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261008-114725-vistorias-sem-3eaf/2026-10-08T11-47-25Z__vistorias__opus__sem__rep-04__20261008-114725-vistorias-sem-3eaf/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261008-114725-vistorias-sem-3eaf/2026-10-08T11-47-25Z__vistorias__opus__sem__rep-04__20261008-114725-vistorias-sem-3eaf/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261008-114725-vistorias-sem-3eaf/2026-10-08T11-47-25Z__vistorias__opus__sem__rep-04__20261008-114725-vistorias-sem-3eaf/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261008-114725-vistorias-sem-3eaf/2026-10-08T11-47-25Z__vistorias__opus__sem__rep-04__20261008-114725-vistorias-sem-3eaf/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261008-114725-vistorias-sem-3eaf/2026-10-08T11-47-25Z__vistorias__opus__sem__rep-04__20261008-114725-vistorias-sem-3eaf/evidence/logs/probe.log) [#7](../../../../../restauracoes/20261008-114725-vistorias-sem-3eaf/2026-10-08T11-47-25Z__vistorias__opus__sem__rep-04__20261008-114725-vistorias-sem-3eaf/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (30; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| title | emag:3.3 | O título da página é apenas &quot;PNIP&quot;, sem identificar a tela \(Vistorias\). |
| pnip-header | emag:1.5 | Não há links de salto \(&quot;Ir para o conteúdo&quot; etc.\). A primeira parada do Tab é o botão &quot;Menu&quot; do cabeçalho, e o conteúdo só é alcançado depois do cabeçalho, do avatar e da trilha. |
| h2 | emag:1.3 | O único cabeçalho da página é o h2 &quot;Vistorias&quot;. Não existe h1. |
| br-header | wcag:1.1.1 | A imagem do logotipo gov.br \(shadow DOM de br-header, img.large-img\) tem alt=&quot;logo&quot;, que não informa o conteúdo. |
| br-header | wcag:4.1.2 | O botão &quot;Menu&quot; \(#navigation no shadow DOM de br-header\) aponta data-target=&quot;#main-navigation&quot;, elemento que não existe. Clicar nele não abre nenhum menu e o botão não expõe aria-expanded. |
| #avatar-dropdown-trigger | wcag:2.5.3 | O nome acessível do botão é aria-label=&quot;Avatar com dropdown&quot;, mas o texto visível é &quot;Olá, Usuária de Teste, SUPERVISOR&quot;. O nome não contém o rótulo visível. |
| #avatar-menu | wcag:1.3.1 | O contêiner tem role=&quot;menu&quot;, mas nenhum filho tem role=&quot;menuitem&quot;. Ele contém texto, um span clicável e um botão &quot;Sair&quot;. |
| #avatar-menu img | wcag:1.1.1 | A imagem exit-icon.png do botão &quot;Sair&quot; não tem atributo alt. |
| #avatar-menu .text-center &gt; span | wcag:2.1.1 | &quot;Trocar unidade&quot; é um span com cursor:pointer, sem tabindex nem role. Não recebe foco pelo teclado. |
| br-breadcrumb | wcag:4.1.2 | Na trilha \(shadow DOM de br-breadcrumb\), o item Home é um &lt;a href=&quot;/portal-mpa&quot;&gt; que contém um &lt;button&gt;, ou seja, um elemento interativo aninhado em outro. |
| nav.tab-nav li.tab-item.active &gt; button | wcag:4.1.2 | A aba ativa \(&quot;Tramitando&quot;\) só é indicada pela classe &quot;active&quot; no li. Os botões das abas não têm role=&quot;tab&quot;, aria-selected nem aria-current. |
| pnip-filter-panel span.br-tag.interaction\[style\*=&quot;cursor&quot;\] | wcag:2.1.1 | Os filtros Cidade, Porto, Vistoriador e Status são spans clicáveis \(tabIndex -1, sem role\). Pelo Tab, o foco passa de &quot;Concluídos&quot; direto para a busca e nunca chega a eles. |
| pnip-filter-panel .br-select .br-radio &gt; label | wcag:2.1.1 | Com o filtro &quot;Cidade&quot; aberto, as opções \(Areia Branca do Leste, Barra Nova…\) são &lt;label&gt; dentro de .br-radio sem input associado. Não são focáveis nem têm papel de opção. |
| pnip-filter-panel .br-tag.interaction button.br-button.inverted.circle | wcag:4.1.2 | Na tag do filtro aplicado \(&quot;Barra Nova&quot;\), o botão de remover só tem o ícone fa-times, sem texto, aria-label nem title. O nome acessível fica vazio. |
| br-input\[type=&quot;date&quot;\] | emag:6.2 | Os dois campos de data \(input type=date no shadow DOM\) não têm label, aria-label nem aria-labelledby. &quot;Data da vistoria:&quot; e &quot;até&quot; são spans soltos, e a árvore de acessibilidade mostra textbox sem nome. |
| .br-tag.primary-pastel-01 | wcag:1.4.3 | O texto &quot;Nenhum filtro de data aplicado&quot; é branco rgb\(255,255,255\) sobre rgb\(197,212,235\), contraste 1,5:1, em 14px. |
| .col.align-content-center .br-tag.interaction button.br-button.inverted.circle | wcag:4.1.2 | Na tag &quot;Exibindo vistorias a partir de 25/03/2026&quot;, o botão de remover só tem o ícone fa-times, sem nome acessível. |
| pnip-propesc-vistorias div.d-flex.flex-column.mt-5 &gt; p | wcag:4.1.3 | Na busca sem resultados, a tabela e a paginação \(que tinha aria-live\) são removidas e aparece &quot;Não há vistorias para exibir.&quot; num &lt;p&gt; fora de qualquer região viva. O resultado não é anunciado. |
| table thead input\[type=&quot;checkbox&quot;\] | emag:6.2 | A checkbox &quot;selecionar todas&quot; no cabeçalho da tabela não tem rótulo nem nome acessível. |
| table tbody input\[type=&quot;checkbox&quot;\] | emag:6.2 | As checkboxes de seleção das linhas não têm rótulo nem nome acessível. A árvore mostra &quot;checkbox&quot; sem nome. |
| table thead th:last-child | wcag:1.3.1 | O último cabeçalho de coluna \(coluna de ações\) é um th vazio. |
| br-button\[icon=&quot;eye&quot;\] | wcag:4.1.2 | O botão de visualizar \(ícone olho\) tem aria-label=&quot;&quot; no botão interno, sem texto nem title. A árvore mostra &quot;button&quot; sem nome. |
| pnip-status-solicitacao-utils .bg-blue-40 &gt; div | wcag:1.4.3 | O selo &quot;Vistoria agendada&quot; é branco sobre rgb\(79,151,209\), contraste 3,14:1, em 14px e peso 500. |
| pnip-status-solicitacao-utils .bg-secondary-06 &gt; div | wcag:1.4.3 | O selo &quot;Vistoria pré agendada&quot; é branco sobre rgb\(136,136,136\), contraste 3,54:1, em 14px. |
| #swal2-select | emag:6.2 | No diálogo &quot;Atribuir Vistoriador&quot;, o select de vistoriadores não tem label, aria-label nem aria-labelledby. O texto &quot;Selecione um Vistoriador&quot; não está associado a ele. |
| br-button\[icon=&quot;trash&quot;\], br-button\[icon=&quot;user-times&quot;\] | wcag:2.4.3 | Ao abrir os diálogos &quot;Excluir Vistoria&quot; ou &quot;Atribuir Vistoriador&quot; pelo teclado e fechá-los com Esc, o foco vai para body e não volta ao botão que abriu o diálogo. |
| nav.br-pagination.small a.page | wcag:2.4.3 | Ao ativar o link de página &quot;2&quot;, a lista é renderizada de novo e o foco vai para body. |
| nav.br-pagination.small a.page.active | wcag:1.3.1 | A página atual só é indicada pela classe &quot;active&quot;. O link não tem aria-current=&quot;page&quot;. |
| nav.br-pagination.small li &gt; li | wcag:1.3.1 | Na paginação, cada link de página está num li aninhado diretamente em outro li \(li &gt; li, sem ul/ol intermediário\). |
| #total | incerta | Na aba &quot;Concluídos&quot;, estando na página 2, mudar &quot;Exibir&quot; para 25 mostra &quot;Não há vistorias para exibir.&quot; \(23 itens existem\) e remove toda a paginação. Não há como voltar à página 1 sem recarregar ou trocar de aba. |

**com** (20261008-113221-vistorias-com-c0f6): [pacote](../../../../../restauracoes/20261008-113221-vistorias-com-c0f6/2026-10-08T11-32-21Z__vistorias__opus__com__rep-04__20261008-113221-vistorias-com-c0f6) · [run.json](../../../../../restauracoes/20261008-113221-vistorias-com-c0f6/2026-10-08T11-32-21Z__vistorias__opus__com__rep-04__20261008-113221-vistorias-com-c0f6/run.json) · [findings.json](../../../../../restauracoes/20261008-113221-vistorias-com-c0f6/2026-10-08T11-32-21Z__vistorias__opus__com__rep-04__20261008-113221-vistorias-com-c0f6/findings.json) · [isolation.json](../../../../../restauracoes/20261008-113221-vistorias-com-c0f6/2026-10-08T11-32-21Z__vistorias__opus__com__rep-04__20261008-113221-vistorias-com-c0f6/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261008-113221-vistorias-com-c0f6/2026-10-08T11-32-21Z__vistorias__opus__com__rep-04__20261008-113221-vistorias-com-c0f6/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261008-113221-vistorias-com-c0f6/2026-10-08T11-32-21Z__vistorias__opus__com__rep-04__20261008-113221-vistorias-com-c0f6/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261008-113221-vistorias-com-c0f6/2026-10-08T11-32-21Z__vistorias__opus__com__rep-04__20261008-113221-vistorias-com-c0f6/evidence/cliente.json) [#3](../../../../../restauracoes/20261008-113221-vistorias-com-c0f6/2026-10-08T11-32-21Z__vistorias__opus__com__rep-04__20261008-113221-vistorias-com-c0f6/evidence/container-config.json) [#4](../../../../../restauracoes/20261008-113221-vistorias-com-c0f6/2026-10-08T11-32-21Z__vistorias__opus__com__rep-04__20261008-113221-vistorias-com-c0f6/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261008-113221-vistorias-com-c0f6/2026-10-08T11-32-21Z__vistorias__opus__com__rep-04__20261008-113221-vistorias-com-c0f6/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261008-113221-vistorias-com-c0f6/2026-10-08T11-32-21Z__vistorias__opus__com__rep-04__20261008-113221-vistorias-com-c0f6/evidence/preflight.json) [#7](../../../../../restauracoes/20261008-113221-vistorias-com-c0f6/2026-10-08T11-32-21Z__vistorias__opus__com__rep-04__20261008-113221-vistorias-com-c0f6/evidence/prompt.txt) [#8](../../../../../restauracoes/20261008-113221-vistorias-com-c0f6/2026-10-08T11-32-21Z__vistorias__opus__com__rep-04__20261008-113221-vistorias-com-c0f6/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261008-113221-vistorias-com-c0f6/2026-10-08T11-32-21Z__vistorias__opus__com__rep-04__20261008-113221-vistorias-com-c0f6/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261008-113221-vistorias-com-c0f6/2026-10-08T11-32-21Z__vistorias__opus__com__rep-04__20261008-113221-vistorias-com-c0f6/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261008-113221-vistorias-com-c0f6/2026-10-08T11-32-21Z__vistorias__opus__com__rep-04__20261008-113221-vistorias-com-c0f6/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261008-113221-vistorias-com-c0f6/2026-10-08T11-32-21Z__vistorias__opus__com__rep-04__20261008-113221-vistorias-com-c0f6/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261008-113221-vistorias-com-c0f6/2026-10-08T11-32-21Z__vistorias__opus__com__rep-04__20261008-113221-vistorias-com-c0f6/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261008-113221-vistorias-com-c0f6/2026-10-08T11-32-21Z__vistorias__opus__com__rep-04__20261008-113221-vistorias-com-c0f6/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261008-113221-vistorias-com-c0f6/2026-10-08T11-32-21Z__vistorias__opus__com__rep-04__20261008-113221-vistorias-com-c0f6/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261008-113221-vistorias-com-c0f6/2026-10-08T11-32-21Z__vistorias__opus__com__rep-04__20261008-113221-vistorias-com-c0f6/evidence/raw/oracle/inventory.json) [#17](../../../../../restauracoes/20261008-113221-vistorias-com-c0f6/2026-10-08T11-32-21Z__vistorias__opus__com__rep-04__20261008-113221-vistorias-com-c0f6/evidence/raw/oracle/oracle-telemetry.ndjson) [#18](../../../../../restauracoes/20261008-113221-vistorias-com-c0f6/2026-10-08T11-32-21Z__vistorias__opus__com__rep-04__20261008-113221-vistorias-com-c0f6/evidence/raw/oracle/tool-events.ndjson) [#19](../../../../../restauracoes/20261008-113221-vistorias-com-c0f6/2026-10-08T11-32-21Z__vistorias__opus__com__rep-04__20261008-113221-vistorias-com-c0f6/evidence/raw/probe/probe.json) [#20](../../../../../restauracoes/20261008-113221-vistorias-com-c0f6/2026-10-08T11-32-21Z__vistorias__opus__com__rep-04__20261008-113221-vistorias-com-c0f6/evidence/raw/probe/sonda-escrita-1791459165577.txt) [#21](../../../../../restauracoes/20261008-113221-vistorias-com-c0f6/2026-10-08T11-32-21Z__vistorias__opus__com__rep-04__20261008-113221-vistorias-com-c0f6/evidence/raw/task/mcp.json) [#22](../../../../../restauracoes/20261008-113221-vistorias-com-c0f6/2026-10-08T11-32-21Z__vistorias__opus__com__rep-04__20261008-113221-vistorias-com-c0f6/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261008-113221-vistorias-com-c0f6/2026-10-08T11-32-21Z__vistorias__opus__com__rep-04__20261008-113221-vistorias-com-c0f6/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261008-113221-vistorias-com-c0f6/2026-10-08T11-32-21Z__vistorias__opus__com__rep-04__20261008-113221-vistorias-com-c0f6/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261008-113221-vistorias-com-c0f6/2026-10-08T11-32-21Z__vistorias__opus__com__rep-04__20261008-113221-vistorias-com-c0f6/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261008-113221-vistorias-com-c0f6/2026-10-08T11-32-21Z__vistorias__opus__com__rep-04__20261008-113221-vistorias-com-c0f6/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261008-113221-vistorias-com-c0f6/2026-10-08T11-32-21Z__vistorias__opus__com__rep-04__20261008-113221-vistorias-com-c0f6/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261008-113221-vistorias-com-c0f6/2026-10-08T11-32-21Z__vistorias__opus__com__rep-04__20261008-113221-vistorias-com-c0f6/evidence/logs/oracle.log) [#7](../../../../../restauracoes/20261008-113221-vistorias-com-c0f6/2026-10-08T11-32-21Z__vistorias__opus__com__rep-04__20261008-113221-vistorias-com-c0f6/evidence/logs/probe.log) [#8](../../../../../restauracoes/20261008-113221-vistorias-com-c0f6/2026-10-08T11-32-21Z__vistorias__opus__com__rep-04__20261008-113221-vistorias-com-c0f6/evidence/logs/screens.log) · [binding](analysis-binding.com.json)

Achados enviados (35; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| td br-button\[icon=&quot;eye&quot;\] | button-name | Botão de visualizar \(ícone olho\) na coluna de ações: &lt;button aria-label=&quot;&quot;&gt; interno ao br-button, sem texto, title nem aria-label; nome acessível vazio. Ocorre nas abas Tramitando e Concluídos. |
| tbody pnip-status-solicitacao-utils .bg-blue-40 &gt; .text-secondary-01 | color-contrast | Etiqueta de status &quot;Vistoria agendada&quot;: texto branco #ffffff sobre #4f97d1, 14px normal, contraste 3,14:1. |
| tbody pnip-status-solicitacao-utils .bg-secondary-06 &gt; .text-secondary-01 | color-contrast | Etiqueta de status &quot;Vistoria pré agendada&quot; \(aba Agendar\): texto branco #ffffff sobre #888888, 14px normal, contraste 3,54:1. |
| .br-tag.primary-pastel-01 | color-contrast | Texto &quot;Nenhum filtro de data aplicado&quot;: branco #ffffff sobre #c5d4eb, 14px, contraste 1,5:1. É texto informativo \(span\), não controle desabilitado. |
| br-input\[type=&quot;date&quot;\] | label | Os dois campos de data \(input type=date #br-input-8 e #br-input-9 no shadow DOM\) não têm rótulo programático; os textos &quot;Data da vistoria:&quot; e &quot;até&quot; são spans soltos, não associados. |
| table input\[type=&quot;checkbox&quot;\] | label | Caixa &quot;selecionar todos&quot; no cabeçalho e caixas de seleção de cada linha sem nome acessível \(sem label, aria-label ou aria-labelledby\). |
| thead th:last-child | empty-table-header | Cabeçalho da coluna de ações \(&lt;th&gt;\) sem texto. |
| nav.br-pagination ul &gt; li &gt; li | listitem | Na paginação, cada número de página é um &lt;li&gt; aninhado diretamente dentro de outro &lt;li&gt; \(sem &lt;ul&gt;/&lt;ol&gt; pai\), estrutura de lista inválida. |
| pnip-propesc-vistorias h2 | page-has-heading-one | A página não tem &lt;h1&gt;; o título principal &quot;Vistorias&quot; é &lt;h2&gt; e é o único cabeçalho. |
| html | ds-page-footer | Nenhum .br-footer nem &lt;br-footer&gt; no documento; a página não tem rodapé \(nem landmark contentinfo\). |
| html | ds-page-skip-link | Não há link de salto para o conteúdo; o primeiro link é o &quot;Home&quot; do breadcrumb \(href=&quot;/portal-mpa&quot;\). Tab inicia no botão Menu do cabeçalho. |
| br-breadcrumb | ds-structure-breadcrumb-tag | O breadcrumb é renderizado como &lt;div class=&quot;br-breadcrumb&quot;&gt; no shadow DOM, sem &lt;nav&gt; nem rótulo de navegação. |
| br-breadcrumb | wcag:4.1.2 | O item Home do breadcrumb é um &lt;a href=&quot;/portal-mpa&quot;&gt; contendo um &lt;button aria-label=&quot;&quot;&gt; \(controle interativo aninhado dentro de link\). |
| pnip-filter-panel span.br-tag.interaction | govbr-3.7.0-accessibility-global-e6fd5e1247de | Os filtros Cidade, Porto, Vistoriador e Status são &lt;span&gt; com cursor:pointer e tabIndex -1; a navegação por Tab passa das abas direto para o campo de pesquisa, sem alcançá-los. Só abrem com clique de mouse. |
| pnip-filter-panel span.br-tag.interaction | wcag:4.1.2 | Os gatilhos de filtro não expõem papel \(sem role=button\) nem estado \(sem aria-expanded\); ao abrir o dropdown nada muda na árvore de acessibilidade além do ícone caret. |
| pnip-filter-panel .br-select .br-list .br-item | wcag:2.1.1 | As opções do dropdown de filtro \(ex.: &quot;Vila do Farol&quot;\) são &lt;div class=&quot;br-item&quot;&gt; com &lt;label&gt; sem input, sem tabindex e sem papel de opção; não recebem foco nem são operáveis por teclado; Esc não fecha a lista. |
| pnip-filter-panel .br-tag button.br-button.inverted | button-name | Após aplicar um filtro, o chip do filtro \(ex.: &quot;Vila do Farol&quot;\) tem botão de remoção só com ícone fa-times, sem nome acessível. |
| div.align-content-center &gt; span.br-tag.interaction &gt; button.br-button.inverted | button-name | Após preencher a data inicial, o chip &quot;Exibindo vistorias a partir de 28/03/2026&quot; tem botão de remoção só com ícone fa-times, sem nome acessível. |
| pnip-filter-panel .br-tag button.br-button.inverted | wcag:2.4.3 | Com o foco no botão de remover o chip do filtro, Enter remove o filtro e o foco cai em &lt;body&gt;; o usuário de teclado perde a posição. |
| pnip-propesc-vistorias .flex-column.justify-content-center &gt; p | wcag:4.1.3 | Pesquisa sem resultados substitui a tabela por &quot;Não há vistorias para exibir.&quot; num &lt;p&gt; sem role=status/aria-live; a região aria-live da paginação é removida, então nada é anunciado. |
| .br-tab .tab-item.active &gt; button | wcag:4.1.2 | A aba ativa \(Tramitando\) é indicada só por classe .active e borda azul; os botões não têm role=tab, aria-selected nem aria-current, então o estado selecionado não é exposto. |
| nav.br-pagination a.page.active | wcag:1.3.1 | A página atual da paginação \(link &quot;1&quot;, e &quot;2&quot; após navegar\) só se distingue visualmente pela classe .active; sem aria-current=&quot;page&quot;. |
| #avatar-dropdown-trigger | wcag:2.5.3 | O botão do usuário exibe o texto &quot;Olá, Usuária de Teste, SUPERVISOR&quot;, mas aria-label=&quot;Avatar com dropdown&quot; substitui o nome acessível, que não contém o texto visível. |
| #avatar-menu | aria-required-children | Menu do usuário aberto tem role=&quot;menu&quot; com filhos não permitidos \(button &quot;Sair&quot;, divs, span\) e nenhum menuitem. |
| #avatar-menu img | image-alt | Ícone de sair \(exit-icon.png\) dentro do botão &quot;Sair&quot; sem atributo alt. |
| #avatar-menu .text-center &gt; span | govbr-3.7.0-accessibility-global-e6fd5e1247de | &quot;Trocar unidade&quot; é um &lt;span&gt; com cursor:pointer, tabIndex -1 e sem papel; não é alcançável nem acionável por teclado. |
| br-header | incerta | O botão &quot;Menu&quot; \(hambúrguer, #navigation no shadow DOM do br-header\) tem data-target=&quot;#main-navigation&quot;, mas esse elemento não existe; clicar não abre nada e o botão não tem aria-expanded. |
| tbody br-button\[icon=&quot;trash&quot;\] | wcag:2.4.3 | Com o foco no botão &quot;Excluir vistoria&quot; \(teclado\), Enter abre o diálogo &quot;Excluir Vistoria&quot;; ao fechar com Esc o foco vai para &lt;body&gt; em vez de voltar ao botão. |
| #swal2-select | select-name | No diálogo &quot;Atribuir Vistoriador&quot;, o &lt;select&gt; de vistoriadores não tem nome acessível; o texto &quot;Selecione um Vistoriador&quot; não está associado. |
| #swal2-html-container input\[type=&quot;checkbox&quot;\] | emag:6.7 | No diálogo &quot;Exportar Vistorias&quot;, as 5 caixas de status ficam sob o texto solto &quot;Status:&quot; sem fieldset/legend nem role=group. |
| #search | emag:6.2 | O campo de pesquisa só tem placeholder &quot;Pesquise aqui ...&quot; como rótulo; não há label visível nem aria-label. |
| pnip-propesc-vistorias table | incerta | A tabela \(largura 1272px\) ultrapassa o contêiner .br-table \(1096px, overflow visible\) e a página fica com scrollWidth 1364px na janela de 1280px; a coluna de ações fica cortada na borda direita e exige rolagem horizonta… |
| #avatar-menu &gt; button | ds-token-radius | Botão &quot;Sair&quot; do menu do usuário com border-radius 20px. |
| pnip-filter-panel button.br-button.secondary | ds-token-spacing | Botão &quot;Limpar Filtro&quot; com style=&quot;margin-top: -5px&quot;. |
| pnip-search-table-utils button\[aria-label=&quot;Buscar&quot;\] | ds-token-spacing | Botão &quot;Buscar&quot; posicionado com style=&quot;margin-top: -38px&quot;. |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `219bc23f3f89bef36838bf673c614535f619e6de3550a69ff572f681be3cb5cc`

