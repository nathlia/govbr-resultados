# Resumo da análise — Solicitar serviço (solicitacao)

Revisão 1 · gerado em 2026-10-13T00:04:53.856Z (UTC)

## 1. Status técnico

Análise: **pronta**

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261012-090808-solicitacao-sem-0cf1 | sem | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 7 cartão(ões), nenhum decidido |
| 20261012-090018-solicitacao-com-5f6c | com | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 8 cartão(ões), nenhum decidido |

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
| Início (UTC) | 2026-10-12T09:08:31Z | 2026-10-12T09:00:44Z |
| Início (local) | 12/10/2026, 06:08:31 (horário de Brasília) | 12/10/2026, 06:00:44 (horário de Brasília) |
| Commit do harness | 7f189a9a0984459418e210aa1453acbee54e1160 | 7f189a9a0984459418e210aa1453acbee54e1160 |
| Repetição · tentativa | 3 · 1 | 3 · 1 |
| Campanha · slot · par | t7b-sonnet-tela-a-01 · p03-sem · p03 | t7b-sonnet-tela-a-01 · p03-com · p03 |

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
| Cartões pendentes de revisão | 7 | 8 |
| Maturidade | aguardando revisão — 7 cartão(ões), nenhum decidido | aguardando revisão — 8 cartão(ões), nenhum decidido |
| Entra na comparação principal | sim | sim |
| Achados enviados | 7 | 8 |

Recall e precisão só aparecem com a revisão fechada; enquanto houver cartão pendente ficam “indisponível” (nunca 0). “Achados enviados = 0” é um resultado válido (o agente olhou e não alegou nada); submissão recusada ou ausente é outra coisa.

Linha de base determinística (união das varreduras comparáveis), por unidade da referência:

| Unidades | sem | com |
|---|---|---|
| Agente e linha de base | 0 | 0 |
| Só o agente | 0 | 0 |
| Só a linha de base | 0 | 0 |
| Nenhum | 16 | 16 |
| Estado | provisório | provisório |

Linha de base: usada (lb-20261012-085925-solicitacao-44a810)

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
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 6 (ponte MCP do oráculo) |
| Protocolo | unverified | unverified |
| Ferramentas anunciadas | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for, get\_ds\_rules, get\_design\_tokens, get\_emag\_rules, get\_pag… |
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_snapshot, browser\_console\_messages, browser\_take\_screenshot, browser\_click, browser\_press\_key, browser\_fill\_form | browser\_navigate, browser\_evaluate, browser\_snapshot, browser\_console\_messages, browser\_take\_screenshot, browser\_click, scan\_page, browser\_press\_key, browser\_fill\_form, verify\_finding |
| Erros de ferramenta | 0 (tool-events.ndjson \(eventos com isError: true\)) | 0 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 8 aprovado(s); falhos: nenhum | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | nenhuma | nenhuma |

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 6. Custo e tempo

| | sem | com |
|---|---|---|
| Tempo de relógio (s) | 250 (runner) | 171 (runner) |
| Turnos | 82 (stream-json do cliente \(result.num\_turns\)) | 46 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 81 (ponte MCP) | 45 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 6 (ponte MCP do oráculo) |
| Tokens de entrada | 66 (stream-json do cliente \(result.usage\)) | 58 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 16703 (stream-json do cliente \(result.usage\)) | 11149 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 1683036 (stream-json do cliente \(result.usage\)) | 1634655 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 81600 (stream-json do cliente \(result.usage\)) | 82665 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 0.8301692000000002 (estimativa do cliente \(result.total\_cost\_usd\)) | 0.769197 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 23 cartão(ões), estimativa 138 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 7. Detalhes e evidências

**sem** (20261012-090808-solicitacao-sem-0cf1): [pacote](../../../../../restauracoes/20261012-090808-solicitacao-sem-0cf1/2026-10-12T09-08-08Z__solicitacao__sonnet__sem__rep-03__20261012-090808-solicitacao-sem-0cf1) · [run.json](../../../../../restauracoes/20261012-090808-solicitacao-sem-0cf1/2026-10-12T09-08-08Z__solicitacao__sonnet__sem__rep-03__20261012-090808-solicitacao-sem-0cf1/run.json) · [findings.json](../../../../../restauracoes/20261012-090808-solicitacao-sem-0cf1/2026-10-12T09-08-08Z__solicitacao__sonnet__sem__rep-03__20261012-090808-solicitacao-sem-0cf1/findings.json) · [isolation.json](../../../../../restauracoes/20261012-090808-solicitacao-sem-0cf1/2026-10-12T09-08-08Z__solicitacao__sonnet__sem__rep-03__20261012-090808-solicitacao-sem-0cf1/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261012-090808-solicitacao-sem-0cf1/2026-10-12T09-08-08Z__solicitacao__sonnet__sem__rep-03__20261012-090808-solicitacao-sem-0cf1/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261012-090808-solicitacao-sem-0cf1/2026-10-12T09-08-08Z__solicitacao__sonnet__sem__rep-03__20261012-090808-solicitacao-sem-0cf1/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261012-090808-solicitacao-sem-0cf1/2026-10-12T09-08-08Z__solicitacao__sonnet__sem__rep-03__20261012-090808-solicitacao-sem-0cf1/evidence/cliente.json) [#3](../../../../../restauracoes/20261012-090808-solicitacao-sem-0cf1/2026-10-12T09-08-08Z__solicitacao__sonnet__sem__rep-03__20261012-090808-solicitacao-sem-0cf1/evidence/container-config.json) [#4](../../../../../restauracoes/20261012-090808-solicitacao-sem-0cf1/2026-10-12T09-08-08Z__solicitacao__sonnet__sem__rep-03__20261012-090808-solicitacao-sem-0cf1/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261012-090808-solicitacao-sem-0cf1/2026-10-12T09-08-08Z__solicitacao__sonnet__sem__rep-03__20261012-090808-solicitacao-sem-0cf1/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261012-090808-solicitacao-sem-0cf1/2026-10-12T09-08-08Z__solicitacao__sonnet__sem__rep-03__20261012-090808-solicitacao-sem-0cf1/evidence/preflight.json) [#7](../../../../../restauracoes/20261012-090808-solicitacao-sem-0cf1/2026-10-12T09-08-08Z__solicitacao__sonnet__sem__rep-03__20261012-090808-solicitacao-sem-0cf1/evidence/prompt.txt) [#8](../../../../../restauracoes/20261012-090808-solicitacao-sem-0cf1/2026-10-12T09-08-08Z__solicitacao__sonnet__sem__rep-03__20261012-090808-solicitacao-sem-0cf1/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261012-090808-solicitacao-sem-0cf1/2026-10-12T09-08-08Z__solicitacao__sonnet__sem__rep-03__20261012-090808-solicitacao-sem-0cf1/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261012-090808-solicitacao-sem-0cf1/2026-10-12T09-08-08Z__solicitacao__sonnet__sem__rep-03__20261012-090808-solicitacao-sem-0cf1/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261012-090808-solicitacao-sem-0cf1/2026-10-12T09-08-08Z__solicitacao__sonnet__sem__rep-03__20261012-090808-solicitacao-sem-0cf1/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261012-090808-solicitacao-sem-0cf1/2026-10-12T09-08-08Z__solicitacao__sonnet__sem__rep-03__20261012-090808-solicitacao-sem-0cf1/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261012-090808-solicitacao-sem-0cf1/2026-10-12T09-08-08Z__solicitacao__sonnet__sem__rep-03__20261012-090808-solicitacao-sem-0cf1/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261012-090808-solicitacao-sem-0cf1/2026-10-12T09-08-08Z__solicitacao__sonnet__sem__rep-03__20261012-090808-solicitacao-sem-0cf1/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261012-090808-solicitacao-sem-0cf1/2026-10-12T09-08-08Z__solicitacao__sonnet__sem__rep-03__20261012-090808-solicitacao-sem-0cf1/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261012-090808-solicitacao-sem-0cf1/2026-10-12T09-08-08Z__solicitacao__sonnet__sem__rep-03__20261012-090808-solicitacao-sem-0cf1/evidence/raw/probe/probe.json) [#17](../../../../../restauracoes/20261012-090808-solicitacao-sem-0cf1/2026-10-12T09-08-08Z__solicitacao__sonnet__sem__rep-03__20261012-090808-solicitacao-sem-0cf1/evidence/raw/probe/sonda-escrita-1791796111299.txt) [#18](../../../../../restauracoes/20261012-090808-solicitacao-sem-0cf1/2026-10-12T09-08-08Z__solicitacao__sonnet__sem__rep-03__20261012-090808-solicitacao-sem-0cf1/evidence/raw/task/mcp.json) [#19](../../../../../restauracoes/20261012-090808-solicitacao-sem-0cf1/2026-10-12T09-08-08Z__solicitacao__sonnet__sem__rep-03__20261012-090808-solicitacao-sem-0cf1/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261012-090808-solicitacao-sem-0cf1/2026-10-12T09-08-08Z__solicitacao__sonnet__sem__rep-03__20261012-090808-solicitacao-sem-0cf1/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261012-090808-solicitacao-sem-0cf1/2026-10-12T09-08-08Z__solicitacao__sonnet__sem__rep-03__20261012-090808-solicitacao-sem-0cf1/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261012-090808-solicitacao-sem-0cf1/2026-10-12T09-08-08Z__solicitacao__sonnet__sem__rep-03__20261012-090808-solicitacao-sem-0cf1/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261012-090808-solicitacao-sem-0cf1/2026-10-12T09-08-08Z__solicitacao__sonnet__sem__rep-03__20261012-090808-solicitacao-sem-0cf1/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261012-090808-solicitacao-sem-0cf1/2026-10-12T09-08-08Z__solicitacao__sonnet__sem__rep-03__20261012-090808-solicitacao-sem-0cf1/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261012-090808-solicitacao-sem-0cf1/2026-10-12T09-08-08Z__solicitacao__sonnet__sem__rep-03__20261012-090808-solicitacao-sem-0cf1/evidence/logs/probe.log) [#7](../../../../../restauracoes/20261012-090808-solicitacao-sem-0cf1/2026-10-12T09-08-08Z__solicitacao__sonnet__sem__rep-03__20261012-090808-solicitacao-sem-0cf1/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (7; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| #forma-presencial | incerta | O rádio &quot;Presencial&quot; não tem nome acessível: o label não tem atributo for nem envolve o input; clicar no texto não seleciona a opção \(árvore de acessibilidade: radio sem nome\). |
| .upload-button | wcag:2.4.3 | O botão &quot;Selecione o arquivo&quot; tem tabindex=&quot;1&quot;: na tabulação recebe foco antes do link &quot;Ir para o conteúdo&quot; e fora da ordem visual, que o põe no meio do formulário. |
| .upload-button | incerta | O botão de upload, focável e visível, tem aria-hidden=&quot;true&quot;, e o input file real está com display:none; a ação de anexar fica oculta das tecnologias assistivas. |
| .paginacao-anteriores .page.active | incerta | A página atual da paginação \(1\) só se distingue pela cor/fundo \(classe active\); não há aria-current=&quot;page&quot; nela, nem ao mudar para a página 2. |
| #servico, #unidade | incerta | Após Enviar vazio, os campos têm aria-invalid=&quot;true&quot;, mas as mensagens de erro \(&quot;Selecione o tipo de serviço.&quot;, &quot;Selecione a unidade de atendimento.&quot;\) não estão ligadas por aria-describedby \(sem id\); nos demais campos h… |
| #cpf | incerta | Com CPF &quot;123&quot; \(a instrução diz 11 dígitos\), o envio foi aceito e exibiu &quot;Solicitação enviada.&quot; sem erro no campo. |
| #data-preferencial | incerta | A entrada &quot;99/99/9999&quot; foi convertida silenciosamente para &quot;09/03/0007&quot; e o envio foi aceito. |

**com** (20261012-090018-solicitacao-com-5f6c): [pacote](../../../../../restauracoes/20261012-090018-solicitacao-com-5f6c/2026-10-12T09-00-18Z__solicitacao__sonnet__com__rep-03__20261012-090018-solicitacao-com-5f6c) · [run.json](../../../../../restauracoes/20261012-090018-solicitacao-com-5f6c/2026-10-12T09-00-18Z__solicitacao__sonnet__com__rep-03__20261012-090018-solicitacao-com-5f6c/run.json) · [findings.json](../../../../../restauracoes/20261012-090018-solicitacao-com-5f6c/2026-10-12T09-00-18Z__solicitacao__sonnet__com__rep-03__20261012-090018-solicitacao-com-5f6c/findings.json) · [isolation.json](../../../../../restauracoes/20261012-090018-solicitacao-com-5f6c/2026-10-12T09-00-18Z__solicitacao__sonnet__com__rep-03__20261012-090018-solicitacao-com-5f6c/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261012-090018-solicitacao-com-5f6c/2026-10-12T09-00-18Z__solicitacao__sonnet__com__rep-03__20261012-090018-solicitacao-com-5f6c/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261012-090018-solicitacao-com-5f6c/2026-10-12T09-00-18Z__solicitacao__sonnet__com__rep-03__20261012-090018-solicitacao-com-5f6c/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261012-090018-solicitacao-com-5f6c/2026-10-12T09-00-18Z__solicitacao__sonnet__com__rep-03__20261012-090018-solicitacao-com-5f6c/evidence/cliente.json) [#3](../../../../../restauracoes/20261012-090018-solicitacao-com-5f6c/2026-10-12T09-00-18Z__solicitacao__sonnet__com__rep-03__20261012-090018-solicitacao-com-5f6c/evidence/container-config.json) [#4](../../../../../restauracoes/20261012-090018-solicitacao-com-5f6c/2026-10-12T09-00-18Z__solicitacao__sonnet__com__rep-03__20261012-090018-solicitacao-com-5f6c/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261012-090018-solicitacao-com-5f6c/2026-10-12T09-00-18Z__solicitacao__sonnet__com__rep-03__20261012-090018-solicitacao-com-5f6c/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261012-090018-solicitacao-com-5f6c/2026-10-12T09-00-18Z__solicitacao__sonnet__com__rep-03__20261012-090018-solicitacao-com-5f6c/evidence/preflight.json) [#7](../../../../../restauracoes/20261012-090018-solicitacao-com-5f6c/2026-10-12T09-00-18Z__solicitacao__sonnet__com__rep-03__20261012-090018-solicitacao-com-5f6c/evidence/prompt.txt) [#8](../../../../../restauracoes/20261012-090018-solicitacao-com-5f6c/2026-10-12T09-00-18Z__solicitacao__sonnet__com__rep-03__20261012-090018-solicitacao-com-5f6c/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261012-090018-solicitacao-com-5f6c/2026-10-12T09-00-18Z__solicitacao__sonnet__com__rep-03__20261012-090018-solicitacao-com-5f6c/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261012-090018-solicitacao-com-5f6c/2026-10-12T09-00-18Z__solicitacao__sonnet__com__rep-03__20261012-090018-solicitacao-com-5f6c/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261012-090018-solicitacao-com-5f6c/2026-10-12T09-00-18Z__solicitacao__sonnet__com__rep-03__20261012-090018-solicitacao-com-5f6c/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261012-090018-solicitacao-com-5f6c/2026-10-12T09-00-18Z__solicitacao__sonnet__com__rep-03__20261012-090018-solicitacao-com-5f6c/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261012-090018-solicitacao-com-5f6c/2026-10-12T09-00-18Z__solicitacao__sonnet__com__rep-03__20261012-090018-solicitacao-com-5f6c/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261012-090018-solicitacao-com-5f6c/2026-10-12T09-00-18Z__solicitacao__sonnet__com__rep-03__20261012-090018-solicitacao-com-5f6c/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261012-090018-solicitacao-com-5f6c/2026-10-12T09-00-18Z__solicitacao__sonnet__com__rep-03__20261012-090018-solicitacao-com-5f6c/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261012-090018-solicitacao-com-5f6c/2026-10-12T09-00-18Z__solicitacao__sonnet__com__rep-03__20261012-090018-solicitacao-com-5f6c/evidence/raw/oracle/inventory.json) [#17](../../../../../restauracoes/20261012-090018-solicitacao-com-5f6c/2026-10-12T09-00-18Z__solicitacao__sonnet__com__rep-03__20261012-090018-solicitacao-com-5f6c/evidence/raw/oracle/oracle-telemetry.ndjson) [#18](../../../../../restauracoes/20261012-090018-solicitacao-com-5f6c/2026-10-12T09-00-18Z__solicitacao__sonnet__com__rep-03__20261012-090018-solicitacao-com-5f6c/evidence/raw/oracle/tool-events.ndjson) [#19](../../../../../restauracoes/20261012-090018-solicitacao-com-5f6c/2026-10-12T09-00-18Z__solicitacao__sonnet__com__rep-03__20261012-090018-solicitacao-com-5f6c/evidence/raw/probe/probe.json) [#20](../../../../../restauracoes/20261012-090018-solicitacao-com-5f6c/2026-10-12T09-00-18Z__solicitacao__sonnet__com__rep-03__20261012-090018-solicitacao-com-5f6c/evidence/raw/probe/sonda-escrita-1791795644051.txt) [#21](../../../../../restauracoes/20261012-090018-solicitacao-com-5f6c/2026-10-12T09-00-18Z__solicitacao__sonnet__com__rep-03__20261012-090018-solicitacao-com-5f6c/evidence/raw/task/mcp.json) [#22](../../../../../restauracoes/20261012-090018-solicitacao-com-5f6c/2026-10-12T09-00-18Z__solicitacao__sonnet__com__rep-03__20261012-090018-solicitacao-com-5f6c/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261012-090018-solicitacao-com-5f6c/2026-10-12T09-00-18Z__solicitacao__sonnet__com__rep-03__20261012-090018-solicitacao-com-5f6c/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261012-090018-solicitacao-com-5f6c/2026-10-12T09-00-18Z__solicitacao__sonnet__com__rep-03__20261012-090018-solicitacao-com-5f6c/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261012-090018-solicitacao-com-5f6c/2026-10-12T09-00-18Z__solicitacao__sonnet__com__rep-03__20261012-090018-solicitacao-com-5f6c/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261012-090018-solicitacao-com-5f6c/2026-10-12T09-00-18Z__solicitacao__sonnet__com__rep-03__20261012-090018-solicitacao-com-5f6c/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261012-090018-solicitacao-com-5f6c/2026-10-12T09-00-18Z__solicitacao__sonnet__com__rep-03__20261012-090018-solicitacao-com-5f6c/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261012-090018-solicitacao-com-5f6c/2026-10-12T09-00-18Z__solicitacao__sonnet__com__rep-03__20261012-090018-solicitacao-com-5f6c/evidence/logs/oracle.log) [#7](../../../../../restauracoes/20261012-090018-solicitacao-com-5f6c/2026-10-12T09-00-18Z__solicitacao__sonnet__com__rep-03__20261012-090018-solicitacao-com-5f6c/evidence/logs/probe.log) [#8](../../../../../restauracoes/20261012-090018-solicitacao-com-5f6c/2026-10-12T09-00-18Z__solicitacao__sonnet__com__rep-03__20261012-090018-solicitacao-com-5f6c/evidence/logs/screens.log) · [binding](analysis-binding.com.json)

Achados enviados (8; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| #forma-presencial | label | O rádio 'Presencial' não tem nome acessível: o &lt;label&gt; irmão não possui atributo for \(os outros dois rádios têm\). A árvore de acessibilidade mostra radio sem nome. |
| .upload-button | aria-hidden-focus | Botão 'Selecione o arquivo' tem aria-hidden=&quot;true&quot; mas é focalizável \(botão visível e tabulável\); o input file real está com display:none. |
| .upload-button | wcag:2.4.3 | O botão de upload tem tabindex=&quot;1&quot; \(positivo\); na ordem de tabulação aparece depois da textarea mas por tabindex positivo é lido antes de todos os elementos com tabindex 0 no documento quando o foco entra na página. |
| .flatpickr-prev-month &gt; button, .flatpickr-next-month &gt; button | emag-2.2 | Botões de mês anterior/seguinte do calendário contêm apenas ícone e não têm aria-label nem texto \(nome acessível vazio\). |
| #servico, #unidade | incerta | Após envio vazio, os campos de seleção ficam com aria-invalid=&quot;true&quot;, mas a mensagem de erro \(role=alert\) não tem id e os inputs não têm aria-describedby; nos demais campos a mensagem é associada. |
| .br-pagination .page.active | incerta | A página atual \(link 'Página 2' após clicar\) tem apenas a classe 'active'; não há aria-current=&quot;page&quot;. |
| #cpf | incerta | O campo CPF aceitou o valor '123' e o formulário foi enviado com sucesso, embora o texto de apoio exija 11 dígitos numéricos. |
| #data-preferencial | incerta | A data '31/02/2026' foi aceita e convertida silenciosamente para 03/03/2026 \(data passada em relação a 12/10/2026\), e o envio teve sucesso sem erro. |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `8d7fddd0df4695a5bb0c08eb005fe713971b34369b0e9981cadfe348823c78c4`

