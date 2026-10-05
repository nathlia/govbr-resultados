# Resumo da análise — Solicitar serviço (solicitacao)

Revisão 1 · gerado em 2026-10-05T02:29:51.996Z (UTC)

## 1. Status técnico

Análise: **pronta**

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261004-091916-solicitacao-sem-c214 | sem | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 10 cartão(ões), nenhum decidido |
| 20261004-090812-solicitacao-com-d76b | com | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 13 cartão(ões), nenhum decidido |

Uma execução pode ter rodado bem e ainda estar esperando revisão: isso é normal. A pontuação só é final quando todos os cartões dela foram decididos.

## 2. Identidade

| | sem | com |
|---|---|---|
| Tela | Solicitar serviço (solicitacao @ govbr-telas-site-1a6e8daf3cdb) | Solicitar serviço (solicitacao @ govbr-telas-site-1a6e8daf3cdb) |
| Braço | sem oráculo | com oráculo |
| Modelo (família) | claude | claude |
| ID pedido | claude-opus-5-5 | claude-opus-5-5 |
| ID efetivo | claude-opus-5-5 (client-log) | claude-opus-5-5 (client-log) |
| Esforço | high | high |
| Cliente | claude-code 2.1.288 \(Claude Code\) | claude-code 2.1.288 \(Claude Code\) |
| Início (UTC) | 2026-10-04T09:19:41Z | 2026-10-04T09:08:39Z |
| Início (local) | 04/10/2026, 06:19:41 (horário de Brasília) | 04/10/2026, 06:08:39 (horário de Brasília) |
| Commit do harness | 1b6ed3e79deaab08c7109e7c0008bef947921077 | 1b6ed3e79deaab08c7109e7c0008bef947921077 |
| Repetição · tentativa | 4 · 1 | 4 · 1 |
| Campanha · slot · par | t7-tela-a-01 · p04-sem · p04 | t7-tela-a-01 · p04-com · p04 |

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
| Cartões pendentes de revisão | 10 | 13 |
| Maturidade | aguardando revisão — 10 cartão(ões), nenhum decidido | aguardando revisão — 13 cartão(ões), nenhum decidido |
| Entra na comparação principal | sim | sim |
| Achados enviados | 10 | 13 |

Recall e precisão só aparecem com a revisão fechada; enquanto houver cartão pendente ficam “indisponível” (nunca 0). “Achados enviados = 0” é um resultado válido (o agente olhou e não alegou nada); submissão recusada ou ausente é outra coisa.

Linha de base determinística (união das varreduras comparáveis), por unidade da referência:

| Unidades | sem | com |
|---|---|---|
| Agente e linha de base | 0 | 0 |
| Só o agente | 0 | 0 |
| Só a linha de base | 0 | 0 |
| Nenhum | 16 | 16 |
| Estado | provisório | provisório |

Linha de base: usada (lb-20261004-090725-solicitacao-20a87c)

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
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 18 (ponte MCP do oráculo) |
| Protocolo | unverified | unverified |
| Ferramentas anunciadas | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for, get\_ds\_rules, get\_design\_tokens, get\_emag\_rules, get\_pag… |
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_console\_messages, browser\_take\_screenshot, browser\_press\_key, browser\_snapshot, browser\_click, browser\_fill\_form | browser\_navigate, browser\_evaluate, browser\_console\_messages, scan\_page, browser\_take\_screenshot, browser\_press\_key, browser\_snapshot, browser\_click, browser\_fill\_form, get\_finding\_details, get\_component\_spec, verify\_finding, browser\_wait\_for, get\_page\_rules, browser\_tabs |
| Erros de ferramenta | 3 (tool-events.ndjson \(eventos com isError: true\)) | 3 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 8 aprovado(s); falhos: nenhum | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | nenhuma | nenhuma |

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 6. Custo e tempo

| | sem | com |
|---|---|---|
| Tempo de relógio (s) | 580 (runner) | 478 (runner) |
| Turnos | 146 (stream-json do cliente \(result.num\_turns\)) | 119 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 145 (ponte MCP) | 118 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 18 (ponte MCP do oráculo) |
| Tokens de entrada | 132 (stream-json do cliente \(result.usage\)) | 132 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 34395 (stream-json do cliente \(result.usage\)) | 29410 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 4227480 (stream-json do cliente \(result.usage\)) | 6272515 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 115407 (stream-json do cliente \(result.usage\)) | 163222 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 2.45718 (estimativa do cliente \(result.total\_cost\_usd\)) | 3.1490069999999997 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 31 cartão(ões), estimativa 186 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 7. Detalhes e evidências

**sem** (20261004-091916-solicitacao-sem-c214): [pacote](../../../../../restauracoes/20261004-091916-solicitacao-sem-c214/2026-10-04T09-19-16Z__solicitacao__opus__sem__rep-04__20261004-091916-solicitacao-sem-c214) · [run.json](../../../../../restauracoes/20261004-091916-solicitacao-sem-c214/2026-10-04T09-19-16Z__solicitacao__opus__sem__rep-04__20261004-091916-solicitacao-sem-c214/run.json) · [findings.json](../../../../../restauracoes/20261004-091916-solicitacao-sem-c214/2026-10-04T09-19-16Z__solicitacao__opus__sem__rep-04__20261004-091916-solicitacao-sem-c214/findings.json) · [isolation.json](../../../../../restauracoes/20261004-091916-solicitacao-sem-c214/2026-10-04T09-19-16Z__solicitacao__opus__sem__rep-04__20261004-091916-solicitacao-sem-c214/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261004-091916-solicitacao-sem-c214/2026-10-04T09-19-16Z__solicitacao__opus__sem__rep-04__20261004-091916-solicitacao-sem-c214/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261004-091916-solicitacao-sem-c214/2026-10-04T09-19-16Z__solicitacao__opus__sem__rep-04__20261004-091916-solicitacao-sem-c214/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261004-091916-solicitacao-sem-c214/2026-10-04T09-19-16Z__solicitacao__opus__sem__rep-04__20261004-091916-solicitacao-sem-c214/evidence/cliente.json) [#3](../../../../../restauracoes/20261004-091916-solicitacao-sem-c214/2026-10-04T09-19-16Z__solicitacao__opus__sem__rep-04__20261004-091916-solicitacao-sem-c214/evidence/container-config.json) [#4](../../../../../restauracoes/20261004-091916-solicitacao-sem-c214/2026-10-04T09-19-16Z__solicitacao__opus__sem__rep-04__20261004-091916-solicitacao-sem-c214/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261004-091916-solicitacao-sem-c214/2026-10-04T09-19-16Z__solicitacao__opus__sem__rep-04__20261004-091916-solicitacao-sem-c214/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261004-091916-solicitacao-sem-c214/2026-10-04T09-19-16Z__solicitacao__opus__sem__rep-04__20261004-091916-solicitacao-sem-c214/evidence/preflight.json) [#7](../../../../../restauracoes/20261004-091916-solicitacao-sem-c214/2026-10-04T09-19-16Z__solicitacao__opus__sem__rep-04__20261004-091916-solicitacao-sem-c214/evidence/prompt.txt) [#8](../../../../../restauracoes/20261004-091916-solicitacao-sem-c214/2026-10-04T09-19-16Z__solicitacao__opus__sem__rep-04__20261004-091916-solicitacao-sem-c214/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261004-091916-solicitacao-sem-c214/2026-10-04T09-19-16Z__solicitacao__opus__sem__rep-04__20261004-091916-solicitacao-sem-c214/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261004-091916-solicitacao-sem-c214/2026-10-04T09-19-16Z__solicitacao__opus__sem__rep-04__20261004-091916-solicitacao-sem-c214/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261004-091916-solicitacao-sem-c214/2026-10-04T09-19-16Z__solicitacao__opus__sem__rep-04__20261004-091916-solicitacao-sem-c214/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261004-091916-solicitacao-sem-c214/2026-10-04T09-19-16Z__solicitacao__opus__sem__rep-04__20261004-091916-solicitacao-sem-c214/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261004-091916-solicitacao-sem-c214/2026-10-04T09-19-16Z__solicitacao__opus__sem__rep-04__20261004-091916-solicitacao-sem-c214/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261004-091916-solicitacao-sem-c214/2026-10-04T09-19-16Z__solicitacao__opus__sem__rep-04__20261004-091916-solicitacao-sem-c214/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261004-091916-solicitacao-sem-c214/2026-10-04T09-19-16Z__solicitacao__opus__sem__rep-04__20261004-091916-solicitacao-sem-c214/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261004-091916-solicitacao-sem-c214/2026-10-04T09-19-16Z__solicitacao__opus__sem__rep-04__20261004-091916-solicitacao-sem-c214/evidence/raw/probe/probe.json) [#17](../../../../../restauracoes/20261004-091916-solicitacao-sem-c214/2026-10-04T09-19-16Z__solicitacao__opus__sem__rep-04__20261004-091916-solicitacao-sem-c214/evidence/raw/probe/sonda-escrita-1791105580759.txt) [#18](../../../../../restauracoes/20261004-091916-solicitacao-sem-c214/2026-10-04T09-19-16Z__solicitacao__opus__sem__rep-04__20261004-091916-solicitacao-sem-c214/evidence/raw/task/mcp.json) [#19](../../../../../restauracoes/20261004-091916-solicitacao-sem-c214/2026-10-04T09-19-16Z__solicitacao__opus__sem__rep-04__20261004-091916-solicitacao-sem-c214/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261004-091916-solicitacao-sem-c214/2026-10-04T09-19-16Z__solicitacao__opus__sem__rep-04__20261004-091916-solicitacao-sem-c214/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261004-091916-solicitacao-sem-c214/2026-10-04T09-19-16Z__solicitacao__opus__sem__rep-04__20261004-091916-solicitacao-sem-c214/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261004-091916-solicitacao-sem-c214/2026-10-04T09-19-16Z__solicitacao__opus__sem__rep-04__20261004-091916-solicitacao-sem-c214/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261004-091916-solicitacao-sem-c214/2026-10-04T09-19-16Z__solicitacao__opus__sem__rep-04__20261004-091916-solicitacao-sem-c214/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261004-091916-solicitacao-sem-c214/2026-10-04T09-19-16Z__solicitacao__opus__sem__rep-04__20261004-091916-solicitacao-sem-c214/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261004-091916-solicitacao-sem-c214/2026-10-04T09-19-16Z__solicitacao__opus__sem__rep-04__20261004-091916-solicitacao-sem-c214/evidence/logs/probe.log) [#7](../../../../../restauracoes/20261004-091916-solicitacao-sem-c214/2026-10-04T09-19-16Z__solicitacao__opus__sem__rep-04__20261004-091916-solicitacao-sem-c214/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (10; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| .upload-button | wcag:4.1.2 | O botão 'Selecione o arquivo' tem aria-hidden=&quot;true&quot;, mas é focável \(tabindex=&quot;1&quot;\) e é o único controle operável do upload \(o input#documentos tem display:none\). Leitores de tela recebem foco num elemento oculto e sem n… |
| .upload-button | wcag:2.4.3 | tabindex=&quot;1&quot;: o primeiro Tab depois do carregamento vai para o botão de upload, no meio do formulário \(a página rola até ele\), antes do link 'Ir para o conteúdo', do cabeçalho e dos campos anteriores. Depois de fechar o… |
| #servico, #unidade | wcag:2.4.7 | Com foco por teclado \(:focus-visible\), os campos Tipo de serviço e Unidade de atendimento não mostram indicador: outline-style none e box-shadow none no input, no .input-group e no .br-input; a borda continua 1px #888, … |
| #forma-presencial | wcag:4.1.2 | O &lt;label&gt;Presencial&lt;/label&gt; não tem for=&quot;forma-presencial&quot; nem envolve o input: o radio fica sem nome acessível \(árvore: 'radio' sem nome\). Um clique no texto ou no círculo visual \(o label cobre o input\) não marca a opç… |
| #servico, #unidade | wcag:1.3.1 | No estado de erro, #servico e #unidade recebem aria-invalid=&quot;true&quot;, mas não têm aria-describedby; as mensagens 'Selecione o tipo de serviço.' e 'Selecione a unidade de atendimento.' não têm id e não ficam associadas aos… |
| .acao-cancelar | wcag:2.4.3 | Cancelar abre o modal 'Descartar solicitação?'. Ao fechá-lo por Escape, pelo botão Fechar \(X\), por 'Continuar preenchendo' ou por 'Descartar', o foco vai para o &lt;body&gt; e não volta ao botão Cancelar; o próximo Tab vai pa… |
| .paginacao-anteriores .page.active | wcag:1.3.1 | A página atual da paginação é indicada só visualmente \(classe 'active', fundo azul\); não há aria-current nem outro indicador programático. O mesmo vale depois de navegar para as páginas 2 e 3. |
| .br-select &gt; .br-input\[role=&quot;combobox&quot;\] | wcag:4.1.2 | O papel combobox está na div wrapper sem aria-label nem aria-labelledby; a árvore de acessibilidade mostra 'combobox' sem nome \(o label for= nomeia só o input interno, que continua com papel textbox\). |
| .flatpickr-prev-month &gt; button, .flatpickr-next-month &gt; button | wcag:4.1.2 | No calendário da Data preferencial, os botões de mês anterior e seguinte só contêm um ícone &lt;i&gt; \(sem texto nem aria-hidden\) e não têm aria-label/title: o nome acessível fica vazio. |
| .mensagem-retorno.danger .close .br-button | incerta | Na mensagem de erro \(br-message danger\), o botão Fechar vem primeiro no DOM e aparece à esquerda \(x=201\), antes do conteúdo; o ícone de status aparece à direita \(x=1035\). É uma div role=button, e não um &lt;button&gt;. A mens… |

**com** (20261004-090812-solicitacao-com-d76b): [pacote](../../../../../restauracoes/20261004-090812-solicitacao-com-d76b/2026-10-04T09-08-12Z__solicitacao__opus__com__rep-04__20261004-090812-solicitacao-com-d76b) · [run.json](../../../../../restauracoes/20261004-090812-solicitacao-com-d76b/2026-10-04T09-08-12Z__solicitacao__opus__com__rep-04__20261004-090812-solicitacao-com-d76b/run.json) · [findings.json](../../../../../restauracoes/20261004-090812-solicitacao-com-d76b/2026-10-04T09-08-12Z__solicitacao__opus__com__rep-04__20261004-090812-solicitacao-com-d76b/findings.json) · [isolation.json](../../../../../restauracoes/20261004-090812-solicitacao-com-d76b/2026-10-04T09-08-12Z__solicitacao__opus__com__rep-04__20261004-090812-solicitacao-com-d76b/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261004-090812-solicitacao-com-d76b/2026-10-04T09-08-12Z__solicitacao__opus__com__rep-04__20261004-090812-solicitacao-com-d76b/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261004-090812-solicitacao-com-d76b/2026-10-04T09-08-12Z__solicitacao__opus__com__rep-04__20261004-090812-solicitacao-com-d76b/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261004-090812-solicitacao-com-d76b/2026-10-04T09-08-12Z__solicitacao__opus__com__rep-04__20261004-090812-solicitacao-com-d76b/evidence/cliente.json) [#3](../../../../../restauracoes/20261004-090812-solicitacao-com-d76b/2026-10-04T09-08-12Z__solicitacao__opus__com__rep-04__20261004-090812-solicitacao-com-d76b/evidence/container-config.json) [#4](../../../../../restauracoes/20261004-090812-solicitacao-com-d76b/2026-10-04T09-08-12Z__solicitacao__opus__com__rep-04__20261004-090812-solicitacao-com-d76b/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261004-090812-solicitacao-com-d76b/2026-10-04T09-08-12Z__solicitacao__opus__com__rep-04__20261004-090812-solicitacao-com-d76b/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261004-090812-solicitacao-com-d76b/2026-10-04T09-08-12Z__solicitacao__opus__com__rep-04__20261004-090812-solicitacao-com-d76b/evidence/preflight.json) [#7](../../../../../restauracoes/20261004-090812-solicitacao-com-d76b/2026-10-04T09-08-12Z__solicitacao__opus__com__rep-04__20261004-090812-solicitacao-com-d76b/evidence/prompt.txt) [#8](../../../../../restauracoes/20261004-090812-solicitacao-com-d76b/2026-10-04T09-08-12Z__solicitacao__opus__com__rep-04__20261004-090812-solicitacao-com-d76b/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261004-090812-solicitacao-com-d76b/2026-10-04T09-08-12Z__solicitacao__opus__com__rep-04__20261004-090812-solicitacao-com-d76b/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261004-090812-solicitacao-com-d76b/2026-10-04T09-08-12Z__solicitacao__opus__com__rep-04__20261004-090812-solicitacao-com-d76b/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261004-090812-solicitacao-com-d76b/2026-10-04T09-08-12Z__solicitacao__opus__com__rep-04__20261004-090812-solicitacao-com-d76b/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261004-090812-solicitacao-com-d76b/2026-10-04T09-08-12Z__solicitacao__opus__com__rep-04__20261004-090812-solicitacao-com-d76b/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261004-090812-solicitacao-com-d76b/2026-10-04T09-08-12Z__solicitacao__opus__com__rep-04__20261004-090812-solicitacao-com-d76b/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261004-090812-solicitacao-com-d76b/2026-10-04T09-08-12Z__solicitacao__opus__com__rep-04__20261004-090812-solicitacao-com-d76b/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261004-090812-solicitacao-com-d76b/2026-10-04T09-08-12Z__solicitacao__opus__com__rep-04__20261004-090812-solicitacao-com-d76b/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261004-090812-solicitacao-com-d76b/2026-10-04T09-08-12Z__solicitacao__opus__com__rep-04__20261004-090812-solicitacao-com-d76b/evidence/raw/oracle/inventory.json) [#17](../../../../../restauracoes/20261004-090812-solicitacao-com-d76b/2026-10-04T09-08-12Z__solicitacao__opus__com__rep-04__20261004-090812-solicitacao-com-d76b/evidence/raw/oracle/oracle-telemetry.ndjson) [#18](../../../../../restauracoes/20261004-090812-solicitacao-com-d76b/2026-10-04T09-08-12Z__solicitacao__opus__com__rep-04__20261004-090812-solicitacao-com-d76b/evidence/raw/oracle/tool-events.ndjson) [#19](../../../../../restauracoes/20261004-090812-solicitacao-com-d76b/2026-10-04T09-08-12Z__solicitacao__opus__com__rep-04__20261004-090812-solicitacao-com-d76b/evidence/raw/probe/probe.json) [#20](../../../../../restauracoes/20261004-090812-solicitacao-com-d76b/2026-10-04T09-08-12Z__solicitacao__opus__com__rep-04__20261004-090812-solicitacao-com-d76b/evidence/raw/probe/sonda-escrita-1791104918800.txt) [#21](../../../../../restauracoes/20261004-090812-solicitacao-com-d76b/2026-10-04T09-08-12Z__solicitacao__opus__com__rep-04__20261004-090812-solicitacao-com-d76b/evidence/raw/task/mcp.json) [#22](../../../../../restauracoes/20261004-090812-solicitacao-com-d76b/2026-10-04T09-08-12Z__solicitacao__opus__com__rep-04__20261004-090812-solicitacao-com-d76b/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261004-090812-solicitacao-com-d76b/2026-10-04T09-08-12Z__solicitacao__opus__com__rep-04__20261004-090812-solicitacao-com-d76b/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261004-090812-solicitacao-com-d76b/2026-10-04T09-08-12Z__solicitacao__opus__com__rep-04__20261004-090812-solicitacao-com-d76b/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261004-090812-solicitacao-com-d76b/2026-10-04T09-08-12Z__solicitacao__opus__com__rep-04__20261004-090812-solicitacao-com-d76b/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261004-090812-solicitacao-com-d76b/2026-10-04T09-08-12Z__solicitacao__opus__com__rep-04__20261004-090812-solicitacao-com-d76b/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261004-090812-solicitacao-com-d76b/2026-10-04T09-08-12Z__solicitacao__opus__com__rep-04__20261004-090812-solicitacao-com-d76b/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261004-090812-solicitacao-com-d76b/2026-10-04T09-08-12Z__solicitacao__opus__com__rep-04__20261004-090812-solicitacao-com-d76b/evidence/logs/oracle.log) [#7](../../../../../restauracoes/20261004-090812-solicitacao-com-d76b/2026-10-04T09-08-12Z__solicitacao__opus__com__rep-04__20261004-090812-solicitacao-com-d76b/evidence/logs/probe.log) [#8](../../../../../restauracoes/20261004-090812-solicitacao-com-d76b/2026-10-04T09-08-12Z__solicitacao__opus__com__rep-04__20261004-090812-solicitacao-com-d76b/evidence/logs/screens.log) · [binding](analysis-binding.com.json)

Achados enviados (13; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| #forma-presencial | label | O rádio 'Presencial' não tem nome acessível: o &lt;label&gt;Presencial&lt;/label&gt; irmão não tem atributo for. Clicar no texto 'Presencial' não marca a opção, e o usuário de mouse não consegue selecioná-la. |
| .upload-button | aria-hidden-focus | O botão 'Selecione o arquivo' tem aria-hidden='true' e continua focável \(tabindex='1'\). Ele é o único caminho por teclado até o input de arquivo, que está com display:none; leitores de tela não anunciam o controle que r… |
| .upload-button | wcag:2.4.3 | tabindex='1' no botão de upload: o primeiro Tab após o carregamento leva o foco a esse botão, no meio do formulário, antes do skiplink, do cabeçalho e dos campos anteriores. |
| #servico, #unidade | wcag:2.4.7 | Ao receber foco pelo teclado, os campos dos selects não exibem indicador: outline none, box-shadow none e borda inalterada \(#888\). A regra da folha da tela '.campo-servico/.campo-unidade .br-input input:focus-visible \{ … |
| #servico, #unidade | wcag:3.3.1 | Após o envio vazio, os inputs recebem aria-invalid='true', mas não têm aria-describedby. As mensagens 'Selecione o tipo de serviço.' e 'Selecione a unidade de atendimento.' ficam sem id e sem vínculo com o campo. Nos de… |
| .mensagem-retorno .close &gt; div.br-button | ds-structure-button-tag | Na mensagem de erro \(br-message danger\), o botão de fechar é um &lt;div class='br-button circle small' role='button' tabindex='0'&gt;. A mensagem de sucesso usa &lt;button&gt;. |
| .dialogo-descarte | ds-token-color | O modal 'Descartar solicitação?' tem color rgb\(51, 67, 51\) \(#334333\), que é herdada pelo título; o valor não pertence ao registro de tokens \(o mais próximo é --green-cool-70 #37493b\). |
| button.acao-cancelar | wcag:2.4.3 | Ao fechar o modal de descarte \(Esc ou 'Continuar preenchendo'\), o foco vai para &lt;body&gt;, e não volta ao botão Cancelar que o abriu. |
| #servico, #unidade | wcag:2.4.3 | Ao abrir a lista com ArrowDown e escolher uma opção com Enter, o valor é aplicado e a lista fecha, mas o foco vai para &lt;body&gt;. O usuário de teclado perde a posição no formulário. |
| header.barra-superior | ds-page-header | O cabeçalho é um &lt;header class='barra-superior'&gt; próprio, só com o link 'gov.br'. Não há .br-header nem &lt;br-header&gt; no documento. |
| body | ds-page-footer | Não há rodapé: o documento não tem .br-footer, &lt;br-footer&gt; nem elemento &lt;footer&gt;. |
| .flatpickr-prev-month &gt; button, .flatpickr-next-month &gt; button | button-name | No calendário da Data preferencial, os botões de mês anterior e próximo mês têm apenas ícone \(&lt;i class='fas fa-chevron-\*'&gt;\), sem texto, aria-label nem title: não têm nome acessível. |
| .flatpickr-day | tabindex | Com o calendário aberto, todos os 42 dias \(span.flatpickr-day\) recebem tabindex='1' \(positivo\), o que altera a ordem sequencial de foco da página. |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `fb7a952140f744fc591f97f9757af0515065fb018d2a4dfa2e5f90b88618540b`

