# Resumo da análise — Solicitar serviço (solicitacao)

Revisão 2 · substitui [a revisão anterior](../rev-001/summary.md) (sem alterar o pacote bruto) · gerado em 2026-10-13T00:18:02.062Z (UTC)

## 1. Status técnico

Análise: **pronta**

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261012-142206-solicitacao-sem-e097 | sem | rodou até o fim e o relatório foi aceito | — | aceita | final (revisão fechada) |
| 20261012-143009-solicitacao-com-b52e | com | rodou até o fim e o relatório foi aceito | — | aceita | final (revisão fechada) |

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
| Início (UTC) | 2026-10-12T14:22:30Z | 2026-10-12T14:30:34Z |
| Início (local) | 12/10/2026, 11:22:30 (horário de Brasília) | 12/10/2026, 11:30:34 (horário de Brasília) |
| Commit do harness | 7f189a9a0984459418e210aa1453acbee54e1160 | 7f189a9a0984459418e210aa1453acbee54e1160 |
| Repetição · tentativa | 10 · 1 | 10 · 1 |
| Campanha · slot · par | t7b-sonnet-tela-a-01 · p10-sem · p10 | t7b-sonnet-tela-a-01 · p10-com · p10 |

## 3. Resultado científico

| Medida | sem | com |
|---|---|---|
| Defeitos da referência confirmados | 3 de 16 | 2 de 16 |
| Recall (cobertura da referência) | 18,8% | 12,5% |
| Sorteadas × página (A-\* × P-\*) | A-\*: 3 de 14 · 21,4% × P-\*: 0 de 2 · 0,0% | A-\*: 1 de 14 · 7,1% × P-\*: 1 de 2 · 50,0% |
| Precisão sobre a referência — D/(D+F) | 75,0% | 4,2% |
| Precisão das afirmações — (D+N)/(D+N+F) | 80,0% | 4,2% |
| Afirmações incorretas (falsos positivos) | 1 | 46 |
| Defeitos novos corretos (fora da referência) | 1 | 0 |
| Duplicadas | 0 | 0 |
| Cartões pendentes de revisão | 0 | 0 |
| Maturidade | final (revisão fechada) | final (revisão fechada) |
| Entra na comparação principal | sim | sim |
| Achados enviados | 5 | 6 |

Recall e precisão só aparecem com a revisão fechada; enquanto houver cartão pendente ficam “indisponível” (nunca 0). “Achados enviados = 0” é um resultado válido (o agente olhou e não alegou nada); submissão recusada ou ausente é outra coisa.

Linha de base determinística (união das varreduras comparáveis), por unidade da referência:

| Unidades | sem | com |
|---|---|---|
| Agente e linha de base | 1 | 1 |
| Só o agente | 2 | 1 |
| Só a linha de base | 2 | 2 |
| Nenhum | 11 | 12 |
| Estado | final | final |

Linha de base: usada (lb-20261012-142156-solicitacao-4ffde6)

## 4. Comparação com − sem

_n = 1 par, sem inferência. Nenhum braço é declarado melhor por contagem bruta._

Estado: final (as duas revisões fechadas)

- Diferença de defeitos confirmados (com − sem): -1
- Diferença de recall (com − sem): −6,3 p.p.
- Só o com detectou: P-02 (&lt;body&gt; &quot;Ir para o conteúdo \(1/1\) 1 gov.br Página inicial&quot;)
- Só o sem detectou: A-02 (&lt;button&gt; &quot;Selecione o arquivo&quot;); A-12 (&lt;nav&gt; &quot;Paginação de solicitações anteriores&quot;)
- Os dois detectaram: A-09 (&lt;input#forma-presencial&gt;)
- Nenhum detectou: A-03 (&lt;div&gt; &quot;Descartar solicitação? Os dados preenchidos nest&quot;); A-11 (&lt;div&gt; &quot;Não foi possível enviar. Há 8 campo\(s\) obrigatór&quot;); A-04 (&lt;input#unidade&gt; &quot;Selecione uma opção&quot;); P-01 (&lt;header&gt; &quot;gov.br&quot;); A-08 (&lt;input#unidade&gt; &quot;Selecione uma opção&quot;); A-07 (&lt;nav&gt; &quot;Paginação de solicitações anteriores&quot;); A-05 (&lt;div&gt; &quot;Solicitações anteriores Protocolo Serviço Data S&quot;); A-10 (&lt;div&gt; &quot;Documentos comprobatórios \(opcional\) Selecione o&quot;); A-08 (&lt;input#servico&gt; &quot;Selecione uma opção&quot;); A-04 (&lt;input#servico&gt; &quot;Selecione uma opção&quot;); A-06 (&lt;div&gt; &quot;Fechar a mensagem&quot;); A-01 (&lt;div&gt; &quot;Descartar solicitação? Os dados preenchidos nest&quot;)

## 5. MCP e isolamento

| | sem | com |
|---|---|---|
| Isolamento | passed | passed |
| Oráculo anunciado ao cliente | não | sim |
| Oráculo (pacote) | nenhum | govbr-ds-validator-server 2.7.0 (combined) |
| Uso do oráculo | ausente (confirmado) | não verificado |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 5 (ponte MCP do oráculo) |
| Protocolo | unverified | unverified |
| Ferramentas anunciadas | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for, get\_ds\_rules, get\_design\_tokens, get\_emag\_rules, get\_pag… |
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_snapshot, browser\_console\_messages, browser\_click, browser\_take\_screenshot, browser\_press\_key, browser\_type | browser\_navigate, browser\_evaluate, browser\_snapshot, browser\_console\_messages, scan\_page, browser\_click, browser\_take\_screenshot, get\_finding\_details, browser\_type, browser\_press\_key, verify\_finding |
| Erros de ferramenta | 0 (tool-events.ndjson \(eventos com isError: true\)) | 0 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 8 aprovado(s); falhos: nenhum | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | nenhuma | nenhuma |

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 6. Custo e tempo

| | sem | com |
|---|---|---|
| Tempo de relógio (s) | 161 (runner) | 171 (runner) |
| Turnos | 41 (stream-json do cliente \(result.num\_turns\)) | 46 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 40 (ponte MCP) | 45 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 5 (ponte MCP do oráculo) |
| Tokens de entrada | 44 (stream-json do cliente \(result.usage\)) | 46 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 10507 (stream-json do cliente \(result.usage\)) | 10467 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 995022 (stream-json do cliente \(result.usage\)) | 1351646 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 56968 (stream-json do cliente \(result.usage\)) | 68247 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 0.5320344 (estimativa do cliente \(result.total\_cost\_usd\)) | 0.6480792000000001 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 19 cartão(ões), estimativa 114 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 7. Detalhes e evidências

**sem** (20261012-142206-solicitacao-sem-e097): [pacote](../../../../../restauracoes/20261012-142206-solicitacao-sem-e097/2026-10-12T14-22-06Z__solicitacao__sonnet__sem__rep-10__20261012-142206-solicitacao-sem-e097) · [run.json](../../../../../restauracoes/20261012-142206-solicitacao-sem-e097/2026-10-12T14-22-06Z__solicitacao__sonnet__sem__rep-10__20261012-142206-solicitacao-sem-e097/run.json) · [findings.json](../../../../../restauracoes/20261012-142206-solicitacao-sem-e097/2026-10-12T14-22-06Z__solicitacao__sonnet__sem__rep-10__20261012-142206-solicitacao-sem-e097/findings.json) · [isolation.json](../../../../../restauracoes/20261012-142206-solicitacao-sem-e097/2026-10-12T14-22-06Z__solicitacao__sonnet__sem__rep-10__20261012-142206-solicitacao-sem-e097/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261012-142206-solicitacao-sem-e097/2026-10-12T14-22-06Z__solicitacao__sonnet__sem__rep-10__20261012-142206-solicitacao-sem-e097/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261012-142206-solicitacao-sem-e097/2026-10-12T14-22-06Z__solicitacao__sonnet__sem__rep-10__20261012-142206-solicitacao-sem-e097/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261012-142206-solicitacao-sem-e097/2026-10-12T14-22-06Z__solicitacao__sonnet__sem__rep-10__20261012-142206-solicitacao-sem-e097/evidence/cliente.json) [#3](../../../../../restauracoes/20261012-142206-solicitacao-sem-e097/2026-10-12T14-22-06Z__solicitacao__sonnet__sem__rep-10__20261012-142206-solicitacao-sem-e097/evidence/container-config.json) [#4](../../../../../restauracoes/20261012-142206-solicitacao-sem-e097/2026-10-12T14-22-06Z__solicitacao__sonnet__sem__rep-10__20261012-142206-solicitacao-sem-e097/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261012-142206-solicitacao-sem-e097/2026-10-12T14-22-06Z__solicitacao__sonnet__sem__rep-10__20261012-142206-solicitacao-sem-e097/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261012-142206-solicitacao-sem-e097/2026-10-12T14-22-06Z__solicitacao__sonnet__sem__rep-10__20261012-142206-solicitacao-sem-e097/evidence/preflight.json) [#7](../../../../../restauracoes/20261012-142206-solicitacao-sem-e097/2026-10-12T14-22-06Z__solicitacao__sonnet__sem__rep-10__20261012-142206-solicitacao-sem-e097/evidence/prompt.txt) [#8](../../../../../restauracoes/20261012-142206-solicitacao-sem-e097/2026-10-12T14-22-06Z__solicitacao__sonnet__sem__rep-10__20261012-142206-solicitacao-sem-e097/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261012-142206-solicitacao-sem-e097/2026-10-12T14-22-06Z__solicitacao__sonnet__sem__rep-10__20261012-142206-solicitacao-sem-e097/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261012-142206-solicitacao-sem-e097/2026-10-12T14-22-06Z__solicitacao__sonnet__sem__rep-10__20261012-142206-solicitacao-sem-e097/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261012-142206-solicitacao-sem-e097/2026-10-12T14-22-06Z__solicitacao__sonnet__sem__rep-10__20261012-142206-solicitacao-sem-e097/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261012-142206-solicitacao-sem-e097/2026-10-12T14-22-06Z__solicitacao__sonnet__sem__rep-10__20261012-142206-solicitacao-sem-e097/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261012-142206-solicitacao-sem-e097/2026-10-12T14-22-06Z__solicitacao__sonnet__sem__rep-10__20261012-142206-solicitacao-sem-e097/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261012-142206-solicitacao-sem-e097/2026-10-12T14-22-06Z__solicitacao__sonnet__sem__rep-10__20261012-142206-solicitacao-sem-e097/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261012-142206-solicitacao-sem-e097/2026-10-12T14-22-06Z__solicitacao__sonnet__sem__rep-10__20261012-142206-solicitacao-sem-e097/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261012-142206-solicitacao-sem-e097/2026-10-12T14-22-06Z__solicitacao__sonnet__sem__rep-10__20261012-142206-solicitacao-sem-e097/evidence/raw/probe/probe.json) [#17](../../../../../restauracoes/20261012-142206-solicitacao-sem-e097/2026-10-12T14-22-06Z__solicitacao__sonnet__sem__rep-10__20261012-142206-solicitacao-sem-e097/evidence/raw/probe/sonda-escrita-1791814950056.txt) [#18](../../../../../restauracoes/20261012-142206-solicitacao-sem-e097/2026-10-12T14-22-06Z__solicitacao__sonnet__sem__rep-10__20261012-142206-solicitacao-sem-e097/evidence/raw/task/mcp.json) [#19](../../../../../restauracoes/20261012-142206-solicitacao-sem-e097/2026-10-12T14-22-06Z__solicitacao__sonnet__sem__rep-10__20261012-142206-solicitacao-sem-e097/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261012-142206-solicitacao-sem-e097/2026-10-12T14-22-06Z__solicitacao__sonnet__sem__rep-10__20261012-142206-solicitacao-sem-e097/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261012-142206-solicitacao-sem-e097/2026-10-12T14-22-06Z__solicitacao__sonnet__sem__rep-10__20261012-142206-solicitacao-sem-e097/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261012-142206-solicitacao-sem-e097/2026-10-12T14-22-06Z__solicitacao__sonnet__sem__rep-10__20261012-142206-solicitacao-sem-e097/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261012-142206-solicitacao-sem-e097/2026-10-12T14-22-06Z__solicitacao__sonnet__sem__rep-10__20261012-142206-solicitacao-sem-e097/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261012-142206-solicitacao-sem-e097/2026-10-12T14-22-06Z__solicitacao__sonnet__sem__rep-10__20261012-142206-solicitacao-sem-e097/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261012-142206-solicitacao-sem-e097/2026-10-12T14-22-06Z__solicitacao__sonnet__sem__rep-10__20261012-142206-solicitacao-sem-e097/evidence/logs/probe.log) [#7](../../../../../restauracoes/20261012-142206-solicitacao-sem-e097/2026-10-12T14-22-06Z__solicitacao__sonnet__sem__rep-10__20261012-142206-solicitacao-sem-e097/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (5; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| #forma-presencial | wcag:1.3.1 | O label 'Presencial' não tem atributo for; o rádio fica sem nome acessível e clicar no texto não o marca \(confirmado: checked=false após o clique\). Os outros dois rádios têm for. |
| .upload-button | wcag:4.1.2 | Botão 'Selecione o arquivo' com aria-hidden=&quot;true&quot; é focável e é o controle visível de upload; o input file real está com display:none. O botão aparece sem nome na árvore de acessibilidade. |
| .upload-button | wcag:2.4.3 | tabindex=&quot;1&quot;: é o primeiro item da ordem de tabulação, antes do link 'Ir para o conteúdo' e do cabeçalho. |
| .paginacao-anteriores .page.active | incerta | Após clicar em Página 2, o link ativo só se distingue pela classe/estilo; não há aria-current. |
| #cpf | wcag:3.3.1 | A dica diz 'Somente números, 11 dígitos', mas o valor '123' foi aceito sem erro e o formulário foi enviado com sucesso \(mensagem 'Solicitação enviada'\). |

**com** (20261012-143009-solicitacao-com-b52e): [pacote](../../../../../restauracoes/20261012-143009-solicitacao-com-b52e/2026-10-12T14-30-09Z__solicitacao__sonnet__com__rep-10__20261012-143009-solicitacao-com-b52e) · [run.json](../../../../../restauracoes/20261012-143009-solicitacao-com-b52e/2026-10-12T14-30-09Z__solicitacao__sonnet__com__rep-10__20261012-143009-solicitacao-com-b52e/run.json) · [findings.json](../../../../../restauracoes/20261012-143009-solicitacao-com-b52e/2026-10-12T14-30-09Z__solicitacao__sonnet__com__rep-10__20261012-143009-solicitacao-com-b52e/findings.json) · [isolation.json](../../../../../restauracoes/20261012-143009-solicitacao-com-b52e/2026-10-12T14-30-09Z__solicitacao__sonnet__com__rep-10__20261012-143009-solicitacao-com-b52e/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261012-143009-solicitacao-com-b52e/2026-10-12T14-30-09Z__solicitacao__sonnet__com__rep-10__20261012-143009-solicitacao-com-b52e/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261012-143009-solicitacao-com-b52e/2026-10-12T14-30-09Z__solicitacao__sonnet__com__rep-10__20261012-143009-solicitacao-com-b52e/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261012-143009-solicitacao-com-b52e/2026-10-12T14-30-09Z__solicitacao__sonnet__com__rep-10__20261012-143009-solicitacao-com-b52e/evidence/cliente.json) [#3](../../../../../restauracoes/20261012-143009-solicitacao-com-b52e/2026-10-12T14-30-09Z__solicitacao__sonnet__com__rep-10__20261012-143009-solicitacao-com-b52e/evidence/container-config.json) [#4](../../../../../restauracoes/20261012-143009-solicitacao-com-b52e/2026-10-12T14-30-09Z__solicitacao__sonnet__com__rep-10__20261012-143009-solicitacao-com-b52e/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261012-143009-solicitacao-com-b52e/2026-10-12T14-30-09Z__solicitacao__sonnet__com__rep-10__20261012-143009-solicitacao-com-b52e/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261012-143009-solicitacao-com-b52e/2026-10-12T14-30-09Z__solicitacao__sonnet__com__rep-10__20261012-143009-solicitacao-com-b52e/evidence/preflight.json) [#7](../../../../../restauracoes/20261012-143009-solicitacao-com-b52e/2026-10-12T14-30-09Z__solicitacao__sonnet__com__rep-10__20261012-143009-solicitacao-com-b52e/evidence/prompt.txt) [#8](../../../../../restauracoes/20261012-143009-solicitacao-com-b52e/2026-10-12T14-30-09Z__solicitacao__sonnet__com__rep-10__20261012-143009-solicitacao-com-b52e/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261012-143009-solicitacao-com-b52e/2026-10-12T14-30-09Z__solicitacao__sonnet__com__rep-10__20261012-143009-solicitacao-com-b52e/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261012-143009-solicitacao-com-b52e/2026-10-12T14-30-09Z__solicitacao__sonnet__com__rep-10__20261012-143009-solicitacao-com-b52e/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261012-143009-solicitacao-com-b52e/2026-10-12T14-30-09Z__solicitacao__sonnet__com__rep-10__20261012-143009-solicitacao-com-b52e/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261012-143009-solicitacao-com-b52e/2026-10-12T14-30-09Z__solicitacao__sonnet__com__rep-10__20261012-143009-solicitacao-com-b52e/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261012-143009-solicitacao-com-b52e/2026-10-12T14-30-09Z__solicitacao__sonnet__com__rep-10__20261012-143009-solicitacao-com-b52e/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261012-143009-solicitacao-com-b52e/2026-10-12T14-30-09Z__solicitacao__sonnet__com__rep-10__20261012-143009-solicitacao-com-b52e/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261012-143009-solicitacao-com-b52e/2026-10-12T14-30-09Z__solicitacao__sonnet__com__rep-10__20261012-143009-solicitacao-com-b52e/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261012-143009-solicitacao-com-b52e/2026-10-12T14-30-09Z__solicitacao__sonnet__com__rep-10__20261012-143009-solicitacao-com-b52e/evidence/raw/oracle/inventory.json) [#17](../../../../../restauracoes/20261012-143009-solicitacao-com-b52e/2026-10-12T14-30-09Z__solicitacao__sonnet__com__rep-10__20261012-143009-solicitacao-com-b52e/evidence/raw/oracle/oracle-telemetry.ndjson) [#18](../../../../../restauracoes/20261012-143009-solicitacao-com-b52e/2026-10-12T14-30-09Z__solicitacao__sonnet__com__rep-10__20261012-143009-solicitacao-com-b52e/evidence/raw/oracle/tool-events.ndjson) [#19](../../../../../restauracoes/20261012-143009-solicitacao-com-b52e/2026-10-12T14-30-09Z__solicitacao__sonnet__com__rep-10__20261012-143009-solicitacao-com-b52e/evidence/raw/probe/probe.json) [#20](../../../../../restauracoes/20261012-143009-solicitacao-com-b52e/2026-10-12T14-30-09Z__solicitacao__sonnet__com__rep-10__20261012-143009-solicitacao-com-b52e/evidence/raw/probe/sonda-escrita-1791815434233.txt) [#21](../../../../../restauracoes/20261012-143009-solicitacao-com-b52e/2026-10-12T14-30-09Z__solicitacao__sonnet__com__rep-10__20261012-143009-solicitacao-com-b52e/evidence/raw/task/mcp.json) [#22](../../../../../restauracoes/20261012-143009-solicitacao-com-b52e/2026-10-12T14-30-09Z__solicitacao__sonnet__com__rep-10__20261012-143009-solicitacao-com-b52e/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261012-143009-solicitacao-com-b52e/2026-10-12T14-30-09Z__solicitacao__sonnet__com__rep-10__20261012-143009-solicitacao-com-b52e/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261012-143009-solicitacao-com-b52e/2026-10-12T14-30-09Z__solicitacao__sonnet__com__rep-10__20261012-143009-solicitacao-com-b52e/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261012-143009-solicitacao-com-b52e/2026-10-12T14-30-09Z__solicitacao__sonnet__com__rep-10__20261012-143009-solicitacao-com-b52e/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261012-143009-solicitacao-com-b52e/2026-10-12T14-30-09Z__solicitacao__sonnet__com__rep-10__20261012-143009-solicitacao-com-b52e/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261012-143009-solicitacao-com-b52e/2026-10-12T14-30-09Z__solicitacao__sonnet__com__rep-10__20261012-143009-solicitacao-com-b52e/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261012-143009-solicitacao-com-b52e/2026-10-12T14-30-09Z__solicitacao__sonnet__com__rep-10__20261012-143009-solicitacao-com-b52e/evidence/logs/oracle.log) [#7](../../../../../restauracoes/20261012-143009-solicitacao-com-b52e/2026-10-12T14-30-09Z__solicitacao__sonnet__com__rep-10__20261012-143009-solicitacao-com-b52e/evidence/logs/probe.log) [#8](../../../../../restauracoes/20261012-143009-solicitacao-com-b52e/2026-10-12T14-30-09Z__solicitacao__sonnet__com__rep-10__20261012-143009-solicitacao-com-b52e/evidence/logs/screens.log) · [binding](analysis-binding.com.json)

Achados enviados (6; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| #forma-presencial | incerta | O rádio 'Presencial' não tem nome acessível: o &lt;label&gt; não possui atributo for, e clicar nele não marca a opção. Os rádios vizinhos usam label for. |
| .upload-button | incerta | Botão 'Selecione o arquivo' com aria-hidden=&quot;true&quot; e tabindex=&quot;1&quot;, portanto focável e oculto da árvore de acessibilidade; o input file nativo está com display:none. |
| #data-preferencial-btn | incerta | Botão 'Abrir calendário' com aria-hidden=&quot;true&quot; e tabindex=&quot;-1&quot;: fora da ordem de tabulação e oculto das tecnologias assistivas. |
| .flatpickr-prev-month &gt; button, .flatpickr-next-month &gt; button | button-name | Botões de mês anterior/seguinte do calendário só têm ícone, sem texto, aria-label ou title. |
| .flatpickr-day | tabindex | Com o calendário aberto, os dias têm tabindex=&quot;1&quot; \(valor positivo\). |
| body | ds-page-footer | A página não tem rodapé: nenhum .br-footer, &lt;br-footer&gt; ou &lt;footer&gt;. |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `976607b3db8d04cf7435382062afe800f3c79c15081816a62eb832693c3690cd`

