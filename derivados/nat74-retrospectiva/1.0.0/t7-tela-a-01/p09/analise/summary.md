# Resumo da análise — Solicitar serviço (solicitacao)

Revisão 1 · gerado em 2026-10-16T00:00:00Z (UTC)

## 1. Status técnico

Análise: **pronta**

Aviso: derivado retrospectivo nat74-retrospectiva-1.0.0: campanha congelada com flow-semantic-1.5.0, repreparada com flow-semantic-1.7.0 \(não substitui a análise oficial\)

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261004-145643-solicitacao-sem-3878 | sem | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 9 cartão(ões), nenhum decidido |
| 20261004-150809-solicitacao-com-b978 | com | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 11 cartão(ões), nenhum decidido |

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
| Início (UTC) | 2026-10-04T14:57:10Z | 2026-10-04T15:08:34Z |
| Início (local) | 04/10/2026, 11:57:10 (horário de Brasília) | 04/10/2026, 12:08:34 (horário de Brasília) |
| Commit do harness | 1b6ed3e79deaab08c7109e7c0008bef947921077 | 1b6ed3e79deaab08c7109e7c0008bef947921077 |
| Repetição · tentativa | 9 · 1 | 9 · 1 |
| Campanha · slot · par | t7-tela-a-01 · p09-sem · p09 | t7-tela-a-01 · p09-com · p09 |

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

Linha de base: usada (lb-20261004-145624-solicitacao-ffe124)

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
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 9 (ponte MCP do oráculo) |
| Protocolo | unverified | unverified |
| Ferramentas anunciadas | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for, get\_ds\_rules, get\_design\_tokens, get\_emag\_rules, get\_pag… |
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_console\_messages, browser\_take\_screenshot, browser\_snapshot, browser\_press\_key, browser\_click, browser\_tabs, browser\_fill\_form | browser\_navigate, browser\_evaluate, browser\_console\_messages, scan\_page, browser\_press\_key, browser\_take\_screenshot, browser\_click, browser\_snapshot, browser\_type, browser\_fill\_form, get\_ds\_rules, get\_component\_spec, verify\_finding |
| Erros de ferramenta | 3 (tool-events.ndjson \(eventos com isError: true\)) | 2 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 8 aprovado(s); falhos: nenhum | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | nenhuma | nenhuma |
| Registro de inspeção | registro indisponível \(pacote findings.v1, anterior ao registro de inspeção\) — não é zero cobertura | registro indisponível \(pacote findings.v1, anterior ao registro de inspeção\) — não é zero cobertura |

O registro de inspeção é declaração do agente sobre o inventário que ele mesmo descobriu; “com evento de ferramenta” só diz que o identificador citado aparece num evento gravado. Não pontua nem decide elegibilidade, e a cobertura da página continua desconhecida.

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 6. Custo e tempo

| | sem | com |
|---|---|---|
| Tempo de relógio (s) | 482 (runner) | 367 (runner) |
| Turnos | 120 (stream-json do cliente \(result.num\_turns\)) | 90 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 119 (ponte MCP) | 89 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 9 (ponte MCP do oráculo) |
| Tokens de entrada | 110 (stream-json do cliente \(result.usage\)) | 86 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 30819 (stream-json do cliente \(result.usage\)) | 22461 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 3701331 (stream-json do cliente \(result.usage\)) | 3228612 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 107546 (stream-json do cliente \(result.usage\)) | 114071 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 2.2174541999999997 (estimativa do cliente \(result.total\_cost\_usd\)) | 2.0078544 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 28 cartão(ões), estimativa 168 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 7. Detalhes e evidências

**sem** (20261004-145643-solicitacao-sem-3878): [pacote](../../../../../../restauracoes/20261004-145643-solicitacao-sem-3878/2026-10-04T14-56-43Z__solicitacao__opus__sem__rep-09__20261004-145643-solicitacao-sem-3878) · [run.json](../../../../../../restauracoes/20261004-145643-solicitacao-sem-3878/2026-10-04T14-56-43Z__solicitacao__opus__sem__rep-09__20261004-145643-solicitacao-sem-3878/run.json) · [findings.json](../../../../../../restauracoes/20261004-145643-solicitacao-sem-3878/2026-10-04T14-56-43Z__solicitacao__opus__sem__rep-09__20261004-145643-solicitacao-sem-3878/findings.json) · [isolation.json](../../../../../../restauracoes/20261004-145643-solicitacao-sem-3878/2026-10-04T14-56-43Z__solicitacao__opus__sem__rep-09__20261004-145643-solicitacao-sem-3878/isolation.json) · [eventos de ferramenta](../../../../../../restauracoes/20261004-145643-solicitacao-sem-3878/2026-10-04T14-56-43Z__solicitacao__opus__sem__rep-09__20261004-145643-solicitacao-sem-3878/tool-events.ndjson) · — · evidências: [#1](../../../../../../restauracoes/20261004-145643-solicitacao-sem-3878/2026-10-04T14-56-43Z__solicitacao__opus__sem__rep-09__20261004-145643-solicitacao-sem-3878/evidence/aderencia-oraculo.json) [#2](../../../../../../restauracoes/20261004-145643-solicitacao-sem-3878/2026-10-04T14-56-43Z__solicitacao__opus__sem__rep-09__20261004-145643-solicitacao-sem-3878/evidence/cliente.json) [#3](../../../../../../restauracoes/20261004-145643-solicitacao-sem-3878/2026-10-04T14-56-43Z__solicitacao__opus__sem__rep-09__20261004-145643-solicitacao-sem-3878/evidence/container-config.json) [#4](../../../../../../restauracoes/20261004-145643-solicitacao-sem-3878/2026-10-04T14-56-43Z__solicitacao__opus__sem__rep-09__20261004-145643-solicitacao-sem-3878/evidence/controles-positivos.json) [#5](../../../../../../restauracoes/20261004-145643-solicitacao-sem-3878/2026-10-04T14-56-43Z__solicitacao__opus__sem__rep-09__20261004-145643-solicitacao-sem-3878/evidence/mcp-config.json) [#6](../../../../../../restauracoes/20261004-145643-solicitacao-sem-3878/2026-10-04T14-56-43Z__solicitacao__opus__sem__rep-09__20261004-145643-solicitacao-sem-3878/evidence/preflight.json) [#7](../../../../../../restauracoes/20261004-145643-solicitacao-sem-3878/2026-10-04T14-56-43Z__solicitacao__opus__sem__rep-09__20261004-145643-solicitacao-sem-3878/evidence/prompt.txt) [#8](../../../../../../restauracoes/20261004-145643-solicitacao-sem-3878/2026-10-04T14-56-43Z__solicitacao__opus__sem__rep-09__20261004-145643-solicitacao-sem-3878/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../../restauracoes/20261004-145643-solicitacao-sem-3878/2026-10-04T14-56-43Z__solicitacao__opus__sem__rep-09__20261004-145643-solicitacao-sem-3878/evidence/raw/browser/inventory.json) [#10](../../../../../../restauracoes/20261004-145643-solicitacao-sem-3878/2026-10-04T14-56-43Z__solicitacao__opus__sem__rep-09__20261004-145643-solicitacao-sem-3878/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../../restauracoes/20261004-145643-solicitacao-sem-3878/2026-10-04T14-56-43Z__solicitacao__opus__sem__rep-09__20261004-145643-solicitacao-sem-3878/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../../restauracoes/20261004-145643-solicitacao-sem-3878/2026-10-04T14-56-43Z__solicitacao__opus__sem__rep-09__20261004-145643-solicitacao-sem-3878/evidence/raw/collector/events.ndjson) [#13](../../../../../../restauracoes/20261004-145643-solicitacao-sem-3878/2026-10-04T14-56-43Z__solicitacao__opus__sem__rep-09__20261004-145643-solicitacao-sem-3878/evidence/raw/collector/findings.json) [#14](../../../../../../restauracoes/20261004-145643-solicitacao-sem-3878/2026-10-04T14-56-43Z__solicitacao__opus__sem__rep-09__20261004-145643-solicitacao-sem-3878/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../../restauracoes/20261004-145643-solicitacao-sem-3878/2026-10-04T14-56-43Z__solicitacao__opus__sem__rep-09__20261004-145643-solicitacao-sem-3878/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../../restauracoes/20261004-145643-solicitacao-sem-3878/2026-10-04T14-56-43Z__solicitacao__opus__sem__rep-09__20261004-145643-solicitacao-sem-3878/evidence/raw/probe/probe.json) [#17](../../../../../../restauracoes/20261004-145643-solicitacao-sem-3878/2026-10-04T14-56-43Z__solicitacao__opus__sem__rep-09__20261004-145643-solicitacao-sem-3878/evidence/raw/probe/sonda-escrita-1791125829504.txt) [#18](../../../../../../restauracoes/20261004-145643-solicitacao-sem-3878/2026-10-04T14-56-43Z__solicitacao__opus__sem__rep-09__20261004-145643-solicitacao-sem-3878/evidence/raw/task/mcp.json) [#19](../../../../../../restauracoes/20261004-145643-solicitacao-sem-3878/2026-10-04T14-56-43Z__solicitacao__opus__sem__rep-09__20261004-145643-solicitacao-sem-3878/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../../restauracoes/20261004-145643-solicitacao-sem-3878/2026-10-04T14-56-43Z__solicitacao__opus__sem__rep-09__20261004-145643-solicitacao-sem-3878/evidence/logs/agent.log) [#2](../../../../../../restauracoes/20261004-145643-solicitacao-sem-3878/2026-10-04T14-56-43Z__solicitacao__opus__sem__rep-09__20261004-145643-solicitacao-sem-3878/evidence/logs/browser.log) [#3](../../../../../../restauracoes/20261004-145643-solicitacao-sem-3878/2026-10-04T14-56-43Z__solicitacao__opus__sem__rep-09__20261004-145643-solicitacao-sem-3878/evidence/logs/collector.log) [#4](../../../../../../restauracoes/20261004-145643-solicitacao-sem-3878/2026-10-04T14-56-43Z__solicitacao__opus__sem__rep-09__20261004-145643-solicitacao-sem-3878/evidence/logs/egress-provider.log) [#5](../../../../../../restauracoes/20261004-145643-solicitacao-sem-3878/2026-10-04T14-56-43Z__solicitacao__opus__sem__rep-09__20261004-145643-solicitacao-sem-3878/evidence/logs/egress-site.log) [#6](../../../../../../restauracoes/20261004-145643-solicitacao-sem-3878/2026-10-04T14-56-43Z__solicitacao__opus__sem__rep-09__20261004-145643-solicitacao-sem-3878/evidence/logs/probe.log) [#7](../../../../../../restauracoes/20261004-145643-solicitacao-sem-3878/2026-10-04T14-56-43Z__solicitacao__opus__sem__rep-09__20261004-145643-solicitacao-sem-3878/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (9; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| .upload-button | wcag:2.4.3 | O botão 'Selecione o arquivo' tem tabindex=&quot;1&quot;; o primeiro Tab após o carregamento vai para ele, antes do atalho 'Ir para o conteúdo', do link gov.br, da trilha e dos campos Nome/CPF anteriores. |
| .upload-button | wcag:4.1.2 | O botão de upload tem aria-hidden=&quot;true&quot;, mas é focável \(tabindex=1\) e operável \(Enter abre o seletor de arquivo\). O input file #documentos está com display:none, então o único controle operável do campo 'Documentos com… |
| #servico, #unidade | wcag:2.4.7 | Ao receber foco pelo teclado, os campos 'Tipo de serviço' e 'Unidade de atendimento' não exibem indicador: a regra da página '.campo-servico .br-input input:focus, ... .campo-unidade ...' define outline:none, box-shadow… |
| #forma-presencial | wcag:4.1.2 | O radio 'Presencial' não tem nome acessível: o rótulo &lt;label&gt;Presencial&lt;/label&gt; não tem atributo for e não envolve o input \(árvore de acessibilidade: 'radio' sem nome\). Clicar no texto 'Presencial' não marca a opção. |
| #servico, #unidade | wcag:1.3.1 | No estado de erro, as mensagens 'Selecione o tipo de serviço.' e 'Selecione a unidade de atendimento.' não têm id e os inputs #servico e #unidade só recebem aria-invalid=&quot;true&quot;, sem aria-describedby. Os outros campos co… |
| .acao-cancelar | wcag:2.4.3 | Depois de abrir o diálogo 'Descartar solicitação?' por Cancelar e fechá-lo com Esc ou com 'Continuar preenchendo', o diálogo é removido e o foco vai para BODY em vez de voltar ao botão Cancelar. |
| .paginacao-anteriores .page.active | wcag:1.3.1 | A página atual da paginação só é indicada visualmente \(círculo preenchido, classe 'active'\); o link não tem aria-current nem outro texto que informe o estado. Na página 2, o link 'Página 2' também não tem aria-current. |
| .flatpickr-prev-month button, .flatpickr-next-month button | wcag:4.1.2 | Com o calendário aberto, os botões de mês anterior/seguinte só contêm ícone &lt;i&gt; e não têm aria-label, title nem texto: nome acessível vazio. |
| .formulario-solicitacao .br-checkbox label, .grupo-forma .br-radio label | wcag:1.4.11 | A caixa de checkbox e o círculo de radio, desenhados pelo ::before do label \(24x24\), têm borda de 1px rgb\(204,204,204\) sobre fundo branco rgb\(255,255,255\), contraste 1,61:1. São o único limite visual do controle não mar… |

**com** (20261004-150809-solicitacao-com-b978): [pacote](../../../../../../restauracoes/20261004-150809-solicitacao-com-b978/2026-10-04T15-08-09Z__solicitacao__opus__com__rep-09__20261004-150809-solicitacao-com-b978) · [run.json](../../../../../../restauracoes/20261004-150809-solicitacao-com-b978/2026-10-04T15-08-09Z__solicitacao__opus__com__rep-09__20261004-150809-solicitacao-com-b978/run.json) · [findings.json](../../../../../../restauracoes/20261004-150809-solicitacao-com-b978/2026-10-04T15-08-09Z__solicitacao__opus__com__rep-09__20261004-150809-solicitacao-com-b978/findings.json) · [isolation.json](../../../../../../restauracoes/20261004-150809-solicitacao-com-b978/2026-10-04T15-08-09Z__solicitacao__opus__com__rep-09__20261004-150809-solicitacao-com-b978/isolation.json) · [eventos de ferramenta](../../../../../../restauracoes/20261004-150809-solicitacao-com-b978/2026-10-04T15-08-09Z__solicitacao__opus__com__rep-09__20261004-150809-solicitacao-com-b978/tool-events.ndjson) · — · evidências: [#1](../../../../../../restauracoes/20261004-150809-solicitacao-com-b978/2026-10-04T15-08-09Z__solicitacao__opus__com__rep-09__20261004-150809-solicitacao-com-b978/evidence/aderencia-oraculo.json) [#2](../../../../../../restauracoes/20261004-150809-solicitacao-com-b978/2026-10-04T15-08-09Z__solicitacao__opus__com__rep-09__20261004-150809-solicitacao-com-b978/evidence/cliente.json) [#3](../../../../../../restauracoes/20261004-150809-solicitacao-com-b978/2026-10-04T15-08-09Z__solicitacao__opus__com__rep-09__20261004-150809-solicitacao-com-b978/evidence/container-config.json) [#4](../../../../../../restauracoes/20261004-150809-solicitacao-com-b978/2026-10-04T15-08-09Z__solicitacao__opus__com__rep-09__20261004-150809-solicitacao-com-b978/evidence/controles-positivos.json) [#5](../../../../../../restauracoes/20261004-150809-solicitacao-com-b978/2026-10-04T15-08-09Z__solicitacao__opus__com__rep-09__20261004-150809-solicitacao-com-b978/evidence/mcp-config.json) [#6](../../../../../../restauracoes/20261004-150809-solicitacao-com-b978/2026-10-04T15-08-09Z__solicitacao__opus__com__rep-09__20261004-150809-solicitacao-com-b978/evidence/preflight.json) [#7](../../../../../../restauracoes/20261004-150809-solicitacao-com-b978/2026-10-04T15-08-09Z__solicitacao__opus__com__rep-09__20261004-150809-solicitacao-com-b978/evidence/prompt.txt) [#8](../../../../../../restauracoes/20261004-150809-solicitacao-com-b978/2026-10-04T15-08-09Z__solicitacao__opus__com__rep-09__20261004-150809-solicitacao-com-b978/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../../restauracoes/20261004-150809-solicitacao-com-b978/2026-10-04T15-08-09Z__solicitacao__opus__com__rep-09__20261004-150809-solicitacao-com-b978/evidence/raw/browser/inventory.json) [#10](../../../../../../restauracoes/20261004-150809-solicitacao-com-b978/2026-10-04T15-08-09Z__solicitacao__opus__com__rep-09__20261004-150809-solicitacao-com-b978/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../../restauracoes/20261004-150809-solicitacao-com-b978/2026-10-04T15-08-09Z__solicitacao__opus__com__rep-09__20261004-150809-solicitacao-com-b978/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../../restauracoes/20261004-150809-solicitacao-com-b978/2026-10-04T15-08-09Z__solicitacao__opus__com__rep-09__20261004-150809-solicitacao-com-b978/evidence/raw/collector/events.ndjson) [#13](../../../../../../restauracoes/20261004-150809-solicitacao-com-b978/2026-10-04T15-08-09Z__solicitacao__opus__com__rep-09__20261004-150809-solicitacao-com-b978/evidence/raw/collector/findings.json) [#14](../../../../../../restauracoes/20261004-150809-solicitacao-com-b978/2026-10-04T15-08-09Z__solicitacao__opus__com__rep-09__20261004-150809-solicitacao-com-b978/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../../restauracoes/20261004-150809-solicitacao-com-b978/2026-10-04T15-08-09Z__solicitacao__opus__com__rep-09__20261004-150809-solicitacao-com-b978/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../../restauracoes/20261004-150809-solicitacao-com-b978/2026-10-04T15-08-09Z__solicitacao__opus__com__rep-09__20261004-150809-solicitacao-com-b978/evidence/raw/oracle/inventory.json) [#17](../../../../../../restauracoes/20261004-150809-solicitacao-com-b978/2026-10-04T15-08-09Z__solicitacao__opus__com__rep-09__20261004-150809-solicitacao-com-b978/evidence/raw/oracle/oracle-telemetry.ndjson) [#18](../../../../../../restauracoes/20261004-150809-solicitacao-com-b978/2026-10-04T15-08-09Z__solicitacao__opus__com__rep-09__20261004-150809-solicitacao-com-b978/evidence/raw/oracle/tool-events.ndjson) [#19](../../../../../../restauracoes/20261004-150809-solicitacao-com-b978/2026-10-04T15-08-09Z__solicitacao__opus__com__rep-09__20261004-150809-solicitacao-com-b978/evidence/raw/probe/probe.json) [#20](../../../../../../restauracoes/20261004-150809-solicitacao-com-b978/2026-10-04T15-08-09Z__solicitacao__opus__com__rep-09__20261004-150809-solicitacao-com-b978/evidence/raw/probe/sonda-escrita-1791126514252.txt) [#21](../../../../../../restauracoes/20261004-150809-solicitacao-com-b978/2026-10-04T15-08-09Z__solicitacao__opus__com__rep-09__20261004-150809-solicitacao-com-b978/evidence/raw/task/mcp.json) [#22](../../../../../../restauracoes/20261004-150809-solicitacao-com-b978/2026-10-04T15-08-09Z__solicitacao__opus__com__rep-09__20261004-150809-solicitacao-com-b978/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../../restauracoes/20261004-150809-solicitacao-com-b978/2026-10-04T15-08-09Z__solicitacao__opus__com__rep-09__20261004-150809-solicitacao-com-b978/evidence/logs/agent.log) [#2](../../../../../../restauracoes/20261004-150809-solicitacao-com-b978/2026-10-04T15-08-09Z__solicitacao__opus__com__rep-09__20261004-150809-solicitacao-com-b978/evidence/logs/browser.log) [#3](../../../../../../restauracoes/20261004-150809-solicitacao-com-b978/2026-10-04T15-08-09Z__solicitacao__opus__com__rep-09__20261004-150809-solicitacao-com-b978/evidence/logs/collector.log) [#4](../../../../../../restauracoes/20261004-150809-solicitacao-com-b978/2026-10-04T15-08-09Z__solicitacao__opus__com__rep-09__20261004-150809-solicitacao-com-b978/evidence/logs/egress-provider.log) [#5](../../../../../../restauracoes/20261004-150809-solicitacao-com-b978/2026-10-04T15-08-09Z__solicitacao__opus__com__rep-09__20261004-150809-solicitacao-com-b978/evidence/logs/egress-site.log) [#6](../../../../../../restauracoes/20261004-150809-solicitacao-com-b978/2026-10-04T15-08-09Z__solicitacao__opus__com__rep-09__20261004-150809-solicitacao-com-b978/evidence/logs/oracle.log) [#7](../../../../../../restauracoes/20261004-150809-solicitacao-com-b978/2026-10-04T15-08-09Z__solicitacao__opus__com__rep-09__20261004-150809-solicitacao-com-b978/evidence/logs/probe.log) [#8](../../../../../../restauracoes/20261004-150809-solicitacao-com-b978/2026-10-04T15-08-09Z__solicitacao__opus__com__rep-09__20261004-150809-solicitacao-com-b978/evidence/logs/screens.log) · [binding](analysis-binding.com.json)

Achados enviados (11; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| .barra-superior | ds-page-header | A área de cabeçalho é um &lt;header class=&quot;barra-superior&quot;&gt; próprio, só com o link 'gov.br'; não há .br-header nem &lt;br-header&gt; no documento |
| body | ds-page-footer | Não há .br-footer nem &lt;br-footer&gt; nem nenhuma área de rodapé na página |
| #forma-presencial | label | O radio 'Presencial' não tem nome acessível: o &lt;label&gt;Presencial&lt;/label&gt; não tem for=&quot;forma-presencial&quot; \(os outros radios do grupo têm\), e clicar no texto não seleciona a opção |
| .upload-button | aria-hidden-focus | O único controle visível do upload \(button 'Selecione o arquivo'\) tem aria-hidden=&quot;true&quot; mas é focável \(tabindex=1\); o input file #documentos tem display:none. O upload fica inacessível para tecnologia assistiva |
| .upload-button | wcag:2.4.3 | tabindex=&quot;1&quot; no botão de upload: o primeiro Tab após o carregamento leva a ele \(meio do formulário\), antes do skip link 'Ir para o conteúdo' e de todo o cabeçalho |
| .flatpickr-prev-month &gt; button, .flatpickr-next-month &gt; button | emag-2.2 | Os botões de mês anterior/seguinte do calendário só têm ícone \(&lt;i class=&quot;fas fa-chevron-left/right&quot;&gt;\), sem aria-label nem texto |
| #servico, #unidade | wcag:2.4.7 | Com foco por teclado, os inputs dos selects 'Tipo de serviço' e 'Unidade de atendimento' ficam sem indicador: outline none, box-shadow none e borda inalterada \(#888\). O CSS da aplicação \(.campo-servico/.campo-unidade .b… |
| #servico, #unidade | wcag:1.3.1 | Após o envio inválido, as mensagens 'Selecione o tipo de serviço.' e 'Selecione a unidade de atendimento.' não têm id e não estão em aria-describedby dos campos \(os demais campos referenciam seu \*-retorno\) |
| .mensagem-retorno.danger .close &gt; \[role=button\] | ds-structure-button-tag | O botão 'Fechar a mensagem' da mensagem de erro é &lt;div class=&quot;br-button circle small&quot; role=&quot;button&quot; tabindex=&quot;0&quot;&gt; \(na mensagem de sucesso é um &lt;button&gt;\) |
| .acao-cancelar | wcag:2.4.3 | Ao fechar o diálogo 'Descartar solicitação?' \(Esc ou 'Continuar preenchendo'\) o foco vai para &lt;body&gt;, não volta ao botão Cancelar que o abriu |
| .dialogo-descarte | govbr-3.7.0-foundation-global-21b1a2733f7b | O CSS da aplicação define color: rgb\(51, 67, 51\) \(#334333\) no diálogo de descarte; essa cor não é token do DS |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `7f556393903a34e9660025ca1aea2c7fb7ac8bd49328fbaa277626b013f794e1`

