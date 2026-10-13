# Resumo da análise — Solicitar serviço (solicitacao)

Revisão 1 · gerado em 2026-10-13T00:05:36.975Z (UTC)

## 1. Status técnico

Análise: **pronta**

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261012-094447-solicitacao-sem-1433 | sem | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 8 cartão(ões), nenhum decidido |
| 20261012-093657-solicitacao-com-43ed | com | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 9 cartão(ões), nenhum decidido |

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
| Início (UTC) | 2026-10-12T09:45:11Z | 2026-10-12T09:37:22Z |
| Início (local) | 12/10/2026, 06:45:11 (horário de Brasília) | 12/10/2026, 06:37:22 (horário de Brasília) |
| Commit do harness | 7f189a9a0984459418e210aa1453acbee54e1160 | 7f189a9a0984459418e210aa1453acbee54e1160 |
| Repetição · tentativa | 5 · 1 | 5 · 1 |
| Campanha · slot · par | t7b-sonnet-tela-a-01 · p05-sem · p05 | t7b-sonnet-tela-a-01 · p05-com · p05 |

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
| Cartões pendentes de revisão | 8 | 9 |
| Maturidade | aguardando revisão — 8 cartão(ões), nenhum decidido | aguardando revisão — 9 cartão(ões), nenhum decidido |
| Entra na comparação principal | sim | sim |
| Achados enviados | 8 | 9 |

Recall e precisão só aparecem com a revisão fechada; enquanto houver cartão pendente ficam “indisponível” (nunca 0). “Achados enviados = 0” é um resultado válido (o agente olhou e não alegou nada); submissão recusada ou ausente é outra coisa.

Linha de base determinística (união das varreduras comparáveis), por unidade da referência:

| Unidades | sem | com |
|---|---|---|
| Agente e linha de base | 0 | 0 |
| Só o agente | 0 | 0 |
| Só a linha de base | 0 | 0 |
| Nenhum | 16 | 16 |
| Estado | provisório | provisório |

Linha de base: usada (lb-20261012-093925-solicitacao-568056)

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
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 5 (ponte MCP do oráculo) |
| Protocolo | unverified | unverified |
| Ferramentas anunciadas | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for, get\_ds\_rules, get\_design\_tokens, get\_emag\_rules, get\_pag… |
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_snapshot, browser\_console\_messages, browser\_press\_key, browser\_take\_screenshot, browser\_click, browser\_fill\_form | browser\_navigate, browser\_evaluate, browser\_snapshot, scan\_page, browser\_console\_messages, browser\_click, browser\_press\_key, browser\_type, browser\_take\_screenshot, verify\_finding, get\_ds\_rules |
| Erros de ferramenta | 2 (tool-events.ndjson \(eventos com isError: true\)) | 1 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 8 aprovado(s); falhos: nenhum | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | nenhuma | nenhuma |

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 6. Custo e tempo

| | sem | com |
|---|---|---|
| Tempo de relógio (s) | 318 (runner) | 178 (runner) |
| Turnos | 89 (stream-json do cliente \(result.num\_turns\)) | 45 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 88 (ponte MCP) | 44 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 5 (ponte MCP do oráculo) |
| Tokens de entrada | 78 (stream-json do cliente \(result.usage\)) | 46 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 19629 (stream-json do cliente \(result.usage\)) | 12014 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 2236723 (stream-json do cliente \(result.usage\)) | 1163034 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 84774 (stream-json do cliente \(result.usage\)) | 57969 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 0.9828865999999998 (estimativa do cliente \(result.total\_cost\_usd\)) | 0.5847148 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 25 cartão(ões), estimativa 150 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 7. Detalhes e evidências

**sem** (20261012-094447-solicitacao-sem-1433): [pacote](../../../../../restauracoes/20261012-094447-solicitacao-sem-1433/2026-10-12T09-44-47Z__solicitacao__sonnet__sem__rep-05__20261012-094447-solicitacao-sem-1433) · [run.json](../../../../../restauracoes/20261012-094447-solicitacao-sem-1433/2026-10-12T09-44-47Z__solicitacao__sonnet__sem__rep-05__20261012-094447-solicitacao-sem-1433/run.json) · [findings.json](../../../../../restauracoes/20261012-094447-solicitacao-sem-1433/2026-10-12T09-44-47Z__solicitacao__sonnet__sem__rep-05__20261012-094447-solicitacao-sem-1433/findings.json) · [isolation.json](../../../../../restauracoes/20261012-094447-solicitacao-sem-1433/2026-10-12T09-44-47Z__solicitacao__sonnet__sem__rep-05__20261012-094447-solicitacao-sem-1433/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261012-094447-solicitacao-sem-1433/2026-10-12T09-44-47Z__solicitacao__sonnet__sem__rep-05__20261012-094447-solicitacao-sem-1433/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261012-094447-solicitacao-sem-1433/2026-10-12T09-44-47Z__solicitacao__sonnet__sem__rep-05__20261012-094447-solicitacao-sem-1433/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261012-094447-solicitacao-sem-1433/2026-10-12T09-44-47Z__solicitacao__sonnet__sem__rep-05__20261012-094447-solicitacao-sem-1433/evidence/cliente.json) [#3](../../../../../restauracoes/20261012-094447-solicitacao-sem-1433/2026-10-12T09-44-47Z__solicitacao__sonnet__sem__rep-05__20261012-094447-solicitacao-sem-1433/evidence/container-config.json) [#4](../../../../../restauracoes/20261012-094447-solicitacao-sem-1433/2026-10-12T09-44-47Z__solicitacao__sonnet__sem__rep-05__20261012-094447-solicitacao-sem-1433/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261012-094447-solicitacao-sem-1433/2026-10-12T09-44-47Z__solicitacao__sonnet__sem__rep-05__20261012-094447-solicitacao-sem-1433/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261012-094447-solicitacao-sem-1433/2026-10-12T09-44-47Z__solicitacao__sonnet__sem__rep-05__20261012-094447-solicitacao-sem-1433/evidence/preflight.json) [#7](../../../../../restauracoes/20261012-094447-solicitacao-sem-1433/2026-10-12T09-44-47Z__solicitacao__sonnet__sem__rep-05__20261012-094447-solicitacao-sem-1433/evidence/prompt.txt) [#8](../../../../../restauracoes/20261012-094447-solicitacao-sem-1433/2026-10-12T09-44-47Z__solicitacao__sonnet__sem__rep-05__20261012-094447-solicitacao-sem-1433/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261012-094447-solicitacao-sem-1433/2026-10-12T09-44-47Z__solicitacao__sonnet__sem__rep-05__20261012-094447-solicitacao-sem-1433/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261012-094447-solicitacao-sem-1433/2026-10-12T09-44-47Z__solicitacao__sonnet__sem__rep-05__20261012-094447-solicitacao-sem-1433/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261012-094447-solicitacao-sem-1433/2026-10-12T09-44-47Z__solicitacao__sonnet__sem__rep-05__20261012-094447-solicitacao-sem-1433/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261012-094447-solicitacao-sem-1433/2026-10-12T09-44-47Z__solicitacao__sonnet__sem__rep-05__20261012-094447-solicitacao-sem-1433/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261012-094447-solicitacao-sem-1433/2026-10-12T09-44-47Z__solicitacao__sonnet__sem__rep-05__20261012-094447-solicitacao-sem-1433/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261012-094447-solicitacao-sem-1433/2026-10-12T09-44-47Z__solicitacao__sonnet__sem__rep-05__20261012-094447-solicitacao-sem-1433/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261012-094447-solicitacao-sem-1433/2026-10-12T09-44-47Z__solicitacao__sonnet__sem__rep-05__20261012-094447-solicitacao-sem-1433/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261012-094447-solicitacao-sem-1433/2026-10-12T09-44-47Z__solicitacao__sonnet__sem__rep-05__20261012-094447-solicitacao-sem-1433/evidence/raw/probe/probe.json) [#17](../../../../../restauracoes/20261012-094447-solicitacao-sem-1433/2026-10-12T09-44-47Z__solicitacao__sonnet__sem__rep-05__20261012-094447-solicitacao-sem-1433/evidence/raw/probe/sonda-escrita-1791798310997.txt) [#18](../../../../../restauracoes/20261012-094447-solicitacao-sem-1433/2026-10-12T09-44-47Z__solicitacao__sonnet__sem__rep-05__20261012-094447-solicitacao-sem-1433/evidence/raw/task/mcp.json) [#19](../../../../../restauracoes/20261012-094447-solicitacao-sem-1433/2026-10-12T09-44-47Z__solicitacao__sonnet__sem__rep-05__20261012-094447-solicitacao-sem-1433/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261012-094447-solicitacao-sem-1433/2026-10-12T09-44-47Z__solicitacao__sonnet__sem__rep-05__20261012-094447-solicitacao-sem-1433/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261012-094447-solicitacao-sem-1433/2026-10-12T09-44-47Z__solicitacao__sonnet__sem__rep-05__20261012-094447-solicitacao-sem-1433/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261012-094447-solicitacao-sem-1433/2026-10-12T09-44-47Z__solicitacao__sonnet__sem__rep-05__20261012-094447-solicitacao-sem-1433/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261012-094447-solicitacao-sem-1433/2026-10-12T09-44-47Z__solicitacao__sonnet__sem__rep-05__20261012-094447-solicitacao-sem-1433/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261012-094447-solicitacao-sem-1433/2026-10-12T09-44-47Z__solicitacao__sonnet__sem__rep-05__20261012-094447-solicitacao-sem-1433/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261012-094447-solicitacao-sem-1433/2026-10-12T09-44-47Z__solicitacao__sonnet__sem__rep-05__20261012-094447-solicitacao-sem-1433/evidence/logs/probe.log) [#7](../../../../../restauracoes/20261012-094447-solicitacao-sem-1433/2026-10-12T09-44-47Z__solicitacao__sonnet__sem__rep-05__20261012-094447-solicitacao-sem-1433/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (8; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| .upload-button | wcag:4.1.2 | Botão &quot;Selecione o arquivo&quot; tem aria-hidden=&quot;true&quot; mas é focável e operável; o input file real \(#documentos\) está com display:none. O controle de upload fica oculto das tecnologias assistivas. |
| .upload-button | wcag:2.4.3 | Botão de upload tem tabindex=&quot;1&quot; e recebe o primeiro foco ao pressionar Tab, antes do link &quot;Ir para o conteúdo&quot; e do restante da página. |
| #forma-presencial | wcag:4.1.2 | O rádio &quot;Presencial&quot; não tem nome acessível: o &lt;label&gt;Presencial&lt;/label&gt; não tem atributo for; na árvore aparece como radio sem nome e clicar no rótulo não seleciona a opção. |
| #servico, #unidade | wcag:2.4.7 | Ao receber foco por Tab, os campos Tipo de serviço e Unidade de atendimento não têm outline nem box-shadow \(outline none, box-shadow none, borda inalterada\); não há indicador visível de foco, ao contrário de Nome, CPF, … |
| #data-preferencial-btn | incerta | Botão &quot;Abrir calendário&quot; tem aria-hidden=&quot;true&quot; e tabindex=&quot;-1&quot;: não é alcançável por Tab nem exposto a leitores de tela; o calendário só abre por clique do mouse \(clicar ou focar o input não abre\). A digitação da data … |
| .page.active | wcag:1.3.1 | Após clicar em &quot;Página 2&quot;, o link da página atual só ganha a classe visual &quot;active&quot;; não há aria-current. |
| .acao-cancelar | wcag:2.4.3 | Ao fechar o diálogo &quot;Descartar solicitação?&quot; \(Escape ou Continuar preenchendo\), o foco vai para o body em vez de voltar ao botão Cancelar que abriu o diálogo. |
| #cpf | wcag:3.3.1 | O valor &quot;123&quot; foi aceito e a solicitação enviada com sucesso, embora o campo exija 11 dígitos; nenhum erro é identificado. |

**com** (20261012-093657-solicitacao-com-43ed): [pacote](../../../../../restauracoes/20261012-093657-solicitacao-com-43ed/2026-10-12T09-36-57Z__solicitacao__sonnet__com__rep-05__20261012-093657-solicitacao-com-43ed) · [run.json](../../../../../restauracoes/20261012-093657-solicitacao-com-43ed/2026-10-12T09-36-57Z__solicitacao__sonnet__com__rep-05__20261012-093657-solicitacao-com-43ed/run.json) · [findings.json](../../../../../restauracoes/20261012-093657-solicitacao-com-43ed/2026-10-12T09-36-57Z__solicitacao__sonnet__com__rep-05__20261012-093657-solicitacao-com-43ed/findings.json) · [isolation.json](../../../../../restauracoes/20261012-093657-solicitacao-com-43ed/2026-10-12T09-36-57Z__solicitacao__sonnet__com__rep-05__20261012-093657-solicitacao-com-43ed/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261012-093657-solicitacao-com-43ed/2026-10-12T09-36-57Z__solicitacao__sonnet__com__rep-05__20261012-093657-solicitacao-com-43ed/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261012-093657-solicitacao-com-43ed/2026-10-12T09-36-57Z__solicitacao__sonnet__com__rep-05__20261012-093657-solicitacao-com-43ed/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261012-093657-solicitacao-com-43ed/2026-10-12T09-36-57Z__solicitacao__sonnet__com__rep-05__20261012-093657-solicitacao-com-43ed/evidence/cliente.json) [#3](../../../../../restauracoes/20261012-093657-solicitacao-com-43ed/2026-10-12T09-36-57Z__solicitacao__sonnet__com__rep-05__20261012-093657-solicitacao-com-43ed/evidence/container-config.json) [#4](../../../../../restauracoes/20261012-093657-solicitacao-com-43ed/2026-10-12T09-36-57Z__solicitacao__sonnet__com__rep-05__20261012-093657-solicitacao-com-43ed/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261012-093657-solicitacao-com-43ed/2026-10-12T09-36-57Z__solicitacao__sonnet__com__rep-05__20261012-093657-solicitacao-com-43ed/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261012-093657-solicitacao-com-43ed/2026-10-12T09-36-57Z__solicitacao__sonnet__com__rep-05__20261012-093657-solicitacao-com-43ed/evidence/preflight.json) [#7](../../../../../restauracoes/20261012-093657-solicitacao-com-43ed/2026-10-12T09-36-57Z__solicitacao__sonnet__com__rep-05__20261012-093657-solicitacao-com-43ed/evidence/prompt.txt) [#8](../../../../../restauracoes/20261012-093657-solicitacao-com-43ed/2026-10-12T09-36-57Z__solicitacao__sonnet__com__rep-05__20261012-093657-solicitacao-com-43ed/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261012-093657-solicitacao-com-43ed/2026-10-12T09-36-57Z__solicitacao__sonnet__com__rep-05__20261012-093657-solicitacao-com-43ed/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261012-093657-solicitacao-com-43ed/2026-10-12T09-36-57Z__solicitacao__sonnet__com__rep-05__20261012-093657-solicitacao-com-43ed/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261012-093657-solicitacao-com-43ed/2026-10-12T09-36-57Z__solicitacao__sonnet__com__rep-05__20261012-093657-solicitacao-com-43ed/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261012-093657-solicitacao-com-43ed/2026-10-12T09-36-57Z__solicitacao__sonnet__com__rep-05__20261012-093657-solicitacao-com-43ed/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261012-093657-solicitacao-com-43ed/2026-10-12T09-36-57Z__solicitacao__sonnet__com__rep-05__20261012-093657-solicitacao-com-43ed/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261012-093657-solicitacao-com-43ed/2026-10-12T09-36-57Z__solicitacao__sonnet__com__rep-05__20261012-093657-solicitacao-com-43ed/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261012-093657-solicitacao-com-43ed/2026-10-12T09-36-57Z__solicitacao__sonnet__com__rep-05__20261012-093657-solicitacao-com-43ed/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261012-093657-solicitacao-com-43ed/2026-10-12T09-36-57Z__solicitacao__sonnet__com__rep-05__20261012-093657-solicitacao-com-43ed/evidence/raw/oracle/inventory.json) [#17](../../../../../restauracoes/20261012-093657-solicitacao-com-43ed/2026-10-12T09-36-57Z__solicitacao__sonnet__com__rep-05__20261012-093657-solicitacao-com-43ed/evidence/raw/oracle/oracle-telemetry.ndjson) [#18](../../../../../restauracoes/20261012-093657-solicitacao-com-43ed/2026-10-12T09-36-57Z__solicitacao__sonnet__com__rep-05__20261012-093657-solicitacao-com-43ed/evidence/raw/oracle/tool-events.ndjson) [#19](../../../../../restauracoes/20261012-093657-solicitacao-com-43ed/2026-10-12T09-36-57Z__solicitacao__sonnet__com__rep-05__20261012-093657-solicitacao-com-43ed/evidence/raw/probe/probe.json) [#20](../../../../../restauracoes/20261012-093657-solicitacao-com-43ed/2026-10-12T09-36-57Z__solicitacao__sonnet__com__rep-05__20261012-093657-solicitacao-com-43ed/evidence/raw/probe/sonda-escrita-1791797842156.txt) [#21](../../../../../restauracoes/20261012-093657-solicitacao-com-43ed/2026-10-12T09-36-57Z__solicitacao__sonnet__com__rep-05__20261012-093657-solicitacao-com-43ed/evidence/raw/task/mcp.json) [#22](../../../../../restauracoes/20261012-093657-solicitacao-com-43ed/2026-10-12T09-36-57Z__solicitacao__sonnet__com__rep-05__20261012-093657-solicitacao-com-43ed/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261012-093657-solicitacao-com-43ed/2026-10-12T09-36-57Z__solicitacao__sonnet__com__rep-05__20261012-093657-solicitacao-com-43ed/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261012-093657-solicitacao-com-43ed/2026-10-12T09-36-57Z__solicitacao__sonnet__com__rep-05__20261012-093657-solicitacao-com-43ed/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261012-093657-solicitacao-com-43ed/2026-10-12T09-36-57Z__solicitacao__sonnet__com__rep-05__20261012-093657-solicitacao-com-43ed/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261012-093657-solicitacao-com-43ed/2026-10-12T09-36-57Z__solicitacao__sonnet__com__rep-05__20261012-093657-solicitacao-com-43ed/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261012-093657-solicitacao-com-43ed/2026-10-12T09-36-57Z__solicitacao__sonnet__com__rep-05__20261012-093657-solicitacao-com-43ed/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261012-093657-solicitacao-com-43ed/2026-10-12T09-36-57Z__solicitacao__sonnet__com__rep-05__20261012-093657-solicitacao-com-43ed/evidence/logs/oracle.log) [#7](../../../../../restauracoes/20261012-093657-solicitacao-com-43ed/2026-10-12T09-36-57Z__solicitacao__sonnet__com__rep-05__20261012-093657-solicitacao-com-43ed/evidence/logs/probe.log) [#8](../../../../../restauracoes/20261012-093657-solicitacao-com-43ed/2026-10-12T09-36-57Z__solicitacao__sonnet__com__rep-05__20261012-093657-solicitacao-com-43ed/evidence/logs/screens.log) · [binding](analysis-binding.com.json)

Achados enviados (9; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| #forma-presencial | label | O rádio 'Presencial' não tem nome acessível: o &lt;label&gt; não possui atributo for e não envolve o input; clicar no texto 'Presencial' não marca a opção; a árvore de acessibilidade mostra radio sem nome. |
| .upload-button | aria-hidden-focus | O botão 'Selecione o arquivo' tem aria-hidden=&quot;true&quot; e é focável; o input file nativo está com display:none, logo o envio de documento fica sem controle exposto a tecnologias assistivas. |
| .upload-button | wcag:2.4.3 | O botão tem tabindex=&quot;1&quot;: é o primeiro elemento focado ao pressionar Tab \(antes do link 'Ir para o conteúdo' e do campo Nome\), tirando o foco da ordem do documento. |
| #data-preferencial-btn | wcag:2.1.1 | O botão 'Abrir calendário' tem aria-hidden=&quot;true&quot; e tabindex=&quot;-1&quot;: não é alcançável pelo teclado nem exposto a leitores de tela \(a árvore mostra um botão sem nome\). |
| #cpf | wcag:3.3.1 | CPF '123' foi aceito: o envio foi concluído com a mensagem de sucesso, apesar da orientação 'Somente números, 11 dígitos.' |
| #data-preferencial | wcag:3.3.1 | Ao digitar '99/99/9999' o campo passou silenciosamente para '09/03/0007' e o envio foi aceito sem erro. |
| .br-pagination .page | incerta | Os links de página não têm aria-current; a página ativa \(classe active\) só se distingue visualmente, inclusive após ir para a página 2. |
| html | ds-page-header | Não há componente .br-header nem &lt;br-header&gt;; o topo é apenas um banner com o link/logotipo gov.br. |
| html | ds-page-footer | Não há componente .br-footer nem &lt;br-footer&gt; na página. |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `f4bbb6e288573965e7135dabc8de2657d3df398d834a18f384602d198a3e499d`

