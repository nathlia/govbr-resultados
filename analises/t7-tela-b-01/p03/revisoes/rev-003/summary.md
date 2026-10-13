# Resumo da análise — Vistorias (vistorias)

Revisão 3 · substitui [a revisão anterior](../rev-002/summary.md) (sem alterar o pacote bruto) · gerado em 2026-10-13T00:02:17.598Z (UTC)

## 1. Status técnico

Análise: **pronta**

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261006-062226-vistorias-sem-5ab4 | sem | rodou até o fim e o relatório foi aceito | — | aceita | final (revisão fechada) |
| 20261006-060752-vistorias-com-660b | com | rodou até o fim e o relatório foi aceito | — | aceita | final (revisão fechada) |

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
| Início (UTC) | 2026-10-06T06:22:51Z | 2026-10-06T06:08:15Z |
| Início (local) | 06/10/2026, 03:22:51 (horário de Brasília) | 06/10/2026, 03:08:15 (horário de Brasília) |
| Commit do harness | 7f189a9a0984459418e210aa1453acbee54e1160 | 7f189a9a0984459418e210aa1453acbee54e1160 |
| Repetição · tentativa | 3 · 1 | 3 · 1 |
| Campanha · slot · par | t7-tela-b-01 · p03-sem · p03 | t7-tela-b-01 · p03-com · p03 |

## 3. Resultado científico

| Medida | sem | com |
|---|---|---|
| Defeitos da referência confirmados | 35 de 102 | 32 de 102 |
| Recall (cobertura da referência) | 34,3% | 31,4% |
| Precisão sobre a referência — D/(D+F) | 92,1% | 91,4% |
| Precisão das afirmações — (D+N)/(D+N+F) | 96,3% | 97,0% |
| Afirmações incorretas (falsos positivos) | 3 | 3 |
| Defeitos novos corretos (fora da referência) | 44 | 64 |
| Duplicadas | 0 | 0 |
| Cartões pendentes de revisão | 0 | 0 |
| Maturidade | final (revisão fechada) | final (revisão fechada) |
| Entra na comparação principal | sim | sim |
| Achados enviados | 37 | 31 |

Recall e precisão só aparecem com a revisão fechada; enquanto houver cartão pendente ficam “indisponível” (nunca 0). “Achados enviados = 0” é um resultado válido (o agente olhou e não alegou nada); submissão recusada ou ausente é outra coisa.

Linha de base determinística (união das varreduras comparáveis), por unidade da referência:

| Unidades | sem | com |
|---|---|---|
| Agente e linha de base | 24 | 24 |
| Só o agente | 11 | 8 |
| Só a linha de base | 14 | 14 |
| Nenhum | 53 | 56 |
| Estado | provisório | provisório |

Linha de base: usada (lb-20261006-060713-vistorias-825985)

## 4. Comparação com − sem

_n = 1 par, sem inferência. Nenhum braço é declarado melhor por contagem bruta._

Estado: final (as duas revisões fechadas)

- Diferença de defeitos confirmados (com − sem): -3
- Diferença de recall (com − sem): −2,9 p.p.
- Só o com detectou: nenhuma
- Só o sem detectou: B-14 (&lt;span&gt; &quot;U&quot;); B-03 (&lt;table&gt; &quot;# Nome da embarcação RAEP Data/Hora Vistoria Loc&quot;); B-25 (&lt;title&gt; &quot;PNIP&quot;)
- Os dois detectaram: B-11 (&lt;span&gt; &quot;Cidade&quot;); B-17 (&lt;div#avatar-menu&gt; &quot;Usuária de Teste usuaria.teste@exemplo.invalid S&quot;); B-06 (&lt;input&gt;); B-06 (&lt;input&gt;); B-11 (&lt;span&gt; &quot;Status&quot;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-06 (&lt;input&gt;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-13 (&lt;span&gt; &quot;Nenhum filtro de data aplicado&quot;); B-06 (&lt;input&gt;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-19 (&lt;span&gt; &quot;Trocar unidade&quot;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-06 (&lt;input&gt;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-06 (&lt;input&gt;); B-06 (&lt;input&gt;); B-01 (&lt;pnip-root&gt; &quot;U Olá, Usuária de Teste, SUPERVISOR Programa Nac&quot;); B-06 (&lt;input&gt;); B-11 (&lt;span&gt; &quot;Vistoriador&quot;); B-02 (&lt;h2&gt; &quot;Vistorias&quot;); B-06 (&lt;input&gt;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-16 (&lt;img&gt;); B-06 (&lt;input&gt;); B-26 (&lt;th&gt;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-06 (&lt;input&gt;); B-11 (&lt;span&gt; &quot;Porto&quot;)
- Nenhum detectou: B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-10 (&lt;button&gt; &quot;Exibir lista&quot;); B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-29 (&lt;button&gt; &quot;Exibir lista&quot;); B-20 (&lt;textarea&gt;); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-09 (&lt;button&gt; &quot;Buscar&quot;); B-08 (&lt;button&gt; \[shadow\]); B-15 (&lt;hr&gt;); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-23 (&lt;div&gt; &quot;0%&quot;); B-24 (&lt;div&gt; &quot;Trocar embarcação da vistoria Busque e selecione&quot;); B-05 (&lt;input#br-input-8&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-04 (&lt;input#search&gt; &quot;Pesquise aqui ...&quot; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-21 (&lt;h3&gt; &quot;Programa Nacional de Regularização de Embarcação&quot;); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-18 (&lt;button&gt; &quot;Sair&quot;); B-08 (&lt;button&gt; \[shadow\]); B-27 (&lt;div&gt; &quot;Trocar embarcação da vistoria Busque e selecione&quot;); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-22 (&lt;table&gt; &quot;Status Data Hora Visualizado 06/03/2026 08:21:00&quot;); B-28 (&lt;button&gt; &quot;Buscar&quot;); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-10 (&lt;button&gt; &quot;Exibir lista&quot;); B-08 (&lt;button&gt; \[shadow\]); B-29 (&lt;button&gt; &quot;Exibir lista&quot;); B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-05 (&lt;input#br-input-9&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\])

## 5. MCP e isolamento

| | sem | com |
|---|---|---|
| Isolamento | passed | passed |
| Oráculo anunciado ao cliente | não | sim |
| Oráculo (pacote) | nenhum | govbr-ds-validator-server 2.7.0 (combined) |
| Uso do oráculo | ausente (confirmado) | usado conforme o protocolo |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 33 (ponte MCP do oráculo) |
| Protocolo | unverified | unverified |
| Ferramentas anunciadas | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for, get\_ds\_rules, get\_design\_tokens, get\_emag\_rules, get\_pag… |
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_snapshot, browser\_take\_screenshot, browser\_click, browser\_press\_key, browser\_type | browser\_navigate, browser\_evaluate, browser\_snapshot, scan\_page, get\_finding\_details, browser\_take\_screenshot, get\_ds\_rules, browser\_click, browser\_press\_key, browser\_navigate\_back, browser\_type, verify\_finding |
| Erros de ferramenta | 5 (tool-events.ndjson \(eventos com isError: true\)) | 3 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 8 aprovado(s); falhos: nenhum | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | nenhuma | nenhuma |

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 6. Custo e tempo

| | sem | com |
|---|---|---|
| Tempo de relógio (s) | 916 (runner) | 671 (runner) |
| Turnos | 127 (stream-json do cliente \(result.num\_turns\)) | 140 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 126 (ponte MCP) | 139 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 33 (ponte MCP do oráculo) |
| Tokens de entrada | 166 (stream-json do cliente \(result.usage\)) | 160 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 55663 (stream-json do cliente \(result.usage\)) | 45725 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 7430405 (stream-json do cliente \(result.usage\)) | 10038187 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 159664 (stream-json do cliente \(result.usage\)) | 209900 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 3.8773169999999992 (estimativa do cliente \(result.total\_cost\_usd\)) | 4.6019774 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 177 cartão(ões), estimativa 1062 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 7. Detalhes e evidências

**sem** (20261006-062226-vistorias-sem-5ab4): [pacote](../../../../../restauracoes/20261006-062226-vistorias-sem-5ab4/2026-10-06T06-22-26Z__vistorias__opus__sem__rep-03__20261006-062226-vistorias-sem-5ab4) · [run.json](../../../../../restauracoes/20261006-062226-vistorias-sem-5ab4/2026-10-06T06-22-26Z__vistorias__opus__sem__rep-03__20261006-062226-vistorias-sem-5ab4/run.json) · [findings.json](../../../../../restauracoes/20261006-062226-vistorias-sem-5ab4/2026-10-06T06-22-26Z__vistorias__opus__sem__rep-03__20261006-062226-vistorias-sem-5ab4/findings.json) · [isolation.json](../../../../../restauracoes/20261006-062226-vistorias-sem-5ab4/2026-10-06T06-22-26Z__vistorias__opus__sem__rep-03__20261006-062226-vistorias-sem-5ab4/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261006-062226-vistorias-sem-5ab4/2026-10-06T06-22-26Z__vistorias__opus__sem__rep-03__20261006-062226-vistorias-sem-5ab4/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261006-062226-vistorias-sem-5ab4/2026-10-06T06-22-26Z__vistorias__opus__sem__rep-03__20261006-062226-vistorias-sem-5ab4/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261006-062226-vistorias-sem-5ab4/2026-10-06T06-22-26Z__vistorias__opus__sem__rep-03__20261006-062226-vistorias-sem-5ab4/evidence/cliente.json) [#3](../../../../../restauracoes/20261006-062226-vistorias-sem-5ab4/2026-10-06T06-22-26Z__vistorias__opus__sem__rep-03__20261006-062226-vistorias-sem-5ab4/evidence/container-config.json) [#4](../../../../../restauracoes/20261006-062226-vistorias-sem-5ab4/2026-10-06T06-22-26Z__vistorias__opus__sem__rep-03__20261006-062226-vistorias-sem-5ab4/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261006-062226-vistorias-sem-5ab4/2026-10-06T06-22-26Z__vistorias__opus__sem__rep-03__20261006-062226-vistorias-sem-5ab4/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261006-062226-vistorias-sem-5ab4/2026-10-06T06-22-26Z__vistorias__opus__sem__rep-03__20261006-062226-vistorias-sem-5ab4/evidence/preflight.json) [#7](../../../../../restauracoes/20261006-062226-vistorias-sem-5ab4/2026-10-06T06-22-26Z__vistorias__opus__sem__rep-03__20261006-062226-vistorias-sem-5ab4/evidence/prompt.txt) [#8](../../../../../restauracoes/20261006-062226-vistorias-sem-5ab4/2026-10-06T06-22-26Z__vistorias__opus__sem__rep-03__20261006-062226-vistorias-sem-5ab4/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261006-062226-vistorias-sem-5ab4/2026-10-06T06-22-26Z__vistorias__opus__sem__rep-03__20261006-062226-vistorias-sem-5ab4/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261006-062226-vistorias-sem-5ab4/2026-10-06T06-22-26Z__vistorias__opus__sem__rep-03__20261006-062226-vistorias-sem-5ab4/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261006-062226-vistorias-sem-5ab4/2026-10-06T06-22-26Z__vistorias__opus__sem__rep-03__20261006-062226-vistorias-sem-5ab4/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261006-062226-vistorias-sem-5ab4/2026-10-06T06-22-26Z__vistorias__opus__sem__rep-03__20261006-062226-vistorias-sem-5ab4/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261006-062226-vistorias-sem-5ab4/2026-10-06T06-22-26Z__vistorias__opus__sem__rep-03__20261006-062226-vistorias-sem-5ab4/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261006-062226-vistorias-sem-5ab4/2026-10-06T06-22-26Z__vistorias__opus__sem__rep-03__20261006-062226-vistorias-sem-5ab4/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261006-062226-vistorias-sem-5ab4/2026-10-06T06-22-26Z__vistorias__opus__sem__rep-03__20261006-062226-vistorias-sem-5ab4/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261006-062226-vistorias-sem-5ab4/2026-10-06T06-22-26Z__vistorias__opus__sem__rep-03__20261006-062226-vistorias-sem-5ab4/evidence/raw/probe/probe.json) [#17](../../../../../restauracoes/20261006-062226-vistorias-sem-5ab4/2026-10-06T06-22-26Z__vistorias__opus__sem__rep-03__20261006-062226-vistorias-sem-5ab4/evidence/raw/probe/sonda-escrita-1791267771324.txt) [#18](../../../../../restauracoes/20261006-062226-vistorias-sem-5ab4/2026-10-06T06-22-26Z__vistorias__opus__sem__rep-03__20261006-062226-vistorias-sem-5ab4/evidence/raw/task/mcp.json) [#19](../../../../../restauracoes/20261006-062226-vistorias-sem-5ab4/2026-10-06T06-22-26Z__vistorias__opus__sem__rep-03__20261006-062226-vistorias-sem-5ab4/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261006-062226-vistorias-sem-5ab4/2026-10-06T06-22-26Z__vistorias__opus__sem__rep-03__20261006-062226-vistorias-sem-5ab4/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261006-062226-vistorias-sem-5ab4/2026-10-06T06-22-26Z__vistorias__opus__sem__rep-03__20261006-062226-vistorias-sem-5ab4/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261006-062226-vistorias-sem-5ab4/2026-10-06T06-22-26Z__vistorias__opus__sem__rep-03__20261006-062226-vistorias-sem-5ab4/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261006-062226-vistorias-sem-5ab4/2026-10-06T06-22-26Z__vistorias__opus__sem__rep-03__20261006-062226-vistorias-sem-5ab4/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261006-062226-vistorias-sem-5ab4/2026-10-06T06-22-26Z__vistorias__opus__sem__rep-03__20261006-062226-vistorias-sem-5ab4/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261006-062226-vistorias-sem-5ab4/2026-10-06T06-22-26Z__vistorias__opus__sem__rep-03__20261006-062226-vistorias-sem-5ab4/evidence/logs/probe.log) [#7](../../../../../restauracoes/20261006-062226-vistorias-sem-5ab4/2026-10-06T06-22-26Z__vistorias__opus__sem__rep-03__20261006-062226-vistorias-sem-5ab4/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (37; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| title | wcag:2.4.2 | O título do documento é apenas &quot;PNIP&quot; e não muda em /vistorias \(nem na tela de detalhe\). |
| pnip-propesc-vistorias h2 | emag:1.3 | O único cabeçalho da página é &lt;h2&gt; &quot;Vistorias&quot;. Não há &lt;h1&gt;; o título do cabeçalho é uma &lt;div class=&quot;header-title&quot;&gt;. |
| br-header | emag:1.5 | Não há link de atalho/skip link \(&quot;Ir para o conteúdo&quot;\) antes do cabeçalho. Nenhum a\[href^=&quot;#&quot;\] nem accesskey no documento. |
| br-header | wcag:1.1.1 | Dentro do shadow root de br-header, a &lt;img src=&quot;assets/images/govbr-logo.png&quot;&gt; tem alt=&quot;logo&quot;, que não descreve o conteúdo. |
| br-header | incerta | O botão &quot;Menu&quot; \(button#navigation no shadow root de br-header\) aponta para data-target=&quot;#main-navigation&quot;, que não existe. Ao clicar, nenhum menu abre e não há aria-expanded. |
| #avatar-dropdown-trigger | wcag:2.5.3 | O botão exibe o texto &quot;Olá, Usuária de Teste, SUPERVISOR&quot;, mas aria-label=&quot;Avatar com dropdown&quot; substitui esse texto no nome acessível. |
| #avatar-dropdown-trigger .br-avatar .content | wcag:1.4.3 | A letra &quot;U&quot; do avatar \(24,2px, negrito\) é branca rgb\(255,255,255\) sobre laranja rgb\(255,140,0\). Contraste: 2,33:1. |
| #avatar-menu | wcag:1.3.1 | O contêiner tem role=&quot;menu&quot;, mas não tem nenhum filho com role=&quot;menuitem&quot;. O conteúdo são spans, um &lt;hr&gt; e um &lt;button&gt; &quot;Sair&quot; sem papel de item de menu. |
| #avatar-menu .text-center &gt; span | wcag:2.1.1 | &quot;Trocar unidade&quot; é um &lt;span&gt; com cursor:pointer e tabIndex -1, sem role. Funciona com o mouse \(leva a /portal-mpa\), mas não recebe foco pelo teclado. |
| #avatar-menu .dropdown-button img | wcag:1.1.1 | O ícone do botão &quot;Sair&quot; \(&lt;img src=&quot;exit-icon.png&quot;&gt;\) não tem atributo alt. |
| br-breadcrumb | wcag:4.1.2 | No shadow root, o item Home é um &lt;a href=&quot;/portal-mpa&quot;&gt; que contém um &lt;button class=&quot;br-button&quot;&gt;. São dois controles interativos aninhados e duas paradas de Tab para o mesmo destino. |
| br-breadcrumb | incerta | A trilha é &lt;div class=&quot;br-breadcrumb&quot;&gt;&lt;ul class=&quot;crumb-list&quot;&gt;, sem &lt;nav&gt; nem aria-label. O item atual usa só data-active=&quot;active&quot;, sem aria-current. |
| nav.tab-nav li.tab-item.active &gt; button | wcag:4.1.2 | A aba ativa \(Tramitando por padrão\) é indicada só pela classe &quot;active&quot; no &lt;li&gt;. Nenhum botão de aba tem aria-selected nem aria-current. O mesmo ocorre ao ativar Agendar ou Concluídos. |
| pnip-filter-panel span.br-tag.interaction.bg-pure-0 | wcag:2.1.1 | Os filtros Cidade, Porto, Vistoriador e Status são &lt;span&gt; com cursor:pointer, tabIndex -1 e sem role. Abrem a lista com o mouse, mas não estão na ordem de tabulação. |
| pnip-filter-panel .br-list .br-item | wcag:2.1.1 | As opções da lista aberta \(ex.: &quot;Vila do Farol&quot;\) são div.br-item com um &lt;label&gt; sem input associado. Nenhuma é focável \(0 elementos com tabIndex&gt;=0\) e não há role de opção. |
| pnip-filter-panel .br-tag &gt; button.br-button.inverted.circle | wcag:4.1.2 | Na etiqueta do filtro aplicado \(&quot;Vila do Farol&quot;\), o botão de remover só contém um ícone &lt;i class=&quot;fas fa-times&quot;&gt; e não tem aria-label, title nem texto. O nome acessível fica vazio. |
| .col.align-content-center &gt; span.br-tag &gt; button.br-button.inverted.circle | wcag:4.1.2 | Na etiqueta &quot;Exibindo vistorias até 28/03/2026&quot;, o botão de remover o filtro de data só tem o ícone fa-times, sem aria-label, title nem texto. O nome acessível fica vazio. |
| br-input#search | wcag:3.3.2 | O campo de busca não tem rótulo visível nem &lt;label&gt;. A única indicação é o placeholder &quot;Pesquise aqui ...&quot;, que some ao digitar. |
| br-input\[type=&quot;date&quot;\] | wcag:4.1.2 | Os dois &lt;input type=&quot;date&quot;&gt; \(#br-input-8 e #br-input-9, no shadow root\) não têm nome acessível. Os textos &quot;Data da vistoria:&quot; e &quot;até&quot; são &lt;span&gt; sem associação, e a árvore de acessibilidade mostra &quot;textbox&quot; sem nome. |
| br-input\[type=&quot;date&quot;\]:first-of-type | wcag:3.2.2 | Com a data final 28/03/2026, ao digitar a data inicial pelo teclado \(03/30/2…\), o diálogo &quot;Atenção – A data do início do intervalo não pode ser superior à data de término&quot; abre no meio da digitação do ano \(valor interme… |
| br-button\[icon=&quot;trash&quot;\], br-input\[type=&quot;date&quot;\] | wcag:2.4.3 | Ao fechar um diálogo SweetAlert aberto pelo teclado, o foco vai para &lt;body&gt; e não volta ao controle que o abriu. Testado com Enter em &quot;Excluir vistoria&quot; \(linha 2\) + Esc, e com o alerta de intervalo de datas + Enter em O… |
| span.br-tag.primary-pastel-01 | wcag:1.4.3 | O texto &quot;Nenhum filtro de data aplicado&quot; \(14px, peso 500\) é branco sobre rgb\(197,212,235\). Contraste: 1,50:1. |
| table | emag:3.9 | A tabela de vistorias não tem &lt;caption&gt;, aria-label nem aria-labelledby. |
| thead input\[type=&quot;checkbox&quot;\] | wcag:4.1.2 | O checkbox &quot;selecionar todos&quot; do cabeçalho não tem nome acessível \(sem label, aria-label nem title\). |
| tbody input\[type=&quot;checkbox&quot;\] | wcag:4.1.2 | Os checkboxes de seleção de cada linha não têm nome acessível. |
| thead th:last-child | wcag:1.3.1 | O último &lt;th scope=&quot;col&quot;&gt; \(coluna de ações\) está vazio. |
| br-button\[icon=&quot;eye&quot;\] | wcag:4.1.2 | O botão com ícone de olho em cada linha \(abre o detalhe /vistorias/agendar-vistoria/\{id\}\) não tem nome acessível: aria-label=&quot;&quot; no botão interno, sem title nem texto. Também ocorre na aba Concluídos. |
| pnip-status-solicitacao-utils .bg-blue-40 &gt; .text-secondary-01 | wcag:1.4.3 | O status &quot;Vistoria agendada&quot; \(14px, peso 500\) é branco sobre rgb\(79,151,209\). Contraste: 3,14:1. |
| pnip-status-solicitacao-utils .bg-secondary-06 &gt; .text-secondary-01 | wcag:1.4.3 | Na aba Agendar, o status &quot;Vistoria pré agendada&quot; \(14px, peso 500\) é branco sobre rgb\(136,136,136\). Contraste: 3,54:1. |
| pnip-propesc-vistorias .br-table | incerta | A tabela \(1272px\) ultrapassa o contêiner .br-table \(1096px, overflow-x: visible\). A página fica com scrollWidth 1364px em janela de 1280px, e os botões &quot;Notificar&quot; da última coluna terminam em x=1336, fora da área visív… |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] li &gt; li | wcag:1.3.1 | Cada número de página fica em um &lt;li&gt; aninhado diretamente em outro &lt;li&gt;, sem &lt;ul&gt;/&lt;ol&gt; intermediário. A estrutura de lista é inválida. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] a.page.active | wcag:1.3.1 | A página atual é indicada só pela classe &quot;active&quot;. O link não tem aria-current, e todos os links usam href=&quot;javascript:void\(0\)&quot;. |
| #total | wcag:2.4.3 | No seletor &quot;Exibir&quot; da paginação, ao escolher 25 com seta para baixo + Enter, a tabela é atualizada \(25 itens\), mas o foco vai para &lt;body&gt;. |
| pnip-propesc-vistorias .flex-column.justify-content-center &gt; p | wcag:4.1.3 | Depois de buscar &quot;zzzxyz&quot;, a tabela é trocada pelo &lt;p&gt; &quot;Não há vistorias para exibir.&quot;, sem role=&quot;status&quot; nem aria-live. A região aria-live da paginação é removida junto. |
| #swal2-select | wcag:4.1.2 | No diálogo &quot;Atribuir Vistoriador&quot;, o &lt;select id=&quot;swal2-select&quot;&gt; não tem nome acessível \(labels=0, sem aria-label\). O texto &quot;Selecione um Vistoriador&quot; é uma div não associada. |
| #swal2-html-container input\[type=&quot;checkbox&quot;\] | wcag:1.3.1 | No diálogo &quot;Exportar Vistorias&quot;, os cinco checkboxes de status têm rótulos individuais, mas o enunciado do grupo &quot;Status:&quot; é só um &lt;strong&gt;, sem fieldset/legend nem role=&quot;group&quot; com nome. |
| .swal2-popup | incerta | Os diálogos de confirmação, atribuição, exportação, sucesso e erro usam SweetAlert2 \(.swal2-popup\), e não o componente Modal do DS gov.br \(br-modal\). Há também um botão oculto com aria-label em inglês, &quot;Close this dialo… |

**com** (20261006-060752-vistorias-com-660b): [pacote](../../../../../restauracoes/20261006-060752-vistorias-com-660b/2026-10-06T06-07-52Z__vistorias__opus__com__rep-03__20261006-060752-vistorias-com-660b) · [run.json](../../../../../restauracoes/20261006-060752-vistorias-com-660b/2026-10-06T06-07-52Z__vistorias__opus__com__rep-03__20261006-060752-vistorias-com-660b/run.json) · [findings.json](../../../../../restauracoes/20261006-060752-vistorias-com-660b/2026-10-06T06-07-52Z__vistorias__opus__com__rep-03__20261006-060752-vistorias-com-660b/findings.json) · [isolation.json](../../../../../restauracoes/20261006-060752-vistorias-com-660b/2026-10-06T06-07-52Z__vistorias__opus__com__rep-03__20261006-060752-vistorias-com-660b/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261006-060752-vistorias-com-660b/2026-10-06T06-07-52Z__vistorias__opus__com__rep-03__20261006-060752-vistorias-com-660b/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261006-060752-vistorias-com-660b/2026-10-06T06-07-52Z__vistorias__opus__com__rep-03__20261006-060752-vistorias-com-660b/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261006-060752-vistorias-com-660b/2026-10-06T06-07-52Z__vistorias__opus__com__rep-03__20261006-060752-vistorias-com-660b/evidence/cliente.json) [#3](../../../../../restauracoes/20261006-060752-vistorias-com-660b/2026-10-06T06-07-52Z__vistorias__opus__com__rep-03__20261006-060752-vistorias-com-660b/evidence/container-config.json) [#4](../../../../../restauracoes/20261006-060752-vistorias-com-660b/2026-10-06T06-07-52Z__vistorias__opus__com__rep-03__20261006-060752-vistorias-com-660b/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261006-060752-vistorias-com-660b/2026-10-06T06-07-52Z__vistorias__opus__com__rep-03__20261006-060752-vistorias-com-660b/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261006-060752-vistorias-com-660b/2026-10-06T06-07-52Z__vistorias__opus__com__rep-03__20261006-060752-vistorias-com-660b/evidence/preflight.json) [#7](../../../../../restauracoes/20261006-060752-vistorias-com-660b/2026-10-06T06-07-52Z__vistorias__opus__com__rep-03__20261006-060752-vistorias-com-660b/evidence/prompt.txt) [#8](../../../../../restauracoes/20261006-060752-vistorias-com-660b/2026-10-06T06-07-52Z__vistorias__opus__com__rep-03__20261006-060752-vistorias-com-660b/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261006-060752-vistorias-com-660b/2026-10-06T06-07-52Z__vistorias__opus__com__rep-03__20261006-060752-vistorias-com-660b/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261006-060752-vistorias-com-660b/2026-10-06T06-07-52Z__vistorias__opus__com__rep-03__20261006-060752-vistorias-com-660b/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261006-060752-vistorias-com-660b/2026-10-06T06-07-52Z__vistorias__opus__com__rep-03__20261006-060752-vistorias-com-660b/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261006-060752-vistorias-com-660b/2026-10-06T06-07-52Z__vistorias__opus__com__rep-03__20261006-060752-vistorias-com-660b/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261006-060752-vistorias-com-660b/2026-10-06T06-07-52Z__vistorias__opus__com__rep-03__20261006-060752-vistorias-com-660b/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261006-060752-vistorias-com-660b/2026-10-06T06-07-52Z__vistorias__opus__com__rep-03__20261006-060752-vistorias-com-660b/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261006-060752-vistorias-com-660b/2026-10-06T06-07-52Z__vistorias__opus__com__rep-03__20261006-060752-vistorias-com-660b/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261006-060752-vistorias-com-660b/2026-10-06T06-07-52Z__vistorias__opus__com__rep-03__20261006-060752-vistorias-com-660b/evidence/raw/oracle/inventory.json) [#17](../../../../../restauracoes/20261006-060752-vistorias-com-660b/2026-10-06T06-07-52Z__vistorias__opus__com__rep-03__20261006-060752-vistorias-com-660b/evidence/raw/oracle/oracle-telemetry.ndjson) [#18](../../../../../restauracoes/20261006-060752-vistorias-com-660b/2026-10-06T06-07-52Z__vistorias__opus__com__rep-03__20261006-060752-vistorias-com-660b/evidence/raw/oracle/tool-events.ndjson) [#19](../../../../../restauracoes/20261006-060752-vistorias-com-660b/2026-10-06T06-07-52Z__vistorias__opus__com__rep-03__20261006-060752-vistorias-com-660b/evidence/raw/probe/probe.json) [#20](../../../../../restauracoes/20261006-060752-vistorias-com-660b/2026-10-06T06-07-52Z__vistorias__opus__com__rep-03__20261006-060752-vistorias-com-660b/evidence/raw/probe/sonda-escrita-1791266894834.txt) [#21](../../../../../restauracoes/20261006-060752-vistorias-com-660b/2026-10-06T06-07-52Z__vistorias__opus__com__rep-03__20261006-060752-vistorias-com-660b/evidence/raw/task/mcp.json) [#22](../../../../../restauracoes/20261006-060752-vistorias-com-660b/2026-10-06T06-07-52Z__vistorias__opus__com__rep-03__20261006-060752-vistorias-com-660b/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261006-060752-vistorias-com-660b/2026-10-06T06-07-52Z__vistorias__opus__com__rep-03__20261006-060752-vistorias-com-660b/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261006-060752-vistorias-com-660b/2026-10-06T06-07-52Z__vistorias__opus__com__rep-03__20261006-060752-vistorias-com-660b/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261006-060752-vistorias-com-660b/2026-10-06T06-07-52Z__vistorias__opus__com__rep-03__20261006-060752-vistorias-com-660b/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261006-060752-vistorias-com-660b/2026-10-06T06-07-52Z__vistorias__opus__com__rep-03__20261006-060752-vistorias-com-660b/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261006-060752-vistorias-com-660b/2026-10-06T06-07-52Z__vistorias__opus__com__rep-03__20261006-060752-vistorias-com-660b/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261006-060752-vistorias-com-660b/2026-10-06T06-07-52Z__vistorias__opus__com__rep-03__20261006-060752-vistorias-com-660b/evidence/logs/oracle.log) [#7](../../../../../restauracoes/20261006-060752-vistorias-com-660b/2026-10-06T06-07-52Z__vistorias__opus__com__rep-03__20261006-060752-vistorias-com-660b/evidence/logs/probe.log) [#8](../../../../../restauracoes/20261006-060752-vistorias-com-660b/2026-10-06T06-07-52Z__vistorias__opus__com__rep-03__20261006-060752-vistorias-com-660b/evidence/logs/screens.log) · [binding](analysis-binding.com.json)

Achados enviados (31; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| tbody br-button\[icon=&quot;eye&quot;\] | button-name | Botão &quot;visualizar&quot; \(ícone fa-eye\) de cada linha renderiza &lt;button aria-label=&quot;&quot;&gt; sem texto, sem title e sem aria-label: nome acessível vazio \(os outros três botões da linha têm nome via title\). Também ocorre na aba Conc… |
| pnip-status-solicitacao-utils .bg-blue-40 &gt; .text-secondary-01 | color-contrast | Texto branco #ffffff sobre fundo #4f97d1 \(badge &quot;Vistoria agendada&quot;\), 14px normal: contraste 3,14:1. |
| pnip-status-solicitacao-utils .bg-secondary-06 &gt; .text-secondary-01 | color-contrast | Na aba Agendar, badge &quot;Vistoria pré agendada&quot;: texto branco #ffffff sobre #888888, 14px normal: contraste 3,54:1. |
| .br-tag.primary-pastel-01 | color-contrast | Tag &quot;Nenhum filtro de data aplicado&quot;: texto branco #ffffff sobre #c5d4eb, 14px: contraste 1,5:1. |
| table input\[type=checkbox\] | label | Checkbox &quot;selecionar todos&quot; do cabeçalho e checkboxes de seleção de cada linha não têm label, aria-label nem aria-labelledby \(nome acessível vazio\). |
| br-input\[type=date\] | label | Os dois campos de data \(input type=date no shadow DOM, #br-input-8 e #br-input-9\) não têm rótulo associado; os textos visíveis &quot;Data da vistoria:&quot; e &quot;até&quot; são &lt;span&gt; soltos. |
| #search | govbr-3.7.0-accessibility-global-b95c42b61ed3 | Campo de busca \(input#search dentro de br-input\) não tem &lt;label&gt; nem aria-label; o único nome vem do placeholder &quot;Pesquise aqui ...&quot;, que some ao digitar. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] li &gt; li | listitem | Na paginação, cada número de página é um &lt;li&gt; aninhado diretamente dentro de outro &lt;li&gt; \(li &gt; li\), sem &lt;ul&gt;/&lt;ol&gt; pai. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] a.page.active | wcag:1.3.1 | A página atual só é indicada visualmente pela classe &quot;active&quot;; o link não tem aria-current=&quot;page&quot; nem texto oculto. |
| .tab-nav .tab-item.active &gt; button | wcag:4.1.2 | A aba ativa \(&quot;Tramitando&quot;\) só é indicada pela classe &quot;active&quot; do &lt;li&gt;; os botões das abas não têm aria-selected nem aria-current, nem role tab/tablist. Ao trocar de aba, o estado também não é exposto. |
| pnip-filter-panel .br-tag\[style\*=&quot;cursor&quot;\] | govbr-3.7.0-accessibility-global-e6fd5e1247de | Os filtros Cidade, Porto, Vistoriador e Status são &lt;span class=&quot;br-tag&quot;&gt; com clique de mouse que abre a lista de opções, mas sem tabindex nem role: não recebem foco por Tab e não podem ser acionados por teclado. |
| pnip-filter-panel .br-select .br-radio | govbr-3.7.0-accessibility-global-41850b4791b8 | As opções da lista de filtro são &lt;div class=&quot;br-radio&quot;&gt;&lt;label&gt;texto&lt;/label&gt;&lt;/div&gt; sem &lt;input type=radio&gt;, sem role e sem tabindex: não podem ser focadas, selecionadas por teclado nem identificadas como opções. |
| pnip-filter-panel .br-tag button.inverted | button-name | Depois de aplicar o filtro, a tag do filtro aplicado \(&quot;Barra Nova&quot;\) tem um botão de remover com só o ícone &lt;i class=&quot;fas fa-times&quot;&gt; \(sem aria-hidden\), sem texto, aria-label nem title. |
| #avatar-dropdown-trigger | wcag:2.5.3 | O botão do usuário exibe o texto visível &quot;Olá, Usuária de Teste, SUPERVISOR&quot;, mas o aria-label=&quot;Avatar com dropdown&quot; substitui esse texto: o nome acessível não contém o rótulo visível. |
| #avatar-menu | aria-required-children | O menu do usuário tem role=&quot;menu&quot;, mas os filhos são div/span e um &lt;button&gt; comum \(&quot;Sair&quot;\); não há elementos role=&quot;menuitem&quot;. |
| #avatar-menu img | image-alt | Imagem do ícone do botão &quot;Sair&quot; \(exit-icon.png\) não tem atributo alt. |
| #avatar-menu .text-center &gt; span | govbr-3.7.0-accessibility-global-e6fd5e1247de | &quot;Trocar unidade&quot; no menu do usuário é um &lt;span&gt; com cursor:pointer, sem tabindex nem role: não recebe foco por teclado \(o único item focável do menu é &quot;Sair&quot;\). |
| #swal2-select | select-name | No diálogo &quot;Atribuir Vistoriador&quot;, o &lt;select id=&quot;swal2-select&quot;&gt; não tem label nem aria-label; o texto &quot;Selecione um Vistoriador&quot; é só a descrição do diálogo \(div\), não está associado. |
| tbody br-button\[title=&quot;Atribuir vistoriador&quot;\], tbody br-button\[title=&quot;Excluir v… | wcag:2.4.3 | Ao abrir com teclado \(foco no botão + Enter\) os diálogos &quot;Atribuir Vistoriador&quot;, &quot;Excluir Vistoria&quot; e &quot;Notificar Vistoria\(s\)?&quot; e fechá-los com Esc, o foco vai para &lt;body&gt; em vez de voltar ao botão que abriu o diálogo. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] a.page | wcag:2.4.3 | Ao acionar o link da página &quot;2&quot; pelo teclado \(Enter\), a tabela é recarregada e o foco vai para &lt;body&gt;; o usuário de teclado perde a posição. |
| pnip-propesc-vistorias .mt-5 &gt; p | wcag:4.1.3 | Depois de uma busca sem resultados \(&quot;zq&quot; + Enter\), a tabela e o contador aria-live da paginação são removidos e aparece &quot;Não há vistorias para exibir.&quot; num &lt;p&gt; sem role=&quot;status&quot; nem aria-live: o resultado não é anunciad… |
| thead th:last-child | empty-table-header | O cabeçalho da coluna de ações \(último th\) está vazio, sem texto visível nem oculto. |
| pnip-propesc-vistorias h2 | page-has-heading-one | A página não tem h1; o título principal &quot;Vistorias&quot; está marcado como h2 e é o único cabeçalho da página. |
| html | ds-page-footer | Não há rodapé: nenhum .br-footer nem &lt;br-footer&gt; no documento. |
| html | ds-page-skip-link | Não há link de salto para o conteúdo. O primeiro link da página é o &quot;Home&quot; do breadcrumb \(href=&quot;/portal-mpa&quot;\); o primeiro foco por Tab é o botão &quot;Menu&quot; do cabeçalho. |
| br-breadcrumb | ds-structure-breadcrumb-tag | O breadcrumb \(shadow root de br-breadcrumb\) é renderizado num &lt;div&gt; sem &lt;nav&gt; nem rótulo de navegação. |
| br-breadcrumb | emag:1.1 | No breadcrumb, o item &quot;Home&quot; é um &lt;a href=&quot;/portal-mpa&quot;&gt; que contém um &lt;button&gt; \(conteúdo interativo aninhado, HTML inválido\); os dois recebem foco por Tab separadamente \(duas paradas de foco para uma ação\). |
| br-header | wcag:1.1.1 | A logomarca gov.br no cabeçalho \(img src=&quot;assets/images/govbr-logo.png&quot;, no shadow root de br-header\) tem alt=&quot;logo&quot;, texto que não identifica a marca. |
| #avatar-menu &gt; button | ds-token-radius | O botão &quot;Sair&quot; do menu do usuário usa border-radius: 20px, fora da escala do DS. |
| pnip-filter-panel .col-auto.ml-2 &gt; button | ds-token-spacing | O botão &quot;Limpar Filtro&quot; tem style inline margin-top: -5px, fora da escala de espaçamento. |
| pnip-search-table-utils .search-bar button | ds-token-spacing | O botão de ação do campo de busca \(&quot;Buscar&quot;\) tem style inline margin: -38px 4px 0 0, fora da escala de espaçamento \(ajuste por margem negativa\). |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `2e0132604de0c60a73177b87abaebe4ee1584b2ee0e6b4509cea4d8727dcaf62`

