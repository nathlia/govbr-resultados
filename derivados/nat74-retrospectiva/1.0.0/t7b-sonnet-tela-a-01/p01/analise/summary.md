# Resumo da análise — Solicitar serviço (solicitacao)

Revisão 1 · gerado em 2026-10-16T00:00:00Z (UTC)

## 1. Status técnico

Análise: **pronta**

Aviso: derivado retrospectivo nat74-retrospectiva-1.0.0: campanha congelada com flow-semantic-1.5.0, repreparada com flow-semantic-1.7.0 \(não substitui a análise oficial\)

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261005-175125-solicitacao-sem-3df4 | sem | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 5 cartão(ões), nenhum decidido |
| 20261005-174424-solicitacao-com-9011 | com | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 12 cartão(ões), nenhum decidido |

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
| Início (UTC) | 2026-10-05T17:51:49Z | 2026-10-05T17:44:49Z |
| Início (local) | 05/10/2026, 14:51:49 (horário de Brasília) | 05/10/2026, 14:44:49 (horário de Brasília) |
| Commit do harness | 6400e9e4bea3cd6d33b1fe8c33bc306e00ab2d9e | 6400e9e4bea3cd6d33b1fe8c33bc306e00ab2d9e |
| Repetição · tentativa | 1 · 1 | 1 · 1 |
| Campanha · slot · par | t7b-sonnet-tela-a-01 · p01-sem · p01 | t7b-sonnet-tela-a-01 · p01-com · p01 |

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
| Cartões pendentes de revisão | 5 | 12 |
| Maturidade | aguardando revisão — 5 cartão(ões), nenhum decidido | aguardando revisão — 12 cartão(ões), nenhum decidido |
| Entra na comparação principal | sim | sim |
| Achados enviados | 5 | 12 |

Recall e precisão só aparecem com a revisão fechada; enquanto houver cartão pendente ficam “indisponível” (nunca 0). “Achados enviados = 0” é um resultado válido (o agente olhou e não alegou nada); submissão recusada ou ausente é outra coisa.

Linha de base determinística (união das varreduras comparáveis), por unidade da referência:

| Unidades | sem | com |
|---|---|---|
| Agente e linha de base | 0 | 0 |
| Só o agente | 0 | 0 |
| Só a linha de base | 0 | 0 |
| Nenhum | 16 | 16 |
| Estado | provisório | provisório |

Linha de base: usada (lb-20261005-174337-solicitacao-ae3868)

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
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 2 (ponte MCP do oráculo) |
| Protocolo | unverified | unverified |
| Ferramentas anunciadas | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for, get\_ds\_rules, get\_design\_tokens, get\_emag\_rules, get\_pag… |
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_snapshot, browser\_console\_messages, browser\_take\_screenshot, browser\_click, browser\_press\_key, browser\_fill\_form | browser\_navigate, browser\_evaluate, browser\_snapshot, browser\_console\_messages, scan\_page, browser\_click, browser\_take\_screenshot, browser\_press\_key, browser\_type |
| Erros de ferramenta | 2 (tool-events.ndjson \(eventos com isError: true\)) | 2 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 8 aprovado(s); falhos: nenhum | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | nenhuma | nenhuma |
| Registro de inspeção | registro indisponível \(pacote findings.v1, anterior ao registro de inspeção\) — não é zero cobertura | registro indisponível \(pacote findings.v1, anterior ao registro de inspeção\) — não é zero cobertura |

O registro de inspeção é declaração do agente sobre o inventário que ele mesmo descobriu; “com evento de ferramenta” só diz que o identificador citado aparece num evento gravado. Não pontua nem decide elegibilidade, e a cobertura da página continua desconhecida.

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 6. Custo e tempo

| | sem | com |
|---|---|---|
| Tempo de relógio (s) | 139 (runner) | 213 (runner) |
| Turnos | 35 (stream-json do cliente \(result.num\_turns\)) | 64 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 34 (ponte MCP) | 63 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 2 (ponte MCP do oráculo) |
| Tokens de entrada | 34 (stream-json do cliente \(result.usage\)) | 54 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 7758 (stream-json do cliente \(result.usage\)) | 13726 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 604806 (stream-json do cliente \(result.usage\)) | 1392432 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 55211 (stream-json do cliente \(result.usage\)) | 85652 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 0.4194531999999999 (estimativa do cliente \(result.total\_cost\_usd\)) | 0.7584623999999999 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 25 cartão(ões), estimativa 150 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 7. Detalhes e evidências

**sem** (20261005-175125-solicitacao-sem-3df4): [pacote](../../../../../../restauracoes/20261005-175125-solicitacao-sem-3df4/2026-10-05T17-51-25Z__solicitacao__sonnet__sem__rep-01__20261005-175125-solicitacao-sem-3df4) · [run.json](../../../../../../restauracoes/20261005-175125-solicitacao-sem-3df4/2026-10-05T17-51-25Z__solicitacao__sonnet__sem__rep-01__20261005-175125-solicitacao-sem-3df4/run.json) · [findings.json](../../../../../../restauracoes/20261005-175125-solicitacao-sem-3df4/2026-10-05T17-51-25Z__solicitacao__sonnet__sem__rep-01__20261005-175125-solicitacao-sem-3df4/findings.json) · [isolation.json](../../../../../../restauracoes/20261005-175125-solicitacao-sem-3df4/2026-10-05T17-51-25Z__solicitacao__sonnet__sem__rep-01__20261005-175125-solicitacao-sem-3df4/isolation.json) · [eventos de ferramenta](../../../../../../restauracoes/20261005-175125-solicitacao-sem-3df4/2026-10-05T17-51-25Z__solicitacao__sonnet__sem__rep-01__20261005-175125-solicitacao-sem-3df4/tool-events.ndjson) · — · evidências: [#1](../../../../../../restauracoes/20261005-175125-solicitacao-sem-3df4/2026-10-05T17-51-25Z__solicitacao__sonnet__sem__rep-01__20261005-175125-solicitacao-sem-3df4/evidence/aderencia-oraculo.json) [#2](../../../../../../restauracoes/20261005-175125-solicitacao-sem-3df4/2026-10-05T17-51-25Z__solicitacao__sonnet__sem__rep-01__20261005-175125-solicitacao-sem-3df4/evidence/cliente.json) [#3](../../../../../../restauracoes/20261005-175125-solicitacao-sem-3df4/2026-10-05T17-51-25Z__solicitacao__sonnet__sem__rep-01__20261005-175125-solicitacao-sem-3df4/evidence/container-config.json) [#4](../../../../../../restauracoes/20261005-175125-solicitacao-sem-3df4/2026-10-05T17-51-25Z__solicitacao__sonnet__sem__rep-01__20261005-175125-solicitacao-sem-3df4/evidence/controles-positivos.json) [#5](../../../../../../restauracoes/20261005-175125-solicitacao-sem-3df4/2026-10-05T17-51-25Z__solicitacao__sonnet__sem__rep-01__20261005-175125-solicitacao-sem-3df4/evidence/mcp-config.json) [#6](../../../../../../restauracoes/20261005-175125-solicitacao-sem-3df4/2026-10-05T17-51-25Z__solicitacao__sonnet__sem__rep-01__20261005-175125-solicitacao-sem-3df4/evidence/preflight.json) [#7](../../../../../../restauracoes/20261005-175125-solicitacao-sem-3df4/2026-10-05T17-51-25Z__solicitacao__sonnet__sem__rep-01__20261005-175125-solicitacao-sem-3df4/evidence/prompt.txt) [#8](../../../../../../restauracoes/20261005-175125-solicitacao-sem-3df4/2026-10-05T17-51-25Z__solicitacao__sonnet__sem__rep-01__20261005-175125-solicitacao-sem-3df4/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../../restauracoes/20261005-175125-solicitacao-sem-3df4/2026-10-05T17-51-25Z__solicitacao__sonnet__sem__rep-01__20261005-175125-solicitacao-sem-3df4/evidence/raw/browser/inventory.json) [#10](../../../../../../restauracoes/20261005-175125-solicitacao-sem-3df4/2026-10-05T17-51-25Z__solicitacao__sonnet__sem__rep-01__20261005-175125-solicitacao-sem-3df4/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../../restauracoes/20261005-175125-solicitacao-sem-3df4/2026-10-05T17-51-25Z__solicitacao__sonnet__sem__rep-01__20261005-175125-solicitacao-sem-3df4/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../../restauracoes/20261005-175125-solicitacao-sem-3df4/2026-10-05T17-51-25Z__solicitacao__sonnet__sem__rep-01__20261005-175125-solicitacao-sem-3df4/evidence/raw/collector/events.ndjson) [#13](../../../../../../restauracoes/20261005-175125-solicitacao-sem-3df4/2026-10-05T17-51-25Z__solicitacao__sonnet__sem__rep-01__20261005-175125-solicitacao-sem-3df4/evidence/raw/collector/findings.json) [#14](../../../../../../restauracoes/20261005-175125-solicitacao-sem-3df4/2026-10-05T17-51-25Z__solicitacao__sonnet__sem__rep-01__20261005-175125-solicitacao-sem-3df4/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../../restauracoes/20261005-175125-solicitacao-sem-3df4/2026-10-05T17-51-25Z__solicitacao__sonnet__sem__rep-01__20261005-175125-solicitacao-sem-3df4/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../../restauracoes/20261005-175125-solicitacao-sem-3df4/2026-10-05T17-51-25Z__solicitacao__sonnet__sem__rep-01__20261005-175125-solicitacao-sem-3df4/evidence/raw/probe/probe.json) [#17](../../../../../../restauracoes/20261005-175125-solicitacao-sem-3df4/2026-10-05T17-51-25Z__solicitacao__sonnet__sem__rep-01__20261005-175125-solicitacao-sem-3df4/evidence/raw/probe/sonda-escrita-1791222709148.txt) [#18](../../../../../../restauracoes/20261005-175125-solicitacao-sem-3df4/2026-10-05T17-51-25Z__solicitacao__sonnet__sem__rep-01__20261005-175125-solicitacao-sem-3df4/evidence/raw/task/mcp.json) [#19](../../../../../../restauracoes/20261005-175125-solicitacao-sem-3df4/2026-10-05T17-51-25Z__solicitacao__sonnet__sem__rep-01__20261005-175125-solicitacao-sem-3df4/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../../restauracoes/20261005-175125-solicitacao-sem-3df4/2026-10-05T17-51-25Z__solicitacao__sonnet__sem__rep-01__20261005-175125-solicitacao-sem-3df4/evidence/logs/agent.log) [#2](../../../../../../restauracoes/20261005-175125-solicitacao-sem-3df4/2026-10-05T17-51-25Z__solicitacao__sonnet__sem__rep-01__20261005-175125-solicitacao-sem-3df4/evidence/logs/browser.log) [#3](../../../../../../restauracoes/20261005-175125-solicitacao-sem-3df4/2026-10-05T17-51-25Z__solicitacao__sonnet__sem__rep-01__20261005-175125-solicitacao-sem-3df4/evidence/logs/collector.log) [#4](../../../../../../restauracoes/20261005-175125-solicitacao-sem-3df4/2026-10-05T17-51-25Z__solicitacao__sonnet__sem__rep-01__20261005-175125-solicitacao-sem-3df4/evidence/logs/egress-provider.log) [#5](../../../../../../restauracoes/20261005-175125-solicitacao-sem-3df4/2026-10-05T17-51-25Z__solicitacao__sonnet__sem__rep-01__20261005-175125-solicitacao-sem-3df4/evidence/logs/egress-site.log) [#6](../../../../../../restauracoes/20261005-175125-solicitacao-sem-3df4/2026-10-05T17-51-25Z__solicitacao__sonnet__sem__rep-01__20261005-175125-solicitacao-sem-3df4/evidence/logs/probe.log) [#7](../../../../../../restauracoes/20261005-175125-solicitacao-sem-3df4/2026-10-05T17-51-25Z__solicitacao__sonnet__sem__rep-01__20261005-175125-solicitacao-sem-3df4/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (5; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| #forma-presencial | wcag:4.1.2 | O radio 'Presencial' tem um label sem atributo for e não está associado ao input; o radio fica sem nome acessível \(os outros dois radios têm label for\) e clicar no texto não o seleciona. |
| .upload-button | wcag:4.1.2 | O botão visível 'Selecione o arquivo' tem aria-hidden='true' mas é focável \(é o primeiro foco ao pressionar Tab\) e sem nome acessível na árvore; o input file real está com display:none. |
| .upload-button | wcag:2.4.3 | O botão de upload tem tabindex='1' e recebe o primeiro foco da página, antes do link 'Ir para o conteúdo' e dos demais controles. |
| #cpf | wcag:3.3.1 | O CPF '123' foi aceito no envio sem erro, embora a instrução diga 'Somente números, 11 dígitos'; o formulário foi enviado com mensagem de sucesso. |
| #data-preferencial | wcag:3.3.1 | A data inválida '31/02/2027' foi aceita e silenciosamente alterada para '03/03/2027' ao enviar, sem aviso. |

**com** (20261005-174424-solicitacao-com-9011): [pacote](../../../../../../restauracoes/20261005-174424-solicitacao-com-9011/2026-10-05T17-44-24Z__solicitacao__sonnet__com__rep-01__20261005-174424-solicitacao-com-9011) · [run.json](../../../../../../restauracoes/20261005-174424-solicitacao-com-9011/2026-10-05T17-44-24Z__solicitacao__sonnet__com__rep-01__20261005-174424-solicitacao-com-9011/run.json) · [findings.json](../../../../../../restauracoes/20261005-174424-solicitacao-com-9011/2026-10-05T17-44-24Z__solicitacao__sonnet__com__rep-01__20261005-174424-solicitacao-com-9011/findings.json) · [isolation.json](../../../../../../restauracoes/20261005-174424-solicitacao-com-9011/2026-10-05T17-44-24Z__solicitacao__sonnet__com__rep-01__20261005-174424-solicitacao-com-9011/isolation.json) · [eventos de ferramenta](../../../../../../restauracoes/20261005-174424-solicitacao-com-9011/2026-10-05T17-44-24Z__solicitacao__sonnet__com__rep-01__20261005-174424-solicitacao-com-9011/tool-events.ndjson) · — · evidências: [#1](../../../../../../restauracoes/20261005-174424-solicitacao-com-9011/2026-10-05T17-44-24Z__solicitacao__sonnet__com__rep-01__20261005-174424-solicitacao-com-9011/evidence/aderencia-oraculo.json) [#2](../../../../../../restauracoes/20261005-174424-solicitacao-com-9011/2026-10-05T17-44-24Z__solicitacao__sonnet__com__rep-01__20261005-174424-solicitacao-com-9011/evidence/cliente.json) [#3](../../../../../../restauracoes/20261005-174424-solicitacao-com-9011/2026-10-05T17-44-24Z__solicitacao__sonnet__com__rep-01__20261005-174424-solicitacao-com-9011/evidence/container-config.json) [#4](../../../../../../restauracoes/20261005-174424-solicitacao-com-9011/2026-10-05T17-44-24Z__solicitacao__sonnet__com__rep-01__20261005-174424-solicitacao-com-9011/evidence/controles-positivos.json) [#5](../../../../../../restauracoes/20261005-174424-solicitacao-com-9011/2026-10-05T17-44-24Z__solicitacao__sonnet__com__rep-01__20261005-174424-solicitacao-com-9011/evidence/mcp-config.json) [#6](../../../../../../restauracoes/20261005-174424-solicitacao-com-9011/2026-10-05T17-44-24Z__solicitacao__sonnet__com__rep-01__20261005-174424-solicitacao-com-9011/evidence/preflight.json) [#7](../../../../../../restauracoes/20261005-174424-solicitacao-com-9011/2026-10-05T17-44-24Z__solicitacao__sonnet__com__rep-01__20261005-174424-solicitacao-com-9011/evidence/prompt.txt) [#8](../../../../../../restauracoes/20261005-174424-solicitacao-com-9011/2026-10-05T17-44-24Z__solicitacao__sonnet__com__rep-01__20261005-174424-solicitacao-com-9011/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../../restauracoes/20261005-174424-solicitacao-com-9011/2026-10-05T17-44-24Z__solicitacao__sonnet__com__rep-01__20261005-174424-solicitacao-com-9011/evidence/raw/browser/inventory.json) [#10](../../../../../../restauracoes/20261005-174424-solicitacao-com-9011/2026-10-05T17-44-24Z__solicitacao__sonnet__com__rep-01__20261005-174424-solicitacao-com-9011/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../../restauracoes/20261005-174424-solicitacao-com-9011/2026-10-05T17-44-24Z__solicitacao__sonnet__com__rep-01__20261005-174424-solicitacao-com-9011/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../../restauracoes/20261005-174424-solicitacao-com-9011/2026-10-05T17-44-24Z__solicitacao__sonnet__com__rep-01__20261005-174424-solicitacao-com-9011/evidence/raw/collector/events.ndjson) [#13](../../../../../../restauracoes/20261005-174424-solicitacao-com-9011/2026-10-05T17-44-24Z__solicitacao__sonnet__com__rep-01__20261005-174424-solicitacao-com-9011/evidence/raw/collector/findings.json) [#14](../../../../../../restauracoes/20261005-174424-solicitacao-com-9011/2026-10-05T17-44-24Z__solicitacao__sonnet__com__rep-01__20261005-174424-solicitacao-com-9011/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../../restauracoes/20261005-174424-solicitacao-com-9011/2026-10-05T17-44-24Z__solicitacao__sonnet__com__rep-01__20261005-174424-solicitacao-com-9011/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../../restauracoes/20261005-174424-solicitacao-com-9011/2026-10-05T17-44-24Z__solicitacao__sonnet__com__rep-01__20261005-174424-solicitacao-com-9011/evidence/raw/oracle/inventory.json) [#17](../../../../../../restauracoes/20261005-174424-solicitacao-com-9011/2026-10-05T17-44-24Z__solicitacao__sonnet__com__rep-01__20261005-174424-solicitacao-com-9011/evidence/raw/oracle/oracle-telemetry.ndjson) [#18](../../../../../../restauracoes/20261005-174424-solicitacao-com-9011/2026-10-05T17-44-24Z__solicitacao__sonnet__com__rep-01__20261005-174424-solicitacao-com-9011/evidence/raw/oracle/tool-events.ndjson) [#19](../../../../../../restauracoes/20261005-174424-solicitacao-com-9011/2026-10-05T17-44-24Z__solicitacao__sonnet__com__rep-01__20261005-174424-solicitacao-com-9011/evidence/raw/probe/probe.json) [#20](../../../../../../restauracoes/20261005-174424-solicitacao-com-9011/2026-10-05T17-44-24Z__solicitacao__sonnet__com__rep-01__20261005-174424-solicitacao-com-9011/evidence/raw/probe/sonda-escrita-1791222289419.txt) [#21](../../../../../../restauracoes/20261005-174424-solicitacao-com-9011/2026-10-05T17-44-24Z__solicitacao__sonnet__com__rep-01__20261005-174424-solicitacao-com-9011/evidence/raw/task/mcp.json) [#22](../../../../../../restauracoes/20261005-174424-solicitacao-com-9011/2026-10-05T17-44-24Z__solicitacao__sonnet__com__rep-01__20261005-174424-solicitacao-com-9011/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../../restauracoes/20261005-174424-solicitacao-com-9011/2026-10-05T17-44-24Z__solicitacao__sonnet__com__rep-01__20261005-174424-solicitacao-com-9011/evidence/logs/agent.log) [#2](../../../../../../restauracoes/20261005-174424-solicitacao-com-9011/2026-10-05T17-44-24Z__solicitacao__sonnet__com__rep-01__20261005-174424-solicitacao-com-9011/evidence/logs/browser.log) [#3](../../../../../../restauracoes/20261005-174424-solicitacao-com-9011/2026-10-05T17-44-24Z__solicitacao__sonnet__com__rep-01__20261005-174424-solicitacao-com-9011/evidence/logs/collector.log) [#4](../../../../../../restauracoes/20261005-174424-solicitacao-com-9011/2026-10-05T17-44-24Z__solicitacao__sonnet__com__rep-01__20261005-174424-solicitacao-com-9011/evidence/logs/egress-provider.log) [#5](../../../../../../restauracoes/20261005-174424-solicitacao-com-9011/2026-10-05T17-44-24Z__solicitacao__sonnet__com__rep-01__20261005-174424-solicitacao-com-9011/evidence/logs/egress-site.log) [#6](../../../../../../restauracoes/20261005-174424-solicitacao-com-9011/2026-10-05T17-44-24Z__solicitacao__sonnet__com__rep-01__20261005-174424-solicitacao-com-9011/evidence/logs/oracle.log) [#7](../../../../../../restauracoes/20261005-174424-solicitacao-com-9011/2026-10-05T17-44-24Z__solicitacao__sonnet__com__rep-01__20261005-174424-solicitacao-com-9011/evidence/logs/probe.log) [#8](../../../../../../restauracoes/20261005-174424-solicitacao-com-9011/2026-10-05T17-44-24Z__solicitacao__sonnet__com__rep-01__20261005-174424-solicitacao-com-9011/evidence/logs/screens.log) · [binding](analysis-binding.com.json)

Achados enviados (12; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| #forma-presencial | label | O radio 'Presencial' não tem nome acessível: o &lt;label&gt; não possui atributo for e não envolve o input; clicar no texto 'Presencial' não marca a opção \(testado\), enquanto as outras duas opções funcionam. |
| .upload-button | aria-hidden-focus | O botão 'Selecione o arquivo' tem aria-hidden=&quot;true&quot; e é focável \(tabindex=&quot;1&quot;\); o input file nativo está com display:none, então o controle de upload some para leitores de tela. |
| .upload-button | wcag:2.4.3 | tabindex=&quot;1&quot; \(positivo\) no botão de upload: no ciclo de Tab ele recebe foco depois da paginação e antes do link 'Ir para o conteúdo', fora da ordem visual/DOM \(observado por log de focusin\). |
| .flatpickr-prev-month &gt; button | button-name | Com o calendário aberto, os botões de mês anterior e próximo são apenas ícones \(&lt;i&gt;\) sem texto nem aria-label. |
| .flatpickr-day | tabindex | Com o calendário aberto, os 42 dias têm tabindex=&quot;1&quot; \(maior que 0\). |
| #data-preferencial-btn | incerta | O botão 'Abrir calendário' tem aria-hidden=&quot;true&quot; e tabindex=&quot;-1&quot;: não é alcançável por teclado nem exposto a leitores de tela \(o snapshot o mostra como botão sem nome\). |
| #servico, #unidade | incerta | Após envio vazio, os selects recebem aria-invalid=&quot;true&quot; mas não têm aria-describedby; as mensagens de erro \(span role=alert sem id\) não são associadas ao campo, diferente de nome, CPF, data e descrição. |
| #cpf | incerta | CPF '123' é aceito e a solicitação é enviada com sucesso, apesar do texto de apoio 'Somente números, 11 dígitos.'. Nenhuma validação de formato. |
| #data-preferencial | incerta | A data '31/02/2020' \(inexistente e passada\) é aceita sem erro e silenciosamente convertida para 02/03/2020; a solicitação é enviada. |
| .paginacao-anteriores a.page.active | incerta | O link da página atual \(Página 1\) só se diferencia pela classe 'active'; não tem aria-current=&quot;page&quot;. |
| header.barra-superior | ds-page-header | Nenhum componente .br-header/&lt;br-header&gt; na página; o cabeçalho é um &lt;header&gt; próprio com a marca gov.br. |
| main#main-content | ds-page-footer | A página não tem rodapé: nenhum .br-footer/&lt;br-footer&gt; nem &lt;footer&gt;. |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `de5a7a16fac9f68379c051ecff3ee79d1a0a01880b4835767883856e51ccd9a1`

