# Resumo da análise — Solicitar serviço (solicitacao)

Revisão 1 · gerado em 2026-10-05T02:41:48.907Z (UTC)

## 1. Status técnico

Análise: **pronta**

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261004-040751-solicitacao-sem-c088 | sem | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 10 cartão(ões), nenhum decidido |
| 20261004-042139-solicitacao-com-791c | com | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 11 cartão(ões), nenhum decidido |

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
| Início (UTC) | 2026-10-04T04:08:16Z | 2026-10-04T04:22:08Z |
| Início (local) | 04/10/2026, 01:08:16 (horário de Brasília) | 04/10/2026, 01:22:08 (horário de Brasília) |
| Commit do harness | 77bfb2728709609c7a298a7833992a60c3c4c5d1 | 77bfb2728709609c7a298a7833992a60c3c4c5d1 |
| Repetição · tentativa | 1 · 1 | 1 · 1 |
| Campanha · slot · par | t7-tela-a-01 · p01-sem · p01 | t7-tela-a-01 · p01-com · p01 |

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
| Cartões pendentes de revisão | 10 | 11 |
| Maturidade | aguardando revisão — 10 cartão(ões), nenhum decidido | aguardando revisão — 11 cartão(ões), nenhum decidido |
| Entra na comparação principal | sim | sim |
| Achados enviados | 10 | 11 |

Recall e precisão só aparecem com a revisão fechada; enquanto houver cartão pendente ficam “indisponível” (nunca 0). “Achados enviados = 0” é um resultado válido (o agente olhou e não alegou nada); submissão recusada ou ausente é outra coisa.

Linha de base determinística (união das varreduras comparáveis), por unidade da referência:

| Unidades | sem | com |
|---|---|---|
| Agente e linha de base | 0 | 0 |
| Só o agente | 0 | 0 |
| Só a linha de base | 0 | 0 |
| Nenhum | 16 | 16 |
| Estado | provisório | provisório |

Linha de base: usada (lb-20261004-040737-solicitacao-d3193d)

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
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 11 (ponte MCP do oráculo) |
| Protocolo | unverified | unverified |
| Ferramentas anunciadas | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for, get\_ds\_rules, get\_design\_tokens, get\_emag\_rules, get\_pag… |
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_console\_messages, browser\_take\_screenshot, browser\_press\_key, browser\_snapshot, browser\_click, browser\_fill\_form, browser\_type | browser\_navigate, browser\_evaluate, browser\_console\_messages, scan\_page, browser\_take\_screenshot, browser\_click, browser\_press\_key, browser\_snapshot, browser\_type, browser\_fill\_form, get\_ds\_rules, get\_component\_spec, verify\_finding |
| Erros de ferramenta | 1 (tool-events.ndjson \(eventos com isError: true\)) | 2 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 8 aprovado(s); falhos: nenhum | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | nenhuma | nenhuma |

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 6. Custo e tempo

| | sem | com |
|---|---|---|
| Tempo de relógio (s) | 577 (runner) | 429 (runner) |
| Turnos | 111 (stream-json do cliente \(result.num\_turns\)) | 111 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 110 (ponte MCP) | 110 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 11 (ponte MCP do oráculo) |
| Tokens de entrada | 106 (stream-json do cliente \(result.usage\)) | 116 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 33421 (stream-json do cliente \(result.usage\)) | 26736 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 3346847 (stream-json do cliente \(result.usage\)) | 5084323 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 108932 (stream-json do cliente \(result.usage\)) | 151294 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 2.2096694000000006 (estimativa do cliente \(result.total\_cost\_usd\)) | 2.7624006000000003 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 29 cartão(ões), estimativa 174 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 7. Detalhes e evidências

**sem** (20261004-040751-solicitacao-sem-c088): [pacote](../../../../../restauracoes/20261004-040751-solicitacao-sem-c088/2026-10-04T04-07-51Z__solicitacao__opus__sem__rep-01__20261004-040751-solicitacao-sem-c088) · [run.json](../../../../../restauracoes/20261004-040751-solicitacao-sem-c088/2026-10-04T04-07-51Z__solicitacao__opus__sem__rep-01__20261004-040751-solicitacao-sem-c088/run.json) · [findings.json](../../../../../restauracoes/20261004-040751-solicitacao-sem-c088/2026-10-04T04-07-51Z__solicitacao__opus__sem__rep-01__20261004-040751-solicitacao-sem-c088/findings.json) · [isolation.json](../../../../../restauracoes/20261004-040751-solicitacao-sem-c088/2026-10-04T04-07-51Z__solicitacao__opus__sem__rep-01__20261004-040751-solicitacao-sem-c088/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261004-040751-solicitacao-sem-c088/2026-10-04T04-07-51Z__solicitacao__opus__sem__rep-01__20261004-040751-solicitacao-sem-c088/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261004-040751-solicitacao-sem-c088/2026-10-04T04-07-51Z__solicitacao__opus__sem__rep-01__20261004-040751-solicitacao-sem-c088/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261004-040751-solicitacao-sem-c088/2026-10-04T04-07-51Z__solicitacao__opus__sem__rep-01__20261004-040751-solicitacao-sem-c088/evidence/cliente.json) [#3](../../../../../restauracoes/20261004-040751-solicitacao-sem-c088/2026-10-04T04-07-51Z__solicitacao__opus__sem__rep-01__20261004-040751-solicitacao-sem-c088/evidence/container-config.json) [#4](../../../../../restauracoes/20261004-040751-solicitacao-sem-c088/2026-10-04T04-07-51Z__solicitacao__opus__sem__rep-01__20261004-040751-solicitacao-sem-c088/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261004-040751-solicitacao-sem-c088/2026-10-04T04-07-51Z__solicitacao__opus__sem__rep-01__20261004-040751-solicitacao-sem-c088/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261004-040751-solicitacao-sem-c088/2026-10-04T04-07-51Z__solicitacao__opus__sem__rep-01__20261004-040751-solicitacao-sem-c088/evidence/preflight.json) [#7](../../../../../restauracoes/20261004-040751-solicitacao-sem-c088/2026-10-04T04-07-51Z__solicitacao__opus__sem__rep-01__20261004-040751-solicitacao-sem-c088/evidence/prompt.txt) [#8](../../../../../restauracoes/20261004-040751-solicitacao-sem-c088/2026-10-04T04-07-51Z__solicitacao__opus__sem__rep-01__20261004-040751-solicitacao-sem-c088/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261004-040751-solicitacao-sem-c088/2026-10-04T04-07-51Z__solicitacao__opus__sem__rep-01__20261004-040751-solicitacao-sem-c088/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261004-040751-solicitacao-sem-c088/2026-10-04T04-07-51Z__solicitacao__opus__sem__rep-01__20261004-040751-solicitacao-sem-c088/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261004-040751-solicitacao-sem-c088/2026-10-04T04-07-51Z__solicitacao__opus__sem__rep-01__20261004-040751-solicitacao-sem-c088/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261004-040751-solicitacao-sem-c088/2026-10-04T04-07-51Z__solicitacao__opus__sem__rep-01__20261004-040751-solicitacao-sem-c088/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261004-040751-solicitacao-sem-c088/2026-10-04T04-07-51Z__solicitacao__opus__sem__rep-01__20261004-040751-solicitacao-sem-c088/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261004-040751-solicitacao-sem-c088/2026-10-04T04-07-51Z__solicitacao__opus__sem__rep-01__20261004-040751-solicitacao-sem-c088/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261004-040751-solicitacao-sem-c088/2026-10-04T04-07-51Z__solicitacao__opus__sem__rep-01__20261004-040751-solicitacao-sem-c088/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261004-040751-solicitacao-sem-c088/2026-10-04T04-07-51Z__solicitacao__opus__sem__rep-01__20261004-040751-solicitacao-sem-c088/evidence/raw/probe/probe.json) [#17](../../../../../restauracoes/20261004-040751-solicitacao-sem-c088/2026-10-04T04-07-51Z__solicitacao__opus__sem__rep-01__20261004-040751-solicitacao-sem-c088/evidence/raw/probe/sonda-escrita-1791086895517.txt) [#18](../../../../../restauracoes/20261004-040751-solicitacao-sem-c088/2026-10-04T04-07-51Z__solicitacao__opus__sem__rep-01__20261004-040751-solicitacao-sem-c088/evidence/raw/task/mcp.json) [#19](../../../../../restauracoes/20261004-040751-solicitacao-sem-c088/2026-10-04T04-07-51Z__solicitacao__opus__sem__rep-01__20261004-040751-solicitacao-sem-c088/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261004-040751-solicitacao-sem-c088/2026-10-04T04-07-51Z__solicitacao__opus__sem__rep-01__20261004-040751-solicitacao-sem-c088/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261004-040751-solicitacao-sem-c088/2026-10-04T04-07-51Z__solicitacao__opus__sem__rep-01__20261004-040751-solicitacao-sem-c088/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261004-040751-solicitacao-sem-c088/2026-10-04T04-07-51Z__solicitacao__opus__sem__rep-01__20261004-040751-solicitacao-sem-c088/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261004-040751-solicitacao-sem-c088/2026-10-04T04-07-51Z__solicitacao__opus__sem__rep-01__20261004-040751-solicitacao-sem-c088/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261004-040751-solicitacao-sem-c088/2026-10-04T04-07-51Z__solicitacao__opus__sem__rep-01__20261004-040751-solicitacao-sem-c088/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261004-040751-solicitacao-sem-c088/2026-10-04T04-07-51Z__solicitacao__opus__sem__rep-01__20261004-040751-solicitacao-sem-c088/evidence/logs/probe.log) [#7](../../../../../restauracoes/20261004-040751-solicitacao-sem-c088/2026-10-04T04-07-51Z__solicitacao__opus__sem__rep-01__20261004-040751-solicitacao-sem-c088/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (10; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| .upload-button | wcag:2.4.3 | O botão 'Selecione o arquivo' tem tabindex=&quot;1&quot;. O primeiro Tab após o carregamento foca esse botão no meio do formulário \(a página rola até y=518\), antes do skiplink 'Ir para o conteúdo', do cabeçalho e dos campos anter… |
| .upload-button | wcag:4.1.2 | O botão que abre a seleção de arquivo tem aria-hidden=&quot;true&quot;, mas é focável \(tabindex=1\) e é o único controle operável do upload: o input#documentos, que tem o rótulo 'Documentos comprobatórios \(opcional\)', está com dis… |
| #forma-presencial | wcag:4.1.2 | O &lt;label&gt;Presencial&lt;/label&gt; não tem for=&quot;forma-presencial&quot; nem envolve o input. A árvore de acessibilidade expõe 'radio' sem nome, e clicar no texto 'Presencial' ou no círculo \(elementFromPoint devolve o label\) não marc… |
| #servico, #unidade | wcag:2.4.7 | Ao receber foco por teclado, os campos 'Tipo de serviço' e 'Unidade de atendimento' ficam com box-shadow none, outline none e borda rgb\(136,136,136\), igual ao estado sem foco. A regra '.campo-servico .br-input input:foc… |
| #servico, #unidade | wcag:1.3.1 | No estado de erro, os inputs recebem aria-invalid=&quot;true&quot;, mas as mensagens 'Selecione o tipo de serviço.' e 'Selecione a unidade de atendimento.' não têm id e não são referenciadas por aria-describedby. Nos outros campo… |
| #servico, #unidade | wcag:2.4.3 | Ao escolher uma opção da lista com ArrowDown + Enter, a lista fecha e document.activeElement passa a ser o body. O foco não volta ao campo. |
| .acao-cancelar | wcag:2.4.3 | O diálogo 'Descartar solicitação?' é aberto pelo Cancelar. Ao fechá-lo com Escape, com 'Continuar preenchendo' ou com 'Descartar', o foco vai para o body, não volta ao botão Cancelar. |
| .paginacao-anteriores a.page | wcag:1.3.1 | A página atual da paginação só é indicada pela classe 'active' \(fundo azul\). Nenhum link tem aria-current, e a árvore de acessibilidade expõe 'Página 1', 'Página 2' e 'Página 3' do mesmo jeito, antes e depois de clicar … |
| .grupo-forma .br-radio label, .grupo-recursos .br-checkbox label, .campo-declar… | wcag:1.4.11 | O indicador visual dos radios e checkboxes \(label::before, 24x24\) tem borda de 1px rgb\(204,204,204\) sobre fundo branco: contraste de 1,6:1. A borda continua #ccc também no estado de erro dos radios. |
| .mensagem-retorno.danger | incerta | Na mensagem de erro após o envio, a ordem é close \(x=201\), content, icon \(x=1019\): o botão de fechar aparece à esquerda e o ícone de erro à direita, e o fechar é um div role=button. Na mensagem de sucesso da mesma tela,… |

**com** (20261004-042139-solicitacao-com-791c): [pacote](../../../../../restauracoes/20261004-042139-solicitacao-com-791c/2026-10-04T04-21-39Z__solicitacao__opus__com__rep-01__20261004-042139-solicitacao-com-791c) · [run.json](../../../../../restauracoes/20261004-042139-solicitacao-com-791c/2026-10-04T04-21-39Z__solicitacao__opus__com__rep-01__20261004-042139-solicitacao-com-791c/run.json) · [findings.json](../../../../../restauracoes/20261004-042139-solicitacao-com-791c/2026-10-04T04-21-39Z__solicitacao__opus__com__rep-01__20261004-042139-solicitacao-com-791c/findings.json) · [isolation.json](../../../../../restauracoes/20261004-042139-solicitacao-com-791c/2026-10-04T04-21-39Z__solicitacao__opus__com__rep-01__20261004-042139-solicitacao-com-791c/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261004-042139-solicitacao-com-791c/2026-10-04T04-21-39Z__solicitacao__opus__com__rep-01__20261004-042139-solicitacao-com-791c/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261004-042139-solicitacao-com-791c/2026-10-04T04-21-39Z__solicitacao__opus__com__rep-01__20261004-042139-solicitacao-com-791c/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261004-042139-solicitacao-com-791c/2026-10-04T04-21-39Z__solicitacao__opus__com__rep-01__20261004-042139-solicitacao-com-791c/evidence/cliente.json) [#3](../../../../../restauracoes/20261004-042139-solicitacao-com-791c/2026-10-04T04-21-39Z__solicitacao__opus__com__rep-01__20261004-042139-solicitacao-com-791c/evidence/container-config.json) [#4](../../../../../restauracoes/20261004-042139-solicitacao-com-791c/2026-10-04T04-21-39Z__solicitacao__opus__com__rep-01__20261004-042139-solicitacao-com-791c/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261004-042139-solicitacao-com-791c/2026-10-04T04-21-39Z__solicitacao__opus__com__rep-01__20261004-042139-solicitacao-com-791c/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261004-042139-solicitacao-com-791c/2026-10-04T04-21-39Z__solicitacao__opus__com__rep-01__20261004-042139-solicitacao-com-791c/evidence/preflight.json) [#7](../../../../../restauracoes/20261004-042139-solicitacao-com-791c/2026-10-04T04-21-39Z__solicitacao__opus__com__rep-01__20261004-042139-solicitacao-com-791c/evidence/prompt.txt) [#8](../../../../../restauracoes/20261004-042139-solicitacao-com-791c/2026-10-04T04-21-39Z__solicitacao__opus__com__rep-01__20261004-042139-solicitacao-com-791c/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261004-042139-solicitacao-com-791c/2026-10-04T04-21-39Z__solicitacao__opus__com__rep-01__20261004-042139-solicitacao-com-791c/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261004-042139-solicitacao-com-791c/2026-10-04T04-21-39Z__solicitacao__opus__com__rep-01__20261004-042139-solicitacao-com-791c/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261004-042139-solicitacao-com-791c/2026-10-04T04-21-39Z__solicitacao__opus__com__rep-01__20261004-042139-solicitacao-com-791c/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261004-042139-solicitacao-com-791c/2026-10-04T04-21-39Z__solicitacao__opus__com__rep-01__20261004-042139-solicitacao-com-791c/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261004-042139-solicitacao-com-791c/2026-10-04T04-21-39Z__solicitacao__opus__com__rep-01__20261004-042139-solicitacao-com-791c/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261004-042139-solicitacao-com-791c/2026-10-04T04-21-39Z__solicitacao__opus__com__rep-01__20261004-042139-solicitacao-com-791c/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261004-042139-solicitacao-com-791c/2026-10-04T04-21-39Z__solicitacao__opus__com__rep-01__20261004-042139-solicitacao-com-791c/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261004-042139-solicitacao-com-791c/2026-10-04T04-21-39Z__solicitacao__opus__com__rep-01__20261004-042139-solicitacao-com-791c/evidence/raw/oracle/inventory.json) [#17](../../../../../restauracoes/20261004-042139-solicitacao-com-791c/2026-10-04T04-21-39Z__solicitacao__opus__com__rep-01__20261004-042139-solicitacao-com-791c/evidence/raw/oracle/oracle-telemetry.ndjson) [#18](../../../../../restauracoes/20261004-042139-solicitacao-com-791c/2026-10-04T04-21-39Z__solicitacao__opus__com__rep-01__20261004-042139-solicitacao-com-791c/evidence/raw/oracle/tool-events.ndjson) [#19](../../../../../restauracoes/20261004-042139-solicitacao-com-791c/2026-10-04T04-21-39Z__solicitacao__opus__com__rep-01__20261004-042139-solicitacao-com-791c/evidence/raw/probe/probe.json) [#20](../../../../../restauracoes/20261004-042139-solicitacao-com-791c/2026-10-04T04-21-39Z__solicitacao__opus__com__rep-01__20261004-042139-solicitacao-com-791c/evidence/raw/probe/sonda-escrita-1791087727588.txt) [#21](../../../../../restauracoes/20261004-042139-solicitacao-com-791c/2026-10-04T04-21-39Z__solicitacao__opus__com__rep-01__20261004-042139-solicitacao-com-791c/evidence/raw/task/mcp.json) [#22](../../../../../restauracoes/20261004-042139-solicitacao-com-791c/2026-10-04T04-21-39Z__solicitacao__opus__com__rep-01__20261004-042139-solicitacao-com-791c/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261004-042139-solicitacao-com-791c/2026-10-04T04-21-39Z__solicitacao__opus__com__rep-01__20261004-042139-solicitacao-com-791c/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261004-042139-solicitacao-com-791c/2026-10-04T04-21-39Z__solicitacao__opus__com__rep-01__20261004-042139-solicitacao-com-791c/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261004-042139-solicitacao-com-791c/2026-10-04T04-21-39Z__solicitacao__opus__com__rep-01__20261004-042139-solicitacao-com-791c/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261004-042139-solicitacao-com-791c/2026-10-04T04-21-39Z__solicitacao__opus__com__rep-01__20261004-042139-solicitacao-com-791c/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261004-042139-solicitacao-com-791c/2026-10-04T04-21-39Z__solicitacao__opus__com__rep-01__20261004-042139-solicitacao-com-791c/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261004-042139-solicitacao-com-791c/2026-10-04T04-21-39Z__solicitacao__opus__com__rep-01__20261004-042139-solicitacao-com-791c/evidence/logs/oracle.log) [#7](../../../../../restauracoes/20261004-042139-solicitacao-com-791c/2026-10-04T04-21-39Z__solicitacao__opus__com__rep-01__20261004-042139-solicitacao-com-791c/evidence/logs/probe.log) [#8](../../../../../restauracoes/20261004-042139-solicitacao-com-791c/2026-10-04T04-21-39Z__solicitacao__opus__com__rep-01__20261004-042139-solicitacao-com-791c/evidence/logs/screens.log) · [binding](analysis-binding.com.json)

Achados enviados (11; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| #forma-presencial | label | O rádio 'Presencial' não tem nome acessível: o &lt;label&gt;Presencial&lt;/label&gt; irmão não tem atributo for, e clicar no rótulo não marca a opção. |
| .upload-button | aria-hidden-focus | O botão 'Selecione o arquivo' tem aria-hidden=&quot;true&quot;, mas é focável \(tabindex=1\). O input file #documentos tem display:none, então o único controle de upload fica oculto para as tecnologias assistivas. |
| .upload-button | govbr-3.7.0-accessibility-global-79db88c7f55d | O botão de upload tem tabindex=&quot;1&quot;. O primeiro Tab após o carregamento cai nele, no meio do formulário, antes do skiplink, do cabeçalho e dos campos anteriores. |
| #servico, #unidade | govbr-3.7.0-accessibility-global-21fbcc2fe37b | Com foco por teclado, os campos 'Tipo de serviço' e 'Unidade de atendimento' ficam com outline:none, box-shadow:none e borda inalterada \(#888\). Não há indicador de foco visível. A regra da folha da tela \(.campo-servico/… |
| .campo-servico .feedback, .campo-unidade .feedback | govbr-3.7.0-accessibility-global-cc837bbaf713 | Após o envio vazio, as mensagens 'Selecione o tipo de serviço.' e 'Selecione a unidade de atendimento.' não têm id, e #servico/#unidade \(aria-invalid=true\) não têm aria-describedby. Os outros campos associam o erro por … |
| .flatpickr-prev-month &gt; button, .flatpickr-next-month &gt; button | emag-2.2 | Os botões de mês anterior/seguinte do calendário só têm ícone e nenhum nome acessível \(sem aria-label nem texto\). |
| .mensagem-retorno .close &gt; \[role=&quot;button&quot;\] | ds-structure-button-tag | O controle 'Fechar a mensagem' da mensagem de erro é &lt;div class=&quot;br-button circle small&quot; role=&quot;button&quot; tabindex=&quot;0&quot;&gt;. A mensagem de sucesso usa &lt;button&gt;. |
| button.acao-cancelar | wcag:2.4.3 | Ao fechar o modal 'Descartar solicitação?' \(Escape, 'Continuar preenchendo' ou 'Descartar'\), o foco vai para o body, não volta a 'Cancelar', e o Tab seguinte recomeça do início do documento. |
| .dialogo-descarte | govbr-3.7.0-foundation-global-21b1a2733f7b | O modal usa color rgb\(51,67,51\) \(#334333\), herdada pelo título 'Descartar solicitação?'. Esse valor não é token do DS \(mais próximo: --green-cool-70 #37493b\). |
| header.barra-superior | ds-page-header | O cabeçalho é um &lt;header class=&quot;barra-superior&quot;&gt; próprio, só com o link 'gov.br'. Não há .br-header nem &lt;br-header&gt; no documento. |
| html | ds-page-footer | Não há rodapé: nenhum .br-footer nem &lt;br-footer&gt; no documento. |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `f77c41a912d637538f740deb0c0be24e6f46251a23a40955cae8ecbe54add025`

