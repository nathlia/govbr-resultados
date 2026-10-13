# Resumo da análise — Solicitar serviço (solicitacao)

Revisão 2 · substitui [a revisão anterior](../rev-001/summary.md) (sem alterar o pacote bruto) · gerado em 2026-10-13T00:16:56.721Z (UTC)

## 1. Status técnico

Análise: **pronta**

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261012-101952-solicitacao-sem-1543 | sem | rodou até o fim e o relatório foi aceito | — | aceita | final (revisão fechada) |
| 20261012-101203-solicitacao-com-bbe6 | com | rodou até o fim e o relatório foi aceito | — | aceita | final (revisão fechada) |

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
| Início (UTC) | 2026-10-12T10:20:16Z | 2026-10-12T10:12:28Z |
| Início (local) | 12/10/2026, 07:20:16 (horário de Brasília) | 12/10/2026, 07:12:28 (horário de Brasília) |
| Commit do harness | 7f189a9a0984459418e210aa1453acbee54e1160 | 7f189a9a0984459418e210aa1453acbee54e1160 |
| Repetição · tentativa | 7 · 1 | 7 · 1 |
| Campanha · slot · par | t7b-sonnet-tela-a-01 · p07-sem · p07 | t7b-sonnet-tela-a-01 · p07-com · p07 |

## 3. Resultado científico

| Medida | sem | com |
|---|---|---|
| Defeitos da referência confirmados | 5 de 16 | 5 de 16 |
| Recall (cobertura da referência) | 31,3% | 31,3% |
| Sorteadas × página (A-\* × P-\*) | A-\*: 5 de 14 · 35,7% × P-\*: 0 de 2 · 0,0% | A-\*: 4 de 14 · 28,6% × P-\*: 1 de 2 · 50,0% |
| Precisão sobre a referência — D/(D+F) | 55,6% | 71,4% |
| Precisão das afirmações — (D+N)/(D+N+F) | 60,0% | 77,8% |
| Afirmações incorretas (falsos positivos) | 4 | 2 |
| Defeitos novos corretos (fora da referência) | 1 | 2 |
| Duplicadas | 0 | 0 |
| Cartões pendentes de revisão | 0 | 0 |
| Maturidade | final (revisão fechada) | final (revisão fechada) |
| Entra na comparação principal | sim | sim |
| Achados enviados | 8 | 9 |

Recall e precisão só aparecem com a revisão fechada; enquanto houver cartão pendente ficam “indisponível” (nunca 0). “Achados enviados = 0” é um resultado válido (o agente olhou e não alegou nada); submissão recusada ou ausente é outra coisa.

Linha de base determinística (união das varreduras comparáveis), por unidade da referência:

| Unidades | sem | com |
|---|---|---|
| Agente e linha de base | 1 | 1 |
| Só o agente | 4 | 4 |
| Só a linha de base | 2 | 2 |
| Nenhum | 9 | 9 |
| Estado | final | final |

Linha de base: usada (lb-20261012-101112-solicitacao-c7397e)

## 4. Comparação com − sem

_n = 1 par, sem inferência. Nenhum braço é declarado melhor por contagem bruta._

Estado: final (as duas revisões fechadas)

- Diferença de defeitos confirmados (com − sem): 0
- Diferença de recall (com − sem): 0,0 p.p.
- Só o com detectou: P-01 (&lt;header&gt; &quot;gov.br&quot;)
- Só o sem detectou: A-08 (&lt;input#servico&gt; &quot;Selecione uma opção&quot;)
- Os dois detectaram: A-09 (&lt;input#forma-presencial&gt;); A-08 (&lt;input#unidade&gt; &quot;Selecione uma opção&quot;); A-02 (&lt;button&gt; &quot;Selecione o arquivo&quot;); A-12 (&lt;nav&gt; &quot;Paginação de solicitações anteriores&quot;)
- Nenhum detectou: A-03 (&lt;div&gt; &quot;Descartar solicitação? Os dados preenchidos nest&quot;); A-11 (&lt;div&gt; &quot;Não foi possível enviar. Há 8 campo\(s\) obrigatór&quot;); A-04 (&lt;input#unidade&gt; &quot;Selecione uma opção&quot;); A-07 (&lt;nav&gt; &quot;Paginação de solicitações anteriores&quot;); A-05 (&lt;div&gt; &quot;Solicitações anteriores Protocolo Serviço Data S&quot;); A-10 (&lt;div&gt; &quot;Documentos comprobatórios \(opcional\) Selecione o&quot;); A-04 (&lt;input#servico&gt; &quot;Selecione uma opção&quot;); P-02 (&lt;body&gt; &quot;Ir para o conteúdo \(1/1\) 1 gov.br Página inicial&quot;); A-06 (&lt;div&gt; &quot;Fechar a mensagem&quot;); A-01 (&lt;div&gt; &quot;Descartar solicitação? Os dados preenchidos nest&quot;)

## 5. MCP e isolamento

| | sem | com |
|---|---|---|
| Isolamento | passed | passed |
| Oráculo anunciado ao cliente | não | sim |
| Oráculo (pacote) | nenhum | govbr-ds-validator-server 2.7.0 (combined) |
| Uso do oráculo | ausente (confirmado) | usado conforme o protocolo |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 4 (ponte MCP do oráculo) |
| Protocolo | unverified | unverified |
| Ferramentas anunciadas | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for, get\_ds\_rules, get\_design\_tokens, get\_emag\_rules, get\_pag… |
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_snapshot, browser\_console\_messages, browser\_take\_screenshot, browser\_click, browser\_fill\_form, browser\_press\_key | browser\_navigate, browser\_evaluate, browser\_snapshot, browser\_console\_messages, scan\_page, browser\_take\_screenshot, browser\_click, browser\_press\_key, get\_ds\_rules, browser\_type, verify\_finding |
| Erros de ferramenta | 2 (tool-events.ndjson \(eventos com isError: true\)) | 2 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 8 aprovado(s); falhos: nenhum | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | nenhuma | nenhuma |

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 6. Custo e tempo

| | sem | com |
|---|---|---|
| Tempo de relógio (s) | 199 (runner) | 212 (runner) |
| Turnos | 44 (stream-json do cliente \(result.num\_turns\)) | 62 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 43 (ponte MCP) | 61 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 4 (ponte MCP do oráculo) |
| Tokens de entrada | 64 (stream-json do cliente \(result.usage\)) | 64 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 11290 (stream-json do cliente \(result.usage\)) | 13746 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 1436740 (stream-json do cliente \(result.usage\)) | 2111301 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 55425 (stream-json do cliente \(result.usage\)) | 73906 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 0.622076 (estimativa do cliente \(result.total\_cost\_usd\)) | 0.8554722000000001 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 25 cartão(ões), estimativa 150 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 7. Detalhes e evidências

**sem** (20261012-101952-solicitacao-sem-1543): [pacote](../../../../../restauracoes/20261012-101952-solicitacao-sem-1543/2026-10-12T10-19-52Z__solicitacao__sonnet__sem__rep-07__20261012-101952-solicitacao-sem-1543) · [run.json](../../../../../restauracoes/20261012-101952-solicitacao-sem-1543/2026-10-12T10-19-52Z__solicitacao__sonnet__sem__rep-07__20261012-101952-solicitacao-sem-1543/run.json) · [findings.json](../../../../../restauracoes/20261012-101952-solicitacao-sem-1543/2026-10-12T10-19-52Z__solicitacao__sonnet__sem__rep-07__20261012-101952-solicitacao-sem-1543/findings.json) · [isolation.json](../../../../../restauracoes/20261012-101952-solicitacao-sem-1543/2026-10-12T10-19-52Z__solicitacao__sonnet__sem__rep-07__20261012-101952-solicitacao-sem-1543/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261012-101952-solicitacao-sem-1543/2026-10-12T10-19-52Z__solicitacao__sonnet__sem__rep-07__20261012-101952-solicitacao-sem-1543/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261012-101952-solicitacao-sem-1543/2026-10-12T10-19-52Z__solicitacao__sonnet__sem__rep-07__20261012-101952-solicitacao-sem-1543/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261012-101952-solicitacao-sem-1543/2026-10-12T10-19-52Z__solicitacao__sonnet__sem__rep-07__20261012-101952-solicitacao-sem-1543/evidence/cliente.json) [#3](../../../../../restauracoes/20261012-101952-solicitacao-sem-1543/2026-10-12T10-19-52Z__solicitacao__sonnet__sem__rep-07__20261012-101952-solicitacao-sem-1543/evidence/container-config.json) [#4](../../../../../restauracoes/20261012-101952-solicitacao-sem-1543/2026-10-12T10-19-52Z__solicitacao__sonnet__sem__rep-07__20261012-101952-solicitacao-sem-1543/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261012-101952-solicitacao-sem-1543/2026-10-12T10-19-52Z__solicitacao__sonnet__sem__rep-07__20261012-101952-solicitacao-sem-1543/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261012-101952-solicitacao-sem-1543/2026-10-12T10-19-52Z__solicitacao__sonnet__sem__rep-07__20261012-101952-solicitacao-sem-1543/evidence/preflight.json) [#7](../../../../../restauracoes/20261012-101952-solicitacao-sem-1543/2026-10-12T10-19-52Z__solicitacao__sonnet__sem__rep-07__20261012-101952-solicitacao-sem-1543/evidence/prompt.txt) [#8](../../../../../restauracoes/20261012-101952-solicitacao-sem-1543/2026-10-12T10-19-52Z__solicitacao__sonnet__sem__rep-07__20261012-101952-solicitacao-sem-1543/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261012-101952-solicitacao-sem-1543/2026-10-12T10-19-52Z__solicitacao__sonnet__sem__rep-07__20261012-101952-solicitacao-sem-1543/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261012-101952-solicitacao-sem-1543/2026-10-12T10-19-52Z__solicitacao__sonnet__sem__rep-07__20261012-101952-solicitacao-sem-1543/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261012-101952-solicitacao-sem-1543/2026-10-12T10-19-52Z__solicitacao__sonnet__sem__rep-07__20261012-101952-solicitacao-sem-1543/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261012-101952-solicitacao-sem-1543/2026-10-12T10-19-52Z__solicitacao__sonnet__sem__rep-07__20261012-101952-solicitacao-sem-1543/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261012-101952-solicitacao-sem-1543/2026-10-12T10-19-52Z__solicitacao__sonnet__sem__rep-07__20261012-101952-solicitacao-sem-1543/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261012-101952-solicitacao-sem-1543/2026-10-12T10-19-52Z__solicitacao__sonnet__sem__rep-07__20261012-101952-solicitacao-sem-1543/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261012-101952-solicitacao-sem-1543/2026-10-12T10-19-52Z__solicitacao__sonnet__sem__rep-07__20261012-101952-solicitacao-sem-1543/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261012-101952-solicitacao-sem-1543/2026-10-12T10-19-52Z__solicitacao__sonnet__sem__rep-07__20261012-101952-solicitacao-sem-1543/evidence/raw/probe/probe.json) [#17](../../../../../restauracoes/20261012-101952-solicitacao-sem-1543/2026-10-12T10-19-52Z__solicitacao__sonnet__sem__rep-07__20261012-101952-solicitacao-sem-1543/evidence/raw/probe/sonda-escrita-1791800415710.txt) [#18](../../../../../restauracoes/20261012-101952-solicitacao-sem-1543/2026-10-12T10-19-52Z__solicitacao__sonnet__sem__rep-07__20261012-101952-solicitacao-sem-1543/evidence/raw/task/mcp.json) [#19](../../../../../restauracoes/20261012-101952-solicitacao-sem-1543/2026-10-12T10-19-52Z__solicitacao__sonnet__sem__rep-07__20261012-101952-solicitacao-sem-1543/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261012-101952-solicitacao-sem-1543/2026-10-12T10-19-52Z__solicitacao__sonnet__sem__rep-07__20261012-101952-solicitacao-sem-1543/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261012-101952-solicitacao-sem-1543/2026-10-12T10-19-52Z__solicitacao__sonnet__sem__rep-07__20261012-101952-solicitacao-sem-1543/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261012-101952-solicitacao-sem-1543/2026-10-12T10-19-52Z__solicitacao__sonnet__sem__rep-07__20261012-101952-solicitacao-sem-1543/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261012-101952-solicitacao-sem-1543/2026-10-12T10-19-52Z__solicitacao__sonnet__sem__rep-07__20261012-101952-solicitacao-sem-1543/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261012-101952-solicitacao-sem-1543/2026-10-12T10-19-52Z__solicitacao__sonnet__sem__rep-07__20261012-101952-solicitacao-sem-1543/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261012-101952-solicitacao-sem-1543/2026-10-12T10-19-52Z__solicitacao__sonnet__sem__rep-07__20261012-101952-solicitacao-sem-1543/evidence/logs/probe.log) [#7](../../../../../restauracoes/20261012-101952-solicitacao-sem-1543/2026-10-12T10-19-52Z__solicitacao__sonnet__sem__rep-07__20261012-101952-solicitacao-sem-1543/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (8; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| #forma-presencial | wcag:4.1.2 | O input radio 'Presencial' não tem nome acessível: o &lt;label&gt; não tem atributo for e não envolve o input; a árvore de acessibilidade mostra radio sem nome \(os outros dois têm\). |
| .upload-button | wcag:4.1.2 | Botão 'Selecione o arquivo' tem aria-hidden=&quot;true&quot; mas é focável e recebe o foco \(foi o primeiro elemento focado ao pressionar Tab\); o input file real está com display:none. |
| .upload-button | wcag:2.4.3 | O botão tem tabindex=&quot;1&quot; \(positivo\); ao pressionar Tab no carregamento ele recebe o foco antes do link de salto e de todos os demais controles, fora da ordem visual. |
| #servico, #unidade | incerta | Após envio vazio, a mensagem de erro de cada combo \('Selecione o tipo de serviço.', 'Selecione a unidade de atendimento.'\) não tem id e os inputs têm só aria-invalid=true, sem aria-describedby; nos demais campos a mensa… |
| #cpf | wcag:3.3.1 | CPF '123' \(3 dígitos, contra a orientação '11 dígitos'\) foi aceito sem erro e a solicitação foi enviada com sucesso. |
| #data-preferencial | wcag:3.3.1 | Data inexistente '31/02/2027' foi aceita sem erro e substituída silenciosamente por '03/03/2027' no campo; envio concluído com sucesso. |
| .flatpickr-prev-month button, .flatpickr-next-month button | wcag:4.1.2 | Os botões de mês anterior/seguinte do calendário são só ícone \(&lt;i&gt;\) e não têm texto nem aria-label. |
| .paginacao-anteriores .page.active | wcag:4.1.2 | Após clicar em 'Página 2', o link ativo só tem a classe 'active'; sem aria-current \(null\) ou outro indicador programático da página atual. |

**com** (20261012-101203-solicitacao-com-bbe6): [pacote](../../../../../restauracoes/20261012-101203-solicitacao-com-bbe6/2026-10-12T10-12-03Z__solicitacao__sonnet__com__rep-07__20261012-101203-solicitacao-com-bbe6) · [run.json](../../../../../restauracoes/20261012-101203-solicitacao-com-bbe6/2026-10-12T10-12-03Z__solicitacao__sonnet__com__rep-07__20261012-101203-solicitacao-com-bbe6/run.json) · [findings.json](../../../../../restauracoes/20261012-101203-solicitacao-com-bbe6/2026-10-12T10-12-03Z__solicitacao__sonnet__com__rep-07__20261012-101203-solicitacao-com-bbe6/findings.json) · [isolation.json](../../../../../restauracoes/20261012-101203-solicitacao-com-bbe6/2026-10-12T10-12-03Z__solicitacao__sonnet__com__rep-07__20261012-101203-solicitacao-com-bbe6/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261012-101203-solicitacao-com-bbe6/2026-10-12T10-12-03Z__solicitacao__sonnet__com__rep-07__20261012-101203-solicitacao-com-bbe6/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261012-101203-solicitacao-com-bbe6/2026-10-12T10-12-03Z__solicitacao__sonnet__com__rep-07__20261012-101203-solicitacao-com-bbe6/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261012-101203-solicitacao-com-bbe6/2026-10-12T10-12-03Z__solicitacao__sonnet__com__rep-07__20261012-101203-solicitacao-com-bbe6/evidence/cliente.json) [#3](../../../../../restauracoes/20261012-101203-solicitacao-com-bbe6/2026-10-12T10-12-03Z__solicitacao__sonnet__com__rep-07__20261012-101203-solicitacao-com-bbe6/evidence/container-config.json) [#4](../../../../../restauracoes/20261012-101203-solicitacao-com-bbe6/2026-10-12T10-12-03Z__solicitacao__sonnet__com__rep-07__20261012-101203-solicitacao-com-bbe6/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261012-101203-solicitacao-com-bbe6/2026-10-12T10-12-03Z__solicitacao__sonnet__com__rep-07__20261012-101203-solicitacao-com-bbe6/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261012-101203-solicitacao-com-bbe6/2026-10-12T10-12-03Z__solicitacao__sonnet__com__rep-07__20261012-101203-solicitacao-com-bbe6/evidence/preflight.json) [#7](../../../../../restauracoes/20261012-101203-solicitacao-com-bbe6/2026-10-12T10-12-03Z__solicitacao__sonnet__com__rep-07__20261012-101203-solicitacao-com-bbe6/evidence/prompt.txt) [#8](../../../../../restauracoes/20261012-101203-solicitacao-com-bbe6/2026-10-12T10-12-03Z__solicitacao__sonnet__com__rep-07__20261012-101203-solicitacao-com-bbe6/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261012-101203-solicitacao-com-bbe6/2026-10-12T10-12-03Z__solicitacao__sonnet__com__rep-07__20261012-101203-solicitacao-com-bbe6/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261012-101203-solicitacao-com-bbe6/2026-10-12T10-12-03Z__solicitacao__sonnet__com__rep-07__20261012-101203-solicitacao-com-bbe6/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261012-101203-solicitacao-com-bbe6/2026-10-12T10-12-03Z__solicitacao__sonnet__com__rep-07__20261012-101203-solicitacao-com-bbe6/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261012-101203-solicitacao-com-bbe6/2026-10-12T10-12-03Z__solicitacao__sonnet__com__rep-07__20261012-101203-solicitacao-com-bbe6/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261012-101203-solicitacao-com-bbe6/2026-10-12T10-12-03Z__solicitacao__sonnet__com__rep-07__20261012-101203-solicitacao-com-bbe6/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261012-101203-solicitacao-com-bbe6/2026-10-12T10-12-03Z__solicitacao__sonnet__com__rep-07__20261012-101203-solicitacao-com-bbe6/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261012-101203-solicitacao-com-bbe6/2026-10-12T10-12-03Z__solicitacao__sonnet__com__rep-07__20261012-101203-solicitacao-com-bbe6/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261012-101203-solicitacao-com-bbe6/2026-10-12T10-12-03Z__solicitacao__sonnet__com__rep-07__20261012-101203-solicitacao-com-bbe6/evidence/raw/oracle/inventory.json) [#17](../../../../../restauracoes/20261012-101203-solicitacao-com-bbe6/2026-10-12T10-12-03Z__solicitacao__sonnet__com__rep-07__20261012-101203-solicitacao-com-bbe6/evidence/raw/oracle/oracle-telemetry.ndjson) [#18](../../../../../restauracoes/20261012-101203-solicitacao-com-bbe6/2026-10-12T10-12-03Z__solicitacao__sonnet__com__rep-07__20261012-101203-solicitacao-com-bbe6/evidence/raw/oracle/tool-events.ndjson) [#19](../../../../../restauracoes/20261012-101203-solicitacao-com-bbe6/2026-10-12T10-12-03Z__solicitacao__sonnet__com__rep-07__20261012-101203-solicitacao-com-bbe6/evidence/raw/probe/probe.json) [#20](../../../../../restauracoes/20261012-101203-solicitacao-com-bbe6/2026-10-12T10-12-03Z__solicitacao__sonnet__com__rep-07__20261012-101203-solicitacao-com-bbe6/evidence/raw/probe/sonda-escrita-1791799948325.txt) [#21](../../../../../restauracoes/20261012-101203-solicitacao-com-bbe6/2026-10-12T10-12-03Z__solicitacao__sonnet__com__rep-07__20261012-101203-solicitacao-com-bbe6/evidence/raw/task/mcp.json) [#22](../../../../../restauracoes/20261012-101203-solicitacao-com-bbe6/2026-10-12T10-12-03Z__solicitacao__sonnet__com__rep-07__20261012-101203-solicitacao-com-bbe6/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261012-101203-solicitacao-com-bbe6/2026-10-12T10-12-03Z__solicitacao__sonnet__com__rep-07__20261012-101203-solicitacao-com-bbe6/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261012-101203-solicitacao-com-bbe6/2026-10-12T10-12-03Z__solicitacao__sonnet__com__rep-07__20261012-101203-solicitacao-com-bbe6/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261012-101203-solicitacao-com-bbe6/2026-10-12T10-12-03Z__solicitacao__sonnet__com__rep-07__20261012-101203-solicitacao-com-bbe6/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261012-101203-solicitacao-com-bbe6/2026-10-12T10-12-03Z__solicitacao__sonnet__com__rep-07__20261012-101203-solicitacao-com-bbe6/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261012-101203-solicitacao-com-bbe6/2026-10-12T10-12-03Z__solicitacao__sonnet__com__rep-07__20261012-101203-solicitacao-com-bbe6/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261012-101203-solicitacao-com-bbe6/2026-10-12T10-12-03Z__solicitacao__sonnet__com__rep-07__20261012-101203-solicitacao-com-bbe6/evidence/logs/oracle.log) [#7](../../../../../restauracoes/20261012-101203-solicitacao-com-bbe6/2026-10-12T10-12-03Z__solicitacao__sonnet__com__rep-07__20261012-101203-solicitacao-com-bbe6/evidence/logs/probe.log) [#8](../../../../../restauracoes/20261012-101203-solicitacao-com-bbe6/2026-10-12T10-12-03Z__solicitacao__sonnet__com__rep-07__20261012-101203-solicitacao-com-bbe6/evidence/logs/screens.log) · [binding](analysis-binding.com.json)

Achados enviados (9; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| #forma-presencial | axe:label | Radio 'Presencial' sem nome acessível: o &lt;label&gt; não tem atributo for nem envolve o input; a árvore de acessibilidade mostra radio sem nome. |
| .upload-button | axe:aria-hidden-focus | Botão 'Selecione o arquivo' com aria-hidden=&quot;true&quot; e focalizável \(tabindex=1\). |
| .upload-button | wcag:2.4.3 | tabindex=&quot;1&quot; no botão de upload: ao pressionar Tab desde o carregamento, o primeiro foco vai para ele, antes do link para o conteúdo, do logo e do restante da página. |
| .flatpickr-prev-month &gt; button | emag:2.2 | Botões de mês anterior e seguinte do calendário só com ícone, sem texto nem aria-label \(sem nome acessível\). |
| header.barra-superior | ds-page-header | Cabeçalho é um &lt;header&gt; próprio só com o logo; não há .br-header nem &lt;br-header&gt;. |
| html | ds-page-footer | Página sem rodapé: nenhum .br-footer nem &lt;br-footer&gt;. |
| #servico | wcag:3.3.1 | Após o envio vazio, os campos Tipo de serviço e Unidade de atendimento recebem aria-invalid mas não aria-describedby; as mensagens .feedback não têm id e não se associam ao campo \(os demais campos associam\). |
| .br-pagination a.page.active | incerta | A página atual da paginação é indicada só pela classe 'active'; o link não tem aria-current=&quot;page&quot; \(nem na página 1 nem após ir à 2\). |
| #cpf | wcag:3.3.1 | CPF '123' é aceito: sem erro e o envio conclui com 'Solicitação enviada.', embora a ajuda diga 'Somente números, 11 dígitos'. |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `b96162d8a90ee33103e3b29a6e855505520b6f0d11f3693d150024ae79b4249a`

