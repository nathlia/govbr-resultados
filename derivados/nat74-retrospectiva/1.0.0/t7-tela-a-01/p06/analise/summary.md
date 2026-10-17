# Resumo da análise — Solicitar serviço (solicitacao)

Revisão 1 · gerado em 2026-10-16T00:00:00Z (UTC)

## 1. Status técnico

Análise: **pronta**

Aviso: derivado retrospectivo nat74-retrospectiva-1.0.0: campanha congelada com flow-semantic-1.5.0, repreparada com flow-semantic-1.7.0 \(não substitui a análise oficial\)

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261004-095531-solicitacao-sem-6cf1 | sem | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 15 cartão(ões), nenhum decidido |
| 20261004-101046-solicitacao-com-7553 | com | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 11 cartão(ões), nenhum decidido |

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
| Início (UTC) | 2026-10-04T09:55:55Z | 2026-10-04T10:11:16Z |
| Início (local) | 04/10/2026, 06:55:55 (horário de Brasília) | 04/10/2026, 07:11:16 (horário de Brasília) |
| Commit do harness | 1b6ed3e79deaab08c7109e7c0008bef947921077 | 1b6ed3e79deaab08c7109e7c0008bef947921077 |
| Repetição · tentativa | 6 · 1 | 6 · 1 |
| Campanha · slot · par | t7-tela-a-01 · p06-sem · p06 | t7-tela-a-01 · p06-com · p06 |

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
| Cartões pendentes de revisão | 15 | 11 |
| Maturidade | aguardando revisão — 15 cartão(ões), nenhum decidido | aguardando revisão — 11 cartão(ões), nenhum decidido |
| Entra na comparação principal | sim | sim |
| Achados enviados | 15 | 11 |

Recall e precisão só aparecem com a revisão fechada; enquanto houver cartão pendente ficam “indisponível” (nunca 0). “Achados enviados = 0” é um resultado válido (o agente olhou e não alegou nada); submissão recusada ou ausente é outra coisa.

Linha de base determinística (união das varreduras comparáveis), por unidade da referência:

| Unidades | sem | com |
|---|---|---|
| Agente e linha de base | 0 | 0 |
| Só o agente | 0 | 0 |
| Só a linha de base | 0 | 0 |
| Nenhum | 16 | 16 |
| Estado | provisório | provisório |

Linha de base: usada (lb-20261004-095505-solicitacao-249375)

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
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_console\_messages, browser\_take\_screenshot, browser\_press\_key, browser\_snapshot, browser\_click, browser\_tabs, browser\_fill\_form, browser\_type | browser\_navigate, browser\_evaluate, browser\_console\_messages, scan\_page, get\_component\_spec, browser\_press\_key, browser\_click, browser\_snapshot, browser\_take\_screenshot, browser\_fill\_form, get\_ds\_rules, verify\_finding, browser\_tabs |
| Erros de ferramenta | 6 (tool-events.ndjson \(eventos com isError: true\)) | 6 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 8 aprovado(s); falhos: nenhum | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | nenhuma | nenhuma |
| Registro de inspeção | registro indisponível \(pacote findings.v1, anterior ao registro de inspeção\) — não é zero cobertura | registro indisponível \(pacote findings.v1, anterior ao registro de inspeção\) — não é zero cobertura |

O registro de inspeção é declaração do agente sobre o inventário que ele mesmo descobriu; “com evento de ferramenta” só diz que o identificador citado aparece num evento gravado. Não pontua nem decide elegibilidade, e a cobertura da página continua desconhecida.

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 6. Custo e tempo

| | sem | com |
|---|---|---|
| Tempo de relógio (s) | 703 (runner) | 443 (runner) |
| Turnos | 180 (stream-json do cliente \(result.num\_turns\)) | 115 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 179 (ponte MCP) | 114 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 11 (ponte MCP do oráculo) |
| Tokens de entrada | 150 (stream-json do cliente \(result.usage\)) | 122 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 39575 (stream-json do cliente \(result.usage\)) | 27107 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 4980488 (stream-json do cliente \(result.usage\)) | 4584452 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 117051 (stream-json do cliente \(result.usage\)) | 107569 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 2.7246055999999994 (estimativa do cliente \(result.total\_cost\_usd\)) | 2.3200703999999996 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 34 cartão(ões), estimativa 204 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 7. Detalhes e evidências

**sem** (20261004-095531-solicitacao-sem-6cf1): [pacote](../../../../../../restauracoes/20261004-095531-solicitacao-sem-6cf1/2026-10-04T09-55-31Z__solicitacao__opus__sem__rep-06__20261004-095531-solicitacao-sem-6cf1) · [run.json](../../../../../../restauracoes/20261004-095531-solicitacao-sem-6cf1/2026-10-04T09-55-31Z__solicitacao__opus__sem__rep-06__20261004-095531-solicitacao-sem-6cf1/run.json) · [findings.json](../../../../../../restauracoes/20261004-095531-solicitacao-sem-6cf1/2026-10-04T09-55-31Z__solicitacao__opus__sem__rep-06__20261004-095531-solicitacao-sem-6cf1/findings.json) · [isolation.json](../../../../../../restauracoes/20261004-095531-solicitacao-sem-6cf1/2026-10-04T09-55-31Z__solicitacao__opus__sem__rep-06__20261004-095531-solicitacao-sem-6cf1/isolation.json) · [eventos de ferramenta](../../../../../../restauracoes/20261004-095531-solicitacao-sem-6cf1/2026-10-04T09-55-31Z__solicitacao__opus__sem__rep-06__20261004-095531-solicitacao-sem-6cf1/tool-events.ndjson) · — · evidências: [#1](../../../../../../restauracoes/20261004-095531-solicitacao-sem-6cf1/2026-10-04T09-55-31Z__solicitacao__opus__sem__rep-06__20261004-095531-solicitacao-sem-6cf1/evidence/aderencia-oraculo.json) [#2](../../../../../../restauracoes/20261004-095531-solicitacao-sem-6cf1/2026-10-04T09-55-31Z__solicitacao__opus__sem__rep-06__20261004-095531-solicitacao-sem-6cf1/evidence/cliente.json) [#3](../../../../../../restauracoes/20261004-095531-solicitacao-sem-6cf1/2026-10-04T09-55-31Z__solicitacao__opus__sem__rep-06__20261004-095531-solicitacao-sem-6cf1/evidence/container-config.json) [#4](../../../../../../restauracoes/20261004-095531-solicitacao-sem-6cf1/2026-10-04T09-55-31Z__solicitacao__opus__sem__rep-06__20261004-095531-solicitacao-sem-6cf1/evidence/controles-positivos.json) [#5](../../../../../../restauracoes/20261004-095531-solicitacao-sem-6cf1/2026-10-04T09-55-31Z__solicitacao__opus__sem__rep-06__20261004-095531-solicitacao-sem-6cf1/evidence/mcp-config.json) [#6](../../../../../../restauracoes/20261004-095531-solicitacao-sem-6cf1/2026-10-04T09-55-31Z__solicitacao__opus__sem__rep-06__20261004-095531-solicitacao-sem-6cf1/evidence/preflight.json) [#7](../../../../../../restauracoes/20261004-095531-solicitacao-sem-6cf1/2026-10-04T09-55-31Z__solicitacao__opus__sem__rep-06__20261004-095531-solicitacao-sem-6cf1/evidence/prompt.txt) [#8](../../../../../../restauracoes/20261004-095531-solicitacao-sem-6cf1/2026-10-04T09-55-31Z__solicitacao__opus__sem__rep-06__20261004-095531-solicitacao-sem-6cf1/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../../restauracoes/20261004-095531-solicitacao-sem-6cf1/2026-10-04T09-55-31Z__solicitacao__opus__sem__rep-06__20261004-095531-solicitacao-sem-6cf1/evidence/raw/browser/inventory.json) [#10](../../../../../../restauracoes/20261004-095531-solicitacao-sem-6cf1/2026-10-04T09-55-31Z__solicitacao__opus__sem__rep-06__20261004-095531-solicitacao-sem-6cf1/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../../restauracoes/20261004-095531-solicitacao-sem-6cf1/2026-10-04T09-55-31Z__solicitacao__opus__sem__rep-06__20261004-095531-solicitacao-sem-6cf1/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../../restauracoes/20261004-095531-solicitacao-sem-6cf1/2026-10-04T09-55-31Z__solicitacao__opus__sem__rep-06__20261004-095531-solicitacao-sem-6cf1/evidence/raw/collector/events.ndjson) [#13](../../../../../../restauracoes/20261004-095531-solicitacao-sem-6cf1/2026-10-04T09-55-31Z__solicitacao__opus__sem__rep-06__20261004-095531-solicitacao-sem-6cf1/evidence/raw/collector/findings.json) [#14](../../../../../../restauracoes/20261004-095531-solicitacao-sem-6cf1/2026-10-04T09-55-31Z__solicitacao__opus__sem__rep-06__20261004-095531-solicitacao-sem-6cf1/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../../restauracoes/20261004-095531-solicitacao-sem-6cf1/2026-10-04T09-55-31Z__solicitacao__opus__sem__rep-06__20261004-095531-solicitacao-sem-6cf1/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../../restauracoes/20261004-095531-solicitacao-sem-6cf1/2026-10-04T09-55-31Z__solicitacao__opus__sem__rep-06__20261004-095531-solicitacao-sem-6cf1/evidence/raw/probe/probe.json) [#17](../../../../../../restauracoes/20261004-095531-solicitacao-sem-6cf1/2026-10-04T09-55-31Z__solicitacao__opus__sem__rep-06__20261004-095531-solicitacao-sem-6cf1/evidence/raw/probe/sonda-escrita-1791107754805.txt) [#18](../../../../../../restauracoes/20261004-095531-solicitacao-sem-6cf1/2026-10-04T09-55-31Z__solicitacao__opus__sem__rep-06__20261004-095531-solicitacao-sem-6cf1/evidence/raw/task/mcp.json) [#19](../../../../../../restauracoes/20261004-095531-solicitacao-sem-6cf1/2026-10-04T09-55-31Z__solicitacao__opus__sem__rep-06__20261004-095531-solicitacao-sem-6cf1/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../../restauracoes/20261004-095531-solicitacao-sem-6cf1/2026-10-04T09-55-31Z__solicitacao__opus__sem__rep-06__20261004-095531-solicitacao-sem-6cf1/evidence/logs/agent.log) [#2](../../../../../../restauracoes/20261004-095531-solicitacao-sem-6cf1/2026-10-04T09-55-31Z__solicitacao__opus__sem__rep-06__20261004-095531-solicitacao-sem-6cf1/evidence/logs/browser.log) [#3](../../../../../../restauracoes/20261004-095531-solicitacao-sem-6cf1/2026-10-04T09-55-31Z__solicitacao__opus__sem__rep-06__20261004-095531-solicitacao-sem-6cf1/evidence/logs/collector.log) [#4](../../../../../../restauracoes/20261004-095531-solicitacao-sem-6cf1/2026-10-04T09-55-31Z__solicitacao__opus__sem__rep-06__20261004-095531-solicitacao-sem-6cf1/evidence/logs/egress-provider.log) [#5](../../../../../../restauracoes/20261004-095531-solicitacao-sem-6cf1/2026-10-04T09-55-31Z__solicitacao__opus__sem__rep-06__20261004-095531-solicitacao-sem-6cf1/evidence/logs/egress-site.log) [#6](../../../../../../restauracoes/20261004-095531-solicitacao-sem-6cf1/2026-10-04T09-55-31Z__solicitacao__opus__sem__rep-06__20261004-095531-solicitacao-sem-6cf1/evidence/logs/probe.log) [#7](../../../../../../restauracoes/20261004-095531-solicitacao-sem-6cf1/2026-10-04T09-55-31Z__solicitacao__opus__sem__rep-06__20261004-095531-solicitacao-sem-6cf1/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (15; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| .upload-button | wcag:2.4.3 | O botão de upload tem tabindex=&quot;1&quot;: o primeiro Tab após o carregamento vai a ele, antes do link de salto, da marca, do breadcrumb e dos campos anteriores do formulário. |
| .upload-button | wcag:4.1.2 | O único controle operável do upload \(o input file #documentos tem display:none\) é um &lt;button&gt; focável com aria-hidden=&quot;true&quot;: recebe foco pelo teclado, mas fica fora da árvore de acessibilidade, sem nome nem papel para … |
| #forma-presencial | wcag:4.1.2 | O rótulo &quot;Presencial&quot; não tem atributo for, e o rádio #forma-presencial fica sem nome acessível \(aparece como &quot;radio&quot; sem nome na árvore\). Clicar no texto &quot;Presencial&quot; não marca a opção. |
| #servico, #unidade | wcag:2.4.7 | Com o foco por teclado em &quot;Tipo de serviço&quot; e &quot;Unidade de atendimento&quot;, não há indicador visível: outline none, box-shadow none e borda inalterada \(1px #888\). A regra da folha solicitacao CSS \(.campo-servico/.campo-unid… |
| .br-select &gt; .br-input\[role=&quot;combobox&quot;\] | wcag:4.1.2 | O papel combobox fica no div que envolve label, input e botão, e esse elemento não tem nome acessível \(a árvore mostra &quot;combobox&quot; sem nome\). O input focado é exposto só como textbox, sem aria-expanded nem aria-controls. |
| .br-select .br-list \[role=&quot;option&quot;\] | wcag:2.4.3 | Depois de abrir a lista com ArrowDown e escolher uma opção com Enter, a lista fecha e o foco vai para o body \(document.activeElement = BODY\), em vez de voltar ao campo. |
| .campo-servico .retorno-campo, .campo-unidade .retorno-campo | wcag:1.3.1 | Ao enviar vazio, as mensagens &quot;Selecione o tipo de serviço.&quot; e &quot;Selecione a unidade de atendimento.&quot; não têm id, e #servico/#unidade \(aria-invalid=&quot;true&quot;\) não têm aria-describedby. Os outros campos ligam a mensagem \(por… |
| .grupo-forma .br-radio label, .br-checkbox label | wcag:1.4.11 | O contorno visual dos rádios e checkboxes \(label::before\) é 1px #ccc \(--border-color\) sobre fundo branco: contraste de 1,61:1. |
| .br-message.danger .close .br-button | incerta | Na mensagem de erro, o botão Fechar \(um div role=&quot;button&quot;\) vem primeiro no DOM e aparece à esquerda; o ícone de status fica à direita, depois do conteúdo. A mensagem de sucesso da mesma tela segue a anatomia do DS \(ícon… |
| .dialogo-descarte | wcag:2.4.3 | Ao fechar o diálogo &quot;Descartar solicitação?&quot; com Escape, com &quot;Continuar preenchendo&quot; ou com &quot;Descartar&quot;, o foco vai para o body em vez de voltar ao botão Cancelar que abriu o diálogo. |
| .paginacao-anteriores a.page.active | wcag:1.3.1 | A página atual da paginação só é indicada visualmente \(classe active, círculo preenchido\). O link não tem aria-current, e os nomes &quot;Página 1/2/3&quot; não dizem qual é a atual. |
| .flatpickr-prev-month button, .flatpickr-next-month button | wcag:4.1.2 | Os botões de mês anterior e seguinte do calendário só têm um ícone &lt;i&gt; sem texto, sem aria-label e sem title: não têm nome acessível. |
| .flatpickr-monthDropdown-months, .flatpickr-current-month .cur-year | wcag:3.1.2 | Os controles de mês e ano do calendário têm aria-label em inglês \(&quot;Month&quot;, &quot;Year&quot;\) numa página lang=&quot;pt-BR&quot;, sem marcação de idioma. |
| .flatpickr-day.today | wcag:1.4.3 | O dia atual \(4\) no calendário aparece em rgb\(213,67,9\) sobre rgb\(253,245,230\), 14px peso 600: contraste de 4,18:1. |
| .flatpickr-day.prevMonthDay, .flatpickr-day.nextMonthDay | wcag:1.4.3 | Os dias selecionáveis dos meses adjacentes no calendário usam rgb\(19,81,180\) com opacity 0.6 sobre branco \(cor efetiva de cerca de rgb\(113,151,210\)\), 14px: contraste de cerca de 2,98:1. |

**com** (20261004-101046-solicitacao-com-7553): [pacote](../../../../../../restauracoes/20261004-101046-solicitacao-com-7553/2026-10-04T10-10-46Z__solicitacao__opus__com__rep-06__20261004-101046-solicitacao-com-7553) · [run.json](../../../../../../restauracoes/20261004-101046-solicitacao-com-7553/2026-10-04T10-10-46Z__solicitacao__opus__com__rep-06__20261004-101046-solicitacao-com-7553/run.json) · [findings.json](../../../../../../restauracoes/20261004-101046-solicitacao-com-7553/2026-10-04T10-10-46Z__solicitacao__opus__com__rep-06__20261004-101046-solicitacao-com-7553/findings.json) · [isolation.json](../../../../../../restauracoes/20261004-101046-solicitacao-com-7553/2026-10-04T10-10-46Z__solicitacao__opus__com__rep-06__20261004-101046-solicitacao-com-7553/isolation.json) · [eventos de ferramenta](../../../../../../restauracoes/20261004-101046-solicitacao-com-7553/2026-10-04T10-10-46Z__solicitacao__opus__com__rep-06__20261004-101046-solicitacao-com-7553/tool-events.ndjson) · — · evidências: [#1](../../../../../../restauracoes/20261004-101046-solicitacao-com-7553/2026-10-04T10-10-46Z__solicitacao__opus__com__rep-06__20261004-101046-solicitacao-com-7553/evidence/aderencia-oraculo.json) [#2](../../../../../../restauracoes/20261004-101046-solicitacao-com-7553/2026-10-04T10-10-46Z__solicitacao__opus__com__rep-06__20261004-101046-solicitacao-com-7553/evidence/cliente.json) [#3](../../../../../../restauracoes/20261004-101046-solicitacao-com-7553/2026-10-04T10-10-46Z__solicitacao__opus__com__rep-06__20261004-101046-solicitacao-com-7553/evidence/container-config.json) [#4](../../../../../../restauracoes/20261004-101046-solicitacao-com-7553/2026-10-04T10-10-46Z__solicitacao__opus__com__rep-06__20261004-101046-solicitacao-com-7553/evidence/controles-positivos.json) [#5](../../../../../../restauracoes/20261004-101046-solicitacao-com-7553/2026-10-04T10-10-46Z__solicitacao__opus__com__rep-06__20261004-101046-solicitacao-com-7553/evidence/mcp-config.json) [#6](../../../../../../restauracoes/20261004-101046-solicitacao-com-7553/2026-10-04T10-10-46Z__solicitacao__opus__com__rep-06__20261004-101046-solicitacao-com-7553/evidence/preflight.json) [#7](../../../../../../restauracoes/20261004-101046-solicitacao-com-7553/2026-10-04T10-10-46Z__solicitacao__opus__com__rep-06__20261004-101046-solicitacao-com-7553/evidence/prompt.txt) [#8](../../../../../../restauracoes/20261004-101046-solicitacao-com-7553/2026-10-04T10-10-46Z__solicitacao__opus__com__rep-06__20261004-101046-solicitacao-com-7553/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../../restauracoes/20261004-101046-solicitacao-com-7553/2026-10-04T10-10-46Z__solicitacao__opus__com__rep-06__20261004-101046-solicitacao-com-7553/evidence/raw/browser/inventory.json) [#10](../../../../../../restauracoes/20261004-101046-solicitacao-com-7553/2026-10-04T10-10-46Z__solicitacao__opus__com__rep-06__20261004-101046-solicitacao-com-7553/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../../restauracoes/20261004-101046-solicitacao-com-7553/2026-10-04T10-10-46Z__solicitacao__opus__com__rep-06__20261004-101046-solicitacao-com-7553/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../../restauracoes/20261004-101046-solicitacao-com-7553/2026-10-04T10-10-46Z__solicitacao__opus__com__rep-06__20261004-101046-solicitacao-com-7553/evidence/raw/collector/events.ndjson) [#13](../../../../../../restauracoes/20261004-101046-solicitacao-com-7553/2026-10-04T10-10-46Z__solicitacao__opus__com__rep-06__20261004-101046-solicitacao-com-7553/evidence/raw/collector/findings.json) [#14](../../../../../../restauracoes/20261004-101046-solicitacao-com-7553/2026-10-04T10-10-46Z__solicitacao__opus__com__rep-06__20261004-101046-solicitacao-com-7553/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../../restauracoes/20261004-101046-solicitacao-com-7553/2026-10-04T10-10-46Z__solicitacao__opus__com__rep-06__20261004-101046-solicitacao-com-7553/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../../restauracoes/20261004-101046-solicitacao-com-7553/2026-10-04T10-10-46Z__solicitacao__opus__com__rep-06__20261004-101046-solicitacao-com-7553/evidence/raw/oracle/inventory.json) [#17](../../../../../../restauracoes/20261004-101046-solicitacao-com-7553/2026-10-04T10-10-46Z__solicitacao__opus__com__rep-06__20261004-101046-solicitacao-com-7553/evidence/raw/oracle/oracle-telemetry.ndjson) [#18](../../../../../../restauracoes/20261004-101046-solicitacao-com-7553/2026-10-04T10-10-46Z__solicitacao__opus__com__rep-06__20261004-101046-solicitacao-com-7553/evidence/raw/oracle/tool-events.ndjson) [#19](../../../../../../restauracoes/20261004-101046-solicitacao-com-7553/2026-10-04T10-10-46Z__solicitacao__opus__com__rep-06__20261004-101046-solicitacao-com-7553/evidence/raw/probe/probe.json) [#20](../../../../../../restauracoes/20261004-101046-solicitacao-com-7553/2026-10-04T10-10-46Z__solicitacao__opus__com__rep-06__20261004-101046-solicitacao-com-7553/evidence/raw/probe/sonda-escrita-1791108675980.txt) [#21](../../../../../../restauracoes/20261004-101046-solicitacao-com-7553/2026-10-04T10-10-46Z__solicitacao__opus__com__rep-06__20261004-101046-solicitacao-com-7553/evidence/raw/task/mcp.json) [#22](../../../../../../restauracoes/20261004-101046-solicitacao-com-7553/2026-10-04T10-10-46Z__solicitacao__opus__com__rep-06__20261004-101046-solicitacao-com-7553/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../../restauracoes/20261004-101046-solicitacao-com-7553/2026-10-04T10-10-46Z__solicitacao__opus__com__rep-06__20261004-101046-solicitacao-com-7553/evidence/logs/agent.log) [#2](../../../../../../restauracoes/20261004-101046-solicitacao-com-7553/2026-10-04T10-10-46Z__solicitacao__opus__com__rep-06__20261004-101046-solicitacao-com-7553/evidence/logs/browser.log) [#3](../../../../../../restauracoes/20261004-101046-solicitacao-com-7553/2026-10-04T10-10-46Z__solicitacao__opus__com__rep-06__20261004-101046-solicitacao-com-7553/evidence/logs/collector.log) [#4](../../../../../../restauracoes/20261004-101046-solicitacao-com-7553/2026-10-04T10-10-46Z__solicitacao__opus__com__rep-06__20261004-101046-solicitacao-com-7553/evidence/logs/egress-provider.log) [#5](../../../../../../restauracoes/20261004-101046-solicitacao-com-7553/2026-10-04T10-10-46Z__solicitacao__opus__com__rep-06__20261004-101046-solicitacao-com-7553/evidence/logs/egress-site.log) [#6](../../../../../../restauracoes/20261004-101046-solicitacao-com-7553/2026-10-04T10-10-46Z__solicitacao__opus__com__rep-06__20261004-101046-solicitacao-com-7553/evidence/logs/oracle.log) [#7](../../../../../../restauracoes/20261004-101046-solicitacao-com-7553/2026-10-04T10-10-46Z__solicitacao__opus__com__rep-06__20261004-101046-solicitacao-com-7553/evidence/logs/probe.log) [#8](../../../../../../restauracoes/20261004-101046-solicitacao-com-7553/2026-10-04T10-10-46Z__solicitacao__opus__com__rep-06__20261004-101046-solicitacao-com-7553/evidence/logs/screens.log) · [binding](analysis-binding.com.json)

Achados enviados (11; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| #forma-presencial | label | O rádio 'Presencial' não tem nome acessível: o &lt;label&gt;Presencial&lt;/label&gt; irmão não tem atributo for \(nem envolve o input\). Clicar no texto 'Presencial' não marca a opção. |
| .upload-button | aria-hidden-focus | O botão 'Selecione o arquivo' tem aria-hidden=&quot;true&quot; mas é focável \(tabindex=&quot;1&quot;\) e é o único meio de operar o upload, pois o input#documentos está com display:none. Leitores de tela recebem foco num elemento sem nome n… |
| .upload-button | wcag:2.4.3 | tabindex=&quot;1&quot; coloca o botão de upload como primeiro item da ordem de tabulação: o 1º Tab após o carregamento foca 'Selecione o arquivo' \(no meio do formulário\), antes do link de salto 'Ir para o conteúdo'. |
| #servico, #unidade | wcag:2.4.7 | Ao receber foco por teclado \(Tab a partir do CPF\), os campos 'Tipo de serviço' e 'Unidade de atendimento' não mudam: outline none, box-shadow none, borda #888 inalterada. Os demais campos mostram borda e sombra #c2850c. |
| #servico, #unidade | wcag:1.3.1 | Após envio vazio os campos recebem aria-invalid=&quot;true&quot;, mas a mensagem de erro \('Selecione o tipo de serviço.' / 'Selecione a unidade de atendimento.'\) não tem id e não é referenciada por aria-describedby; nos demais ca… |
| .mensagem-retorno .close &gt; div.br-button | ds-structure-button-tag | O botão 'Fechar a mensagem' da mensagem de erro é um &lt;div class=&quot;br-button circle small&quot; role=&quot;button&quot; tabindex=&quot;0&quot;&gt;; a mensagem de sucesso usa &lt;button&gt;. |
| .flatpickr-prev-month &gt; button, .flatpickr-next-month &gt; button | emag-2.2 | Os botões de mês anterior/próximo do calendário só têm ícone \(&lt;i class=&quot;fas fa-chevron-left/right&quot;&gt;\) e não têm aria-label nem texto: nome acessível vazio. |
| header.barra-superior | ds-page-header | A Área de Cabeçalho é um &lt;header class=&quot;barra-superior&quot;&gt; próprio, só com a marca gov.br; não há .br-header nem &lt;br-header&gt; no documento. |
| html | ds-page-footer | Não há .br-footer nem &lt;br-footer&gt; no documento: a página termina na paginação da tabela. |
| .acao-cancelar | wcag:2.4.3 | Depois de abrir o diálogo 'Descartar solicitação?' por Cancelar e fechá-lo \(Esc ou 'Continuar preenchendo'\), o foco vai para o &lt;body&gt;, não volta para Cancelar; o Tab seguinte recomeça do início do documento. |
| .dialogo-descarte | govbr-3.7.0-foundation-global-21b1a2733f7b | O diálogo define color rgb\(51,67,51\) \(#334333\), herdado pelo título 'Descartar solicitação?', pelo cabeçalho e pelo rodapé; esse valor não está no registro de tokens \(o mais próximo é --green-cool-70 #37493b\). |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `66a3cf754a1a0e1aab7e265e22c232db873d5a83dbd7a72cf004713b14185c5c`

