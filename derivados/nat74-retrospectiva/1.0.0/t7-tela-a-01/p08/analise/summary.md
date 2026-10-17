# Resumo da análise — Solicitar serviço (solicitacao)

Revisão 1 · gerado em 2026-10-16T00:00:00Z (UTC)

## 1. Status técnico

Análise: **pronta**

Aviso: derivado retrospectivo nat74-retrospectiva-1.0.0: campanha congelada com flow-semantic-1.5.0, repreparada com flow-semantic-1.7.0 \(não substitui a análise oficial\)

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261004-143436-solicitacao-sem-c93d | sem | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 9 cartão(ões), nenhum decidido |
| 20261004-144557-solicitacao-com-ef0f | com | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 10 cartão(ões), nenhum decidido |

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
| Início (UTC) | 2026-10-04T14:35:00Z | 2026-10-04T14:46:22Z |
| Início (local) | 04/10/2026, 11:35:00 (horário de Brasília) | 04/10/2026, 11:46:22 (horário de Brasília) |
| Commit do harness | 1b6ed3e79deaab08c7109e7c0008bef947921077 | 1b6ed3e79deaab08c7109e7c0008bef947921077 |
| Repetição · tentativa | 8 · 1 | 8 · 1 |
| Campanha · slot · par | t7-tela-a-01 · p08-sem · p08 | t7-tela-a-01 · p08-com · p08 |

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
| Cartões pendentes de revisão | 9 | 10 |
| Maturidade | aguardando revisão — 9 cartão(ões), nenhum decidido | aguardando revisão — 10 cartão(ões), nenhum decidido |
| Entra na comparação principal | sim | sim |
| Achados enviados | 9 | 10 |

Recall e precisão só aparecem com a revisão fechada; enquanto houver cartão pendente ficam “indisponível” (nunca 0). “Achados enviados = 0” é um resultado válido (o agente olhou e não alegou nada); submissão recusada ou ausente é outra coisa.

Linha de base determinística (união das varreduras comparáveis), por unidade da referência:

| Unidades | sem | com |
|---|---|---|
| Agente e linha de base | 0 | 0 |
| Só o agente | 0 | 0 |
| Só a linha de base | 0 | 0 |
| Nenhum | 16 | 16 |
| Estado | provisório | provisório |

Linha de base: usada (lb-20261004-143424-solicitacao-b40fd4)

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
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 9 (ponte MCP do oráculo) |
| Protocolo | unverified | unverified |
| Ferramentas anunciadas | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for, get\_ds\_rules, get\_design\_tokens, get\_emag\_rules, get\_pag… |
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_console\_messages, browser\_take\_screenshot, browser\_press\_key, browser\_snapshot, browser\_click, browser\_fill\_form, browser\_type | browser\_navigate, browser\_evaluate, browser\_console\_messages, scan\_page, get\_component\_spec, browser\_press\_key, browser\_click, browser\_snapshot, browser\_take\_screenshot, browser\_fill\_form, browser\_type, get\_ds\_rules |
| Erros de ferramenta | 0 (tool-events.ndjson \(eventos com isError: true\)) | 1 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 8 aprovado(s); falhos: nenhum | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | nenhuma | nenhuma |
| Registro de inspeção | registro indisponível \(pacote findings.v1, anterior ao registro de inspeção\) — não é zero cobertura | registro indisponível \(pacote findings.v1, anterior ao registro de inspeção\) — não é zero cobertura |

O registro de inspeção é declaração do agente sobre o inventário que ele mesmo descobriu; “com evento de ferramenta” só diz que o identificador citado aparece num evento gravado. Não pontua nem decide elegibilidade, e a cobertura da página continua desconhecida.

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 6. Custo e tempo

| | sem | com |
|---|---|---|
| Tempo de relógio (s) | 468 (runner) | 455 (runner) |
| Turnos | 127 (stream-json do cliente \(result.num\_turns\)) | 127 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 126 (ponte MCP) | 126 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 9 (ponte MCP do oráculo) |
| Tokens de entrada | 98 (stream-json do cliente \(result.usage\)) | 94 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 28537 (stream-json do cliente \(result.usage\)) | 28678 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 2785763 (stream-json do cliente \(result.usage\)) | 3839519 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 88629 (stream-json do cliente \(result.usage\)) | 128765 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 1.8373166000000003 (estimativa do cliente \(result.total\_cost\_usd\)) | 2.371959799999999 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 27 cartão(ões), estimativa 162 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 7. Detalhes e evidências

**sem** (20261004-143436-solicitacao-sem-c93d): [pacote](../../../../../../restauracoes/20261004-143436-solicitacao-sem-c93d/2026-10-04T14-34-36Z__solicitacao__opus__sem__rep-08__20261004-143436-solicitacao-sem-c93d) · [run.json](../../../../../../restauracoes/20261004-143436-solicitacao-sem-c93d/2026-10-04T14-34-36Z__solicitacao__opus__sem__rep-08__20261004-143436-solicitacao-sem-c93d/run.json) · [findings.json](../../../../../../restauracoes/20261004-143436-solicitacao-sem-c93d/2026-10-04T14-34-36Z__solicitacao__opus__sem__rep-08__20261004-143436-solicitacao-sem-c93d/findings.json) · [isolation.json](../../../../../../restauracoes/20261004-143436-solicitacao-sem-c93d/2026-10-04T14-34-36Z__solicitacao__opus__sem__rep-08__20261004-143436-solicitacao-sem-c93d/isolation.json) · [eventos de ferramenta](../../../../../../restauracoes/20261004-143436-solicitacao-sem-c93d/2026-10-04T14-34-36Z__solicitacao__opus__sem__rep-08__20261004-143436-solicitacao-sem-c93d/tool-events.ndjson) · — · evidências: [#1](../../../../../../restauracoes/20261004-143436-solicitacao-sem-c93d/2026-10-04T14-34-36Z__solicitacao__opus__sem__rep-08__20261004-143436-solicitacao-sem-c93d/evidence/aderencia-oraculo.json) [#2](../../../../../../restauracoes/20261004-143436-solicitacao-sem-c93d/2026-10-04T14-34-36Z__solicitacao__opus__sem__rep-08__20261004-143436-solicitacao-sem-c93d/evidence/cliente.json) [#3](../../../../../../restauracoes/20261004-143436-solicitacao-sem-c93d/2026-10-04T14-34-36Z__solicitacao__opus__sem__rep-08__20261004-143436-solicitacao-sem-c93d/evidence/container-config.json) [#4](../../../../../../restauracoes/20261004-143436-solicitacao-sem-c93d/2026-10-04T14-34-36Z__solicitacao__opus__sem__rep-08__20261004-143436-solicitacao-sem-c93d/evidence/controles-positivos.json) [#5](../../../../../../restauracoes/20261004-143436-solicitacao-sem-c93d/2026-10-04T14-34-36Z__solicitacao__opus__sem__rep-08__20261004-143436-solicitacao-sem-c93d/evidence/mcp-config.json) [#6](../../../../../../restauracoes/20261004-143436-solicitacao-sem-c93d/2026-10-04T14-34-36Z__solicitacao__opus__sem__rep-08__20261004-143436-solicitacao-sem-c93d/evidence/preflight.json) [#7](../../../../../../restauracoes/20261004-143436-solicitacao-sem-c93d/2026-10-04T14-34-36Z__solicitacao__opus__sem__rep-08__20261004-143436-solicitacao-sem-c93d/evidence/prompt.txt) [#8](../../../../../../restauracoes/20261004-143436-solicitacao-sem-c93d/2026-10-04T14-34-36Z__solicitacao__opus__sem__rep-08__20261004-143436-solicitacao-sem-c93d/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../../restauracoes/20261004-143436-solicitacao-sem-c93d/2026-10-04T14-34-36Z__solicitacao__opus__sem__rep-08__20261004-143436-solicitacao-sem-c93d/evidence/raw/browser/inventory.json) [#10](../../../../../../restauracoes/20261004-143436-solicitacao-sem-c93d/2026-10-04T14-34-36Z__solicitacao__opus__sem__rep-08__20261004-143436-solicitacao-sem-c93d/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../../restauracoes/20261004-143436-solicitacao-sem-c93d/2026-10-04T14-34-36Z__solicitacao__opus__sem__rep-08__20261004-143436-solicitacao-sem-c93d/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../../restauracoes/20261004-143436-solicitacao-sem-c93d/2026-10-04T14-34-36Z__solicitacao__opus__sem__rep-08__20261004-143436-solicitacao-sem-c93d/evidence/raw/collector/events.ndjson) [#13](../../../../../../restauracoes/20261004-143436-solicitacao-sem-c93d/2026-10-04T14-34-36Z__solicitacao__opus__sem__rep-08__20261004-143436-solicitacao-sem-c93d/evidence/raw/collector/findings.json) [#14](../../../../../../restauracoes/20261004-143436-solicitacao-sem-c93d/2026-10-04T14-34-36Z__solicitacao__opus__sem__rep-08__20261004-143436-solicitacao-sem-c93d/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../../restauracoes/20261004-143436-solicitacao-sem-c93d/2026-10-04T14-34-36Z__solicitacao__opus__sem__rep-08__20261004-143436-solicitacao-sem-c93d/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../../restauracoes/20261004-143436-solicitacao-sem-c93d/2026-10-04T14-34-36Z__solicitacao__opus__sem__rep-08__20261004-143436-solicitacao-sem-c93d/evidence/raw/probe/probe.json) [#17](../../../../../../restauracoes/20261004-143436-solicitacao-sem-c93d/2026-10-04T14-34-36Z__solicitacao__opus__sem__rep-08__20261004-143436-solicitacao-sem-c93d/evidence/raw/probe/sonda-escrita-1791124500170.txt) [#18](../../../../../../restauracoes/20261004-143436-solicitacao-sem-c93d/2026-10-04T14-34-36Z__solicitacao__opus__sem__rep-08__20261004-143436-solicitacao-sem-c93d/evidence/raw/task/mcp.json) [#19](../../../../../../restauracoes/20261004-143436-solicitacao-sem-c93d/2026-10-04T14-34-36Z__solicitacao__opus__sem__rep-08__20261004-143436-solicitacao-sem-c93d/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../../restauracoes/20261004-143436-solicitacao-sem-c93d/2026-10-04T14-34-36Z__solicitacao__opus__sem__rep-08__20261004-143436-solicitacao-sem-c93d/evidence/logs/agent.log) [#2](../../../../../../restauracoes/20261004-143436-solicitacao-sem-c93d/2026-10-04T14-34-36Z__solicitacao__opus__sem__rep-08__20261004-143436-solicitacao-sem-c93d/evidence/logs/browser.log) [#3](../../../../../../restauracoes/20261004-143436-solicitacao-sem-c93d/2026-10-04T14-34-36Z__solicitacao__opus__sem__rep-08__20261004-143436-solicitacao-sem-c93d/evidence/logs/collector.log) [#4](../../../../../../restauracoes/20261004-143436-solicitacao-sem-c93d/2026-10-04T14-34-36Z__solicitacao__opus__sem__rep-08__20261004-143436-solicitacao-sem-c93d/evidence/logs/egress-provider.log) [#5](../../../../../../restauracoes/20261004-143436-solicitacao-sem-c93d/2026-10-04T14-34-36Z__solicitacao__opus__sem__rep-08__20261004-143436-solicitacao-sem-c93d/evidence/logs/egress-site.log) [#6](../../../../../../restauracoes/20261004-143436-solicitacao-sem-c93d/2026-10-04T14-34-36Z__solicitacao__opus__sem__rep-08__20261004-143436-solicitacao-sem-c93d/evidence/logs/probe.log) [#7](../../../../../../restauracoes/20261004-143436-solicitacao-sem-c93d/2026-10-04T14-34-36Z__solicitacao__opus__sem__rep-08__20261004-143436-solicitacao-sem-c93d/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (9; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| #forma-presencial | wcag:4.1.2 | O radio 'Presencial' não tem nome acessível \(árvore de acessibilidade: 'radio' sem nome\); o &lt;label&gt;Presencial&lt;/label&gt; não tem atributo for e não envolve o input, e clicar no texto 'Presencial' não marca a opção \(checked… |
| .upload-button\[aria-hidden=&quot;true&quot;\] | wcag:4.1.2 | O botão 'Selecione o arquivo' tem aria-hidden=&quot;true&quot; mas é focável \(tabindex=&quot;1&quot;, recebe foco por Tab\); o input file #documentos está com display:none. O único controle de upload fica sem nome/papel para tecnologia assi… |
| .upload-button\[tabindex=&quot;1&quot;\] | wcag:2.4.3 | tabindex=&quot;1&quot; no botão de upload: o primeiro Tab após o carregamento leva ao botão 'Selecione o arquivo', no meio do formulário, antes do skip link, do cabeçalho e dos campos anteriores. |
| #servico, #unidade | wcag:2.4.7 | Ao receber foco por teclado \(Tab\), os campos 'Tipo de serviço' e 'Unidade de atendimento' não exibem indicador: outline none, box-shadow none e borda inalterada rgb\(136,136,136\); os demais campos mostram box-shadow 0 0 … |
| #servico, #unidade | wcag:3.3.1 | No estado de erro os campos recebem aria-invalid=&quot;true&quot;, mas as mensagens 'Selecione o tipo de serviço.' e 'Selecione a unidade de atendimento.' não têm id e os inputs não têm aria-describedby; nos demais campos a mensa… |
| .br-message.danger &gt; .close | incerta | Na mensagem de erro de envio, o botão de fechar \(div role=button\) é o primeiro filho e aparece à esquerda \(x=201\), antes do texto, e o ícone de estado fica à direita \(x=1019\). A mensagem de sucesso da mesma tela segue a… |
| .grupo-forma .br-radio &gt; label, .grupo-recursos .br-checkbox &gt; label, .campo-de… | wcag:1.4.11 | O contorno visual dos radios e checkboxes \(label::before, 24x24\) é 1px solid rgb\(204,204,204\) sobre fundo rgb\(255,255,255\): contraste ≈ 1,6:1 \(cálculo manual\). |
| .acao-cancelar | wcag:2.4.3 | Ao fechar o modal 'Descartar solicitação?' com Esc ou 'Continuar preenchendo', o foco vai para &lt;body&gt; \(verificado também após 600 ms\) em vez de voltar ao botão Cancelar que o abriu. |
| .paginacao-anteriores .page.active | wcag:1.3.1 | A página atual da paginação é indicada só visualmente \(classe active: fundo rgb\(12,50,111\), texto branco\); nenhum link tem aria-current, e o estado não é exposto na árvore de acessibilidade \(link 'Página 1' igual aos de… |

**com** (20261004-144557-solicitacao-com-ef0f): [pacote](../../../../../../restauracoes/20261004-144557-solicitacao-com-ef0f/2026-10-04T14-45-57Z__solicitacao__opus__com__rep-08__20261004-144557-solicitacao-com-ef0f) · [run.json](../../../../../../restauracoes/20261004-144557-solicitacao-com-ef0f/2026-10-04T14-45-57Z__solicitacao__opus__com__rep-08__20261004-144557-solicitacao-com-ef0f/run.json) · [findings.json](../../../../../../restauracoes/20261004-144557-solicitacao-com-ef0f/2026-10-04T14-45-57Z__solicitacao__opus__com__rep-08__20261004-144557-solicitacao-com-ef0f/findings.json) · [isolation.json](../../../../../../restauracoes/20261004-144557-solicitacao-com-ef0f/2026-10-04T14-45-57Z__solicitacao__opus__com__rep-08__20261004-144557-solicitacao-com-ef0f/isolation.json) · [eventos de ferramenta](../../../../../../restauracoes/20261004-144557-solicitacao-com-ef0f/2026-10-04T14-45-57Z__solicitacao__opus__com__rep-08__20261004-144557-solicitacao-com-ef0f/tool-events.ndjson) · — · evidências: [#1](../../../../../../restauracoes/20261004-144557-solicitacao-com-ef0f/2026-10-04T14-45-57Z__solicitacao__opus__com__rep-08__20261004-144557-solicitacao-com-ef0f/evidence/aderencia-oraculo.json) [#2](../../../../../../restauracoes/20261004-144557-solicitacao-com-ef0f/2026-10-04T14-45-57Z__solicitacao__opus__com__rep-08__20261004-144557-solicitacao-com-ef0f/evidence/cliente.json) [#3](../../../../../../restauracoes/20261004-144557-solicitacao-com-ef0f/2026-10-04T14-45-57Z__solicitacao__opus__com__rep-08__20261004-144557-solicitacao-com-ef0f/evidence/container-config.json) [#4](../../../../../../restauracoes/20261004-144557-solicitacao-com-ef0f/2026-10-04T14-45-57Z__solicitacao__opus__com__rep-08__20261004-144557-solicitacao-com-ef0f/evidence/controles-positivos.json) [#5](../../../../../../restauracoes/20261004-144557-solicitacao-com-ef0f/2026-10-04T14-45-57Z__solicitacao__opus__com__rep-08__20261004-144557-solicitacao-com-ef0f/evidence/mcp-config.json) [#6](../../../../../../restauracoes/20261004-144557-solicitacao-com-ef0f/2026-10-04T14-45-57Z__solicitacao__opus__com__rep-08__20261004-144557-solicitacao-com-ef0f/evidence/preflight.json) [#7](../../../../../../restauracoes/20261004-144557-solicitacao-com-ef0f/2026-10-04T14-45-57Z__solicitacao__opus__com__rep-08__20261004-144557-solicitacao-com-ef0f/evidence/prompt.txt) [#8](../../../../../../restauracoes/20261004-144557-solicitacao-com-ef0f/2026-10-04T14-45-57Z__solicitacao__opus__com__rep-08__20261004-144557-solicitacao-com-ef0f/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../../restauracoes/20261004-144557-solicitacao-com-ef0f/2026-10-04T14-45-57Z__solicitacao__opus__com__rep-08__20261004-144557-solicitacao-com-ef0f/evidence/raw/browser/inventory.json) [#10](../../../../../../restauracoes/20261004-144557-solicitacao-com-ef0f/2026-10-04T14-45-57Z__solicitacao__opus__com__rep-08__20261004-144557-solicitacao-com-ef0f/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../../restauracoes/20261004-144557-solicitacao-com-ef0f/2026-10-04T14-45-57Z__solicitacao__opus__com__rep-08__20261004-144557-solicitacao-com-ef0f/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../../restauracoes/20261004-144557-solicitacao-com-ef0f/2026-10-04T14-45-57Z__solicitacao__opus__com__rep-08__20261004-144557-solicitacao-com-ef0f/evidence/raw/collector/events.ndjson) [#13](../../../../../../restauracoes/20261004-144557-solicitacao-com-ef0f/2026-10-04T14-45-57Z__solicitacao__opus__com__rep-08__20261004-144557-solicitacao-com-ef0f/evidence/raw/collector/findings.json) [#14](../../../../../../restauracoes/20261004-144557-solicitacao-com-ef0f/2026-10-04T14-45-57Z__solicitacao__opus__com__rep-08__20261004-144557-solicitacao-com-ef0f/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../../restauracoes/20261004-144557-solicitacao-com-ef0f/2026-10-04T14-45-57Z__solicitacao__opus__com__rep-08__20261004-144557-solicitacao-com-ef0f/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../../restauracoes/20261004-144557-solicitacao-com-ef0f/2026-10-04T14-45-57Z__solicitacao__opus__com__rep-08__20261004-144557-solicitacao-com-ef0f/evidence/raw/oracle/inventory.json) [#17](../../../../../../restauracoes/20261004-144557-solicitacao-com-ef0f/2026-10-04T14-45-57Z__solicitacao__opus__com__rep-08__20261004-144557-solicitacao-com-ef0f/evidence/raw/oracle/oracle-telemetry.ndjson) [#18](../../../../../../restauracoes/20261004-144557-solicitacao-com-ef0f/2026-10-04T14-45-57Z__solicitacao__opus__com__rep-08__20261004-144557-solicitacao-com-ef0f/evidence/raw/oracle/tool-events.ndjson) [#19](../../../../../../restauracoes/20261004-144557-solicitacao-com-ef0f/2026-10-04T14-45-57Z__solicitacao__opus__com__rep-08__20261004-144557-solicitacao-com-ef0f/evidence/raw/probe/probe.json) [#20](../../../../../../restauracoes/20261004-144557-solicitacao-com-ef0f/2026-10-04T14-45-57Z__solicitacao__opus__com__rep-08__20261004-144557-solicitacao-com-ef0f/evidence/raw/probe/sonda-escrita-1791125182103.txt) [#21](../../../../../../restauracoes/20261004-144557-solicitacao-com-ef0f/2026-10-04T14-45-57Z__solicitacao__opus__com__rep-08__20261004-144557-solicitacao-com-ef0f/evidence/raw/task/mcp.json) [#22](../../../../../../restauracoes/20261004-144557-solicitacao-com-ef0f/2026-10-04T14-45-57Z__solicitacao__opus__com__rep-08__20261004-144557-solicitacao-com-ef0f/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../../restauracoes/20261004-144557-solicitacao-com-ef0f/2026-10-04T14-45-57Z__solicitacao__opus__com__rep-08__20261004-144557-solicitacao-com-ef0f/evidence/logs/agent.log) [#2](../../../../../../restauracoes/20261004-144557-solicitacao-com-ef0f/2026-10-04T14-45-57Z__solicitacao__opus__com__rep-08__20261004-144557-solicitacao-com-ef0f/evidence/logs/browser.log) [#3](../../../../../../restauracoes/20261004-144557-solicitacao-com-ef0f/2026-10-04T14-45-57Z__solicitacao__opus__com__rep-08__20261004-144557-solicitacao-com-ef0f/evidence/logs/collector.log) [#4](../../../../../../restauracoes/20261004-144557-solicitacao-com-ef0f/2026-10-04T14-45-57Z__solicitacao__opus__com__rep-08__20261004-144557-solicitacao-com-ef0f/evidence/logs/egress-provider.log) [#5](../../../../../../restauracoes/20261004-144557-solicitacao-com-ef0f/2026-10-04T14-45-57Z__solicitacao__opus__com__rep-08__20261004-144557-solicitacao-com-ef0f/evidence/logs/egress-site.log) [#6](../../../../../../restauracoes/20261004-144557-solicitacao-com-ef0f/2026-10-04T14-45-57Z__solicitacao__opus__com__rep-08__20261004-144557-solicitacao-com-ef0f/evidence/logs/oracle.log) [#7](../../../../../../restauracoes/20261004-144557-solicitacao-com-ef0f/2026-10-04T14-45-57Z__solicitacao__opus__com__rep-08__20261004-144557-solicitacao-com-ef0f/evidence/logs/probe.log) [#8](../../../../../../restauracoes/20261004-144557-solicitacao-com-ef0f/2026-10-04T14-45-57Z__solicitacao__opus__com__rep-08__20261004-144557-solicitacao-com-ef0f/evidence/logs/screens.log) · [binding](analysis-binding.com.json)

Achados enviados (10; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| header.barra-superior | ds-page-header | O cabeçalho é um &lt;header class=&quot;barra-superior&quot;&gt; próprio, só com o link 'gov.br'; não há .br-header nem &lt;br-header&gt; no documento. |
| body | ds-page-footer | Não há rodapé: nenhum .br-footer nem &lt;br-footer&gt; no documento; a página termina na paginação da tabela. |
| #forma-presencial | label | O rádio 'Presencial' não tem nome acessível: o &lt;label&gt;Presencial&lt;/label&gt; irmão não tem atributo for, e clicar no texto 'Presencial' não marca a opção \(os demais rádios têm for\). |
| .upload-button | aria-hidden-focus | O botão 'Selecione o arquivo' tem aria-hidden=&quot;true&quot; e recebe foco pelo teclado; o input file #documentos tem display:none. O único controle de upload operável fica fora da árvore de acessibilidade. |
| .upload-button | wcag:2.4.3 | O botão de upload tem tabindex=&quot;1&quot;: o primeiro Tab após o carregamento vai a ele \(no meio do formulário\), antes do link 'Ir para o conteúdo', do cabeçalho e dos campos; depois do último controle, o foco volta a ele. |
| .flatpickr-prev-month &gt; button, .flatpickr-next-month &gt; button | emag-2.2 | Os botões de mês anterior e seguinte do calendário da Data preferencial só têm um ícone \(&lt;i class=&quot;fas fa-chevron-...&quot;&gt;\) e nenhum aria-label: não têm nome acessível. |
| .mensagem-retorno.danger .close &gt; \[role=button\] | ds-structure-button-tag | Na mensagem de erro, o botão 'Fechar a mensagem' é um &lt;div class=&quot;br-button circle small&quot; role=&quot;button&quot; tabindex=&quot;0&quot;&gt;; na mensagem de sucesso, é um &lt;button&gt;. |
| .mensagem-retorno.danger | govbr-3.7.0-component-message-66b01a712e67 | Na Message de erro, o botão Fechar aparece à esquerda \(x=201\) e o ícone semântico \(fa-times-circle\) aparece à direita \(x=1019\); a ordem no DOM é close, content, icon. |
| #servico, #unidade | wcag:1.3.1 | Após o envio inválido, #servico e #unidade recebem aria-invalid=&quot;true&quot;, mas não têm aria-describedby; as mensagens 'Selecione o tipo de serviço.' e 'Selecione a unidade de atendimento.' não têm id e não estão associadas… |
| .acao-cancelar | wcag:2.4.3 | Ao fechar o diálogo 'Descartar solicitação?' \(com Esc, 'Continuar preenchendo' ou 'Descartar'\), o foco vai para o &lt;body&gt;, em vez de voltar ao botão Cancelar que o abriu. |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `3aeaf9ab52b670340c6f3df24f0267059e072a4596d84d85bdddbb633275595a`

