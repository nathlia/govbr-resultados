# Resumo da análise — Solicitar serviço (solicitacao)

Revisão 1 · gerado em 2026-10-13T00:05:55.177Z (UTC)

## 1. Status técnico

Análise: **pronta**

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261012-135625-solicitacao-sem-c959 | sem | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 8 cartão(ões), nenhum decidido |
| 20261012-134732-solicitacao-com-0d5a | com | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 10 cartão(ões), nenhum decidido |

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
| Início (UTC) | 2026-10-12T13:56:48Z | 2026-10-12T13:47:58Z |
| Início (local) | 12/10/2026, 10:56:48 (horário de Brasília) | 12/10/2026, 10:47:58 (horário de Brasília) |
| Commit do harness | 7f189a9a0984459418e210aa1453acbee54e1160 | 7f189a9a0984459418e210aa1453acbee54e1160 |
| Repetição · tentativa | 8 · 1 | 8 · 1 |
| Campanha · slot · par | t7b-sonnet-tela-a-01 · p08-sem · p08 | t7b-sonnet-tela-a-01 · p08-com · p08 |

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
| Cartões pendentes de revisão | 8 | 10 |
| Maturidade | aguardando revisão — 8 cartão(ões), nenhum decidido | aguardando revisão — 10 cartão(ões), nenhum decidido |
| Entra na comparação principal | sim | sim |
| Achados enviados | 8 | 10 |

Recall e precisão só aparecem com a revisão fechada; enquanto houver cartão pendente ficam “indisponível” (nunca 0). “Achados enviados = 0” é um resultado válido (o agente olhou e não alegou nada); submissão recusada ou ausente é outra coisa.

Linha de base determinística (união das varreduras comparáveis), por unidade da referência:

| Unidades | sem | com |
|---|---|---|
| Agente e linha de base | 0 | 0 |
| Só o agente | 0 | 0 |
| Só a linha de base | 0 | 0 |
| Nenhum | 16 | 16 |
| Estado | provisório | provisório |

Linha de base: usada (lb-20261012-134643-solicitacao-e7ff65)

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
| Uso do oráculo | ausente (confirmado) | usado conforme o protocolo |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 6 (ponte MCP do oráculo) |
| Protocolo | unverified | unverified |
| Ferramentas anunciadas | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for, get\_ds\_rules, get\_design\_tokens, get\_emag\_rules, get\_pag… |
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_snapshot, browser\_console\_messages, browser\_take\_screenshot, browser\_press\_key, browser\_click, browser\_fill\_form | browser\_navigate, browser\_evaluate, browser\_snapshot, browser\_console\_messages, scan\_page, browser\_take\_screenshot, browser\_click, browser\_press\_key, browser\_type, get\_ds\_rules, verify\_finding, get\_finding\_details |
| Erros de ferramenta | 2 (tool-events.ndjson \(eventos com isError: true\)) | 4 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 8 aprovado(s); falhos: nenhum | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | nenhuma | nenhuma |

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 6. Custo e tempo

| | sem | com |
|---|---|---|
| Tempo de relógio (s) | 188 (runner) | 267 (runner) |
| Turnos | 47 (stream-json do cliente \(result.num\_turns\)) | 94 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 46 (ponte MCP) | 93 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 6 (ponte MCP do oráculo) |
| Tokens de entrada | 44 (stream-json do cliente \(result.usage\)) | 86 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 11572 (stream-json do cliente \(result.usage\)) | 15857 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 880326 (stream-json do cliente \(result.usage\)) | 2552618 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 64066 (stream-json do cliente \(result.usage\)) | 93520 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 0.5481372 (estimativa do cliente \(result.total\_cost\_usd\)) | 1.0433455999999999 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 26 cartão(ões), estimativa 156 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 7. Detalhes e evidências

**sem** (20261012-135625-solicitacao-sem-c959): [pacote](../../../../../restauracoes/20261012-135625-solicitacao-sem-c959/2026-10-12T13-56-25Z__solicitacao__sonnet__sem__rep-08__20261012-135625-solicitacao-sem-c959) · [run.json](../../../../../restauracoes/20261012-135625-solicitacao-sem-c959/2026-10-12T13-56-25Z__solicitacao__sonnet__sem__rep-08__20261012-135625-solicitacao-sem-c959/run.json) · [findings.json](../../../../../restauracoes/20261012-135625-solicitacao-sem-c959/2026-10-12T13-56-25Z__solicitacao__sonnet__sem__rep-08__20261012-135625-solicitacao-sem-c959/findings.json) · [isolation.json](../../../../../restauracoes/20261012-135625-solicitacao-sem-c959/2026-10-12T13-56-25Z__solicitacao__sonnet__sem__rep-08__20261012-135625-solicitacao-sem-c959/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261012-135625-solicitacao-sem-c959/2026-10-12T13-56-25Z__solicitacao__sonnet__sem__rep-08__20261012-135625-solicitacao-sem-c959/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261012-135625-solicitacao-sem-c959/2026-10-12T13-56-25Z__solicitacao__sonnet__sem__rep-08__20261012-135625-solicitacao-sem-c959/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261012-135625-solicitacao-sem-c959/2026-10-12T13-56-25Z__solicitacao__sonnet__sem__rep-08__20261012-135625-solicitacao-sem-c959/evidence/cliente.json) [#3](../../../../../restauracoes/20261012-135625-solicitacao-sem-c959/2026-10-12T13-56-25Z__solicitacao__sonnet__sem__rep-08__20261012-135625-solicitacao-sem-c959/evidence/container-config.json) [#4](../../../../../restauracoes/20261012-135625-solicitacao-sem-c959/2026-10-12T13-56-25Z__solicitacao__sonnet__sem__rep-08__20261012-135625-solicitacao-sem-c959/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261012-135625-solicitacao-sem-c959/2026-10-12T13-56-25Z__solicitacao__sonnet__sem__rep-08__20261012-135625-solicitacao-sem-c959/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261012-135625-solicitacao-sem-c959/2026-10-12T13-56-25Z__solicitacao__sonnet__sem__rep-08__20261012-135625-solicitacao-sem-c959/evidence/preflight.json) [#7](../../../../../restauracoes/20261012-135625-solicitacao-sem-c959/2026-10-12T13-56-25Z__solicitacao__sonnet__sem__rep-08__20261012-135625-solicitacao-sem-c959/evidence/prompt.txt) [#8](../../../../../restauracoes/20261012-135625-solicitacao-sem-c959/2026-10-12T13-56-25Z__solicitacao__sonnet__sem__rep-08__20261012-135625-solicitacao-sem-c959/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261012-135625-solicitacao-sem-c959/2026-10-12T13-56-25Z__solicitacao__sonnet__sem__rep-08__20261012-135625-solicitacao-sem-c959/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261012-135625-solicitacao-sem-c959/2026-10-12T13-56-25Z__solicitacao__sonnet__sem__rep-08__20261012-135625-solicitacao-sem-c959/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261012-135625-solicitacao-sem-c959/2026-10-12T13-56-25Z__solicitacao__sonnet__sem__rep-08__20261012-135625-solicitacao-sem-c959/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261012-135625-solicitacao-sem-c959/2026-10-12T13-56-25Z__solicitacao__sonnet__sem__rep-08__20261012-135625-solicitacao-sem-c959/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261012-135625-solicitacao-sem-c959/2026-10-12T13-56-25Z__solicitacao__sonnet__sem__rep-08__20261012-135625-solicitacao-sem-c959/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261012-135625-solicitacao-sem-c959/2026-10-12T13-56-25Z__solicitacao__sonnet__sem__rep-08__20261012-135625-solicitacao-sem-c959/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261012-135625-solicitacao-sem-c959/2026-10-12T13-56-25Z__solicitacao__sonnet__sem__rep-08__20261012-135625-solicitacao-sem-c959/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261012-135625-solicitacao-sem-c959/2026-10-12T13-56-25Z__solicitacao__sonnet__sem__rep-08__20261012-135625-solicitacao-sem-c959/evidence/raw/probe/probe.json) [#17](../../../../../restauracoes/20261012-135625-solicitacao-sem-c959/2026-10-12T13-56-25Z__solicitacao__sonnet__sem__rep-08__20261012-135625-solicitacao-sem-c959/evidence/raw/probe/sonda-escrita-1791813408374.txt) [#18](../../../../../restauracoes/20261012-135625-solicitacao-sem-c959/2026-10-12T13-56-25Z__solicitacao__sonnet__sem__rep-08__20261012-135625-solicitacao-sem-c959/evidence/raw/task/mcp.json) [#19](../../../../../restauracoes/20261012-135625-solicitacao-sem-c959/2026-10-12T13-56-25Z__solicitacao__sonnet__sem__rep-08__20261012-135625-solicitacao-sem-c959/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261012-135625-solicitacao-sem-c959/2026-10-12T13-56-25Z__solicitacao__sonnet__sem__rep-08__20261012-135625-solicitacao-sem-c959/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261012-135625-solicitacao-sem-c959/2026-10-12T13-56-25Z__solicitacao__sonnet__sem__rep-08__20261012-135625-solicitacao-sem-c959/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261012-135625-solicitacao-sem-c959/2026-10-12T13-56-25Z__solicitacao__sonnet__sem__rep-08__20261012-135625-solicitacao-sem-c959/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261012-135625-solicitacao-sem-c959/2026-10-12T13-56-25Z__solicitacao__sonnet__sem__rep-08__20261012-135625-solicitacao-sem-c959/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261012-135625-solicitacao-sem-c959/2026-10-12T13-56-25Z__solicitacao__sonnet__sem__rep-08__20261012-135625-solicitacao-sem-c959/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261012-135625-solicitacao-sem-c959/2026-10-12T13-56-25Z__solicitacao__sonnet__sem__rep-08__20261012-135625-solicitacao-sem-c959/evidence/logs/probe.log) [#7](../../../../../restauracoes/20261012-135625-solicitacao-sem-c959/2026-10-12T13-56-25Z__solicitacao__sonnet__sem__rep-08__20261012-135625-solicitacao-sem-c959/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (8; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| #forma-presencial | wcag:4.1.2 | O rádio 'Presencial' tem &lt;label&gt; sem atributo for e fora do input; a árvore de acessibilidade mostra radio sem nome \(os outros dois têm nome\). |
| .upload-button | wcag:4.1.2 | O botão 'Selecione o arquivo' tem aria-hidden=&quot;true&quot; mas é focável e é o único controle visível; o input file real \(#documentos\) está com display:none, portanto fora da árvore de acessibilidade e do foco. |
| .upload-button | wcag:2.4.3 | O botão de upload tem tabindex=&quot;1&quot;; o primeiro Tab desde o carregamento foca esse botão, antes do link 'Ir para o conteúdo' e do restante da página. |
| #data-preferencial-btn | wcag:2.1.1 | O botão 'Abrir calendário' tem aria-hidden=&quot;true&quot; e tabindex=&quot;-1&quot; \(há também atributo inválido tab-index\); Tab não o alcança e ArrowDown no campo de data não abre o calendário. |
| .trilha-servico span\[aria-current=&quot;page&quot;\] | wcag:2.4.3 | O item atual do breadcrumb \(texto não interativo\) tem tabindex=&quot;0&quot; e entra na sequência de Tab \(foco visível em um SPAN\). |
| #cpf | wcag:3.3.1 | CPF '123' foi aceito sem erro, apesar da instrução 'Somente números, 11 dígitos.'; o envio resultou em 'Solicitação enviada.' |
| #data-preferencial | wcag:3.3.1 | A data '99/99/9999' foi convertida para '09/03/0007' e aceita; envio concluído com sucesso sem alerta de data inválida. |
| #forma-retorno, #declaracao-retorno, .campo-unidade .retorno-campo | incerta | Após corrigir os campos \(rádio marcado, declaração marcada, unidade escolhida\), as mensagens de erro e aria-invalid=&quot;true&quot; permaneceram visíveis \('Escolha a forma de atendimento.', 'Confirme a declaração…', 'Selecione a… |

**com** (20261012-134732-solicitacao-com-0d5a): [pacote](../../../../../restauracoes/20261012-134732-solicitacao-com-0d5a/2026-10-12T13-47-32Z__solicitacao__sonnet__com__rep-08__20261012-134732-solicitacao-com-0d5a) · [run.json](../../../../../restauracoes/20261012-134732-solicitacao-com-0d5a/2026-10-12T13-47-32Z__solicitacao__sonnet__com__rep-08__20261012-134732-solicitacao-com-0d5a/run.json) · [findings.json](../../../../../restauracoes/20261012-134732-solicitacao-com-0d5a/2026-10-12T13-47-32Z__solicitacao__sonnet__com__rep-08__20261012-134732-solicitacao-com-0d5a/findings.json) · [isolation.json](../../../../../restauracoes/20261012-134732-solicitacao-com-0d5a/2026-10-12T13-47-32Z__solicitacao__sonnet__com__rep-08__20261012-134732-solicitacao-com-0d5a/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261012-134732-solicitacao-com-0d5a/2026-10-12T13-47-32Z__solicitacao__sonnet__com__rep-08__20261012-134732-solicitacao-com-0d5a/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261012-134732-solicitacao-com-0d5a/2026-10-12T13-47-32Z__solicitacao__sonnet__com__rep-08__20261012-134732-solicitacao-com-0d5a/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261012-134732-solicitacao-com-0d5a/2026-10-12T13-47-32Z__solicitacao__sonnet__com__rep-08__20261012-134732-solicitacao-com-0d5a/evidence/cliente.json) [#3](../../../../../restauracoes/20261012-134732-solicitacao-com-0d5a/2026-10-12T13-47-32Z__solicitacao__sonnet__com__rep-08__20261012-134732-solicitacao-com-0d5a/evidence/container-config.json) [#4](../../../../../restauracoes/20261012-134732-solicitacao-com-0d5a/2026-10-12T13-47-32Z__solicitacao__sonnet__com__rep-08__20261012-134732-solicitacao-com-0d5a/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261012-134732-solicitacao-com-0d5a/2026-10-12T13-47-32Z__solicitacao__sonnet__com__rep-08__20261012-134732-solicitacao-com-0d5a/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261012-134732-solicitacao-com-0d5a/2026-10-12T13-47-32Z__solicitacao__sonnet__com__rep-08__20261012-134732-solicitacao-com-0d5a/evidence/preflight.json) [#7](../../../../../restauracoes/20261012-134732-solicitacao-com-0d5a/2026-10-12T13-47-32Z__solicitacao__sonnet__com__rep-08__20261012-134732-solicitacao-com-0d5a/evidence/prompt.txt) [#8](../../../../../restauracoes/20261012-134732-solicitacao-com-0d5a/2026-10-12T13-47-32Z__solicitacao__sonnet__com__rep-08__20261012-134732-solicitacao-com-0d5a/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261012-134732-solicitacao-com-0d5a/2026-10-12T13-47-32Z__solicitacao__sonnet__com__rep-08__20261012-134732-solicitacao-com-0d5a/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261012-134732-solicitacao-com-0d5a/2026-10-12T13-47-32Z__solicitacao__sonnet__com__rep-08__20261012-134732-solicitacao-com-0d5a/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261012-134732-solicitacao-com-0d5a/2026-10-12T13-47-32Z__solicitacao__sonnet__com__rep-08__20261012-134732-solicitacao-com-0d5a/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261012-134732-solicitacao-com-0d5a/2026-10-12T13-47-32Z__solicitacao__sonnet__com__rep-08__20261012-134732-solicitacao-com-0d5a/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261012-134732-solicitacao-com-0d5a/2026-10-12T13-47-32Z__solicitacao__sonnet__com__rep-08__20261012-134732-solicitacao-com-0d5a/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261012-134732-solicitacao-com-0d5a/2026-10-12T13-47-32Z__solicitacao__sonnet__com__rep-08__20261012-134732-solicitacao-com-0d5a/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261012-134732-solicitacao-com-0d5a/2026-10-12T13-47-32Z__solicitacao__sonnet__com__rep-08__20261012-134732-solicitacao-com-0d5a/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261012-134732-solicitacao-com-0d5a/2026-10-12T13-47-32Z__solicitacao__sonnet__com__rep-08__20261012-134732-solicitacao-com-0d5a/evidence/raw/oracle/inventory.json) [#17](../../../../../restauracoes/20261012-134732-solicitacao-com-0d5a/2026-10-12T13-47-32Z__solicitacao__sonnet__com__rep-08__20261012-134732-solicitacao-com-0d5a/evidence/raw/oracle/oracle-telemetry.ndjson) [#18](../../../../../restauracoes/20261012-134732-solicitacao-com-0d5a/2026-10-12T13-47-32Z__solicitacao__sonnet__com__rep-08__20261012-134732-solicitacao-com-0d5a/evidence/raw/oracle/tool-events.ndjson) [#19](../../../../../restauracoes/20261012-134732-solicitacao-com-0d5a/2026-10-12T13-47-32Z__solicitacao__sonnet__com__rep-08__20261012-134732-solicitacao-com-0d5a/evidence/raw/probe/probe.json) [#20](../../../../../restauracoes/20261012-134732-solicitacao-com-0d5a/2026-10-12T13-47-32Z__solicitacao__sonnet__com__rep-08__20261012-134732-solicitacao-com-0d5a/evidence/raw/probe/sonda-escrita-1791812877564.txt) [#21](../../../../../restauracoes/20261012-134732-solicitacao-com-0d5a/2026-10-12T13-47-32Z__solicitacao__sonnet__com__rep-08__20261012-134732-solicitacao-com-0d5a/evidence/raw/task/mcp.json) [#22](../../../../../restauracoes/20261012-134732-solicitacao-com-0d5a/2026-10-12T13-47-32Z__solicitacao__sonnet__com__rep-08__20261012-134732-solicitacao-com-0d5a/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261012-134732-solicitacao-com-0d5a/2026-10-12T13-47-32Z__solicitacao__sonnet__com__rep-08__20261012-134732-solicitacao-com-0d5a/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261012-134732-solicitacao-com-0d5a/2026-10-12T13-47-32Z__solicitacao__sonnet__com__rep-08__20261012-134732-solicitacao-com-0d5a/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261012-134732-solicitacao-com-0d5a/2026-10-12T13-47-32Z__solicitacao__sonnet__com__rep-08__20261012-134732-solicitacao-com-0d5a/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261012-134732-solicitacao-com-0d5a/2026-10-12T13-47-32Z__solicitacao__sonnet__com__rep-08__20261012-134732-solicitacao-com-0d5a/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261012-134732-solicitacao-com-0d5a/2026-10-12T13-47-32Z__solicitacao__sonnet__com__rep-08__20261012-134732-solicitacao-com-0d5a/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261012-134732-solicitacao-com-0d5a/2026-10-12T13-47-32Z__solicitacao__sonnet__com__rep-08__20261012-134732-solicitacao-com-0d5a/evidence/logs/oracle.log) [#7](../../../../../restauracoes/20261012-134732-solicitacao-com-0d5a/2026-10-12T13-47-32Z__solicitacao__sonnet__com__rep-08__20261012-134732-solicitacao-com-0d5a/evidence/logs/probe.log) [#8](../../../../../restauracoes/20261012-134732-solicitacao-com-0d5a/2026-10-12T13-47-32Z__solicitacao__sonnet__com__rep-08__20261012-134732-solicitacao-com-0d5a/evidence/logs/screens.log) · [binding](analysis-binding.com.json)

Achados enviados (10; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| #forma-presencial | label | O radio &quot;Presencial&quot; não tem nome acessível: o &lt;label&gt; não tem atributo for e não envolve o input; clicar no texto &quot;Presencial&quot; não marca o radio \(checked=false após o clique\). |
| .upload-button | aria-hidden-focus | Botão &quot;Selecione o arquivo&quot; com aria-hidden=&quot;true&quot; e focável \(tabindex=&quot;1&quot;\): fica oculto da tecnologia assistiva mas é o controle visível de upload. |
| .upload-button | ds:govbr-3.7.0-accessibility-global-79db88c7f55d | tabindex=&quot;1&quot; no botão de upload: ao pressionar Tab pela primeira vez o foco vai para ele, antes do link &quot;Ir para o conteúdo&quot; e do cabeçalho. |
| .flatpickr-prev-month button, .flatpickr-next-month button | emag:2.2 | Botões de mês anterior/próximo do calendário só têm ícone, sem aria-label nem texto. |
| #data-preferencial-btn | incerta | O botão visível &quot;Abrir calendário&quot; tem aria-hidden=&quot;true&quot; e tabindex=&quot;-1&quot;: inacessível por teclado e oculto de leitores de tela. |
| #servico, #unidade | wcag:2.4.7 | Ao receber foco por teclado, os campos de seleção não têm nenhum indicador visível \(outline none, box-shadow none, borda inalterada rgb\(136,136,136\)\); os demais campos de texto mostram box-shadow. |
| #cpf | wcag:3.3.1 | CPF &quot;123&quot; \(3 dígitos\) é aceito sem erro e o formulário é enviado com sucesso \(&quot;Solicitação enviada.&quot;\), embora a ajuda diga 11 dígitos. |
| #data-preferencial | wcag:3.3.1 | Digitar &quot;99/99/2020&quot; é convertido silenciosamente em &quot;08/03/2028&quot; e aceito, sem mensagem de erro de formato. |
| html | ds-page-header | Cabeçalho é um &lt;header class=&quot;barra-superior&quot;&gt; só com a marca; não há .br-header nem &lt;br-header&gt;. |
| html | ds-page-footer | A página não tem rodapé \(nenhum .br-footer, &lt;footer&gt; ou contentinfo\). |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `4bdbdea54e21876d771e3ba7794140209e30a81f127138ae5fce4f3d3d944b43`

