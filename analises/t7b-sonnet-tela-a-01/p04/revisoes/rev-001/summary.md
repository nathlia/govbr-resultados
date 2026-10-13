# Resumo da análise — Solicitar serviço (solicitacao)

Revisão 1 · gerado em 2026-10-13T00:05:30.994Z (UTC)

## 1. Status técnico

Análise: **pronta**

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261012-091704-solicitacao-sem-785d | sem | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 8 cartão(ões), nenhum decidido |
| 20261012-092639-solicitacao-com-e1dd | com | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 13 cartão(ões), nenhum decidido |

Uma execução pode ter rodado bem e ainda estar esperando revisão: isso é normal. A pontuação só é final quando todos os cartões dela foram decididos.

## 2. Identidade

| | sem | com |
|---|---|---|
| Tela | Solicitar serviço (solicitacao @ govbr-telas-site-1a6e8daf3cdb) | Solicitar serviço (solicitacao @ govbr-telas-site-1a6e8daf3cdb) |
| Braço | sem oráculo | com oráculo |
| Modelo (família) | claude | claude |
| ID pedido | claude-sonnet-5-5 | claude-sonnet-5-5 |
| ID efetivo | claude-sonnet-5-5 (client-log) | claude-sonnet-5-5 (client-log) |
| Esforço | high | high |
| Cliente | claude-code 2.1.288 \(Claude Code\) | claude-code 2.1.288 \(Claude Code\) |
| Início (UTC) | 2026-10-12T09:17:28Z | 2026-10-12T09:27:04Z |
| Início (local) | 12/10/2026, 06:17:28 (horário de Brasília) | 12/10/2026, 06:27:04 (horário de Brasília) |
| Commit do harness | 7f189a9a0984459418e210aa1453acbee54e1160 | 7f189a9a0984459418e210aa1453acbee54e1160 |
| Repetição · tentativa | 4 · 1 | 4 · 1 |
| Campanha · slot · par | t7b-sonnet-tela-a-01 · p04-sem · p04 | t7b-sonnet-tela-a-01 · p04-com · p04 |

## 3. Resultado científico

| Medida | sem | com |
|---|---|---|
| Defeitos da referência confirmados | 0 de 16 (até agora) | 0 de 16 (até agora) |
| Recall (cobertura da referência) | indisponível | indisponível |
| Sorteadas × página (A-\* × P-\*) | A-\*: 0 de 14 (até agora) · indisponível × P-\*: 0 de 2 (até agora) · indisponível | A-\*: 0 de 14 (até agora) · indisponível × P-\*: 0 de 2 (até agora) · indisponível |
| Precisão sobre a referência — D/(D+F) | indisponível | indisponível |
| Precisão das afirmações — (D+N)/(D+N+F) | indisponível | indisponível |
| Afirmações incorretas (falsos positivos) | 0 | 0 |
| Defeitos novos corretos (fora da referência) | 0 | 0 |
| Duplicadas | 0 | 0 |
| Cartões pendentes de revisão | 8 | 13 |
| Maturidade | aguardando revisão — 8 cartão(ões), nenhum decidido | aguardando revisão — 13 cartão(ões), nenhum decidido |
| Entra na comparação principal | sim | sim |
| Achados enviados | 8 | 13 |

Recall e precisão só aparecem com a revisão fechada; enquanto houver cartão pendente ficam “indisponível” (nunca 0). “Achados enviados = 0” é um resultado válido (o agente olhou e não alegou nada); submissão recusada ou ausente é outra coisa.

Linha de base determinística (união das varreduras comparáveis), por unidade da referência:

| Unidades | sem | com |
|---|---|---|
| Agente e linha de base | 0 | 0 |
| Só o agente | 0 | 0 |
| Só a linha de base | 0 | 0 |
| Nenhum | 16 | 16 |
| Estado | provisório | provisório |

Linha de base: usada (lb-20261012-091638-solicitacao-18a841)

## 4. Comparação com − sem

_n = 1 par, sem inferência. Nenhum braço é declarado melhor por contagem bruta._

Estado: provisória (há cartões pendentes em pelo menos um braço)

- Diferença de defeitos confirmados (com − sem): 0 (até agora)
- Diferença de recall (com − sem): indisponível (revisão aberta)
- Só o com detectou: nenhuma
- Só o sem detectou: nenhuma
- Os dois detectaram: nenhuma
- Nenhum detectou: A-03 (&lt;div&gt; &quot;Descartar solicitação? Os dados preenchidos nest&quot;); A-11 (&lt;div&gt; &quot;Não foi possível enviar. Há 8 campo\(s\) obrigatór&quot;); A-04 (&lt;input#unidade&gt; &quot;Selecione uma opção&quot;); P-01 (&lt;header&gt; &quot;gov.br&quot;); A-09 (&lt;input#forma-presencial&gt;); A-08 (&lt;input#unidade&gt; &quot;Selecione uma opção&quot;); A-07 (&lt;nav&gt; &quot;Paginação de solicitações anteriores&quot;); A-05 (&lt;div&gt; &quot;Solicitações anteriores Protocolo Serviço Data S&quot;); A-10 (&lt;div&gt; &quot;Documentos comprobatórios \(opcional\) Selecione o&quot;); A-08 (&lt;input#servico&gt; &quot;Selecione uma opção&quot;); A-04 (&lt;input#servico&gt; &quot;Selecione uma opção&quot;); A-02 (&lt;button&gt; &quot;Selecione o arquivo&quot;); P-02 (&lt;body&gt; &quot;Ir para o conteúdo \(1/1\) 1 gov.br Página inicial&quot;); A-06 (&lt;div&gt; &quot;Fechar a mensagem&quot;); A-01 (&lt;div&gt; &quot;Descartar solicitação? Os dados preenchidos nest&quot;); A-12 (&lt;nav&gt; &quot;Paginação de solicitações anteriores&quot;)

## 5. MCP e isolamento

| | sem | com |
|---|---|---|
| Isolamento | passed | passed |
| Oráculo anunciado ao cliente | não | sim |
| Oráculo (pacote) | nenhum | govbr-ds-validator-server 2.7.0 (combined) |
| Uso do oráculo | ausente (confirmado) | não verificado |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 3 (ponte MCP do oráculo) |
| Protocolo | unverified | unverified |
| Ferramentas anunciadas | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for, get\_ds\_rules, get\_design\_tokens, get\_emag\_rules, get\_pag… |
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_snapshot, browser\_console\_messages, browser\_take\_screenshot, browser\_click, browser\_press\_key, browser\_fill\_form, browser\_type | browser\_navigate, browser\_evaluate, browser\_snapshot, browser\_console\_messages, scan\_page, browser\_click, browser\_take\_screenshot, browser\_press\_key, browser\_fill\_form, browser\_type, verify\_finding |
| Erros de ferramenta | 2 (tool-events.ndjson \(eventos com isError: true\)) | 2 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 8 aprovado(s); falhos: nenhum | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | nenhuma | nenhuma |

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 6. Custo e tempo

| | sem | com |
|---|---|---|
| Tempo de relógio (s) | 281 (runner) | 209 (runner) |
| Turnos | 88 (stream-json do cliente \(result.num\_turns\)) | 54 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 87 (ponte MCP) | 53 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 3 (ponte MCP do oráculo) |
| Tokens de entrada | 70 (stream-json do cliente \(result.usage\)) | 58 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 18459 (stream-json do cliente \(result.usage\)) | 12398 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 1869392 (stream-json do cliente \(result.usage\)) | 1458193 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 78032 (stream-json do cliente \(result.usage\)) | 61421 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 0.8707364000000001 (estimativa do cliente \(result.total\_cost\_usd\)) | 0.6614186 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 29 cartão(ões), estimativa 174 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 7. Detalhes e evidências

**sem** (20261012-091704-solicitacao-sem-785d): [pacote](../../../../../restauracoes/20261012-091704-solicitacao-sem-785d/2026-10-12T09-17-04Z__solicitacao__sonnet__sem__rep-04__20261012-091704-solicitacao-sem-785d) · [run.json](../../../../../restauracoes/20261012-091704-solicitacao-sem-785d/2026-10-12T09-17-04Z__solicitacao__sonnet__sem__rep-04__20261012-091704-solicitacao-sem-785d/run.json) · [findings.json](../../../../../restauracoes/20261012-091704-solicitacao-sem-785d/2026-10-12T09-17-04Z__solicitacao__sonnet__sem__rep-04__20261012-091704-solicitacao-sem-785d/findings.json) · [isolation.json](../../../../../restauracoes/20261012-091704-solicitacao-sem-785d/2026-10-12T09-17-04Z__solicitacao__sonnet__sem__rep-04__20261012-091704-solicitacao-sem-785d/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261012-091704-solicitacao-sem-785d/2026-10-12T09-17-04Z__solicitacao__sonnet__sem__rep-04__20261012-091704-solicitacao-sem-785d/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261012-091704-solicitacao-sem-785d/2026-10-12T09-17-04Z__solicitacao__sonnet__sem__rep-04__20261012-091704-solicitacao-sem-785d/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261012-091704-solicitacao-sem-785d/2026-10-12T09-17-04Z__solicitacao__sonnet__sem__rep-04__20261012-091704-solicitacao-sem-785d/evidence/cliente.json) [#3](../../../../../restauracoes/20261012-091704-solicitacao-sem-785d/2026-10-12T09-17-04Z__solicitacao__sonnet__sem__rep-04__20261012-091704-solicitacao-sem-785d/evidence/container-config.json) [#4](../../../../../restauracoes/20261012-091704-solicitacao-sem-785d/2026-10-12T09-17-04Z__solicitacao__sonnet__sem__rep-04__20261012-091704-solicitacao-sem-785d/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261012-091704-solicitacao-sem-785d/2026-10-12T09-17-04Z__solicitacao__sonnet__sem__rep-04__20261012-091704-solicitacao-sem-785d/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261012-091704-solicitacao-sem-785d/2026-10-12T09-17-04Z__solicitacao__sonnet__sem__rep-04__20261012-091704-solicitacao-sem-785d/evidence/preflight.json) [#7](../../../../../restauracoes/20261012-091704-solicitacao-sem-785d/2026-10-12T09-17-04Z__solicitacao__sonnet__sem__rep-04__20261012-091704-solicitacao-sem-785d/evidence/prompt.txt) [#8](../../../../../restauracoes/20261012-091704-solicitacao-sem-785d/2026-10-12T09-17-04Z__solicitacao__sonnet__sem__rep-04__20261012-091704-solicitacao-sem-785d/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261012-091704-solicitacao-sem-785d/2026-10-12T09-17-04Z__solicitacao__sonnet__sem__rep-04__20261012-091704-solicitacao-sem-785d/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261012-091704-solicitacao-sem-785d/2026-10-12T09-17-04Z__solicitacao__sonnet__sem__rep-04__20261012-091704-solicitacao-sem-785d/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261012-091704-solicitacao-sem-785d/2026-10-12T09-17-04Z__solicitacao__sonnet__sem__rep-04__20261012-091704-solicitacao-sem-785d/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261012-091704-solicitacao-sem-785d/2026-10-12T09-17-04Z__solicitacao__sonnet__sem__rep-04__20261012-091704-solicitacao-sem-785d/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261012-091704-solicitacao-sem-785d/2026-10-12T09-17-04Z__solicitacao__sonnet__sem__rep-04__20261012-091704-solicitacao-sem-785d/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261012-091704-solicitacao-sem-785d/2026-10-12T09-17-04Z__solicitacao__sonnet__sem__rep-04__20261012-091704-solicitacao-sem-785d/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261012-091704-solicitacao-sem-785d/2026-10-12T09-17-04Z__solicitacao__sonnet__sem__rep-04__20261012-091704-solicitacao-sem-785d/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261012-091704-solicitacao-sem-785d/2026-10-12T09-17-04Z__solicitacao__sonnet__sem__rep-04__20261012-091704-solicitacao-sem-785d/evidence/raw/probe/probe.json) [#17](../../../../../restauracoes/20261012-091704-solicitacao-sem-785d/2026-10-12T09-17-04Z__solicitacao__sonnet__sem__rep-04__20261012-091704-solicitacao-sem-785d/evidence/raw/probe/sonda-escrita-1791796648186.txt) [#18](../../../../../restauracoes/20261012-091704-solicitacao-sem-785d/2026-10-12T09-17-04Z__solicitacao__sonnet__sem__rep-04__20261012-091704-solicitacao-sem-785d/evidence/raw/task/mcp.json) [#19](../../../../../restauracoes/20261012-091704-solicitacao-sem-785d/2026-10-12T09-17-04Z__solicitacao__sonnet__sem__rep-04__20261012-091704-solicitacao-sem-785d/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261012-091704-solicitacao-sem-785d/2026-10-12T09-17-04Z__solicitacao__sonnet__sem__rep-04__20261012-091704-solicitacao-sem-785d/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261012-091704-solicitacao-sem-785d/2026-10-12T09-17-04Z__solicitacao__sonnet__sem__rep-04__20261012-091704-solicitacao-sem-785d/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261012-091704-solicitacao-sem-785d/2026-10-12T09-17-04Z__solicitacao__sonnet__sem__rep-04__20261012-091704-solicitacao-sem-785d/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261012-091704-solicitacao-sem-785d/2026-10-12T09-17-04Z__solicitacao__sonnet__sem__rep-04__20261012-091704-solicitacao-sem-785d/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261012-091704-solicitacao-sem-785d/2026-10-12T09-17-04Z__solicitacao__sonnet__sem__rep-04__20261012-091704-solicitacao-sem-785d/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261012-091704-solicitacao-sem-785d/2026-10-12T09-17-04Z__solicitacao__sonnet__sem__rep-04__20261012-091704-solicitacao-sem-785d/evidence/logs/probe.log) [#7](../../../../../restauracoes/20261012-091704-solicitacao-sem-785d/2026-10-12T09-17-04Z__solicitacao__sonnet__sem__rep-04__20261012-091704-solicitacao-sem-785d/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (8; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| label:not\(\[for\]\) | wcag:4.1.2 | O rótulo &quot;Presencial&quot; é um label sem atributo for; o radio #forma-presencial não tem nome acessível e clicar no texto não o seleciona \(verificado: o radio continuou desmarcado\). |
| .upload-button | wcag:2.4.3 | O botão de upload tem tabindex=&quot;1&quot;, e entra na ordem de tabulação antes dos demais controles \(tabIndex=1\). |
| .upload-button | wcag:4.1.2 | O botão de upload, focável e operável, tem aria-hidden=&quot;true&quot; e não aparece na árvore de acessibilidade com nome; o input file real está com display:none. |
| #data-preferencial-btn | wcag:2.1.1 | O botão que abre o calendário tem aria-hidden=&quot;true&quot; e tabindex=&quot;-1&quot;: não é alcançável pelo teclado nem exposto a leitores de tela \(só abre por clique do mouse\). |
| #servico, #unidade | wcag:2.4.7 | Ao receber foco por Tab, os campos de seleção não têm indicador visível: outline none, box-shadow none e borda cinza #888 sem mudança, ao contrário de #nome e #descricao, que mostram box-shadow de 2px. |
| .flatpickr-prev-month button, .flatpickr-next-month button | wcag:4.1.2 | Os botões de mês anterior e mês seguinte do calendário não têm nome acessível \(sem aria-label e sem texto, só ícone\). |
| #servico | wcag:2.4.3 | Ao escolher uma opção com ArrowDown e Enter, a lista fecha e o foco vai para o body, em vez de voltar ao campo. |
| .acao-cancelar | wcag:2.4.3 | Ao fechar o modal &quot;Descartar solicitação?&quot; com Escape, o foco vai para o body, e não volta ao botão Cancelar que o abriu. |

**com** (20261012-092639-solicitacao-com-e1dd): [pacote](../../../../../restauracoes/20261012-092639-solicitacao-com-e1dd/2026-10-12T09-26-39Z__solicitacao__sonnet__com__rep-04__20261012-092639-solicitacao-com-e1dd) · [run.json](../../../../../restauracoes/20261012-092639-solicitacao-com-e1dd/2026-10-12T09-26-39Z__solicitacao__sonnet__com__rep-04__20261012-092639-solicitacao-com-e1dd/run.json) · [findings.json](../../../../../restauracoes/20261012-092639-solicitacao-com-e1dd/2026-10-12T09-26-39Z__solicitacao__sonnet__com__rep-04__20261012-092639-solicitacao-com-e1dd/findings.json) · [isolation.json](../../../../../restauracoes/20261012-092639-solicitacao-com-e1dd/2026-10-12T09-26-39Z__solicitacao__sonnet__com__rep-04__20261012-092639-solicitacao-com-e1dd/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261012-092639-solicitacao-com-e1dd/2026-10-12T09-26-39Z__solicitacao__sonnet__com__rep-04__20261012-092639-solicitacao-com-e1dd/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261012-092639-solicitacao-com-e1dd/2026-10-12T09-26-39Z__solicitacao__sonnet__com__rep-04__20261012-092639-solicitacao-com-e1dd/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261012-092639-solicitacao-com-e1dd/2026-10-12T09-26-39Z__solicitacao__sonnet__com__rep-04__20261012-092639-solicitacao-com-e1dd/evidence/cliente.json) [#3](../../../../../restauracoes/20261012-092639-solicitacao-com-e1dd/2026-10-12T09-26-39Z__solicitacao__sonnet__com__rep-04__20261012-092639-solicitacao-com-e1dd/evidence/container-config.json) [#4](../../../../../restauracoes/20261012-092639-solicitacao-com-e1dd/2026-10-12T09-26-39Z__solicitacao__sonnet__com__rep-04__20261012-092639-solicitacao-com-e1dd/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261012-092639-solicitacao-com-e1dd/2026-10-12T09-26-39Z__solicitacao__sonnet__com__rep-04__20261012-092639-solicitacao-com-e1dd/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261012-092639-solicitacao-com-e1dd/2026-10-12T09-26-39Z__solicitacao__sonnet__com__rep-04__20261012-092639-solicitacao-com-e1dd/evidence/preflight.json) [#7](../../../../../restauracoes/20261012-092639-solicitacao-com-e1dd/2026-10-12T09-26-39Z__solicitacao__sonnet__com__rep-04__20261012-092639-solicitacao-com-e1dd/evidence/prompt.txt) [#8](../../../../../restauracoes/20261012-092639-solicitacao-com-e1dd/2026-10-12T09-26-39Z__solicitacao__sonnet__com__rep-04__20261012-092639-solicitacao-com-e1dd/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261012-092639-solicitacao-com-e1dd/2026-10-12T09-26-39Z__solicitacao__sonnet__com__rep-04__20261012-092639-solicitacao-com-e1dd/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261012-092639-solicitacao-com-e1dd/2026-10-12T09-26-39Z__solicitacao__sonnet__com__rep-04__20261012-092639-solicitacao-com-e1dd/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261012-092639-solicitacao-com-e1dd/2026-10-12T09-26-39Z__solicitacao__sonnet__com__rep-04__20261012-092639-solicitacao-com-e1dd/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261012-092639-solicitacao-com-e1dd/2026-10-12T09-26-39Z__solicitacao__sonnet__com__rep-04__20261012-092639-solicitacao-com-e1dd/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261012-092639-solicitacao-com-e1dd/2026-10-12T09-26-39Z__solicitacao__sonnet__com__rep-04__20261012-092639-solicitacao-com-e1dd/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261012-092639-solicitacao-com-e1dd/2026-10-12T09-26-39Z__solicitacao__sonnet__com__rep-04__20261012-092639-solicitacao-com-e1dd/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261012-092639-solicitacao-com-e1dd/2026-10-12T09-26-39Z__solicitacao__sonnet__com__rep-04__20261012-092639-solicitacao-com-e1dd/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261012-092639-solicitacao-com-e1dd/2026-10-12T09-26-39Z__solicitacao__sonnet__com__rep-04__20261012-092639-solicitacao-com-e1dd/evidence/raw/oracle/inventory.json) [#17](../../../../../restauracoes/20261012-092639-solicitacao-com-e1dd/2026-10-12T09-26-39Z__solicitacao__sonnet__com__rep-04__20261012-092639-solicitacao-com-e1dd/evidence/raw/oracle/oracle-telemetry.ndjson) [#18](../../../../../restauracoes/20261012-092639-solicitacao-com-e1dd/2026-10-12T09-26-39Z__solicitacao__sonnet__com__rep-04__20261012-092639-solicitacao-com-e1dd/evidence/raw/oracle/tool-events.ndjson) [#19](../../../../../restauracoes/20261012-092639-solicitacao-com-e1dd/2026-10-12T09-26-39Z__solicitacao__sonnet__com__rep-04__20261012-092639-solicitacao-com-e1dd/evidence/raw/probe/probe.json) [#20](../../../../../restauracoes/20261012-092639-solicitacao-com-e1dd/2026-10-12T09-26-39Z__solicitacao__sonnet__com__rep-04__20261012-092639-solicitacao-com-e1dd/evidence/raw/probe/sonda-escrita-1791797223683.txt) [#21](../../../../../restauracoes/20261012-092639-solicitacao-com-e1dd/2026-10-12T09-26-39Z__solicitacao__sonnet__com__rep-04__20261012-092639-solicitacao-com-e1dd/evidence/raw/task/mcp.json) [#22](../../../../../restauracoes/20261012-092639-solicitacao-com-e1dd/2026-10-12T09-26-39Z__solicitacao__sonnet__com__rep-04__20261012-092639-solicitacao-com-e1dd/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261012-092639-solicitacao-com-e1dd/2026-10-12T09-26-39Z__solicitacao__sonnet__com__rep-04__20261012-092639-solicitacao-com-e1dd/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261012-092639-solicitacao-com-e1dd/2026-10-12T09-26-39Z__solicitacao__sonnet__com__rep-04__20261012-092639-solicitacao-com-e1dd/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261012-092639-solicitacao-com-e1dd/2026-10-12T09-26-39Z__solicitacao__sonnet__com__rep-04__20261012-092639-solicitacao-com-e1dd/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261012-092639-solicitacao-com-e1dd/2026-10-12T09-26-39Z__solicitacao__sonnet__com__rep-04__20261012-092639-solicitacao-com-e1dd/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261012-092639-solicitacao-com-e1dd/2026-10-12T09-26-39Z__solicitacao__sonnet__com__rep-04__20261012-092639-solicitacao-com-e1dd/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261012-092639-solicitacao-com-e1dd/2026-10-12T09-26-39Z__solicitacao__sonnet__com__rep-04__20261012-092639-solicitacao-com-e1dd/evidence/logs/oracle.log) [#7](../../../../../restauracoes/20261012-092639-solicitacao-com-e1dd/2026-10-12T09-26-39Z__solicitacao__sonnet__com__rep-04__20261012-092639-solicitacao-com-e1dd/evidence/logs/probe.log) [#8](../../../../../restauracoes/20261012-092639-solicitacao-com-e1dd/2026-10-12T09-26-39Z__solicitacao__sonnet__com__rep-04__20261012-092639-solicitacao-com-e1dd/evidence/logs/screens.log) · [binding](analysis-binding.com.json)

Achados enviados (13; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| #forma-presencial | label | Radio 'Presencial' sem nome acessível: o &lt;label&gt; não tem atributo for e não envolve o input. |
| .upload-button | aria-hidden-focus | Botão 'Selecione o arquivo' com aria-hidden=&quot;true&quot; e focável \(único controle visível de envio de arquivo; o input file está display:none\). |
| .upload-button | wcag:2.4.3 | Botão com tabindex=&quot;1&quot; \(positivo\), é o primeiro na ordem de tabulação, antes do skip link e dos campos anteriores. |
| #data-preferencial-btn | wcag:4.1.2 | Botão 'Abrir calendário' com aria-hidden=&quot;true&quot; e tabindex=&quot;-1&quot;: fora da árvore de acessibilidade e da tabulação; sem nome acessível no snapshot. |
| .flatpickr-prev-month &gt; button, .flatpickr-next-month &gt; button | emag-2.2 | Botões de mês anterior/seguinte do calendário só com ícone, sem aria-label nem texto. |
| .flatpickr-day | axe:tabindex | Com o calendário aberto, os 42 dias têm tabindex=&quot;1&quot; \(positivo\). |
| .flatpickr-monthDropdown-months, .cur-year | wcag:3.1.2 | Com o calendário aberto, rótulos aria-label &quot;Month&quot; e &quot;Year&quot; em inglês em página pt-BR. |
| #cpf | wcag:3.3.1 | Informar CPF '123' \(apoio diz 'Somente números, 11 dígitos'\) e enviar: sem erro, e a solicitação é aceita \('Solicitação enviada.'\). |
| #data-preferencial | wcag:3.3.1 | Digitar '99/99/9999' é convertido silenciosamente para '09/03/0007' e aceito no envio, sem erro. |
| #servico, #unidade | wcag:3.3.1 | No estado de erro, os campos de seleção ficam aria-invalid=&quot;true&quot; mas sem aria-describedby; as mensagens de erro \(sem id\) não estão associadas aos campos, ao contrário de nome, CPF, data e descrição. |
| .paginacao-anteriores .page.active | incerta | Após ir à página 2, o link da página atual não tem aria-current=&quot;page&quot; \(só a classe active\). |
| html | ds-page-footer | Nenhum elemento .br-footer; a página não tem rodapé. |
| html | ds-page-header | Cabeçalho próprio \(.barra-superior\) sem o componente .br-header. |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `b9755d6db74e015159b0eccb756843131b3d1d70101fdb875f97da50a879cfe4`

