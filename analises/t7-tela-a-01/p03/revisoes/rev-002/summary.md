# Resumo da análise — Solicitar serviço (solicitacao)

Revisão 2 · substitui [a revisão anterior](../rev-001/summary.md) (sem alterar o pacote bruto) · gerado em 2026-10-05T02:41:59.672Z (UTC)

## 1. Status técnico

Análise: **pronta**

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261004-052047-solicitacao-sem-274e | sem | rodou até o fim e o relatório foi aceito | — | aceita | final (revisão fechada) |
| 20261004-053312-solicitacao-com-4f61 | com | rodou até o fim e o relatório foi aceito | — | aceita | final (revisão fechada) |

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
| Início (UTC) | 2026-10-04T05:21:10Z | 2026-10-04T05:33:38Z |
| Início (local) | 04/10/2026, 02:21:10 (horário de Brasília) | 04/10/2026, 02:33:38 (horário de Brasília) |
| Commit do harness | 1b6ed3e79deaab08c7109e7c0008bef947921077 | 1b6ed3e79deaab08c7109e7c0008bef947921077 |
| Repetição · tentativa | 3 · 1 | 3 · 1 |
| Campanha · slot · par | t7-tela-a-01 · p03-sem · p03 | t7-tela-a-01 · p03-com · p03 |

## 3. Resultado científico

| Medida | sem | com |
|---|---|---|
| Defeitos da referência confirmados | 9 de 16 | 11 de 16 |
| Recall (cobertura da referência) | 56,3% | 68,8% |
| Sorteadas × página (A-\* × P-\*) | A-\*: 9 de 14 · 64,3% × P-\*: 0 de 2 · 0,0% | A-\*: 9 de 14 · 64,3% × P-\*: 2 de 2 · 100,0% |
| Precisão sobre a referência — D/(D+F) | 56,3% | 78,6% |
| Precisão das afirmações — (D+N)/(D+N+F) | 56,3% | 78,6% |
| Afirmações incorretas (falsos positivos) | 7 | 3 |
| Defeitos novos corretos (fora da referência) | 0 | 0 |
| Duplicadas | 0 | 0 |
| Cartões pendentes de revisão | 0 | 0 |
| Maturidade | final (revisão fechada) | final (revisão fechada) |
| Entra na comparação principal | sim | sim |
| Achados enviados | 9 | 11 |

Recall e precisão só aparecem com a revisão fechada; enquanto houver cartão pendente ficam “indisponível” (nunca 0). “Achados enviados = 0” é um resultado válido (o agente olhou e não alegou nada); submissão recusada ou ausente é outra coisa.

Linha de base determinística (união das varreduras comparáveis), por unidade da referência:

| Unidades | sem | com |
|---|---|---|
| Agente e linha de base | 1 | 3 |
| Só o agente | 8 | 8 |
| Só a linha de base | 2 | 0 |
| Nenhum | 5 | 5 |
| Estado | final | final |

Linha de base: usada (lb-20261004-052028-solicitacao-7c47e6)

## 4. Comparação com − sem

_n = 1 par, sem inferência. Nenhum braço é declarado melhor por contagem bruta._

Estado: final (as duas revisões fechadas)

- Diferença de defeitos confirmados (com − sem): +2
- Diferença de recall (com − sem): +12,5 p.p.
- Só o com detectou: A-03 (&lt;div&gt; &quot;Descartar solicitação? Os dados preenchidos nest&quot;); P-01 (&lt;header&gt; &quot;gov.br&quot;); P-02 (&lt;body&gt; &quot;Ir para o conteúdo \(1/1\) 1 gov.br Página inicial&quot;); A-06 (&lt;div&gt; &quot;Fechar a mensagem&quot;)
- Só o sem detectou: A-11 (&lt;div&gt; &quot;Não foi possível enviar. Há 8 campo\(s\) obrigatór&quot;); A-12 (&lt;nav&gt; &quot;Paginação de solicitações anteriores&quot;)
- Os dois detectaram: A-04 (&lt;input#unidade&gt; &quot;Selecione uma opção&quot;); A-09 (&lt;input#forma-presencial&gt;); A-08 (&lt;input#unidade&gt; &quot;Selecione uma opção&quot;); A-08 (&lt;input#servico&gt; &quot;Selecione uma opção&quot;); A-04 (&lt;input#servico&gt; &quot;Selecione uma opção&quot;); A-02 (&lt;button&gt; &quot;Selecione o arquivo&quot;); A-01 (&lt;div&gt; &quot;Descartar solicitação? Os dados preenchidos nest&quot;)
- Nenhum detectou: A-07 (&lt;nav&gt; &quot;Paginação de solicitações anteriores&quot;); A-05 (&lt;div&gt; &quot;Solicitações anteriores Protocolo Serviço Data S&quot;); A-10 (&lt;div&gt; &quot;Documentos comprobatórios \(opcional\) Selecione o&quot;)

## 5. MCP e isolamento

| | sem | com |
|---|---|---|
| Isolamento | passed | passed |
| Oráculo anunciado ao cliente | não | sim |
| Oráculo (pacote) | nenhum | govbr-ds-validator-server 2.7.0 (combined) |
| Uso do oráculo | ausente (confirmado) | usado conforme o protocolo |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 14 (ponte MCP do oráculo) |
| Protocolo | unverified | unverified |
| Ferramentas anunciadas | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for, get\_ds\_rules, get\_design\_tokens, get\_emag\_rules, get\_pag… |
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_console\_messages, browser\_take\_screenshot, browser\_press\_key, browser\_click, browser\_snapshot, browser\_hover, browser\_fill\_form, browser\_tabs | browser\_navigate, browser\_evaluate, browser\_console\_messages, scan\_page, browser\_take\_screenshot, browser\_press\_key, browser\_snapshot, browser\_click, browser\_fill\_form, get\_component\_spec, get\_ds\_rules, browser\_type, get\_finding\_details, verify\_finding |
| Erros de ferramenta | 3 (tool-events.ndjson \(eventos com isError: true\)) | 0 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 8 aprovado(s); falhos: nenhum | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | nenhuma | nenhuma |

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 6. Custo e tempo

| | sem | com |
|---|---|---|
| Tempo de relógio (s) | 487 (runner) | 395 (runner) |
| Turnos | 133 (stream-json do cliente \(result.num\_turns\)) | 103 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 132 (ponte MCP) | 102 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 14 (ponte MCP do oráculo) |
| Tokens de entrada | 108 (stream-json do cliente \(result.usage\)) | 100 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 30791 (stream-json do cliente \(result.usage\)) | 25085 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 3398022 (stream-json do cliente \(result.usage\)) | 3580297 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 94009 (stream-json do cliente \(result.usage\)) | 112062 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 2.0479284 (estimativa do cliente \(result.total\_cost\_usd\)) | 2.1146554 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 28 cartão(ões), estimativa 168 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 7. Detalhes e evidências

**sem** (20261004-052047-solicitacao-sem-274e): [pacote](../../../../../restauracoes/20261004-052047-solicitacao-sem-274e/2026-10-04T05-20-47Z__solicitacao__opus__sem__rep-03__20261004-052047-solicitacao-sem-274e) · [run.json](../../../../../restauracoes/20261004-052047-solicitacao-sem-274e/2026-10-04T05-20-47Z__solicitacao__opus__sem__rep-03__20261004-052047-solicitacao-sem-274e/run.json) · [findings.json](../../../../../restauracoes/20261004-052047-solicitacao-sem-274e/2026-10-04T05-20-47Z__solicitacao__opus__sem__rep-03__20261004-052047-solicitacao-sem-274e/findings.json) · [isolation.json](../../../../../restauracoes/20261004-052047-solicitacao-sem-274e/2026-10-04T05-20-47Z__solicitacao__opus__sem__rep-03__20261004-052047-solicitacao-sem-274e/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261004-052047-solicitacao-sem-274e/2026-10-04T05-20-47Z__solicitacao__opus__sem__rep-03__20261004-052047-solicitacao-sem-274e/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261004-052047-solicitacao-sem-274e/2026-10-04T05-20-47Z__solicitacao__opus__sem__rep-03__20261004-052047-solicitacao-sem-274e/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261004-052047-solicitacao-sem-274e/2026-10-04T05-20-47Z__solicitacao__opus__sem__rep-03__20261004-052047-solicitacao-sem-274e/evidence/cliente.json) [#3](../../../../../restauracoes/20261004-052047-solicitacao-sem-274e/2026-10-04T05-20-47Z__solicitacao__opus__sem__rep-03__20261004-052047-solicitacao-sem-274e/evidence/container-config.json) [#4](../../../../../restauracoes/20261004-052047-solicitacao-sem-274e/2026-10-04T05-20-47Z__solicitacao__opus__sem__rep-03__20261004-052047-solicitacao-sem-274e/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261004-052047-solicitacao-sem-274e/2026-10-04T05-20-47Z__solicitacao__opus__sem__rep-03__20261004-052047-solicitacao-sem-274e/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261004-052047-solicitacao-sem-274e/2026-10-04T05-20-47Z__solicitacao__opus__sem__rep-03__20261004-052047-solicitacao-sem-274e/evidence/preflight.json) [#7](../../../../../restauracoes/20261004-052047-solicitacao-sem-274e/2026-10-04T05-20-47Z__solicitacao__opus__sem__rep-03__20261004-052047-solicitacao-sem-274e/evidence/prompt.txt) [#8](../../../../../restauracoes/20261004-052047-solicitacao-sem-274e/2026-10-04T05-20-47Z__solicitacao__opus__sem__rep-03__20261004-052047-solicitacao-sem-274e/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261004-052047-solicitacao-sem-274e/2026-10-04T05-20-47Z__solicitacao__opus__sem__rep-03__20261004-052047-solicitacao-sem-274e/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261004-052047-solicitacao-sem-274e/2026-10-04T05-20-47Z__solicitacao__opus__sem__rep-03__20261004-052047-solicitacao-sem-274e/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261004-052047-solicitacao-sem-274e/2026-10-04T05-20-47Z__solicitacao__opus__sem__rep-03__20261004-052047-solicitacao-sem-274e/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261004-052047-solicitacao-sem-274e/2026-10-04T05-20-47Z__solicitacao__opus__sem__rep-03__20261004-052047-solicitacao-sem-274e/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261004-052047-solicitacao-sem-274e/2026-10-04T05-20-47Z__solicitacao__opus__sem__rep-03__20261004-052047-solicitacao-sem-274e/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261004-052047-solicitacao-sem-274e/2026-10-04T05-20-47Z__solicitacao__opus__sem__rep-03__20261004-052047-solicitacao-sem-274e/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261004-052047-solicitacao-sem-274e/2026-10-04T05-20-47Z__solicitacao__opus__sem__rep-03__20261004-052047-solicitacao-sem-274e/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261004-052047-solicitacao-sem-274e/2026-10-04T05-20-47Z__solicitacao__opus__sem__rep-03__20261004-052047-solicitacao-sem-274e/evidence/raw/probe/probe.json) [#17](../../../../../restauracoes/20261004-052047-solicitacao-sem-274e/2026-10-04T05-20-47Z__solicitacao__opus__sem__rep-03__20261004-052047-solicitacao-sem-274e/evidence/raw/probe/sonda-escrita-1791091270420.txt) [#18](../../../../../restauracoes/20261004-052047-solicitacao-sem-274e/2026-10-04T05-20-47Z__solicitacao__opus__sem__rep-03__20261004-052047-solicitacao-sem-274e/evidence/raw/task/mcp.json) [#19](../../../../../restauracoes/20261004-052047-solicitacao-sem-274e/2026-10-04T05-20-47Z__solicitacao__opus__sem__rep-03__20261004-052047-solicitacao-sem-274e/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261004-052047-solicitacao-sem-274e/2026-10-04T05-20-47Z__solicitacao__opus__sem__rep-03__20261004-052047-solicitacao-sem-274e/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261004-052047-solicitacao-sem-274e/2026-10-04T05-20-47Z__solicitacao__opus__sem__rep-03__20261004-052047-solicitacao-sem-274e/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261004-052047-solicitacao-sem-274e/2026-10-04T05-20-47Z__solicitacao__opus__sem__rep-03__20261004-052047-solicitacao-sem-274e/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261004-052047-solicitacao-sem-274e/2026-10-04T05-20-47Z__solicitacao__opus__sem__rep-03__20261004-052047-solicitacao-sem-274e/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261004-052047-solicitacao-sem-274e/2026-10-04T05-20-47Z__solicitacao__opus__sem__rep-03__20261004-052047-solicitacao-sem-274e/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261004-052047-solicitacao-sem-274e/2026-10-04T05-20-47Z__solicitacao__opus__sem__rep-03__20261004-052047-solicitacao-sem-274e/evidence/logs/probe.log) [#7](../../../../../restauracoes/20261004-052047-solicitacao-sem-274e/2026-10-04T05-20-47Z__solicitacao__opus__sem__rep-03__20261004-052047-solicitacao-sem-274e/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (9; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| #forma-presencial | wcag:4.1.2 | O radio 'Presencial' não tem nome acessível: o &lt;label&gt;Presencial&lt;/label&gt; não tem atributo for e não envolve o input; a árvore de acessibilidade expõe 'radio' sem nome, e clicar no texto 'Presencial' não marca a opção. |
| .upload-button | wcag:4.1.2 | O botão 'Selecione o arquivo' é o único controle operável do upload \(o input#documentos tem display:none\), mas tem aria-hidden=&quot;true&quot; e continua focável e clicável; leitores de tela não recebem nome nem papel para ele. |
| .upload-button | wcag:2.4.3 | O botão de upload tem tabindex=&quot;1&quot; e recebe o primeiro Tab da página, antes do link 'Ir para o conteúdo', do cabeçalho, da trilha e dos campos anteriores do formulário; a página rola até o meio do formulário. |
| #servico, #unidade | wcag:2.4.7 | Com foco por teclado, os campos 'Tipo de serviço' e 'Unidade de atendimento' ficam com outline:none e box-shadow:none, por causa da regra de solicitacao-D9ODjg1O.css '.campo-servico .br-input input:focus\(-visible\), .cam… |
| .campo-servico .feedback, .campo-unidade .feedback | wcag:1.3.1 | Após envio vazio, as mensagens 'Selecione o tipo de serviço.' e 'Selecione a unidade de atendimento.' não têm id, e #servico/#unidade \(aria-invalid=true\) não têm aria-describedby; os outros campos com erro apontam para … |
| .grupo-forma .br-radio &gt; label, .br-checkbox &gt; label | wcag:1.4.11 | O indicador visual dos radios e checkboxes \(label::before\) tem borda de 1px rgb\(204,204,204\) sobre fundo branco, contraste de cerca de 1,6:1. |
| .dialogo-descarte | wcag:2.4.3 | Ao fechar o diálogo 'Descartar solicitação?' com Esc ou com 'Continuar preenchendo', o foco vai para o &lt;body&gt; em vez de voltar ao botão Cancelar que o abriu. |
| .paginacao-anteriores a.page.active | wcag:1.3.1 | A página atual da paginação é indicada só visualmente \(classe 'active', círculo preenchido\), sem aria-current; o mesmo vale depois de ir para a página 2. |
| .mensagem-retorno.danger &gt; .close | incerta | Na mensagem de erro geral \(br-message danger\), o botão Fechar vem primeiro no DOM e aparece à esquerda \(x=201\), e o ícone de status aparece à direita \(x=1019\). A mensagem de sucesso da mesma tela segue a ordem do DS: íc… |

**com** (20261004-053312-solicitacao-com-4f61): [pacote](../../../../../restauracoes/20261004-053312-solicitacao-com-4f61/2026-10-04T05-33-12Z__solicitacao__opus__com__rep-03__20261004-053312-solicitacao-com-4f61) · [run.json](../../../../../restauracoes/20261004-053312-solicitacao-com-4f61/2026-10-04T05-33-12Z__solicitacao__opus__com__rep-03__20261004-053312-solicitacao-com-4f61/run.json) · [findings.json](../../../../../restauracoes/20261004-053312-solicitacao-com-4f61/2026-10-04T05-33-12Z__solicitacao__opus__com__rep-03__20261004-053312-solicitacao-com-4f61/findings.json) · [isolation.json](../../../../../restauracoes/20261004-053312-solicitacao-com-4f61/2026-10-04T05-33-12Z__solicitacao__opus__com__rep-03__20261004-053312-solicitacao-com-4f61/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261004-053312-solicitacao-com-4f61/2026-10-04T05-33-12Z__solicitacao__opus__com__rep-03__20261004-053312-solicitacao-com-4f61/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261004-053312-solicitacao-com-4f61/2026-10-04T05-33-12Z__solicitacao__opus__com__rep-03__20261004-053312-solicitacao-com-4f61/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261004-053312-solicitacao-com-4f61/2026-10-04T05-33-12Z__solicitacao__opus__com__rep-03__20261004-053312-solicitacao-com-4f61/evidence/cliente.json) [#3](../../../../../restauracoes/20261004-053312-solicitacao-com-4f61/2026-10-04T05-33-12Z__solicitacao__opus__com__rep-03__20261004-053312-solicitacao-com-4f61/evidence/container-config.json) [#4](../../../../../restauracoes/20261004-053312-solicitacao-com-4f61/2026-10-04T05-33-12Z__solicitacao__opus__com__rep-03__20261004-053312-solicitacao-com-4f61/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261004-053312-solicitacao-com-4f61/2026-10-04T05-33-12Z__solicitacao__opus__com__rep-03__20261004-053312-solicitacao-com-4f61/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261004-053312-solicitacao-com-4f61/2026-10-04T05-33-12Z__solicitacao__opus__com__rep-03__20261004-053312-solicitacao-com-4f61/evidence/preflight.json) [#7](../../../../../restauracoes/20261004-053312-solicitacao-com-4f61/2026-10-04T05-33-12Z__solicitacao__opus__com__rep-03__20261004-053312-solicitacao-com-4f61/evidence/prompt.txt) [#8](../../../../../restauracoes/20261004-053312-solicitacao-com-4f61/2026-10-04T05-33-12Z__solicitacao__opus__com__rep-03__20261004-053312-solicitacao-com-4f61/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261004-053312-solicitacao-com-4f61/2026-10-04T05-33-12Z__solicitacao__opus__com__rep-03__20261004-053312-solicitacao-com-4f61/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261004-053312-solicitacao-com-4f61/2026-10-04T05-33-12Z__solicitacao__opus__com__rep-03__20261004-053312-solicitacao-com-4f61/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261004-053312-solicitacao-com-4f61/2026-10-04T05-33-12Z__solicitacao__opus__com__rep-03__20261004-053312-solicitacao-com-4f61/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261004-053312-solicitacao-com-4f61/2026-10-04T05-33-12Z__solicitacao__opus__com__rep-03__20261004-053312-solicitacao-com-4f61/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261004-053312-solicitacao-com-4f61/2026-10-04T05-33-12Z__solicitacao__opus__com__rep-03__20261004-053312-solicitacao-com-4f61/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261004-053312-solicitacao-com-4f61/2026-10-04T05-33-12Z__solicitacao__opus__com__rep-03__20261004-053312-solicitacao-com-4f61/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261004-053312-solicitacao-com-4f61/2026-10-04T05-33-12Z__solicitacao__opus__com__rep-03__20261004-053312-solicitacao-com-4f61/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261004-053312-solicitacao-com-4f61/2026-10-04T05-33-12Z__solicitacao__opus__com__rep-03__20261004-053312-solicitacao-com-4f61/evidence/raw/oracle/inventory.json) [#17](../../../../../restauracoes/20261004-053312-solicitacao-com-4f61/2026-10-04T05-33-12Z__solicitacao__opus__com__rep-03__20261004-053312-solicitacao-com-4f61/evidence/raw/oracle/oracle-telemetry.ndjson) [#18](../../../../../restauracoes/20261004-053312-solicitacao-com-4f61/2026-10-04T05-33-12Z__solicitacao__opus__com__rep-03__20261004-053312-solicitacao-com-4f61/evidence/raw/oracle/tool-events.ndjson) [#19](../../../../../restauracoes/20261004-053312-solicitacao-com-4f61/2026-10-04T05-33-12Z__solicitacao__opus__com__rep-03__20261004-053312-solicitacao-com-4f61/evidence/raw/probe/probe.json) [#20](../../../../../restauracoes/20261004-053312-solicitacao-com-4f61/2026-10-04T05-33-12Z__solicitacao__opus__com__rep-03__20261004-053312-solicitacao-com-4f61/evidence/raw/probe/sonda-escrita-1791092017626.txt) [#21](../../../../../restauracoes/20261004-053312-solicitacao-com-4f61/2026-10-04T05-33-12Z__solicitacao__opus__com__rep-03__20261004-053312-solicitacao-com-4f61/evidence/raw/task/mcp.json) [#22](../../../../../restauracoes/20261004-053312-solicitacao-com-4f61/2026-10-04T05-33-12Z__solicitacao__opus__com__rep-03__20261004-053312-solicitacao-com-4f61/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261004-053312-solicitacao-com-4f61/2026-10-04T05-33-12Z__solicitacao__opus__com__rep-03__20261004-053312-solicitacao-com-4f61/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261004-053312-solicitacao-com-4f61/2026-10-04T05-33-12Z__solicitacao__opus__com__rep-03__20261004-053312-solicitacao-com-4f61/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261004-053312-solicitacao-com-4f61/2026-10-04T05-33-12Z__solicitacao__opus__com__rep-03__20261004-053312-solicitacao-com-4f61/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261004-053312-solicitacao-com-4f61/2026-10-04T05-33-12Z__solicitacao__opus__com__rep-03__20261004-053312-solicitacao-com-4f61/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261004-053312-solicitacao-com-4f61/2026-10-04T05-33-12Z__solicitacao__opus__com__rep-03__20261004-053312-solicitacao-com-4f61/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261004-053312-solicitacao-com-4f61/2026-10-04T05-33-12Z__solicitacao__opus__com__rep-03__20261004-053312-solicitacao-com-4f61/evidence/logs/oracle.log) [#7](../../../../../restauracoes/20261004-053312-solicitacao-com-4f61/2026-10-04T05-33-12Z__solicitacao__opus__com__rep-03__20261004-053312-solicitacao-com-4f61/evidence/logs/probe.log) [#8](../../../../../restauracoes/20261004-053312-solicitacao-com-4f61/2026-10-04T05-33-12Z__solicitacao__opus__com__rep-03__20261004-053312-solicitacao-com-4f61/evidence/logs/screens.log) · [binding](analysis-binding.com.json)

Achados enviados (11; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| #forma-presencial | label | O rádio 'Presencial' tem um &lt;label&gt; irmão sem atributo for e não está envolvido por ele. Não tem aria-label, então fica sem nome acessível \(aparece como 'radio' sem nome na árvore\). Clicar no texto 'Presencial' também n… |
| .upload-button | aria-hidden-focus | O botão 'Selecione o arquivo' tem aria-hidden='true' e é focável \(tabindex='1'\). O input file #documentos está com display:none, então o único controle de upload fica oculto para tecnologias assistivas e recebe foco sem… |
| .upload-button | wcag:2.4.3 | tabindex='1' \(positivo\) no botão de upload. O primeiro Tab após o carregamento vai direto para esse botão, no meio do formulário, antes do skiplink 'Ir para o conteúdo' e dos campos anteriores. |
| #servico, #unidade | wcag:2.4.7 | Com foco pelo teclado nos campos 'Tipo de serviço' e 'Unidade de atendimento': outline-style none, box-shadow none e borda inalterada \(1px #888\), também no .input-group e no .br-input. Nenhum indicador visível na captur… |
| #servico, #unidade | wcag:1.3.1 | Após Enviar com o formulário vazio, #servico e #unidade recebem aria-invalid='true' sem aria-describedby. As mensagens 'Selecione o tipo de serviço.' e 'Selecione a unidade de atendimento.' não têm id e não estão associ… |
| .flatpickr-prev-month &gt; button, .flatpickr-next-month &gt; button | emag-2.2 | Os botões de mês anterior e próximo do calendário do datepicker contêm só um ícone e não têm aria-label nem texto, então ficam sem nome acessível. |
| header.barra-superior | ds-page-header | A página usa &lt;header class='barra-superior'&gt; só com a marca gov.br; não há .br-header nem &lt;br-header&gt; no documento. |
| body | ds-page-footer | O documento não tem .br-footer nem &lt;br-footer&gt;; a página termina na paginação do histórico. |
| .mensagem-retorno .close &gt; \[role=&quot;button&quot;\] | ds-structure-button-tag | Na mensagem de erro \(br-message danger\), o botão 'Fechar a mensagem' é um &lt;div class='br-button circle small' role='button' tabindex='0'&gt;. A mensagem de sucesso usa &lt;button&gt;. |
| .dialogo-descarte | ds-token-color | O modal 'Descartar solicitação?' usa color: rgb\(51, 67, 51\) \(#334333\), valor que não pertence ao registro de tokens do DS \(o mais próximo é --green-cool-70, #37493b\). |
| .acao-cancelar | wcag:2.4.3 | Ao fechar o modal 'Descartar solicitação?' com Esc ou com 'Continuar preenchendo', o foco vai para &lt;body&gt; \(document.activeElement = BODY\) em vez de voltar ao botão Cancelar que abriu o modal. |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `4628467a7bb2769081f2095dded165d302980d03219e8e2b260c57162b64320c`

