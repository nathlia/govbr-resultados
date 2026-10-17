# Resumo da análise — Solicitar serviço (solicitacao)

Revisão 1 · gerado em 2026-10-16T00:00:00Z (UTC)

## 1. Status técnico

Análise: **pronta**

Aviso: derivado retrospectivo nat74-retrospectiva-1.0.0: campanha congelada com flow-semantic-1.5.0, repreparada com flow-semantic-1.7.0 \(não substitui a análise oficial\)

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261005-021940-solicitacao-sem-d009 | sem | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 9 cartão(ões), nenhum decidido |
| 20261005-020722-solicitacao-com-6484 | com | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 11 cartão(ões), nenhum decidido |

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
| Início (UTC) | 2026-10-05T02:20:05Z | 2026-10-05T02:07:48Z |
| Início (local) | 04/10/2026, 23:20:05 (horário de Brasília) | 04/10/2026, 23:07:48 (horário de Brasília) |
| Commit do harness | 1b6ed3e79deaab08c7109e7c0008bef947921077 | 1b6ed3e79deaab08c7109e7c0008bef947921077 |
| Repetição · tentativa | 10 · 1 | 10 · 1 |
| Campanha · slot · par | t7-tela-a-01 · p10-sem · p10 | t7-tela-a-01 · p10-com · p10 |

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
| Cartões pendentes de revisão | 9 | 11 |
| Maturidade | aguardando revisão — 9 cartão(ões), nenhum decidido | aguardando revisão — 11 cartão(ões), nenhum decidido |
| Entra na comparação principal | sim | sim |
| Achados enviados | 9 | 11 |

Recall e precisão só aparecem com a revisão fechada; enquanto houver cartão pendente ficam “indisponível” (nunca 0). “Achados enviados = 0” é um resultado válido (o agente olhou e não alegou nada); submissão recusada ou ausente é outra coisa.

Linha de base determinística (união das varreduras comparáveis), por unidade da referência:

| Unidades | sem | com |
|---|---|---|
| Agente e linha de base | 0 | 0 |
| Só o agente | 0 | 0 |
| Só a linha de base | 0 | 0 |
| Nenhum | 16 | 16 |
| Estado | provisório | provisório |

Linha de base: usada (lb-20261005-020646-solicitacao-76b556)

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
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 17 (ponte MCP do oráculo) |
| Protocolo | unverified | unverified |
| Ferramentas anunciadas | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for, get\_ds\_rules, get\_design\_tokens, get\_emag\_rules, get\_pag… |
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_console\_messages, browser\_take\_screenshot, browser\_snapshot, browser\_press\_key, browser\_click, browser\_type, browser\_tabs, browser\_fill\_form | browser\_navigate, browser\_evaluate, browser\_console\_messages, scan\_page, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_press\_key, get\_finding\_details, get\_ds\_rules, get\_component\_spec, browser\_fill\_form, verify\_finding, get\_page\_rules |
| Erros de ferramenta | 4 (tool-events.ndjson \(eventos com isError: true\)) | 3 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 8 aprovado(s); falhos: nenhum | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | nenhuma | nenhuma |
| Registro de inspeção | registro indisponível \(pacote findings.v1, anterior ao registro de inspeção\) — não é zero cobertura | registro indisponível \(pacote findings.v1, anterior ao registro de inspeção\) — não é zero cobertura |

O registro de inspeção é declaração do agente sobre o inventário que ele mesmo descobriu; “com evento de ferramenta” só diz que o identificador citado aparece num evento gravado. Não pontua nem decide elegibilidade, e a cobertura da página continua desconhecida.

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 6. Custo e tempo

| | sem | com |
|---|---|---|
| Tempo de relógio (s) | 444 (runner) | 497 (runner) |
| Turnos | 122 (stream-json do cliente \(result.num\_turns\)) | 116 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 121 (ponte MCP) | 115 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 17 (ponte MCP do oráculo) |
| Tokens de entrada | 122 (stream-json do cliente \(result.usage\)) | 102 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 26008 (stream-json do cliente \(result.usage\)) | 29162 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 3512251 (stream-json do cliente \(result.usage\)) | 4613979 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 97229 (stream-json do cliente \(result.usage\)) | 165805 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 2.0009301999999995 (estimativa do cliente \(result.total\_cost\_usd\)) | 2.8328838000000003 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 28 cartão(ões), estimativa 168 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 7. Detalhes e evidências

**sem** (20261005-021940-solicitacao-sem-d009): [pacote](../../../../../../restauracoes/20261005-021940-solicitacao-sem-d009/2026-10-05T02-19-40Z__solicitacao__opus__sem__rep-10__20261005-021940-solicitacao-sem-d009) · [run.json](../../../../../../restauracoes/20261005-021940-solicitacao-sem-d009/2026-10-05T02-19-40Z__solicitacao__opus__sem__rep-10__20261005-021940-solicitacao-sem-d009/run.json) · [findings.json](../../../../../../restauracoes/20261005-021940-solicitacao-sem-d009/2026-10-05T02-19-40Z__solicitacao__opus__sem__rep-10__20261005-021940-solicitacao-sem-d009/findings.json) · [isolation.json](../../../../../../restauracoes/20261005-021940-solicitacao-sem-d009/2026-10-05T02-19-40Z__solicitacao__opus__sem__rep-10__20261005-021940-solicitacao-sem-d009/isolation.json) · [eventos de ferramenta](../../../../../../restauracoes/20261005-021940-solicitacao-sem-d009/2026-10-05T02-19-40Z__solicitacao__opus__sem__rep-10__20261005-021940-solicitacao-sem-d009/tool-events.ndjson) · — · evidências: [#1](../../../../../../restauracoes/20261005-021940-solicitacao-sem-d009/2026-10-05T02-19-40Z__solicitacao__opus__sem__rep-10__20261005-021940-solicitacao-sem-d009/evidence/aderencia-oraculo.json) [#2](../../../../../../restauracoes/20261005-021940-solicitacao-sem-d009/2026-10-05T02-19-40Z__solicitacao__opus__sem__rep-10__20261005-021940-solicitacao-sem-d009/evidence/cliente.json) [#3](../../../../../../restauracoes/20261005-021940-solicitacao-sem-d009/2026-10-05T02-19-40Z__solicitacao__opus__sem__rep-10__20261005-021940-solicitacao-sem-d009/evidence/container-config.json) [#4](../../../../../../restauracoes/20261005-021940-solicitacao-sem-d009/2026-10-05T02-19-40Z__solicitacao__opus__sem__rep-10__20261005-021940-solicitacao-sem-d009/evidence/controles-positivos.json) [#5](../../../../../../restauracoes/20261005-021940-solicitacao-sem-d009/2026-10-05T02-19-40Z__solicitacao__opus__sem__rep-10__20261005-021940-solicitacao-sem-d009/evidence/mcp-config.json) [#6](../../../../../../restauracoes/20261005-021940-solicitacao-sem-d009/2026-10-05T02-19-40Z__solicitacao__opus__sem__rep-10__20261005-021940-solicitacao-sem-d009/evidence/preflight.json) [#7](../../../../../../restauracoes/20261005-021940-solicitacao-sem-d009/2026-10-05T02-19-40Z__solicitacao__opus__sem__rep-10__20261005-021940-solicitacao-sem-d009/evidence/prompt.txt) [#8](../../../../../../restauracoes/20261005-021940-solicitacao-sem-d009/2026-10-05T02-19-40Z__solicitacao__opus__sem__rep-10__20261005-021940-solicitacao-sem-d009/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../../restauracoes/20261005-021940-solicitacao-sem-d009/2026-10-05T02-19-40Z__solicitacao__opus__sem__rep-10__20261005-021940-solicitacao-sem-d009/evidence/raw/browser/inventory.json) [#10](../../../../../../restauracoes/20261005-021940-solicitacao-sem-d009/2026-10-05T02-19-40Z__solicitacao__opus__sem__rep-10__20261005-021940-solicitacao-sem-d009/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../../restauracoes/20261005-021940-solicitacao-sem-d009/2026-10-05T02-19-40Z__solicitacao__opus__sem__rep-10__20261005-021940-solicitacao-sem-d009/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../../restauracoes/20261005-021940-solicitacao-sem-d009/2026-10-05T02-19-40Z__solicitacao__opus__sem__rep-10__20261005-021940-solicitacao-sem-d009/evidence/raw/collector/events.ndjson) [#13](../../../../../../restauracoes/20261005-021940-solicitacao-sem-d009/2026-10-05T02-19-40Z__solicitacao__opus__sem__rep-10__20261005-021940-solicitacao-sem-d009/evidence/raw/collector/findings.json) [#14](../../../../../../restauracoes/20261005-021940-solicitacao-sem-d009/2026-10-05T02-19-40Z__solicitacao__opus__sem__rep-10__20261005-021940-solicitacao-sem-d009/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../../restauracoes/20261005-021940-solicitacao-sem-d009/2026-10-05T02-19-40Z__solicitacao__opus__sem__rep-10__20261005-021940-solicitacao-sem-d009/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../../restauracoes/20261005-021940-solicitacao-sem-d009/2026-10-05T02-19-40Z__solicitacao__opus__sem__rep-10__20261005-021940-solicitacao-sem-d009/evidence/raw/probe/probe.json) [#17](../../../../../../restauracoes/20261005-021940-solicitacao-sem-d009/2026-10-05T02-19-40Z__solicitacao__opus__sem__rep-10__20261005-021940-solicitacao-sem-d009/evidence/raw/probe/sonda-escrita-1791166804487.txt) [#18](../../../../../../restauracoes/20261005-021940-solicitacao-sem-d009/2026-10-05T02-19-40Z__solicitacao__opus__sem__rep-10__20261005-021940-solicitacao-sem-d009/evidence/raw/task/mcp.json) [#19](../../../../../../restauracoes/20261005-021940-solicitacao-sem-d009/2026-10-05T02-19-40Z__solicitacao__opus__sem__rep-10__20261005-021940-solicitacao-sem-d009/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../../restauracoes/20261005-021940-solicitacao-sem-d009/2026-10-05T02-19-40Z__solicitacao__opus__sem__rep-10__20261005-021940-solicitacao-sem-d009/evidence/logs/agent.log) [#2](../../../../../../restauracoes/20261005-021940-solicitacao-sem-d009/2026-10-05T02-19-40Z__solicitacao__opus__sem__rep-10__20261005-021940-solicitacao-sem-d009/evidence/logs/browser.log) [#3](../../../../../../restauracoes/20261005-021940-solicitacao-sem-d009/2026-10-05T02-19-40Z__solicitacao__opus__sem__rep-10__20261005-021940-solicitacao-sem-d009/evidence/logs/collector.log) [#4](../../../../../../restauracoes/20261005-021940-solicitacao-sem-d009/2026-10-05T02-19-40Z__solicitacao__opus__sem__rep-10__20261005-021940-solicitacao-sem-d009/evidence/logs/egress-provider.log) [#5](../../../../../../restauracoes/20261005-021940-solicitacao-sem-d009/2026-10-05T02-19-40Z__solicitacao__opus__sem__rep-10__20261005-021940-solicitacao-sem-d009/evidence/logs/egress-site.log) [#6](../../../../../../restauracoes/20261005-021940-solicitacao-sem-d009/2026-10-05T02-19-40Z__solicitacao__opus__sem__rep-10__20261005-021940-solicitacao-sem-d009/evidence/logs/probe.log) [#7](../../../../../../restauracoes/20261005-021940-solicitacao-sem-d009/2026-10-05T02-19-40Z__solicitacao__opus__sem__rep-10__20261005-021940-solicitacao-sem-d009/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (9; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| #forma-presencial | wcag:4.1.2 | O rádio 'Presencial' não tem nome acessível \(árvore de acessibilidade: 'radio' sem nome\); o &lt;label&gt;Presencial&lt;/label&gt; não tem atributo for e não envolve o input. Clicar no texto 'Presencial' não marca a opção \(checked p… |
| .upload-button | wcag:4.1.2 | O botão 'Selecione o arquivo' tem aria-hidden=&quot;true&quot; mas é focável \(tabindex=&quot;1&quot;\) e é o único controle de upload visível \(input#documentos está display:none\); fica ausente da árvore de acessibilidade, sem nome/papel par… |
| .upload-button | wcag:2.4.3 | tabindex=&quot;1&quot; no botão de upload: ao pressionar Tab a partir do carregamento, ele é o primeiro elemento focado, antes do link 'Ir para o conteúdo', da marca e da trilha; ao final da página o foco também volta a ele. |
| #servico, #unidade | wcag:2.4.7 | Ao receber foco por teclado \(classe focus-visible aplicada\), os campos 'Tipo de serviço' e 'Unidade de atendimento' ficam com outline-style none e box-shadow none, sem mudança visual no campo ou no contêiner; os demais … |
| .grupo-forma .br-radio &gt; label, .br-checkbox &gt; label | wcag:1.4.11 | O círculo/quadrado que representa rádios e caixas de seleção \(label::before\) tem borda 1px rgb\(204,204,204\) sobre fundo branco, contraste \~1,6:1; é o único limite visual do controle não marcado. |
| #servico, #unidade | wcag:1.3.1 | Após envio vazio, as mensagens 'Selecione o tipo de serviço.' e 'Selecione a unidade de atendimento.' são span.feedback sem id, e #servico/#unidade recebem aria-invalid=&quot;true&quot; sem aria-describedby; nos demais campos a m… |
| .acao-cancelar | wcag:2.4.3 | Ao fechar o diálogo 'Descartar solicitação?' com Esc ou com 'Continuar preenchendo', o foco vai para &lt;body&gt;, não retorna ao botão Cancelar que abriu o diálogo. |
| .paginacao-anteriores .page.active | wcag:1.3.1 | A página atual da paginação é indicada só visualmente \(classe active, fundo azul\); o link não tem aria-current, nem antes nem depois de navegar para a página 2. |
| .flatpickr-prev-month &gt; button, .flatpickr-next-month &gt; button | wcag:4.1.2 | Com o calendário aberto, os botões de mês anterior/seguinte contêm só ícone \(&lt;i&gt; sem texto alternativo\) e não têm aria-label; nome acessível vazio na árvore de acessibilidade. |

**com** (20261005-020722-solicitacao-com-6484): [pacote](../../../../../../restauracoes/20261005-020722-solicitacao-com-6484/2026-10-05T02-07-22Z__solicitacao__opus__com__rep-10__20261005-020722-solicitacao-com-6484) · [run.json](../../../../../../restauracoes/20261005-020722-solicitacao-com-6484/2026-10-05T02-07-22Z__solicitacao__opus__com__rep-10__20261005-020722-solicitacao-com-6484/run.json) · [findings.json](../../../../../../restauracoes/20261005-020722-solicitacao-com-6484/2026-10-05T02-07-22Z__solicitacao__opus__com__rep-10__20261005-020722-solicitacao-com-6484/findings.json) · [isolation.json](../../../../../../restauracoes/20261005-020722-solicitacao-com-6484/2026-10-05T02-07-22Z__solicitacao__opus__com__rep-10__20261005-020722-solicitacao-com-6484/isolation.json) · [eventos de ferramenta](../../../../../../restauracoes/20261005-020722-solicitacao-com-6484/2026-10-05T02-07-22Z__solicitacao__opus__com__rep-10__20261005-020722-solicitacao-com-6484/tool-events.ndjson) · — · evidências: [#1](../../../../../../restauracoes/20261005-020722-solicitacao-com-6484/2026-10-05T02-07-22Z__solicitacao__opus__com__rep-10__20261005-020722-solicitacao-com-6484/evidence/aderencia-oraculo.json) [#2](../../../../../../restauracoes/20261005-020722-solicitacao-com-6484/2026-10-05T02-07-22Z__solicitacao__opus__com__rep-10__20261005-020722-solicitacao-com-6484/evidence/cliente.json) [#3](../../../../../../restauracoes/20261005-020722-solicitacao-com-6484/2026-10-05T02-07-22Z__solicitacao__opus__com__rep-10__20261005-020722-solicitacao-com-6484/evidence/container-config.json) [#4](../../../../../../restauracoes/20261005-020722-solicitacao-com-6484/2026-10-05T02-07-22Z__solicitacao__opus__com__rep-10__20261005-020722-solicitacao-com-6484/evidence/controles-positivos.json) [#5](../../../../../../restauracoes/20261005-020722-solicitacao-com-6484/2026-10-05T02-07-22Z__solicitacao__opus__com__rep-10__20261005-020722-solicitacao-com-6484/evidence/mcp-config.json) [#6](../../../../../../restauracoes/20261005-020722-solicitacao-com-6484/2026-10-05T02-07-22Z__solicitacao__opus__com__rep-10__20261005-020722-solicitacao-com-6484/evidence/preflight.json) [#7](../../../../../../restauracoes/20261005-020722-solicitacao-com-6484/2026-10-05T02-07-22Z__solicitacao__opus__com__rep-10__20261005-020722-solicitacao-com-6484/evidence/prompt.txt) [#8](../../../../../../restauracoes/20261005-020722-solicitacao-com-6484/2026-10-05T02-07-22Z__solicitacao__opus__com__rep-10__20261005-020722-solicitacao-com-6484/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../../restauracoes/20261005-020722-solicitacao-com-6484/2026-10-05T02-07-22Z__solicitacao__opus__com__rep-10__20261005-020722-solicitacao-com-6484/evidence/raw/browser/inventory.json) [#10](../../../../../../restauracoes/20261005-020722-solicitacao-com-6484/2026-10-05T02-07-22Z__solicitacao__opus__com__rep-10__20261005-020722-solicitacao-com-6484/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../../restauracoes/20261005-020722-solicitacao-com-6484/2026-10-05T02-07-22Z__solicitacao__opus__com__rep-10__20261005-020722-solicitacao-com-6484/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../../restauracoes/20261005-020722-solicitacao-com-6484/2026-10-05T02-07-22Z__solicitacao__opus__com__rep-10__20261005-020722-solicitacao-com-6484/evidence/raw/collector/events.ndjson) [#13](../../../../../../restauracoes/20261005-020722-solicitacao-com-6484/2026-10-05T02-07-22Z__solicitacao__opus__com__rep-10__20261005-020722-solicitacao-com-6484/evidence/raw/collector/findings.json) [#14](../../../../../../restauracoes/20261005-020722-solicitacao-com-6484/2026-10-05T02-07-22Z__solicitacao__opus__com__rep-10__20261005-020722-solicitacao-com-6484/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../../restauracoes/20261005-020722-solicitacao-com-6484/2026-10-05T02-07-22Z__solicitacao__opus__com__rep-10__20261005-020722-solicitacao-com-6484/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../../restauracoes/20261005-020722-solicitacao-com-6484/2026-10-05T02-07-22Z__solicitacao__opus__com__rep-10__20261005-020722-solicitacao-com-6484/evidence/raw/oracle/inventory.json) [#17](../../../../../../restauracoes/20261005-020722-solicitacao-com-6484/2026-10-05T02-07-22Z__solicitacao__opus__com__rep-10__20261005-020722-solicitacao-com-6484/evidence/raw/oracle/oracle-telemetry.ndjson) [#18](../../../../../../restauracoes/20261005-020722-solicitacao-com-6484/2026-10-05T02-07-22Z__solicitacao__opus__com__rep-10__20261005-020722-solicitacao-com-6484/evidence/raw/oracle/tool-events.ndjson) [#19](../../../../../../restauracoes/20261005-020722-solicitacao-com-6484/2026-10-05T02-07-22Z__solicitacao__opus__com__rep-10__20261005-020722-solicitacao-com-6484/evidence/raw/probe/probe.json) [#20](../../../../../../restauracoes/20261005-020722-solicitacao-com-6484/2026-10-05T02-07-22Z__solicitacao__opus__com__rep-10__20261005-020722-solicitacao-com-6484/evidence/raw/probe/sonda-escrita-1791166067924.txt) [#21](../../../../../../restauracoes/20261005-020722-solicitacao-com-6484/2026-10-05T02-07-22Z__solicitacao__opus__com__rep-10__20261005-020722-solicitacao-com-6484/evidence/raw/task/mcp.json) [#22](../../../../../../restauracoes/20261005-020722-solicitacao-com-6484/2026-10-05T02-07-22Z__solicitacao__opus__com__rep-10__20261005-020722-solicitacao-com-6484/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../../restauracoes/20261005-020722-solicitacao-com-6484/2026-10-05T02-07-22Z__solicitacao__opus__com__rep-10__20261005-020722-solicitacao-com-6484/evidence/logs/agent.log) [#2](../../../../../../restauracoes/20261005-020722-solicitacao-com-6484/2026-10-05T02-07-22Z__solicitacao__opus__com__rep-10__20261005-020722-solicitacao-com-6484/evidence/logs/browser.log) [#3](../../../../../../restauracoes/20261005-020722-solicitacao-com-6484/2026-10-05T02-07-22Z__solicitacao__opus__com__rep-10__20261005-020722-solicitacao-com-6484/evidence/logs/collector.log) [#4](../../../../../../restauracoes/20261005-020722-solicitacao-com-6484/2026-10-05T02-07-22Z__solicitacao__opus__com__rep-10__20261005-020722-solicitacao-com-6484/evidence/logs/egress-provider.log) [#5](../../../../../../restauracoes/20261005-020722-solicitacao-com-6484/2026-10-05T02-07-22Z__solicitacao__opus__com__rep-10__20261005-020722-solicitacao-com-6484/evidence/logs/egress-site.log) [#6](../../../../../../restauracoes/20261005-020722-solicitacao-com-6484/2026-10-05T02-07-22Z__solicitacao__opus__com__rep-10__20261005-020722-solicitacao-com-6484/evidence/logs/oracle.log) [#7](../../../../../../restauracoes/20261005-020722-solicitacao-com-6484/2026-10-05T02-07-22Z__solicitacao__opus__com__rep-10__20261005-020722-solicitacao-com-6484/evidence/logs/probe.log) [#8](../../../../../../restauracoes/20261005-020722-solicitacao-com-6484/2026-10-05T02-07-22Z__solicitacao__opus__com__rep-10__20261005-020722-solicitacao-com-6484/evidence/logs/screens.log) · [binding](analysis-binding.com.json)

Achados enviados (11; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| #forma-presencial | label | Rádio 'Presencial' sem nome acessível: o &lt;label&gt;Presencial&lt;/label&gt; não tem atributo for nem envolve o input; clicar no texto não marca a opção. |
| .upload-button | aria-hidden-focus | Botão 'Selecione o arquivo' com aria-hidden=&quot;true&quot; e focável; o input file real está com display:none, então o controle de upload não é exposto à tecnologia assistiva. |
| .upload-button | wcag:2.4.3 | O botão de upload tem tabindex=&quot;1&quot; e recebe o primeiro Tab da página, antes do link 'Ir para o conteúdo' e de todo o cabeçalho. |
| #servico, #unidade | wcag:2.4.7 | Ao receber foco por teclado, os campos 'Tipo de serviço' e 'Unidade de atendimento' ficam sem indicador: outline none e box-shadow none, por regra da página \(.campo-servico/.campo-unidade .br-input input:focus \{ box-sha… |
| #servico, #unidade | wcag:1.3.1 | No estado de erro, os inputs ficam com aria-invalid=&quot;true&quot;, mas sem aria-describedby; as mensagens 'Selecione o tipo de serviço.' e 'Selecione a unidade de atendimento.' não têm id e não são associadas ao campo \(os outr… |
| .barra-superior | ds-page-header | O cabeçalho é um &lt;header class=&quot;barra-superior&quot;&gt; customizado com apenas a marca; não há .br-header nem &lt;br-header&gt; no documento. |
| html | ds-page-footer | Não há .br-footer nem &lt;br-footer&gt; no documento; a página termina na paginação da tabela. |
| .flatpickr-prev-month &gt; button, .flatpickr-next-month &gt; button | button-name | Com o calendário aberto, os botões de mês anterior e seguinte só têm ícone \(fa-chevron-left/right\) e não têm aria-label nem texto: o nome acessível é vazio. |
| .flatpickr-day | tabindex | Com o calendário aberto, os 42 dias \(span.flatpickr-day\) recebem tabindex=&quot;1&quot; \(positivo\), o que altera a ordem de tabulação da página. |
| .mensagem-retorno.danger .close | govbr-3.7.0-component-message-66b01a712e67 | Na Message de erro, o botão Fechar fica à esquerda \(x=201\) e o ícone semântico fa-times-circle à direita \(x=1019\); ordem no DOM: close, content, icon. Na Message de sucesso a ordem está correta. |
| .acao-cancelar | wcag:2.4.3 | Depois de abrir o modal 'Descartar solicitação?' por Cancelar e fechá-lo com Escape ou 'Continuar preenchendo', o foco vai para &lt;body&gt; em vez de voltar ao botão Cancelar. |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `3349cd5d179c0b3fc1150fd8acca710ef1a7e608acca5e2686ebb17646d1049e`

