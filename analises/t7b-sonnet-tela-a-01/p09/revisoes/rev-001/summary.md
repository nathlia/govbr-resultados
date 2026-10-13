# Resumo da análise — Solicitar serviço (solicitacao)

Revisão 1 · gerado em 2026-10-13T00:06:01.552Z (UTC)

## 1. Status técnico

Análise: **pronta**

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261012-140415-solicitacao-sem-9432 | sem | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 10 cartão(ões), nenhum decidido |
| 20261012-141304-solicitacao-com-039a | com | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 9 cartão(ões), nenhum decidido |

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
| Início (UTC) | 2026-10-12T14:04:41Z | 2026-10-12T14:13:30Z |
| Início (local) | 12/10/2026, 11:04:41 (horário de Brasília) | 12/10/2026, 11:13:30 (horário de Brasília) |
| Commit do harness | 7f189a9a0984459418e210aa1453acbee54e1160 | 7f189a9a0984459418e210aa1453acbee54e1160 |
| Repetição · tentativa | 9 · 1 | 9 · 1 |
| Campanha · slot · par | t7b-sonnet-tela-a-01 · p09-sem · p09 | t7b-sonnet-tela-a-01 · p09-com · p09 |

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
| Cartões pendentes de revisão | 10 | 9 |
| Maturidade | aguardando revisão — 10 cartão(ões), nenhum decidido | aguardando revisão — 9 cartão(ões), nenhum decidido |
| Entra na comparação principal | sim | sim |
| Achados enviados | 10 | 9 |

Recall e precisão só aparecem com a revisão fechada; enquanto houver cartão pendente ficam “indisponível” (nunca 0). “Achados enviados = 0” é um resultado válido (o agente olhou e não alegou nada); submissão recusada ou ausente é outra coisa.

Linha de base determinística (união das varreduras comparáveis), por unidade da referência:

| Unidades | sem | com |
|---|---|---|
| Agente e linha de base | 0 | 0 |
| Só o agente | 0 | 0 |
| Só a linha de base | 0 | 0 |
| Nenhum | 16 | 16 |
| Estado | provisório | provisório |

Linha de base: usada (lb-20261012-140347-solicitacao-a5ae5a)

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
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 1 (ponte MCP do oráculo) |
| Protocolo | unverified | unverified |
| Ferramentas anunciadas | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for, get\_ds\_rules, get\_design\_tokens, get\_emag\_rules, get\_pag… |
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_snapshot, browser\_console\_messages, browser\_take\_screenshot, browser\_click, browser\_press\_key, browser\_type | browser\_navigate, browser\_evaluate, browser\_snapshot, scan\_page, browser\_console\_messages, browser\_click, browser\_press\_key, browser\_fill\_form |
| Erros de ferramenta | 1 (tool-events.ndjson \(eventos com isError: true\)) | 4 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 8 aprovado(s); falhos: nenhum | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | nenhuma | nenhuma |

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 6. Custo e tempo

| | sem | com |
|---|---|---|
| Tempo de relógio (s) | 234 (runner) | 240 (runner) |
| Turnos | 76 (stream-json do cliente \(result.num\_turns\)) | 57 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 75 (ponte MCP) | 56 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 1 (ponte MCP do oráculo) |
| Tokens de entrada | 54 (stream-json do cliente \(result.usage\)) | 58 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 14983 (stream-json do cliente \(result.usage\)) | 12711 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 1158176 (stream-json do cliente \(result.usage\)) | 1581998 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 60588 (stream-json do cliente \(result.usage\)) | 62502 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 0.6239252 (estimativa do cliente \(result.total\_cost\_usd\)) | 0.6936336000000002 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 27 cartão(ões), estimativa 162 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 7. Detalhes e evidências

**sem** (20261012-140415-solicitacao-sem-9432): [pacote](../../../../../restauracoes/20261012-140415-solicitacao-sem-9432/2026-10-12T14-04-15Z__solicitacao__sonnet__sem__rep-09__20261012-140415-solicitacao-sem-9432) · [run.json](../../../../../restauracoes/20261012-140415-solicitacao-sem-9432/2026-10-12T14-04-15Z__solicitacao__sonnet__sem__rep-09__20261012-140415-solicitacao-sem-9432/run.json) · [findings.json](../../../../../restauracoes/20261012-140415-solicitacao-sem-9432/2026-10-12T14-04-15Z__solicitacao__sonnet__sem__rep-09__20261012-140415-solicitacao-sem-9432/findings.json) · [isolation.json](../../../../../restauracoes/20261012-140415-solicitacao-sem-9432/2026-10-12T14-04-15Z__solicitacao__sonnet__sem__rep-09__20261012-140415-solicitacao-sem-9432/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261012-140415-solicitacao-sem-9432/2026-10-12T14-04-15Z__solicitacao__sonnet__sem__rep-09__20261012-140415-solicitacao-sem-9432/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261012-140415-solicitacao-sem-9432/2026-10-12T14-04-15Z__solicitacao__sonnet__sem__rep-09__20261012-140415-solicitacao-sem-9432/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261012-140415-solicitacao-sem-9432/2026-10-12T14-04-15Z__solicitacao__sonnet__sem__rep-09__20261012-140415-solicitacao-sem-9432/evidence/cliente.json) [#3](../../../../../restauracoes/20261012-140415-solicitacao-sem-9432/2026-10-12T14-04-15Z__solicitacao__sonnet__sem__rep-09__20261012-140415-solicitacao-sem-9432/evidence/container-config.json) [#4](../../../../../restauracoes/20261012-140415-solicitacao-sem-9432/2026-10-12T14-04-15Z__solicitacao__sonnet__sem__rep-09__20261012-140415-solicitacao-sem-9432/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261012-140415-solicitacao-sem-9432/2026-10-12T14-04-15Z__solicitacao__sonnet__sem__rep-09__20261012-140415-solicitacao-sem-9432/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261012-140415-solicitacao-sem-9432/2026-10-12T14-04-15Z__solicitacao__sonnet__sem__rep-09__20261012-140415-solicitacao-sem-9432/evidence/preflight.json) [#7](../../../../../restauracoes/20261012-140415-solicitacao-sem-9432/2026-10-12T14-04-15Z__solicitacao__sonnet__sem__rep-09__20261012-140415-solicitacao-sem-9432/evidence/prompt.txt) [#8](../../../../../restauracoes/20261012-140415-solicitacao-sem-9432/2026-10-12T14-04-15Z__solicitacao__sonnet__sem__rep-09__20261012-140415-solicitacao-sem-9432/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261012-140415-solicitacao-sem-9432/2026-10-12T14-04-15Z__solicitacao__sonnet__sem__rep-09__20261012-140415-solicitacao-sem-9432/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261012-140415-solicitacao-sem-9432/2026-10-12T14-04-15Z__solicitacao__sonnet__sem__rep-09__20261012-140415-solicitacao-sem-9432/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261012-140415-solicitacao-sem-9432/2026-10-12T14-04-15Z__solicitacao__sonnet__sem__rep-09__20261012-140415-solicitacao-sem-9432/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261012-140415-solicitacao-sem-9432/2026-10-12T14-04-15Z__solicitacao__sonnet__sem__rep-09__20261012-140415-solicitacao-sem-9432/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261012-140415-solicitacao-sem-9432/2026-10-12T14-04-15Z__solicitacao__sonnet__sem__rep-09__20261012-140415-solicitacao-sem-9432/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261012-140415-solicitacao-sem-9432/2026-10-12T14-04-15Z__solicitacao__sonnet__sem__rep-09__20261012-140415-solicitacao-sem-9432/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261012-140415-solicitacao-sem-9432/2026-10-12T14-04-15Z__solicitacao__sonnet__sem__rep-09__20261012-140415-solicitacao-sem-9432/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261012-140415-solicitacao-sem-9432/2026-10-12T14-04-15Z__solicitacao__sonnet__sem__rep-09__20261012-140415-solicitacao-sem-9432/evidence/raw/probe/probe.json) [#17](../../../../../restauracoes/20261012-140415-solicitacao-sem-9432/2026-10-12T14-04-15Z__solicitacao__sonnet__sem__rep-09__20261012-140415-solicitacao-sem-9432/evidence/raw/probe/sonda-escrita-1791813880498.txt) [#18](../../../../../restauracoes/20261012-140415-solicitacao-sem-9432/2026-10-12T14-04-15Z__solicitacao__sonnet__sem__rep-09__20261012-140415-solicitacao-sem-9432/evidence/raw/task/mcp.json) [#19](../../../../../restauracoes/20261012-140415-solicitacao-sem-9432/2026-10-12T14-04-15Z__solicitacao__sonnet__sem__rep-09__20261012-140415-solicitacao-sem-9432/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261012-140415-solicitacao-sem-9432/2026-10-12T14-04-15Z__solicitacao__sonnet__sem__rep-09__20261012-140415-solicitacao-sem-9432/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261012-140415-solicitacao-sem-9432/2026-10-12T14-04-15Z__solicitacao__sonnet__sem__rep-09__20261012-140415-solicitacao-sem-9432/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261012-140415-solicitacao-sem-9432/2026-10-12T14-04-15Z__solicitacao__sonnet__sem__rep-09__20261012-140415-solicitacao-sem-9432/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261012-140415-solicitacao-sem-9432/2026-10-12T14-04-15Z__solicitacao__sonnet__sem__rep-09__20261012-140415-solicitacao-sem-9432/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261012-140415-solicitacao-sem-9432/2026-10-12T14-04-15Z__solicitacao__sonnet__sem__rep-09__20261012-140415-solicitacao-sem-9432/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261012-140415-solicitacao-sem-9432/2026-10-12T14-04-15Z__solicitacao__sonnet__sem__rep-09__20261012-140415-solicitacao-sem-9432/evidence/logs/probe.log) [#7](../../../../../restauracoes/20261012-140415-solicitacao-sem-9432/2026-10-12T14-04-15Z__solicitacao__sonnet__sem__rep-09__20261012-140415-solicitacao-sem-9432/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (10; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| #forma-presencial | wcag:4.1.2 | O rótulo &quot;Presencial&quot; é um label sem atributo for; o radio #forma-presencial aparece na árvore de acessibilidade sem nome \(radio sem nome\), ao contrário dos outros dois. |
| .upload-button | wcag:4.1.2 | O botão &quot;Selecione o arquivo&quot; tem aria-hidden=&quot;true&quot; mas é focável \(tabindex=1\); o input file #documentos está com display:none, então o único controle operável fica oculto das tecnologias assistivas e sem nome na árvor… |
| .upload-button | wcag:2.4.3 | O botão de upload tem tabindex=&quot;1&quot;; ao pressionar Tab após o carregamento o foco vai primeiro para ele, antes do link &quot;Ir para o conteúdo&quot; e do restante da página. |
| #servico, #unidade | wcag:2.4.7 | Ao receber foco por teclado, os campos de combobox têm outline none e box-shadow none; no input, no .input-group e no .br-input não há indicador visível, enquanto os demais campos exibem box-shadow âmbar de 2px. |
| .flatpickr-prev-month button, .flatpickr-next-month button | wcag:4.1.2 | Os botões de mês anterior e mês seguinte do calendário são só ícone, sem texto, aria-label ou title; não têm nome acessível. |
| .flatpickr-monthDropdown-months, .flatpickr-current-month .cur-year | wcag:3.1.2 | O seletor de mês e o campo de ano do calendário têm aria-label em inglês \(&quot;Month&quot;, &quot;Year&quot;\) em uma página pt-BR. |
| #cpf | wcag:3.3.1 | O valor &quot;123&quot; foi aceito: o envio teve sucesso, sem erro, embora o texto de apoio exija 11 dígitos. |
| #data-preferencial | wcag:3.3.1 | O texto &quot;99/99/2020&quot; foi aceito e convertido em silêncio para &quot;08/03/2028&quot;; o envio teve sucesso, sem erro. |
| #servico, #unidade | wcag:3.3.1 | Após o envio vazio, #servico e #unidade ficam com aria-invalid=&quot;true&quot; mas sem aria-describedby; as mensagens &quot;Selecione o tipo de serviço.&quot; e &quot;Selecione a unidade de atendimento.&quot; não têm id e não se associam ao campo \(… |
| .paginacao-anteriores .page.active | incerta | Após clicar em &quot;Página 2&quot;, a página atual só se distingue visualmente \(classe active\); o link não tem aria-current=&quot;page&quot;. |

**com** (20261012-141304-solicitacao-com-039a): [pacote](../../../../../restauracoes/20261012-141304-solicitacao-com-039a/2026-10-12T14-13-04Z__solicitacao__sonnet__com__rep-09__20261012-141304-solicitacao-com-039a) · [run.json](../../../../../restauracoes/20261012-141304-solicitacao-com-039a/2026-10-12T14-13-04Z__solicitacao__sonnet__com__rep-09__20261012-141304-solicitacao-com-039a/run.json) · [findings.json](../../../../../restauracoes/20261012-141304-solicitacao-com-039a/2026-10-12T14-13-04Z__solicitacao__sonnet__com__rep-09__20261012-141304-solicitacao-com-039a/findings.json) · [isolation.json](../../../../../restauracoes/20261012-141304-solicitacao-com-039a/2026-10-12T14-13-04Z__solicitacao__sonnet__com__rep-09__20261012-141304-solicitacao-com-039a/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261012-141304-solicitacao-com-039a/2026-10-12T14-13-04Z__solicitacao__sonnet__com__rep-09__20261012-141304-solicitacao-com-039a/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261012-141304-solicitacao-com-039a/2026-10-12T14-13-04Z__solicitacao__sonnet__com__rep-09__20261012-141304-solicitacao-com-039a/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261012-141304-solicitacao-com-039a/2026-10-12T14-13-04Z__solicitacao__sonnet__com__rep-09__20261012-141304-solicitacao-com-039a/evidence/cliente.json) [#3](../../../../../restauracoes/20261012-141304-solicitacao-com-039a/2026-10-12T14-13-04Z__solicitacao__sonnet__com__rep-09__20261012-141304-solicitacao-com-039a/evidence/container-config.json) [#4](../../../../../restauracoes/20261012-141304-solicitacao-com-039a/2026-10-12T14-13-04Z__solicitacao__sonnet__com__rep-09__20261012-141304-solicitacao-com-039a/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261012-141304-solicitacao-com-039a/2026-10-12T14-13-04Z__solicitacao__sonnet__com__rep-09__20261012-141304-solicitacao-com-039a/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261012-141304-solicitacao-com-039a/2026-10-12T14-13-04Z__solicitacao__sonnet__com__rep-09__20261012-141304-solicitacao-com-039a/evidence/preflight.json) [#7](../../../../../restauracoes/20261012-141304-solicitacao-com-039a/2026-10-12T14-13-04Z__solicitacao__sonnet__com__rep-09__20261012-141304-solicitacao-com-039a/evidence/prompt.txt) [#8](../../../../../restauracoes/20261012-141304-solicitacao-com-039a/2026-10-12T14-13-04Z__solicitacao__sonnet__com__rep-09__20261012-141304-solicitacao-com-039a/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261012-141304-solicitacao-com-039a/2026-10-12T14-13-04Z__solicitacao__sonnet__com__rep-09__20261012-141304-solicitacao-com-039a/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261012-141304-solicitacao-com-039a/2026-10-12T14-13-04Z__solicitacao__sonnet__com__rep-09__20261012-141304-solicitacao-com-039a/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261012-141304-solicitacao-com-039a/2026-10-12T14-13-04Z__solicitacao__sonnet__com__rep-09__20261012-141304-solicitacao-com-039a/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261012-141304-solicitacao-com-039a/2026-10-12T14-13-04Z__solicitacao__sonnet__com__rep-09__20261012-141304-solicitacao-com-039a/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261012-141304-solicitacao-com-039a/2026-10-12T14-13-04Z__solicitacao__sonnet__com__rep-09__20261012-141304-solicitacao-com-039a/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261012-141304-solicitacao-com-039a/2026-10-12T14-13-04Z__solicitacao__sonnet__com__rep-09__20261012-141304-solicitacao-com-039a/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261012-141304-solicitacao-com-039a/2026-10-12T14-13-04Z__solicitacao__sonnet__com__rep-09__20261012-141304-solicitacao-com-039a/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261012-141304-solicitacao-com-039a/2026-10-12T14-13-04Z__solicitacao__sonnet__com__rep-09__20261012-141304-solicitacao-com-039a/evidence/raw/oracle/inventory.json) [#17](../../../../../restauracoes/20261012-141304-solicitacao-com-039a/2026-10-12T14-13-04Z__solicitacao__sonnet__com__rep-09__20261012-141304-solicitacao-com-039a/evidence/raw/oracle/oracle-telemetry.ndjson) [#18](../../../../../restauracoes/20261012-141304-solicitacao-com-039a/2026-10-12T14-13-04Z__solicitacao__sonnet__com__rep-09__20261012-141304-solicitacao-com-039a/evidence/raw/oracle/tool-events.ndjson) [#19](../../../../../restauracoes/20261012-141304-solicitacao-com-039a/2026-10-12T14-13-04Z__solicitacao__sonnet__com__rep-09__20261012-141304-solicitacao-com-039a/evidence/raw/probe/probe.json) [#20](../../../../../restauracoes/20261012-141304-solicitacao-com-039a/2026-10-12T14-13-04Z__solicitacao__sonnet__com__rep-09__20261012-141304-solicitacao-com-039a/evidence/raw/probe/sonda-escrita-1791814409511.txt) [#21](../../../../../restauracoes/20261012-141304-solicitacao-com-039a/2026-10-12T14-13-04Z__solicitacao__sonnet__com__rep-09__20261012-141304-solicitacao-com-039a/evidence/raw/task/mcp.json) [#22](../../../../../restauracoes/20261012-141304-solicitacao-com-039a/2026-10-12T14-13-04Z__solicitacao__sonnet__com__rep-09__20261012-141304-solicitacao-com-039a/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261012-141304-solicitacao-com-039a/2026-10-12T14-13-04Z__solicitacao__sonnet__com__rep-09__20261012-141304-solicitacao-com-039a/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261012-141304-solicitacao-com-039a/2026-10-12T14-13-04Z__solicitacao__sonnet__com__rep-09__20261012-141304-solicitacao-com-039a/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261012-141304-solicitacao-com-039a/2026-10-12T14-13-04Z__solicitacao__sonnet__com__rep-09__20261012-141304-solicitacao-com-039a/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261012-141304-solicitacao-com-039a/2026-10-12T14-13-04Z__solicitacao__sonnet__com__rep-09__20261012-141304-solicitacao-com-039a/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261012-141304-solicitacao-com-039a/2026-10-12T14-13-04Z__solicitacao__sonnet__com__rep-09__20261012-141304-solicitacao-com-039a/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261012-141304-solicitacao-com-039a/2026-10-12T14-13-04Z__solicitacao__sonnet__com__rep-09__20261012-141304-solicitacao-com-039a/evidence/logs/oracle.log) [#7](../../../../../restauracoes/20261012-141304-solicitacao-com-039a/2026-10-12T14-13-04Z__solicitacao__sonnet__com__rep-09__20261012-141304-solicitacao-com-039a/evidence/logs/probe.log) [#8](../../../../../restauracoes/20261012-141304-solicitacao-com-039a/2026-10-12T14-13-04Z__solicitacao__sonnet__com__rep-09__20261012-141304-solicitacao-com-039a/evidence/logs/screens.log) · [binding](analysis-binding.com.json)

Achados enviados (9; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| #forma-presencial | label | O input radio 'Presencial' tem &lt;label&gt; sem atributo for e sem envolver o input; o radio fica sem nome acessível \(snapshot: radio sem nome; axe label, critical\). |
| .upload-button | aria-hidden-focus | O botão visível 'Selecione o arquivo' tem aria-hidden=&quot;true&quot; e é focável \(tabindex=1\); o input file real está com display:none, então o upload não é exposto a tecnologias assistivas. |
| .upload-button | wcag:2.4.3 | O botão tem tabindex=&quot;1&quot;; na primeira tecla Tab após carregar, o foco vai para ele, antes do link de salto, do cabeçalho e dos demais campos; o foco só retorna à ordem natural depois. |
| #servico, #unidade | wcag:3.3.1 | Após enviar vazio, os campos têm aria-invalid=true, mas sem aria-describedby; as mensagens 'Selecione o tipo de serviço.' e 'Selecione a unidade de atendimento.' não são associadas aos campos \(os demais campos associam … |
| input\[name='forma'\], #declaracao | wcag:3.3.1 | Depois de corrigir \(marcar 'Por videochamada' e a declaração\), as mensagens de erro 'Escolha a forma de atendimento.' e 'Confirme a declaração...' permanecem e os inputs continuam com aria-invalid=true; os campos de tex… |
| #cpf | wcag:3.3.1 | O CPF '123' \(3 dígitos\) é aceito: o formulário foi enviado com a mensagem 'Solicitação enviada.', apesar do texto de apoio 'Somente números, 11 dígitos.' |
| .paginacao-anteriores .page.active | incerta | A página atual da paginação é marcada só pela classe 'active'; não há aria-current \(nenhum link tem aria-current\) e os três links apontam para o mesmo href #titulo-historico. |
| header.barra-superior | ds-page-header | Nenhum .br-header ou &lt;br-header&gt;; o cabeçalho é um &lt;header&gt; próprio só com a marca gov.br. |
| html | ds-page-footer | Nenhum .br-footer ou &lt;br-footer&gt; no documento. |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `fb09a6d6f8c8a23fd4cef9aa879d821298924b7f8839afec02350c3b508a1622`

