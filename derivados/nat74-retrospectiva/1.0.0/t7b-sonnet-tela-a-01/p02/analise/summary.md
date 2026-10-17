# Resumo da análise — Solicitar serviço (solicitacao)

Revisão 1 · gerado em 2026-10-16T00:00:00Z (UTC)

## 1. Status técnico

Análise: **pronta**

Aviso: derivado retrospectivo nat74-retrospectiva-1.0.0: campanha congelada com flow-semantic-1.5.0, repreparada com flow-semantic-1.7.0 \(não substitui a análise oficial\)

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261006-013025-solicitacao-sem-bc56 | sem | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 8 cartão(ões), nenhum decidido |
| 20261006-013939-solicitacao-com-e33d | com | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 9 cartão(ões), nenhum decidido |

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
| Início (UTC) | 2026-10-06T01:30:48Z | 2026-10-06T01:40:04Z |
| Início (local) | 05/10/2026, 22:30:48 (horário de Brasília) | 05/10/2026, 22:40:04 (horário de Brasília) |
| Commit do harness | 7f189a9a0984459418e210aa1453acbee54e1160 | 7f189a9a0984459418e210aa1453acbee54e1160 |
| Repetição · tentativa | 2 · 1 | 2 · 1 |
| Campanha · slot · par | t7b-sonnet-tela-a-01 · p02-sem · p02 | t7b-sonnet-tela-a-01 · p02-com · p02 |

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

Linha de base: usada (lb-20261006-013058-solicitacao-457b19)

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
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 7 (ponte MCP do oráculo) |
| Protocolo | unverified | unverified |
| Ferramentas anunciadas | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for, get\_ds\_rules, get\_design\_tokens, get\_emag\_rules, get\_pag… |
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_snapshot, browser\_console\_messages, browser\_click, browser\_take\_screenshot, browser\_press\_key, browser\_type | browser\_navigate, browser\_evaluate, browser\_snapshot, scan\_page, browser\_console\_messages, browser\_click, browser\_press\_key, verify\_finding |
| Erros de ferramenta | 2 (tool-events.ndjson \(eventos com isError: true\)) | 4 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 8 aprovado(s); falhos: nenhum | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | nenhuma | nenhuma |
| Registro de inspeção | registro indisponível \(pacote findings.v1, anterior ao registro de inspeção\) — não é zero cobertura | registro indisponível \(pacote findings.v1, anterior ao registro de inspeção\) — não é zero cobertura |

O registro de inspeção é declaração do agente sobre o inventário que ele mesmo descobriu; “com evento de ferramenta” só diz que o identificador citado aparece num evento gravado. Não pontua nem decide elegibilidade, e a cobertura da página continua desconhecida.

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 6. Custo e tempo

| | sem | com |
|---|---|---|
| Tempo de relógio (s) | 298 (runner) | 232 (runner) |
| Turnos | 71 (stream-json do cliente \(result.num\_turns\)) | 56 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 70 (ponte MCP) | 55 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 7 (ponte MCP do oráculo) |
| Tokens de entrada | 68 (stream-json do cliente \(result.usage\)) | 54 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 15879 (stream-json do cliente \(result.usage\)) | 14691 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 1581753 (stream-json do cliente \(result.usage\)) | 1472640 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 74289 (stream-json do cliente \(result.usage\)) | 81749 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 0.7724325999999998 (estimativa do cliente \(result.total\_cost\_usd\)) | 0.7685420000000002 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 25 cartão(ões), estimativa 150 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 7. Detalhes e evidências

**sem** (20261006-013025-solicitacao-sem-bc56): [pacote](../../../../../../restauracoes/20261006-013025-solicitacao-sem-bc56/2026-10-06T01-30-25Z__solicitacao__sonnet__sem__rep-02__20261006-013025-solicitacao-sem-bc56) · [run.json](../../../../../../restauracoes/20261006-013025-solicitacao-sem-bc56/2026-10-06T01-30-25Z__solicitacao__sonnet__sem__rep-02__20261006-013025-solicitacao-sem-bc56/run.json) · [findings.json](../../../../../../restauracoes/20261006-013025-solicitacao-sem-bc56/2026-10-06T01-30-25Z__solicitacao__sonnet__sem__rep-02__20261006-013025-solicitacao-sem-bc56/findings.json) · [isolation.json](../../../../../../restauracoes/20261006-013025-solicitacao-sem-bc56/2026-10-06T01-30-25Z__solicitacao__sonnet__sem__rep-02__20261006-013025-solicitacao-sem-bc56/isolation.json) · [eventos de ferramenta](../../../../../../restauracoes/20261006-013025-solicitacao-sem-bc56/2026-10-06T01-30-25Z__solicitacao__sonnet__sem__rep-02__20261006-013025-solicitacao-sem-bc56/tool-events.ndjson) · — · evidências: [#1](../../../../../../restauracoes/20261006-013025-solicitacao-sem-bc56/2026-10-06T01-30-25Z__solicitacao__sonnet__sem__rep-02__20261006-013025-solicitacao-sem-bc56/evidence/aderencia-oraculo.json) [#2](../../../../../../restauracoes/20261006-013025-solicitacao-sem-bc56/2026-10-06T01-30-25Z__solicitacao__sonnet__sem__rep-02__20261006-013025-solicitacao-sem-bc56/evidence/cliente.json) [#3](../../../../../../restauracoes/20261006-013025-solicitacao-sem-bc56/2026-10-06T01-30-25Z__solicitacao__sonnet__sem__rep-02__20261006-013025-solicitacao-sem-bc56/evidence/container-config.json) [#4](../../../../../../restauracoes/20261006-013025-solicitacao-sem-bc56/2026-10-06T01-30-25Z__solicitacao__sonnet__sem__rep-02__20261006-013025-solicitacao-sem-bc56/evidence/controles-positivos.json) [#5](../../../../../../restauracoes/20261006-013025-solicitacao-sem-bc56/2026-10-06T01-30-25Z__solicitacao__sonnet__sem__rep-02__20261006-013025-solicitacao-sem-bc56/evidence/mcp-config.json) [#6](../../../../../../restauracoes/20261006-013025-solicitacao-sem-bc56/2026-10-06T01-30-25Z__solicitacao__sonnet__sem__rep-02__20261006-013025-solicitacao-sem-bc56/evidence/preflight.json) [#7](../../../../../../restauracoes/20261006-013025-solicitacao-sem-bc56/2026-10-06T01-30-25Z__solicitacao__sonnet__sem__rep-02__20261006-013025-solicitacao-sem-bc56/evidence/prompt.txt) [#8](../../../../../../restauracoes/20261006-013025-solicitacao-sem-bc56/2026-10-06T01-30-25Z__solicitacao__sonnet__sem__rep-02__20261006-013025-solicitacao-sem-bc56/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../../restauracoes/20261006-013025-solicitacao-sem-bc56/2026-10-06T01-30-25Z__solicitacao__sonnet__sem__rep-02__20261006-013025-solicitacao-sem-bc56/evidence/raw/browser/inventory.json) [#10](../../../../../../restauracoes/20261006-013025-solicitacao-sem-bc56/2026-10-06T01-30-25Z__solicitacao__sonnet__sem__rep-02__20261006-013025-solicitacao-sem-bc56/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../../restauracoes/20261006-013025-solicitacao-sem-bc56/2026-10-06T01-30-25Z__solicitacao__sonnet__sem__rep-02__20261006-013025-solicitacao-sem-bc56/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../../restauracoes/20261006-013025-solicitacao-sem-bc56/2026-10-06T01-30-25Z__solicitacao__sonnet__sem__rep-02__20261006-013025-solicitacao-sem-bc56/evidence/raw/collector/events.ndjson) [#13](../../../../../../restauracoes/20261006-013025-solicitacao-sem-bc56/2026-10-06T01-30-25Z__solicitacao__sonnet__sem__rep-02__20261006-013025-solicitacao-sem-bc56/evidence/raw/collector/findings.json) [#14](../../../../../../restauracoes/20261006-013025-solicitacao-sem-bc56/2026-10-06T01-30-25Z__solicitacao__sonnet__sem__rep-02__20261006-013025-solicitacao-sem-bc56/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../../restauracoes/20261006-013025-solicitacao-sem-bc56/2026-10-06T01-30-25Z__solicitacao__sonnet__sem__rep-02__20261006-013025-solicitacao-sem-bc56/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../../restauracoes/20261006-013025-solicitacao-sem-bc56/2026-10-06T01-30-25Z__solicitacao__sonnet__sem__rep-02__20261006-013025-solicitacao-sem-bc56/evidence/raw/probe/probe.json) [#17](../../../../../../restauracoes/20261006-013025-solicitacao-sem-bc56/2026-10-06T01-30-25Z__solicitacao__sonnet__sem__rep-02__20261006-013025-solicitacao-sem-bc56/evidence/raw/probe/sonda-escrita-1791250247845.txt) [#18](../../../../../../restauracoes/20261006-013025-solicitacao-sem-bc56/2026-10-06T01-30-25Z__solicitacao__sonnet__sem__rep-02__20261006-013025-solicitacao-sem-bc56/evidence/raw/task/mcp.json) [#19](../../../../../../restauracoes/20261006-013025-solicitacao-sem-bc56/2026-10-06T01-30-25Z__solicitacao__sonnet__sem__rep-02__20261006-013025-solicitacao-sem-bc56/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../../restauracoes/20261006-013025-solicitacao-sem-bc56/2026-10-06T01-30-25Z__solicitacao__sonnet__sem__rep-02__20261006-013025-solicitacao-sem-bc56/evidence/logs/agent.log) [#2](../../../../../../restauracoes/20261006-013025-solicitacao-sem-bc56/2026-10-06T01-30-25Z__solicitacao__sonnet__sem__rep-02__20261006-013025-solicitacao-sem-bc56/evidence/logs/browser.log) [#3](../../../../../../restauracoes/20261006-013025-solicitacao-sem-bc56/2026-10-06T01-30-25Z__solicitacao__sonnet__sem__rep-02__20261006-013025-solicitacao-sem-bc56/evidence/logs/collector.log) [#4](../../../../../../restauracoes/20261006-013025-solicitacao-sem-bc56/2026-10-06T01-30-25Z__solicitacao__sonnet__sem__rep-02__20261006-013025-solicitacao-sem-bc56/evidence/logs/egress-provider.log) [#5](../../../../../../restauracoes/20261006-013025-solicitacao-sem-bc56/2026-10-06T01-30-25Z__solicitacao__sonnet__sem__rep-02__20261006-013025-solicitacao-sem-bc56/evidence/logs/egress-site.log) [#6](../../../../../../restauracoes/20261006-013025-solicitacao-sem-bc56/2026-10-06T01-30-25Z__solicitacao__sonnet__sem__rep-02__20261006-013025-solicitacao-sem-bc56/evidence/logs/probe.log) [#7](../../../../../../restauracoes/20261006-013025-solicitacao-sem-bc56/2026-10-06T01-30-25Z__solicitacao__sonnet__sem__rep-02__20261006-013025-solicitacao-sem-bc56/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (8; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| #forma-presencial | wcag:4.1.2 | O rádio 'Presencial' não tem nome acessível: o rótulo &lt;label&gt; não tem atributo for. Na árvore de acessibilidade aparece como radio sem nome, e clicar no texto 'Presencial' não marca o rádio. |
| .upload-button | wcag:4.1.2 | O botão 'Selecione o arquivo' tem aria-hidden='true' e continua focável \(tabindex=1\). O input file real está com display:none, então o controle de envio de arquivo fica sem nome e inacessível a leitores de tela. |
| .upload-button | wcag:2.4.3 | O botão de upload tem tabindex='1' \(positivo\), tirando-o da ordem natural. Na navegação por Tab ele fica fora de ordem e foi pulado na sequência dos campos. |
| #cpf | incerta | Com CPF '123' \(3 dígitos\) o envio foi aceito com mensagem de sucesso, sem erro de formato, embora o texto de apoio diga 'Somente números, 11 dígitos.' |
| .flatpickr-prev-month button, .flatpickr-next-month button | wcag:4.1.2 | Os botões de mês anterior e seguinte do calendário não têm texto nem aria-label \(só ícone\), então não têm nome acessível. |
| .flatpickr-monthDropdown-months, .flatpickr-current-month .cur-year | wcag:3.1.2 | Os controles de mês e ano do calendário têm aria-label em inglês \('Month', 'Year'\) numa página pt-BR. |
| .br-pagination .page.active | wcag:1.3.1 | A página atual \('Página 2' depois do clique\) é indicada só pela classe e pela aparência, sem aria-current. |
| .acao-cancelar | wcag:2.4.3 | Depois de Cancelar abrir o diálogo 'Descartar solicitação?' e ele ser fechado \(Esc ou Continuar preenchendo\), o foco vai para o body, não volta a Cancelar. |

**com** (20261006-013939-solicitacao-com-e33d): [pacote](../../../../../../restauracoes/20261006-013939-solicitacao-com-e33d/2026-10-06T01-39-39Z__solicitacao__sonnet__com__rep-02__20261006-013939-solicitacao-com-e33d) · [run.json](../../../../../../restauracoes/20261006-013939-solicitacao-com-e33d/2026-10-06T01-39-39Z__solicitacao__sonnet__com__rep-02__20261006-013939-solicitacao-com-e33d/run.json) · [findings.json](../../../../../../restauracoes/20261006-013939-solicitacao-com-e33d/2026-10-06T01-39-39Z__solicitacao__sonnet__com__rep-02__20261006-013939-solicitacao-com-e33d/findings.json) · [isolation.json](../../../../../../restauracoes/20261006-013939-solicitacao-com-e33d/2026-10-06T01-39-39Z__solicitacao__sonnet__com__rep-02__20261006-013939-solicitacao-com-e33d/isolation.json) · [eventos de ferramenta](../../../../../../restauracoes/20261006-013939-solicitacao-com-e33d/2026-10-06T01-39-39Z__solicitacao__sonnet__com__rep-02__20261006-013939-solicitacao-com-e33d/tool-events.ndjson) · — · evidências: [#1](../../../../../../restauracoes/20261006-013939-solicitacao-com-e33d/2026-10-06T01-39-39Z__solicitacao__sonnet__com__rep-02__20261006-013939-solicitacao-com-e33d/evidence/aderencia-oraculo.json) [#2](../../../../../../restauracoes/20261006-013939-solicitacao-com-e33d/2026-10-06T01-39-39Z__solicitacao__sonnet__com__rep-02__20261006-013939-solicitacao-com-e33d/evidence/cliente.json) [#3](../../../../../../restauracoes/20261006-013939-solicitacao-com-e33d/2026-10-06T01-39-39Z__solicitacao__sonnet__com__rep-02__20261006-013939-solicitacao-com-e33d/evidence/container-config.json) [#4](../../../../../../restauracoes/20261006-013939-solicitacao-com-e33d/2026-10-06T01-39-39Z__solicitacao__sonnet__com__rep-02__20261006-013939-solicitacao-com-e33d/evidence/controles-positivos.json) [#5](../../../../../../restauracoes/20261006-013939-solicitacao-com-e33d/2026-10-06T01-39-39Z__solicitacao__sonnet__com__rep-02__20261006-013939-solicitacao-com-e33d/evidence/mcp-config.json) [#6](../../../../../../restauracoes/20261006-013939-solicitacao-com-e33d/2026-10-06T01-39-39Z__solicitacao__sonnet__com__rep-02__20261006-013939-solicitacao-com-e33d/evidence/preflight.json) [#7](../../../../../../restauracoes/20261006-013939-solicitacao-com-e33d/2026-10-06T01-39-39Z__solicitacao__sonnet__com__rep-02__20261006-013939-solicitacao-com-e33d/evidence/prompt.txt) [#8](../../../../../../restauracoes/20261006-013939-solicitacao-com-e33d/2026-10-06T01-39-39Z__solicitacao__sonnet__com__rep-02__20261006-013939-solicitacao-com-e33d/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../../restauracoes/20261006-013939-solicitacao-com-e33d/2026-10-06T01-39-39Z__solicitacao__sonnet__com__rep-02__20261006-013939-solicitacao-com-e33d/evidence/raw/browser/inventory.json) [#10](../../../../../../restauracoes/20261006-013939-solicitacao-com-e33d/2026-10-06T01-39-39Z__solicitacao__sonnet__com__rep-02__20261006-013939-solicitacao-com-e33d/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../../restauracoes/20261006-013939-solicitacao-com-e33d/2026-10-06T01-39-39Z__solicitacao__sonnet__com__rep-02__20261006-013939-solicitacao-com-e33d/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../../restauracoes/20261006-013939-solicitacao-com-e33d/2026-10-06T01-39-39Z__solicitacao__sonnet__com__rep-02__20261006-013939-solicitacao-com-e33d/evidence/raw/collector/events.ndjson) [#13](../../../../../../restauracoes/20261006-013939-solicitacao-com-e33d/2026-10-06T01-39-39Z__solicitacao__sonnet__com__rep-02__20261006-013939-solicitacao-com-e33d/evidence/raw/collector/findings.json) [#14](../../../../../../restauracoes/20261006-013939-solicitacao-com-e33d/2026-10-06T01-39-39Z__solicitacao__sonnet__com__rep-02__20261006-013939-solicitacao-com-e33d/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../../restauracoes/20261006-013939-solicitacao-com-e33d/2026-10-06T01-39-39Z__solicitacao__sonnet__com__rep-02__20261006-013939-solicitacao-com-e33d/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../../restauracoes/20261006-013939-solicitacao-com-e33d/2026-10-06T01-39-39Z__solicitacao__sonnet__com__rep-02__20261006-013939-solicitacao-com-e33d/evidence/raw/oracle/inventory.json) [#17](../../../../../../restauracoes/20261006-013939-solicitacao-com-e33d/2026-10-06T01-39-39Z__solicitacao__sonnet__com__rep-02__20261006-013939-solicitacao-com-e33d/evidence/raw/oracle/oracle-telemetry.ndjson) [#18](../../../../../../restauracoes/20261006-013939-solicitacao-com-e33d/2026-10-06T01-39-39Z__solicitacao__sonnet__com__rep-02__20261006-013939-solicitacao-com-e33d/evidence/raw/oracle/tool-events.ndjson) [#19](../../../../../../restauracoes/20261006-013939-solicitacao-com-e33d/2026-10-06T01-39-39Z__solicitacao__sonnet__com__rep-02__20261006-013939-solicitacao-com-e33d/evidence/raw/probe/probe.json) [#20](../../../../../../restauracoes/20261006-013939-solicitacao-com-e33d/2026-10-06T01-39-39Z__solicitacao__sonnet__com__rep-02__20261006-013939-solicitacao-com-e33d/evidence/raw/probe/sonda-escrita-1791250804219.txt) [#21](../../../../../../restauracoes/20261006-013939-solicitacao-com-e33d/2026-10-06T01-39-39Z__solicitacao__sonnet__com__rep-02__20261006-013939-solicitacao-com-e33d/evidence/raw/task/mcp.json) [#22](../../../../../../restauracoes/20261006-013939-solicitacao-com-e33d/2026-10-06T01-39-39Z__solicitacao__sonnet__com__rep-02__20261006-013939-solicitacao-com-e33d/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../../restauracoes/20261006-013939-solicitacao-com-e33d/2026-10-06T01-39-39Z__solicitacao__sonnet__com__rep-02__20261006-013939-solicitacao-com-e33d/evidence/logs/agent.log) [#2](../../../../../../restauracoes/20261006-013939-solicitacao-com-e33d/2026-10-06T01-39-39Z__solicitacao__sonnet__com__rep-02__20261006-013939-solicitacao-com-e33d/evidence/logs/browser.log) [#3](../../../../../../restauracoes/20261006-013939-solicitacao-com-e33d/2026-10-06T01-39-39Z__solicitacao__sonnet__com__rep-02__20261006-013939-solicitacao-com-e33d/evidence/logs/collector.log) [#4](../../../../../../restauracoes/20261006-013939-solicitacao-com-e33d/2026-10-06T01-39-39Z__solicitacao__sonnet__com__rep-02__20261006-013939-solicitacao-com-e33d/evidence/logs/egress-provider.log) [#5](../../../../../../restauracoes/20261006-013939-solicitacao-com-e33d/2026-10-06T01-39-39Z__solicitacao__sonnet__com__rep-02__20261006-013939-solicitacao-com-e33d/evidence/logs/egress-site.log) [#6](../../../../../../restauracoes/20261006-013939-solicitacao-com-e33d/2026-10-06T01-39-39Z__solicitacao__sonnet__com__rep-02__20261006-013939-solicitacao-com-e33d/evidence/logs/oracle.log) [#7](../../../../../../restauracoes/20261006-013939-solicitacao-com-e33d/2026-10-06T01-39-39Z__solicitacao__sonnet__com__rep-02__20261006-013939-solicitacao-com-e33d/evidence/logs/probe.log) [#8](../../../../../../restauracoes/20261006-013939-solicitacao-com-e33d/2026-10-06T01-39-39Z__solicitacao__sonnet__com__rep-02__20261006-013939-solicitacao-com-e33d/evidence/logs/screens.log) · [binding](analysis-binding.com.json)

Achados enviados (9; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| #forma-presencial | label | O rádio 'Presencial' não tem nome acessível: o &lt;label&gt; não possui atributo for \(aparece como radio sem nome na árvore de acessibilidade\); os outros dois rádios têm label for. |
| .upload-button | aria-hidden-focus | Botão 'Selecione o arquivo' com aria-hidden=&quot;true&quot; e focável \(tabindex=1\); o input file real está com display:none, então o controle fica invisível para leitores de tela mas acessível por teclado. |
| .upload-button | wcag:2.4.3 | tabindex=&quot;1&quot; \(valor positivo\) no botão de upload, tirando-o da ordem natural de foco: ele recebe foco antes dos demais campos do formulário. |
| .flatpickr-prev-month button, .flatpickr-next-month button | emag-2.2 | Com o calendário aberto \(clique em 'Abrir calendário'\), os botões de mês anterior/seguinte são botões só com ícone, sem aria-label nem texto \(32×32 px, visíveis\). |
| #cpf | wcag:3.3.1 | CPF '123' foi aceito: nenhum erro de formato; a tela exibiu 'Solicitação enviada.', apesar do texto de ajuda 'Somente números, 11 dígitos.' |
| #data-preferencial | wcag:3.3.1 | Data '99/99/9999' foi aceita: nenhum erro de formato; envio concluído com sucesso, apesar da orientação 'Informe no formato dd/mm/aaaa.' |
| #servico, #unidade | incerta | Após o envio vazio, os campos de seleção ficam com aria-invalid=&quot;true&quot; mas sem aria-describedby; a mensagem de erro correspondente \(.feedback sem id\) não está ligada ao campo. Nos demais campos \(nome, CPF, data, descriç… |
| .acao-cancelar | wcag:2.4.3 | Ao fechar o modal 'Descartar solicitação?' \(por Escape ou por 'Continuar preenchendo'\), o foco vai para o body, não volta ao botão Cancelar que abriu o modal. |
| .paginacao-anteriores a.active | incerta | Na paginação, a página atual \(página 2\) é marcada só pela classe 'active'; o link não tem aria-current. |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `7bb0862ed57ad30e71150cde43f15ae19c808b8f7582829d2f5b49248f596d3d`

