# Resumo da análise — Vistorias (vistorias)

Revisão 1 · gerado em 2026-10-12T14:40:32.966Z (UTC)

## 1. Status técnico

Análise: **pronta**

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261008-162847-vistorias-sem-967f | sem | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 31 cartão(ões), nenhum decidido |
| 20261009-000128-vistorias-com-71da | com | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 30 cartão(ões), nenhum decidido |

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
| Início (UTC) | 2026-10-08T16:29:22Z | 2026-10-09T00:01:52Z |
| Início (local) | 08/10/2026, 13:29:22 (horário de Brasília) | 08/10/2026, 21:01:52 (horário de Brasília) |
| Commit do harness | 7f189a9a0984459418e210aa1453acbee54e1160 | 7f189a9a0984459418e210aa1453acbee54e1160 |
| Repetição · tentativa | 7 · 1 | 7 · 2 |
| Campanha · slot · par | t7-tela-b-01 · p07-sem · p07 | t7-tela-b-01 · p07-com · p07 |

## 3. Resultado científico

| Medida | sem | com |
|---|---|---|
| Defeitos da referência confirmados | 0 de 102 (até agora) | 0 de 102 (até agora) |
| Recall (cobertura da referência) | indisponível | indisponível |
| Precisão sobre a referência — D/(D+F) | indisponível | indisponível |
| Precisão das afirmações — (D+N)/(D+N+F) | indisponível | indisponível |
| Afirmações incorretas (falsos positivos) | 0 | 0 |
| Defeitos novos corretos (fora da referência) | 0 | 0 |
| Duplicadas | 0 | 0 |
| Cartões pendentes de revisão | 31 | 30 |
| Maturidade | aguardando revisão — 31 cartão(ões), nenhum decidido | aguardando revisão — 30 cartão(ões), nenhum decidido |
| Entra na comparação principal | sim | sim |
| Achados enviados | 31 | 30 |

Recall e precisão só aparecem com a revisão fechada; enquanto houver cartão pendente ficam “indisponível” (nunca 0). “Achados enviados = 0” é um resultado válido (o agente olhou e não alegou nada); submissão recusada ou ausente é outra coisa.

Linha de base determinística (união das varreduras comparáveis), por unidade da referência:

| Unidades | sem | com |
|---|---|---|
| Agente e linha de base | 0 | 0 |
| Só o agente | 0 | 0 |
| Só a linha de base | 0 | 0 |
| Nenhum | 102 | 102 |
| Estado | provisório | provisório |

Linha de base: usada (lb-20261008-162757-vistorias-05b378)

## 4. Comparação com − sem

_n = 1 par, sem inferência. Nenhum braço é declarado melhor por contagem bruta._

Estado: provisória (há cartões pendentes em pelo menos um braço)

- Diferença de defeitos confirmados (com − sem): 0 (até agora)
- Diferença de recall (com − sem): indisponível (revisão aberta)
- Só o com detectou: nenhuma
- Só o sem detectou: nenhuma
- Os dois detectaram: nenhuma
- Nenhum detectou: B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-11 (&lt;span&gt; &quot;Cidade&quot;); B-17 (&lt;div#avatar-menu&gt; &quot;Usuária de Teste usuaria.teste@exemplo.invalid S&quot;); B-06 (&lt;input&gt;); B-06 (&lt;input&gt;); B-14 (&lt;span&gt; &quot;U&quot;); B-07 (&lt;button&gt; \[shadow\]); B-10 (&lt;button&gt; &quot;Exibir lista&quot;); B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-11 (&lt;span&gt; &quot;Status&quot;); B-08 (&lt;button&gt; \[shadow\]); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-08 (&lt;button&gt; \[shadow\]); B-06 (&lt;input&gt;); B-29 (&lt;button&gt; &quot;Exibir lista&quot;); B-20 (&lt;textarea&gt;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-13 (&lt;span&gt; &quot;Nenhum filtro de data aplicado&quot;); B-06 (&lt;input&gt;); B-07 (&lt;button&gt; \[shadow\]); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-08 (&lt;button&gt; \[shadow\]); B-19 (&lt;span&gt; &quot;Trocar unidade&quot;); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-09 (&lt;button&gt; &quot;Buscar&quot;); B-08 (&lt;button&gt; \[shadow\]); B-15 (&lt;hr&gt;); B-08 (&lt;button&gt; \[shadow\]); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-08 (&lt;button&gt; \[shadow\]); B-06 (&lt;input&gt;); B-23 (&lt;div&gt; &quot;0%&quot;); B-24 (&lt;div&gt; &quot;Trocar embarcação da vistoria Busque e selecione&quot;); B-05 (&lt;input#br-input-8&gt; \[shadow\]); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-06 (&lt;input&gt;); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-06 (&lt;input&gt;); B-01 (&lt;pnip-root&gt; &quot;U Olá, Usuária de Teste, SUPERVISOR Programa Nac&quot;); B-04 (&lt;input#search&gt; &quot;Pesquise aqui ...&quot; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-06 (&lt;input&gt;); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-11 (&lt;span&gt; &quot;Vistoriador&quot;); B-07 (&lt;button&gt; \[shadow\]); B-02 (&lt;h2&gt; &quot;Vistorias&quot;); B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-06 (&lt;input&gt;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-08 (&lt;button&gt; \[shadow\]); B-21 (&lt;h3&gt; &quot;Programa Nacional de Regularização de Embarcação&quot;); B-03 (&lt;table&gt; &quot;# Nome da embarcação RAEP Data/Hora Vistoria Loc&quot;); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-16 (&lt;img&gt;); B-08 (&lt;button&gt; \[shadow\]); B-18 (&lt;button&gt; &quot;Sair&quot;); B-08 (&lt;button&gt; \[shadow\]); B-27 (&lt;div&gt; &quot;Trocar embarcação da vistoria Busque e selecione&quot;); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-06 (&lt;input&gt;); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-26 (&lt;th&gt;); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-22 (&lt;table&gt; &quot;Status Data Hora Visualizado 06/03/2026 08:21:00&quot;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-28 (&lt;button&gt; &quot;Buscar&quot;); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-10 (&lt;button&gt; &quot;Exibir lista&quot;); B-25 (&lt;title&gt; &quot;PNIP&quot;); B-08 (&lt;button&gt; \[shadow\]); B-29 (&lt;button&gt; &quot;Exibir lista&quot;); B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-08 (&lt;button&gt; \[shadow\]); B-05 (&lt;input#br-input-9&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-06 (&lt;input&gt;); B-08 (&lt;button&gt; \[shadow\]); B-11 (&lt;span&gt; &quot;Porto&quot;)

## 5. MCP e isolamento

| | sem | com |
|---|---|---|
| Isolamento | passed | passed |
| Oráculo anunciado ao cliente | não | sim |
| Oráculo (pacote) | nenhum | govbr-ds-validator-server 2.7.0 (combined) |
| Uso do oráculo | ausente (confirmado) | não verificado |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 24 (ponte MCP do oráculo) |
| Protocolo | unverified | unverified |
| Ferramentas anunciadas | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for, get\_ds\_rules, get\_design\_tokens, get\_emag\_rules, get\_pag… |
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_snapshot, browser\_take\_screenshot, browser\_press\_key, browser\_click, browser\_navigate\_back, browser\_type, browser\_console\_messages | browser\_navigate, browser\_evaluate, browser\_snapshot, scan\_page, get\_finding\_details, get\_ds\_rules, browser\_click, browser\_press\_key, browser\_take\_screenshot, browser\_navigate\_back, browser\_fill\_form, browser\_console\_messages, browser\_type |
| Erros de ferramenta | 3 (tool-events.ndjson \(eventos com isError: true\)) | 4 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 8 aprovado(s); falhos: nenhum | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | nenhuma | nenhuma |

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 6. Custo e tempo

| | sem | com |
|---|---|---|
| Tempo de relógio (s) | 721 (runner) | 799 (runner) |
| Turnos | 133 (stream-json do cliente \(result.num\_turns\)) | 134 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 132 (ponte MCP) | 133 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 24 (ponte MCP do oráculo) |
| Tokens de entrada | 142 (stream-json do cliente \(result.usage\)) | 188 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 44460 (stream-json do cliente \(result.usage\)) | 44778 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 5851430 (stream-json do cliente \(result.usage\)) | 9753801 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 148108 (stream-json do cliente \(result.usage\)) | 174297 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 3.2449180000000015 (estimativa do cliente \(result.total\_cost\_usd\)) | 4.2414482 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 170 cartão(ões), estimativa 1020 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 7. Detalhes e evidências

**sem** (20261008-162847-vistorias-sem-967f): [pacote](../../../../../restauracoes/20261008-162847-vistorias-sem-967f/2026-10-08T16-28-47Z__vistorias__opus__sem__rep-07__20261008-162847-vistorias-sem-967f) · [run.json](../../../../../restauracoes/20261008-162847-vistorias-sem-967f/2026-10-08T16-28-47Z__vistorias__opus__sem__rep-07__20261008-162847-vistorias-sem-967f/run.json) · [findings.json](../../../../../restauracoes/20261008-162847-vistorias-sem-967f/2026-10-08T16-28-47Z__vistorias__opus__sem__rep-07__20261008-162847-vistorias-sem-967f/findings.json) · [isolation.json](../../../../../restauracoes/20261008-162847-vistorias-sem-967f/2026-10-08T16-28-47Z__vistorias__opus__sem__rep-07__20261008-162847-vistorias-sem-967f/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261008-162847-vistorias-sem-967f/2026-10-08T16-28-47Z__vistorias__opus__sem__rep-07__20261008-162847-vistorias-sem-967f/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261008-162847-vistorias-sem-967f/2026-10-08T16-28-47Z__vistorias__opus__sem__rep-07__20261008-162847-vistorias-sem-967f/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261008-162847-vistorias-sem-967f/2026-10-08T16-28-47Z__vistorias__opus__sem__rep-07__20261008-162847-vistorias-sem-967f/evidence/cliente.json) [#3](../../../../../restauracoes/20261008-162847-vistorias-sem-967f/2026-10-08T16-28-47Z__vistorias__opus__sem__rep-07__20261008-162847-vistorias-sem-967f/evidence/container-config.json) [#4](../../../../../restauracoes/20261008-162847-vistorias-sem-967f/2026-10-08T16-28-47Z__vistorias__opus__sem__rep-07__20261008-162847-vistorias-sem-967f/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261008-162847-vistorias-sem-967f/2026-10-08T16-28-47Z__vistorias__opus__sem__rep-07__20261008-162847-vistorias-sem-967f/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261008-162847-vistorias-sem-967f/2026-10-08T16-28-47Z__vistorias__opus__sem__rep-07__20261008-162847-vistorias-sem-967f/evidence/preflight.json) [#7](../../../../../restauracoes/20261008-162847-vistorias-sem-967f/2026-10-08T16-28-47Z__vistorias__opus__sem__rep-07__20261008-162847-vistorias-sem-967f/evidence/prompt.txt) [#8](../../../../../restauracoes/20261008-162847-vistorias-sem-967f/2026-10-08T16-28-47Z__vistorias__opus__sem__rep-07__20261008-162847-vistorias-sem-967f/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261008-162847-vistorias-sem-967f/2026-10-08T16-28-47Z__vistorias__opus__sem__rep-07__20261008-162847-vistorias-sem-967f/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261008-162847-vistorias-sem-967f/2026-10-08T16-28-47Z__vistorias__opus__sem__rep-07__20261008-162847-vistorias-sem-967f/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261008-162847-vistorias-sem-967f/2026-10-08T16-28-47Z__vistorias__opus__sem__rep-07__20261008-162847-vistorias-sem-967f/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261008-162847-vistorias-sem-967f/2026-10-08T16-28-47Z__vistorias__opus__sem__rep-07__20261008-162847-vistorias-sem-967f/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261008-162847-vistorias-sem-967f/2026-10-08T16-28-47Z__vistorias__opus__sem__rep-07__20261008-162847-vistorias-sem-967f/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261008-162847-vistorias-sem-967f/2026-10-08T16-28-47Z__vistorias__opus__sem__rep-07__20261008-162847-vistorias-sem-967f/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261008-162847-vistorias-sem-967f/2026-10-08T16-28-47Z__vistorias__opus__sem__rep-07__20261008-162847-vistorias-sem-967f/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261008-162847-vistorias-sem-967f/2026-10-08T16-28-47Z__vistorias__opus__sem__rep-07__20261008-162847-vistorias-sem-967f/evidence/raw/probe/probe.json) [#17](../../../../../restauracoes/20261008-162847-vistorias-sem-967f/2026-10-08T16-28-47Z__vistorias__opus__sem__rep-07__20261008-162847-vistorias-sem-967f/evidence/raw/probe/sonda-escrita-1791476961887.txt) [#18](../../../../../restauracoes/20261008-162847-vistorias-sem-967f/2026-10-08T16-28-47Z__vistorias__opus__sem__rep-07__20261008-162847-vistorias-sem-967f/evidence/raw/task/mcp.json) [#19](../../../../../restauracoes/20261008-162847-vistorias-sem-967f/2026-10-08T16-28-47Z__vistorias__opus__sem__rep-07__20261008-162847-vistorias-sem-967f/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261008-162847-vistorias-sem-967f/2026-10-08T16-28-47Z__vistorias__opus__sem__rep-07__20261008-162847-vistorias-sem-967f/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261008-162847-vistorias-sem-967f/2026-10-08T16-28-47Z__vistorias__opus__sem__rep-07__20261008-162847-vistorias-sem-967f/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261008-162847-vistorias-sem-967f/2026-10-08T16-28-47Z__vistorias__opus__sem__rep-07__20261008-162847-vistorias-sem-967f/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261008-162847-vistorias-sem-967f/2026-10-08T16-28-47Z__vistorias__opus__sem__rep-07__20261008-162847-vistorias-sem-967f/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261008-162847-vistorias-sem-967f/2026-10-08T16-28-47Z__vistorias__opus__sem__rep-07__20261008-162847-vistorias-sem-967f/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261008-162847-vistorias-sem-967f/2026-10-08T16-28-47Z__vistorias__opus__sem__rep-07__20261008-162847-vistorias-sem-967f/evidence/logs/probe.log) [#7](../../../../../restauracoes/20261008-162847-vistorias-sem-967f/2026-10-08T16-28-47Z__vistorias__opus__sem__rep-07__20261008-162847-vistorias-sem-967f/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (31; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| pnip-filter-panel span.br-tag.interaction.border-solid-sm | wcag:2.1.1 | Os filtros Cidade, Porto, Vistoriador e Status são &lt;span class=&quot;br-tag interaction&quot;&gt; com cursor:pointer e tratador de clique, sem tabindex nem role; não entram na ordem de tabulação \(após a aba &quot;Concluídos&quot; o Tab vai di… |
| pnip-filter-panel .br-list .br-item label | wcag:2.1.1 | As opções da lista de filtro \(ex.: &quot;Barra Nova&quot;\) são &lt;label&gt; sem input associado dentro de .br-item com tabindex=-1; não recebem foco nem têm papel de opção, e só podem ser escolhidas com o mouse. |
| pnip-filter-panel span.br-tag.interaction &gt; button.br-button.inverted.circle | wcag:4.1.2 | O botão de remover o filtro aplicado \(chip &quot;Barra Nova&quot;\) contém somente o ícone fa-times sem aria-hidden, sem texto, aria-label ou title; nome acessível vazio \(&quot;&quot;\). |
| table input\[type=&quot;checkbox&quot;\] | wcag:4.1.2 | Os 11 checkboxes da tabela \(selecionar todos no cabeçalho e um por linha\) não têm label, aria-label nem aria-labelledby; nome acessível vazio. |
| br-button\[icon=&quot;eye&quot;\] | wcag:4.1.2 | O botão de visualizar \(ícone de olho\) de cada linha não tem title, label nem texto; o &lt;button&gt; interno tem aria-label=&quot;&quot; e o ícone tem aria-hidden; nome acessível vazio. Os botões vizinhos têm title \(ex.: &quot;Excluir visto… |
| br-input\[type=&quot;date&quot;\] | wcag:4.1.2 | Os dois campos de data \(input type=date no shadow DOM, ids br-input-8 e br-input-9\) não têm label, aria-label nem aria-labelledby; os textos visíveis &quot;Data da vistoria:&quot; e &quot;até&quot; são &lt;span&gt; não associados. Na árvore de a… |
| pnip-status-solicitacao-utils .bg-blue-40 &gt; div | wcag:1.4.3 | Etiqueta &quot;Vistoria agendada&quot;: texto rgb\(255,255,255\) sobre rgb\(79,151,209\), 14px e peso 500; contraste 3,14:1. |
| pnip-status-solicitacao-utils .bg-secondary-06 &gt; div | wcag:1.4.3 | Etiqueta &quot;Vistoria pré agendada&quot;: texto rgb\(255,255,255\) sobre rgb\(136,136,136\), 14px e peso 500; contraste 3,54:1. |
| span.br-tag.primary-pastel-01 | wcag:1.4.3 | A etiqueta informativa &quot;Nenhum filtro de data aplicado&quot; tem texto rgb\(255,255,255\) sobre rgb\(197,212,235\), 14px e peso 500; contraste 1,5:1. Não é um controle desabilitado. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] &gt; ul &gt; li &gt; li | wcag:1.3.1 | Na paginação, cada número de página fica em um &lt;li&gt; aninhado diretamente em outro &lt;li&gt;, sem &lt;ul&gt;/&lt;ol&gt; intermediário; a árvore de acessibilidade mostra listitem dentro de listitem. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] a.page.active | wcag:1.3.1 | A página atual só é indicada pela classe &quot;active&quot; \(estilo visual\); o link não tem aria-current nem texto oculto. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] a.page | wcag:2.4.3 | Ao ativar pelo teclado o link de página &quot;2&quot; \(Enter\), a lista é atualizada e o foco vai para &lt;body&gt;; o usuário volta ao início da ordem de tabulação. |
| nav.tab-nav li.tab-item.active &gt; button | wcag:1.3.1 | A aba ativa \(&quot;Tramitando&quot;; também observado em &quot;Agendar&quot; e &quot;Concluídos&quot;\) só é indicada pela classe &quot;active&quot; no &lt;li&gt;; os botões não têm aria-selected, aria-current nem role=tab. |
| #avatar-dropdown-trigger | wcag:2.5.3 | O botão exibe o texto &quot;Olá, Usuária de Teste, SUPERVISOR&quot;, mas aria-label=&quot;Avatar com dropdown&quot; substitui esse texto; o nome acessível não contém o rótulo visível. |
| #avatar-menu | wcag:4.1.2 | O container tem role=&quot;menu&quot;, mas os filhos são div, span e button sem role=&quot;menuitem&quot;; o papel de menu não corresponde ao conteúdo. |
| #avatar-menu span.text-blue-vivid-60 | wcag:2.1.1 | &quot;Trocar unidade&quot; é um &lt;span&gt; com cursor:pointer, sem tabindex nem role; não é alcançável nem acionável pelo teclado. |
| #avatar-menu img | wcag:1.1.1 | O ícone do botão &quot;Sair&quot; \(&lt;img src=&quot;../../../assets/images/exit-icon.png&quot;&gt;\) não tem atributo alt. |
| #avatar-menu | incerta | Com o menu do avatar aberto e o foco no gatilho, a tecla Escape não fecha o menu \(hidden continua false e aria-expanded continua &quot;true&quot;\). |
| br-header | wcag:1.1.1 | O logotipo gov.br, dentro do shadow root de br-header \(&lt;img src=&quot;assets/images/govbr-logo.png&quot;&gt;\), tem alt=&quot;logo&quot;, que não descreve a imagem. |
| br-breadcrumb | wcag:4.1.2 | No breadcrumb \(shadow root\), o item inicial é um &lt;a href=&quot;/portal-mpa&quot;&gt; com um &lt;button aria-label=&quot;&quot;&gt; dentro: elementos interativos aninhados e duas paradas de tabulação \(&quot;Home&quot; link e &quot;Home&quot; botão\) para o mesmo destino. |
| td br-button\[title=&quot;Atribuir vistoriador&quot;\], td br-button\[icon=&quot;trash&quot;\], td br-b… | wcag:2.4.3 | Ao abrir pelo teclado os diálogos &quot;Atribuir Vistoriador&quot;, &quot;Excluir Vistoria&quot;, &quot;Notificar Vistoria\(s\)?&quot; e &quot;Exportar Vistorias&quot; e fechá-los \(Escape ou Cancelar\), o foco vai para &lt;body&gt; em vez de voltar ao botão que abriu … |
| #swal2-select | wcag:4.1.2 | No diálogo &quot;Atribuir Vistoriador&quot;, o select de vistoriadores não tem label, aria-label nem aria-labelledby; o texto &quot;Selecione um Vistoriador&quot; está em #swal2-html-container, que não está associado ao select. |
| #swal2-html-container input\[type=&quot;checkbox&quot;\] | wcag:1.3.1 | No diálogo &quot;Exportar Vistorias&quot;, os 5 checkboxes de status têm label próprio, mas o rótulo do grupo &quot;Status:&quot; é um &lt;strong&gt; solto, sem fieldset/legend nem role=group com aria-labelledby. |
| div.align-content-center &gt; span.br-tag.interaction &gt; button.br-button.inverted.… | wcag:4.1.2 | O botão de remover o filtro de data \(tag &quot;Exibindo vistorias a partir de 01/01/2030&quot;\) contém só o ícone fa-times com aria-hidden, sem texto, aria-label nem title; nome acessível vazio. |
| div.flex-column.justify-content-center &gt; p | wcag:4.1.3 | Após buscar &quot;zzzzzz&quot;, a mensagem &quot;Não há vistorias para exibir.&quot; substitui a tabela, mas não está em região viva; não há nenhum aria-live, role=status ou role=alert na página nesse estado. |
| div.mt-5.text-center &gt; p | wcag:4.1.3 | Ao aplicar o filtro de data sem resultados, a mensagem &quot;Não há vistorias para exibir nesse periodo selecionado.&quot; aparece fora de região viva \(0 elementos aria-live/role=status/role=alert na página\). |
| #total, #page | wcag:4.1.2 | Os seletores &quot;Exibir&quot; e &quot;Página&quot; são input type=text que abrem uma lista de opções \(ArrowDown abre e move o foco para .br-item\), mas não têm role=combobox, aria-expanded nem aria-controls; o botão &quot;Exibir lista&quot; também … |
| div.br-table &gt; table.table | incerta | Na aba Tramitando, a tabela tem 1272px de largura dentro de .br-table com 1096px e overflow visível; o documento fica com scrollWidth 1364px em viewport de 1280px, a última coluna de ações \(botão de notificar\) fica cort… |
| title | wcag:2.4.2 | O título do documento é apenas &quot;PNIP&quot; e não identifica a página \(Vistorias\). |
| main h2 | emag:1.3 | O único cabeçalho da página é o h2 &quot;Vistorias&quot;; não há h1. |
| main | emag:1.5 | Não há atalhos/âncoras para blocos de conteúdo: o primeiro elemento focável é o botão &quot;Menu&quot; do cabeçalho, não há link &quot;Ir para o conteúdo&quot; e o &lt;main&gt; não tem id que sirva de destino. |

**com** (20261009-000128-vistorias-com-71da): [pacote](../../../../../restauracoes/20261009-000128-vistorias-com-71da/2026-10-09T00-01-28Z__vistorias__opus__com__rep-07__20261009-000128-vistorias-com-71da) · [run.json](../../../../../restauracoes/20261009-000128-vistorias-com-71da/2026-10-09T00-01-28Z__vistorias__opus__com__rep-07__20261009-000128-vistorias-com-71da/run.json) · [findings.json](../../../../../restauracoes/20261009-000128-vistorias-com-71da/2026-10-09T00-01-28Z__vistorias__opus__com__rep-07__20261009-000128-vistorias-com-71da/findings.json) · [isolation.json](../../../../../restauracoes/20261009-000128-vistorias-com-71da/2026-10-09T00-01-28Z__vistorias__opus__com__rep-07__20261009-000128-vistorias-com-71da/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261009-000128-vistorias-com-71da/2026-10-09T00-01-28Z__vistorias__opus__com__rep-07__20261009-000128-vistorias-com-71da/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261009-000128-vistorias-com-71da/2026-10-09T00-01-28Z__vistorias__opus__com__rep-07__20261009-000128-vistorias-com-71da/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261009-000128-vistorias-com-71da/2026-10-09T00-01-28Z__vistorias__opus__com__rep-07__20261009-000128-vistorias-com-71da/evidence/cliente.json) [#3](../../../../../restauracoes/20261009-000128-vistorias-com-71da/2026-10-09T00-01-28Z__vistorias__opus__com__rep-07__20261009-000128-vistorias-com-71da/evidence/container-config.json) [#4](../../../../../restauracoes/20261009-000128-vistorias-com-71da/2026-10-09T00-01-28Z__vistorias__opus__com__rep-07__20261009-000128-vistorias-com-71da/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261009-000128-vistorias-com-71da/2026-10-09T00-01-28Z__vistorias__opus__com__rep-07__20261009-000128-vistorias-com-71da/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261009-000128-vistorias-com-71da/2026-10-09T00-01-28Z__vistorias__opus__com__rep-07__20261009-000128-vistorias-com-71da/evidence/preflight.json) [#7](../../../../../restauracoes/20261009-000128-vistorias-com-71da/2026-10-09T00-01-28Z__vistorias__opus__com__rep-07__20261009-000128-vistorias-com-71da/evidence/prompt.txt) [#8](../../../../../restauracoes/20261009-000128-vistorias-com-71da/2026-10-09T00-01-28Z__vistorias__opus__com__rep-07__20261009-000128-vistorias-com-71da/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261009-000128-vistorias-com-71da/2026-10-09T00-01-28Z__vistorias__opus__com__rep-07__20261009-000128-vistorias-com-71da/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261009-000128-vistorias-com-71da/2026-10-09T00-01-28Z__vistorias__opus__com__rep-07__20261009-000128-vistorias-com-71da/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261009-000128-vistorias-com-71da/2026-10-09T00-01-28Z__vistorias__opus__com__rep-07__20261009-000128-vistorias-com-71da/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261009-000128-vistorias-com-71da/2026-10-09T00-01-28Z__vistorias__opus__com__rep-07__20261009-000128-vistorias-com-71da/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261009-000128-vistorias-com-71da/2026-10-09T00-01-28Z__vistorias__opus__com__rep-07__20261009-000128-vistorias-com-71da/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261009-000128-vistorias-com-71da/2026-10-09T00-01-28Z__vistorias__opus__com__rep-07__20261009-000128-vistorias-com-71da/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261009-000128-vistorias-com-71da/2026-10-09T00-01-28Z__vistorias__opus__com__rep-07__20261009-000128-vistorias-com-71da/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261009-000128-vistorias-com-71da/2026-10-09T00-01-28Z__vistorias__opus__com__rep-07__20261009-000128-vistorias-com-71da/evidence/raw/oracle/inventory.json) [#17](../../../../../restauracoes/20261009-000128-vistorias-com-71da/2026-10-09T00-01-28Z__vistorias__opus__com__rep-07__20261009-000128-vistorias-com-71da/evidence/raw/oracle/oracle-telemetry.ndjson) [#18](../../../../../restauracoes/20261009-000128-vistorias-com-71da/2026-10-09T00-01-28Z__vistorias__opus__com__rep-07__20261009-000128-vistorias-com-71da/evidence/raw/oracle/tool-events.ndjson) [#19](../../../../../restauracoes/20261009-000128-vistorias-com-71da/2026-10-09T00-01-28Z__vistorias__opus__com__rep-07__20261009-000128-vistorias-com-71da/evidence/raw/probe/probe.json) [#20](../../../../../restauracoes/20261009-000128-vistorias-com-71da/2026-10-09T00-01-28Z__vistorias__opus__com__rep-07__20261009-000128-vistorias-com-71da/evidence/raw/probe/sonda-escrita-1791504111703.txt) [#21](../../../../../restauracoes/20261009-000128-vistorias-com-71da/2026-10-09T00-01-28Z__vistorias__opus__com__rep-07__20261009-000128-vistorias-com-71da/evidence/raw/task/mcp.json) [#22](../../../../../restauracoes/20261009-000128-vistorias-com-71da/2026-10-09T00-01-28Z__vistorias__opus__com__rep-07__20261009-000128-vistorias-com-71da/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261009-000128-vistorias-com-71da/2026-10-09T00-01-28Z__vistorias__opus__com__rep-07__20261009-000128-vistorias-com-71da/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261009-000128-vistorias-com-71da/2026-10-09T00-01-28Z__vistorias__opus__com__rep-07__20261009-000128-vistorias-com-71da/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261009-000128-vistorias-com-71da/2026-10-09T00-01-28Z__vistorias__opus__com__rep-07__20261009-000128-vistorias-com-71da/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261009-000128-vistorias-com-71da/2026-10-09T00-01-28Z__vistorias__opus__com__rep-07__20261009-000128-vistorias-com-71da/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261009-000128-vistorias-com-71da/2026-10-09T00-01-28Z__vistorias__opus__com__rep-07__20261009-000128-vistorias-com-71da/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261009-000128-vistorias-com-71da/2026-10-09T00-01-28Z__vistorias__opus__com__rep-07__20261009-000128-vistorias-com-71da/evidence/logs/oracle.log) [#7](../../../../../restauracoes/20261009-000128-vistorias-com-71da/2026-10-09T00-01-28Z__vistorias__opus__com__rep-07__20261009-000128-vistorias-com-71da/evidence/logs/probe.log) [#8](../../../../../restauracoes/20261009-000128-vistorias-com-71da/2026-10-09T00-01-28Z__vistorias__opus__com__rep-07__20261009-000128-vistorias-com-71da/evidence/logs/screens.log) · [binding](analysis-binding.com.json)

Achados enviados (30; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| html | ds-page-footer | Não há .br-footer nem &lt;br-footer&gt; no documento; a página não tem rodapé. |
| html | ds-page-skip-link | O primeiro link da página é 'Home' \(href=/portal-mpa\) do breadcrumb; não há link de salto para o conteúdo principal. |
| tbody br-button\[icon=&quot;eye&quot;\] | button-name | O botão interno \(shadow\) só com o ícone fa-eye tem aria-label=&quot;&quot;, sem texto nem title: o nome acessível fica vazio, em todas as linhas e abas. |
| pnip-filter-panel .br-tag &gt; .br-button.inverted | button-name | Na etiqueta do filtro aplicado \('Barra Nova'\), o botão de remover só tem o ícone fa-times, sem texto ou aria-label. |
| div.col.align-content-center &gt; .br-tag &gt; .br-button.inverted | button-name | Na etiqueta 'Exibindo vistorias de ... até ...', o botão de remover o filtro de data só tem o ícone fa-times, sem nome acessível. |
| .br-tag.primary-pastel-01 | color-contrast | A etiqueta 'Nenhum filtro de data aplicado' tem texto #ffffff sobre #c5d4eb, 14px normal: contraste de 1,5:1. |
| pnip-status-solicitacao-utils .bg-blue-40 &gt; .text-secondary-01 | color-contrast | O status 'Vistoria agendada' \(aba Tramitando\) tem texto #ffffff sobre #4f97d1, 14px normal: contraste de 3,14:1. |
| pnip-status-solicitacao-utils .bg-secondary-06 &gt; .text-secondary-01 | color-contrast | O status 'Vistoria pré agendada' \(aba Agendar\) tem texto #ffffff sobre #888888, 14px normal: contraste de 3,54:1. |
| thead th:nth-child\(2\), thead th:nth-child\(9\) | empty-table-header | Os cabeçalhos de coluna da seleção \(só com um checkbox\) e da coluna de ações não têm texto acessível. |
| br-input\[type=&quot;date&quot;\] | label | Os dois campos de data \(input type=date no shadow de br-input\) não têm label nem aria-label; o texto 'Data da vistoria:' e o 'até' são spans soltos. |
| table input\[type=&quot;checkbox&quot;\] | label | Os 11 checkboxes \(selecionar todos e um por linha\) não têm label, aria-label nem aria-labelledby. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] &gt; ul &gt; li &gt; li | listitem | Os números de página estão em &lt;li&gt; aninhado diretamente dentro de outro &lt;li&gt;, sem ul/ol pai. |
| html | page-has-heading-one | A página não tem h1; o título 'Vistorias' é h2 e é o único título da página. |
| br-breadcrumb | ds-structure-breadcrumb-tag | O breadcrumb é renderizado como &lt;div class=br-breadcrumb&gt; com ul, sem o landmark nav nem aria-label. |
| br-breadcrumb | incerta | No item Home, um &lt;button&gt; está aninhado dentro de &lt;a href=/portal-mpa&gt;; são duas paradas de Tab consecutivas \('Home' link e 'Home' botão\) para o mesmo destino. |
| #swal2-select | select-name | No diálogo 'Atribuir Vistoriador', o select de vistoriadores não tem label, aria-label nem title; só existe o texto 'Selecione um Vistoriador' sem associação. |
| #avatar-menu | aria-required-children | O menu do usuário aberto tem role=menu, mas não tem role=menuitem; os filhos são div, span e um button 'Sair'. |
| #avatar-menu img | image-alt | A imagem exit-icon.png do botão 'Sair' não tem atributo alt. |
| #avatar-menu | region | O menu do usuário aberto \(e o gatilho do avatar, em div.container-lg\) fica fora de qualquer landmark; o banner fica só dentro do shadow de br-header. |
| pnip-filter-panel .br-tag.interaction.bg-pure-0 | wcag:2.1.1 | Os filtros 'Cidade', 'Porto', 'Vistoriador' e 'Status' são &lt;span class=br-tag&gt; com cursor:pointer e abrem uma lista ao clicar, mas não têm tabindex nem role; não recebem foco por Tab \(a ordem de foco vai de 'Concluídos'… |
| pnip-filter-panel .br-select .br-radio label | wcag:2.1.1 | As opções do filtro aberto \(ex.: 'Barra Nova'\) são só &lt;label&gt; dentro de div.br-radio, sem input radio, sem for, sem tabindex e sem role; só funcionam pelo mouse. |
| #avatar-menu .text-center &gt; span | wcag:2.1.1 | 'Trocar unidade' é um &lt;span&gt; com cursor:pointer que, ao clicar, navega para /portal-mpa, mas não tem tabindex nem role e não é alcançável por teclado. |
| #avatar-dropdown-trigger | wcag:2.5.3 | O texto visível do botão é 'Olá, Usuária de Teste, SUPERVISOR', mas o aria-label='Avatar com dropdown' substitui esse texto e o nome acessível não o contém. |
| nav.tab-nav .tab-item.active &gt; button | wcag:4.1.2 | A aba selecionada \('Tramitando'\) só é indicada pela classe .active no li; o botão não tem aria-selected, aria-current nem role=tab. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] a.page.active | wcag:1.3.1 | A página atual só é indicada visualmente pela classe .active; o link não tem aria-current=&quot;page&quot;. |
| tbody br-button\[title=&quot;Atribuir vistoriador&quot;\], tbody br-button\[icon=&quot;trash&quot;\] | wcag:2.4.3 | Ao abrir pelo teclado \(Enter\) os diálogos 'Atribuir Vistoriador' e 'Excluir Vistoria' e fechar com Cancelar/Escape, o foco vai para &lt;body&gt; e não volta ao botão que abriu o diálogo. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] a.page | wcag:2.4.3 | Ao acionar a página '2' pelo teclado \(Enter\), a lista é recarregada e o foco vai para &lt;body&gt;; o mesmo acontece ao escolher 25 em 'Exibir' \(#total\). |
| pnip-propesc-vistorias .mt-5.text-center &gt; p | wcag:4.1.3 | Depois de filtrar, a tabela e a paginação \(que tinha aria-live\) são removidas e aparece 'Não há vistorias para exibir nesse periodo selecionado.' em um &lt;p&gt; sem role=status nem aria-live; o resultado não é anunciado. |
| br-header | incerta | O botão 'Menu' \(#navigation, data-target=#main-navigation\) não abre nada ao ser clicado: não existe #main-navigation nem painel br-menu no documento e o botão não tem aria-expanded. |
| br-header | wcag:1.1.1 | A imagem da marca gov.br no cabeçalho tem alt=&quot;logo&quot;, que não descreve a imagem. |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `1acc506cd7a1ee0ff81bb25174573d45ee8dff6a5a3fd1d2ab3035f67bbe0f65`

