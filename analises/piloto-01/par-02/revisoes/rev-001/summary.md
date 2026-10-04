# Resumo da análise — Solicitar serviço (solicitacao)

Revisão 1 · gerado em 2026-10-04T01:04:34.821Z (UTC)

## 1. Status técnico

Análise: **pronta**

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261003-120830-solicitacao-sem-1a90 | sem | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 10 cartão(ões), nenhum decidido |
| 20261003-122147-solicitacao-com-9f7f | com | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 13 cartão(ões), nenhum decidido |

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
| Início (UTC) | 2026-10-03T12:08:56Z | 2026-10-03T12:22:12Z |
| Início (local) | 03/10/2026, 09:08:56 (horário de Brasília) | 03/10/2026, 09:22:12 (horário de Brasília) |
| Commit do harness | a793dfdee82cd4c2d768d8b078f5c788a659cd07 | a793dfdee82cd4c2d768d8b078f5c788a659cd07 |
| Repetição · tentativa | 2 · 1 | 2 · 1 |
| Campanha · slot · par | piloto-01 · p02-sem · par-02 | piloto-01 · p02-com · par-02 |

## 3. Resultado científico

| Medida | sem | com |
|---|---|---|
| Defeitos da referência confirmados | 0 de 14 (até agora) | 0 de 14 (até agora) |
| Recall (cobertura da referência) | indisponível | indisponível |
| Precisão sobre a referência — D/(D+F) | indisponível | indisponível |
| Precisão das afirmações — (D+N)/(D+N+F) | indisponível | indisponível |
| Afirmações incorretas (falsos positivos) | 0 | 0 |
| Defeitos novos corretos (fora da referência) | 0 | 0 |
| Duplicadas | 0 | 0 |
| Cartões pendentes de revisão | 10 | 13 |
| Maturidade | aguardando revisão — 10 cartão(ões), nenhum decidido | aguardando revisão — 13 cartão(ões), nenhum decidido |
| Achados enviados | 10 | 13 |

Recall e precisão só aparecem com a revisão fechada; enquanto houver cartão pendente ficam “indisponível” (nunca 0). “Achados enviados = 0” é um resultado válido (o agente olhou e não alegou nada); submissão recusada ou ausente é outra coisa.

Linha de base determinística (união das varreduras comparáveis), por unidade da referência:

| Unidades | sem | com |
|---|---|---|
| Agente e linha de base | 0 | 0 |
| Só o agente | 0 | 0 |
| Só a linha de base | 0 | 0 |
| Nenhum | 14 | 14 |
| Estado | provisório | provisório |

Linha de base: usada (lb-20261003-120756-solicitacao-4ee09e)

## 4. Comparação com − sem

_n = 1 par, sem inferência. Nenhum braço é declarado melhor por contagem bruta._

Estado: provisória (há cartões pendentes em pelo menos um braço)

- Diferença de defeitos confirmados (com − sem): 0 (até agora)
- Diferença de recall (com − sem): indisponível (revisão aberta)
- Só o com detectou: nenhuma
- Só o sem detectou: nenhuma
- Os dois detectaram: nenhuma
- Nenhum detectou: A-03 (&lt;div&gt; &quot;Descartar solicitação? Os dados preenchidos nest&quot;); A-11 (&lt;div&gt; &quot;Não foi possível enviar. Há 8 campo\(s\) obrigatór&quot;); A-04 (&lt;input#unidade&gt; &quot;Selecione uma opção&quot;); A-09 (&lt;input#forma-presencial&gt;); A-08 (&lt;input#unidade&gt; &quot;Selecione uma opção&quot;); A-07 (&lt;nav&gt; &quot;Paginação de solicitações anteriores&quot;); A-05 (&lt;div&gt; &quot;Solicitações anteriores Protocolo Serviço Data S&quot;); A-10 (&lt;div&gt; &quot;Documentos comprobatórios \(opcional\) Selecione o&quot;); A-08 (&lt;input#servico&gt; &quot;Selecione uma opção&quot;); A-04 (&lt;input#servico&gt; &quot;Selecione uma opção&quot;); A-02 (&lt;button&gt; &quot;Selecione o arquivo&quot;); A-06 (&lt;div&gt; &quot;Fechar a mensagem&quot;); A-01 (&lt;div&gt; &quot;Descartar solicitação? Os dados preenchidos nest&quot;); A-12 (&lt;nav&gt; &quot;Paginação de solicitações anteriores&quot;)

## 5. MCP e isolamento

| | sem | com |
|---|---|---|
| Isolamento | passed | passed |
| Oráculo anunciado ao cliente | não | sim |
| Oráculo (pacote) | nenhum | govbr-ds-validator-server 2.7.0 (combined) |
| Uso do oráculo | ausente (confirmado) | usado conforme o protocolo |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 20 (ponte MCP do oráculo) |
| Protocolo | unverified | unverified |
| Ferramentas anunciadas | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for, get\_ds\_rules, get\_design\_tokens, get\_emag\_rules, get\_pag… |
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_console\_messages, browser\_take\_screenshot, browser\_press\_key, browser\_click, browser\_snapshot, browser\_fill\_form, browser\_type, browser\_tabs | browser\_navigate, browser\_evaluate, browser\_console\_messages, scan\_page, browser\_take\_screenshot, browser\_press\_key, browser\_snapshot, browser\_click, get\_component\_spec, get\_ds\_rules, browser\_fill\_form, get\_finding\_details, verify\_finding, get\_page\_rules |
| Erros de ferramenta | 8 (tool-events.ndjson \(eventos com isError: true\)) | 2 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 8 aprovado(s); falhos: nenhum | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | nenhuma | nenhuma |

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 6. Custo e tempo

| | sem | com |
|---|---|---|
| Tempo de relógio (s) | 569 (runner) | 624 (runner) |
| Turnos | 151 (stream-json do cliente \(result.num\_turns\)) | 171 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 150 (ponte MCP) | 170 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 20 (ponte MCP do oráculo) |
| Tokens de entrada | 118 (stream-json do cliente \(result.usage\)) | 138 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 35970 (stream-json do cliente \(result.usage\)) | 39967 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 3691176 (stream-json do cliente \(result.usage\)) | 7302093 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 102251 (stream-json do cliente \(result.usage\)) | 177932 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 2.2761152 (estimativa do cliente \(result.total\_cost\_usd\)) | 3.6837666000000002 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 31 cartão(ões), estimativa 186 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 7. Detalhes e evidências

**sem** (20261003-120830-solicitacao-sem-1a90): [pacote](../../../../../restauracoes/20261003-120830-solicitacao-sem-1a90/2026-10-03T12-08-30Z__solicitacao__opus__sem__rep-02__20261003-120830-solicitacao-sem-1a90) · [run.json](../../../../../restauracoes/20261003-120830-solicitacao-sem-1a90/2026-10-03T12-08-30Z__solicitacao__opus__sem__rep-02__20261003-120830-solicitacao-sem-1a90/run.json) · [findings.json](../../../../../restauracoes/20261003-120830-solicitacao-sem-1a90/2026-10-03T12-08-30Z__solicitacao__opus__sem__rep-02__20261003-120830-solicitacao-sem-1a90/findings.json) · [isolation.json](../../../../../restauracoes/20261003-120830-solicitacao-sem-1a90/2026-10-03T12-08-30Z__solicitacao__opus__sem__rep-02__20261003-120830-solicitacao-sem-1a90/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261003-120830-solicitacao-sem-1a90/2026-10-03T12-08-30Z__solicitacao__opus__sem__rep-02__20261003-120830-solicitacao-sem-1a90/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261003-120830-solicitacao-sem-1a90/2026-10-03T12-08-30Z__solicitacao__opus__sem__rep-02__20261003-120830-solicitacao-sem-1a90/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261003-120830-solicitacao-sem-1a90/2026-10-03T12-08-30Z__solicitacao__opus__sem__rep-02__20261003-120830-solicitacao-sem-1a90/evidence/cliente.json) [#3](../../../../../restauracoes/20261003-120830-solicitacao-sem-1a90/2026-10-03T12-08-30Z__solicitacao__opus__sem__rep-02__20261003-120830-solicitacao-sem-1a90/evidence/container-config.json) [#4](../../../../../restauracoes/20261003-120830-solicitacao-sem-1a90/2026-10-03T12-08-30Z__solicitacao__opus__sem__rep-02__20261003-120830-solicitacao-sem-1a90/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261003-120830-solicitacao-sem-1a90/2026-10-03T12-08-30Z__solicitacao__opus__sem__rep-02__20261003-120830-solicitacao-sem-1a90/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261003-120830-solicitacao-sem-1a90/2026-10-03T12-08-30Z__solicitacao__opus__sem__rep-02__20261003-120830-solicitacao-sem-1a90/evidence/preflight.json) [#7](../../../../../restauracoes/20261003-120830-solicitacao-sem-1a90/2026-10-03T12-08-30Z__solicitacao__opus__sem__rep-02__20261003-120830-solicitacao-sem-1a90/evidence/prompt.txt) [#8](../../../../../restauracoes/20261003-120830-solicitacao-sem-1a90/2026-10-03T12-08-30Z__solicitacao__opus__sem__rep-02__20261003-120830-solicitacao-sem-1a90/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261003-120830-solicitacao-sem-1a90/2026-10-03T12-08-30Z__solicitacao__opus__sem__rep-02__20261003-120830-solicitacao-sem-1a90/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261003-120830-solicitacao-sem-1a90/2026-10-03T12-08-30Z__solicitacao__opus__sem__rep-02__20261003-120830-solicitacao-sem-1a90/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261003-120830-solicitacao-sem-1a90/2026-10-03T12-08-30Z__solicitacao__opus__sem__rep-02__20261003-120830-solicitacao-sem-1a90/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261003-120830-solicitacao-sem-1a90/2026-10-03T12-08-30Z__solicitacao__opus__sem__rep-02__20261003-120830-solicitacao-sem-1a90/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261003-120830-solicitacao-sem-1a90/2026-10-03T12-08-30Z__solicitacao__opus__sem__rep-02__20261003-120830-solicitacao-sem-1a90/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261003-120830-solicitacao-sem-1a90/2026-10-03T12-08-30Z__solicitacao__opus__sem__rep-02__20261003-120830-solicitacao-sem-1a90/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261003-120830-solicitacao-sem-1a90/2026-10-03T12-08-30Z__solicitacao__opus__sem__rep-02__20261003-120830-solicitacao-sem-1a90/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261003-120830-solicitacao-sem-1a90/2026-10-03T12-08-30Z__solicitacao__opus__sem__rep-02__20261003-120830-solicitacao-sem-1a90/evidence/raw/probe/probe.json) [#17](../../../../../restauracoes/20261003-120830-solicitacao-sem-1a90/2026-10-03T12-08-30Z__solicitacao__opus__sem__rep-02__20261003-120830-solicitacao-sem-1a90/evidence/raw/probe/sonda-escrita-1791029335899.txt) [#18](../../../../../restauracoes/20261003-120830-solicitacao-sem-1a90/2026-10-03T12-08-30Z__solicitacao__opus__sem__rep-02__20261003-120830-solicitacao-sem-1a90/evidence/raw/task/mcp.json) [#19](../../../../../restauracoes/20261003-120830-solicitacao-sem-1a90/2026-10-03T12-08-30Z__solicitacao__opus__sem__rep-02__20261003-120830-solicitacao-sem-1a90/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261003-120830-solicitacao-sem-1a90/2026-10-03T12-08-30Z__solicitacao__opus__sem__rep-02__20261003-120830-solicitacao-sem-1a90/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261003-120830-solicitacao-sem-1a90/2026-10-03T12-08-30Z__solicitacao__opus__sem__rep-02__20261003-120830-solicitacao-sem-1a90/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261003-120830-solicitacao-sem-1a90/2026-10-03T12-08-30Z__solicitacao__opus__sem__rep-02__20261003-120830-solicitacao-sem-1a90/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261003-120830-solicitacao-sem-1a90/2026-10-03T12-08-30Z__solicitacao__opus__sem__rep-02__20261003-120830-solicitacao-sem-1a90/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261003-120830-solicitacao-sem-1a90/2026-10-03T12-08-30Z__solicitacao__opus__sem__rep-02__20261003-120830-solicitacao-sem-1a90/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261003-120830-solicitacao-sem-1a90/2026-10-03T12-08-30Z__solicitacao__opus__sem__rep-02__20261003-120830-solicitacao-sem-1a90/evidence/logs/probe.log) [#7](../../../../../restauracoes/20261003-120830-solicitacao-sem-1a90/2026-10-03T12-08-30Z__solicitacao__opus__sem__rep-02__20261003-120830-solicitacao-sem-1a90/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (10; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| #forma-presencial | emag:6.2 | O rádio 'Presencial' não tem nome acessível: o &lt;label&gt;Presencial&lt;/label&gt; irmão não tem atributo for e não envolve o input. A árvore de acessibilidade mostra 'radio' sem nome, e clicar no texto ou no círculo \(o label int… |
| .upload-button | wcag:4.1.2 | O botão 'Selecione o arquivo', único controle focável do campo de documentos \(o input#documentos tem display:none\), tem aria-hidden='true'. Recebe foco do teclado, mas fica fora da árvore de acessibilidade, e o leitor d… |
| .upload-button | wcag:2.4.3 | O botão de upload tem tabindex='1'. No carregamento, o primeiro Tab leva o foco a ele \(no meio do formulário, com rolagem\), antes do link 'Ir para o conteúdo', do cabeçalho e dos campos anteriores. Na sequência natural … |
| #servico, #unidade | wcag:2.4.7 | Com foco por teclado, os campos 'Tipo de serviço' e 'Unidade de atendimento' ficam com outline: none, box-shadow: none e borda rgb\(136,136,136\), igual ao estado sem foco \(regra da página '.campo-servico .br-input input:… |
| #servico, #unidade | wcag:3.3.1 | Depois do envio com erro, os campos recebem aria-invalid='true', mas as mensagens 'Selecione o tipo de serviço.' e 'Selecione a unidade de atendimento.' não têm id e os inputs não têm aria-describedby. O erro não fica a… |
| .acao-cancelar | wcag:2.4.3 | Ao fechar o diálogo 'Descartar solicitação?' \(por Esc, por 'Continuar preenchendo' ou por 'Descartar'\), o foco vai para &lt;body&gt; em vez de voltar ao botão Cancelar que abriu o diálogo. |
| .mensagem-retorno.danger .close | incerta | A mensagem de erro geral não segue a estrutura do componente Message do DS: o fechar é um &lt;div role='button' tabindex='0'&gt; posicionado primeiro \(à esquerda, x=201\) e o ícone de estado vem por último \(à direita, x=1019\).… |
| .paginacao-anteriores .page.active | wcag:1.3.1 | A página atual da paginação aparece só visualmente \(classe active, fundo azul-escuro\). Não há aria-current nem outro indicador programático, e o nome acessível \('Página 1', 'Página 2'…\) é igual ao das demais páginas. |
| .grupo-forma .br-radio label, .grupo-recursos .br-checkbox label, .campo-declar… | wcag:1.4.11 | A caixa visual dos rádios e checkboxes \(label::before, 24x24\) tem borda de 1px rgb\(204,204,204\) sobre fundo branco: contraste de 1,61:1. A borda é a única indicação visual do controle não marcado. |
| .flatpickr-prev-month button, .flatpickr-next-month button | wcag:4.1.2 | Os botões de mês anterior/seguinte do calendário só têm ícone &lt;i class='fas fa-chevron-left/right'&gt;, sem texto, aria-label ou title: o nome acessível é vazio. |

**com** (20261003-122147-solicitacao-com-9f7f): [pacote](../../../../../restauracoes/20261003-122147-solicitacao-com-9f7f/2026-10-03T12-21-47Z__solicitacao__opus__com__rep-02__20261003-122147-solicitacao-com-9f7f) · [run.json](../../../../../restauracoes/20261003-122147-solicitacao-com-9f7f/2026-10-03T12-21-47Z__solicitacao__opus__com__rep-02__20261003-122147-solicitacao-com-9f7f/run.json) · [findings.json](../../../../../restauracoes/20261003-122147-solicitacao-com-9f7f/2026-10-03T12-21-47Z__solicitacao__opus__com__rep-02__20261003-122147-solicitacao-com-9f7f/findings.json) · [isolation.json](../../../../../restauracoes/20261003-122147-solicitacao-com-9f7f/2026-10-03T12-21-47Z__solicitacao__opus__com__rep-02__20261003-122147-solicitacao-com-9f7f/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261003-122147-solicitacao-com-9f7f/2026-10-03T12-21-47Z__solicitacao__opus__com__rep-02__20261003-122147-solicitacao-com-9f7f/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261003-122147-solicitacao-com-9f7f/2026-10-03T12-21-47Z__solicitacao__opus__com__rep-02__20261003-122147-solicitacao-com-9f7f/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261003-122147-solicitacao-com-9f7f/2026-10-03T12-21-47Z__solicitacao__opus__com__rep-02__20261003-122147-solicitacao-com-9f7f/evidence/cliente.json) [#3](../../../../../restauracoes/20261003-122147-solicitacao-com-9f7f/2026-10-03T12-21-47Z__solicitacao__opus__com__rep-02__20261003-122147-solicitacao-com-9f7f/evidence/container-config.json) [#4](../../../../../restauracoes/20261003-122147-solicitacao-com-9f7f/2026-10-03T12-21-47Z__solicitacao__opus__com__rep-02__20261003-122147-solicitacao-com-9f7f/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261003-122147-solicitacao-com-9f7f/2026-10-03T12-21-47Z__solicitacao__opus__com__rep-02__20261003-122147-solicitacao-com-9f7f/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261003-122147-solicitacao-com-9f7f/2026-10-03T12-21-47Z__solicitacao__opus__com__rep-02__20261003-122147-solicitacao-com-9f7f/evidence/preflight.json) [#7](../../../../../restauracoes/20261003-122147-solicitacao-com-9f7f/2026-10-03T12-21-47Z__solicitacao__opus__com__rep-02__20261003-122147-solicitacao-com-9f7f/evidence/prompt.txt) [#8](../../../../../restauracoes/20261003-122147-solicitacao-com-9f7f/2026-10-03T12-21-47Z__solicitacao__opus__com__rep-02__20261003-122147-solicitacao-com-9f7f/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261003-122147-solicitacao-com-9f7f/2026-10-03T12-21-47Z__solicitacao__opus__com__rep-02__20261003-122147-solicitacao-com-9f7f/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261003-122147-solicitacao-com-9f7f/2026-10-03T12-21-47Z__solicitacao__opus__com__rep-02__20261003-122147-solicitacao-com-9f7f/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261003-122147-solicitacao-com-9f7f/2026-10-03T12-21-47Z__solicitacao__opus__com__rep-02__20261003-122147-solicitacao-com-9f7f/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261003-122147-solicitacao-com-9f7f/2026-10-03T12-21-47Z__solicitacao__opus__com__rep-02__20261003-122147-solicitacao-com-9f7f/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261003-122147-solicitacao-com-9f7f/2026-10-03T12-21-47Z__solicitacao__opus__com__rep-02__20261003-122147-solicitacao-com-9f7f/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261003-122147-solicitacao-com-9f7f/2026-10-03T12-21-47Z__solicitacao__opus__com__rep-02__20261003-122147-solicitacao-com-9f7f/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261003-122147-solicitacao-com-9f7f/2026-10-03T12-21-47Z__solicitacao__opus__com__rep-02__20261003-122147-solicitacao-com-9f7f/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261003-122147-solicitacao-com-9f7f/2026-10-03T12-21-47Z__solicitacao__opus__com__rep-02__20261003-122147-solicitacao-com-9f7f/evidence/raw/oracle/inventory.json) [#17](../../../../../restauracoes/20261003-122147-solicitacao-com-9f7f/2026-10-03T12-21-47Z__solicitacao__opus__com__rep-02__20261003-122147-solicitacao-com-9f7f/evidence/raw/oracle/oracle-telemetry.ndjson) [#18](../../../../../restauracoes/20261003-122147-solicitacao-com-9f7f/2026-10-03T12-21-47Z__solicitacao__opus__com__rep-02__20261003-122147-solicitacao-com-9f7f/evidence/raw/oracle/tool-events.ndjson) [#19](../../../../../restauracoes/20261003-122147-solicitacao-com-9f7f/2026-10-03T12-21-47Z__solicitacao__opus__com__rep-02__20261003-122147-solicitacao-com-9f7f/evidence/raw/probe/probe.json) [#20](../../../../../restauracoes/20261003-122147-solicitacao-com-9f7f/2026-10-03T12-21-47Z__solicitacao__opus__com__rep-02__20261003-122147-solicitacao-com-9f7f/evidence/raw/probe/sonda-escrita-1791030132366.txt) [#21](../../../../../restauracoes/20261003-122147-solicitacao-com-9f7f/2026-10-03T12-21-47Z__solicitacao__opus__com__rep-02__20261003-122147-solicitacao-com-9f7f/evidence/raw/task/mcp.json) [#22](../../../../../restauracoes/20261003-122147-solicitacao-com-9f7f/2026-10-03T12-21-47Z__solicitacao__opus__com__rep-02__20261003-122147-solicitacao-com-9f7f/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261003-122147-solicitacao-com-9f7f/2026-10-03T12-21-47Z__solicitacao__opus__com__rep-02__20261003-122147-solicitacao-com-9f7f/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261003-122147-solicitacao-com-9f7f/2026-10-03T12-21-47Z__solicitacao__opus__com__rep-02__20261003-122147-solicitacao-com-9f7f/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261003-122147-solicitacao-com-9f7f/2026-10-03T12-21-47Z__solicitacao__opus__com__rep-02__20261003-122147-solicitacao-com-9f7f/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261003-122147-solicitacao-com-9f7f/2026-10-03T12-21-47Z__solicitacao__opus__com__rep-02__20261003-122147-solicitacao-com-9f7f/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261003-122147-solicitacao-com-9f7f/2026-10-03T12-21-47Z__solicitacao__opus__com__rep-02__20261003-122147-solicitacao-com-9f7f/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261003-122147-solicitacao-com-9f7f/2026-10-03T12-21-47Z__solicitacao__opus__com__rep-02__20261003-122147-solicitacao-com-9f7f/evidence/logs/oracle.log) [#7](../../../../../restauracoes/20261003-122147-solicitacao-com-9f7f/2026-10-03T12-21-47Z__solicitacao__opus__com__rep-02__20261003-122147-solicitacao-com-9f7f/evidence/logs/probe.log) [#8](../../../../../restauracoes/20261003-122147-solicitacao-com-9f7f/2026-10-03T12-21-47Z__solicitacao__opus__com__rep-02__20261003-122147-solicitacao-com-9f7f/evidence/logs/screens.log) · [binding](analysis-binding.com.json)

Achados enviados (13; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| header.barra-superior | ds-page-header | A página não tem .br-header nem &lt;br-header&gt;; a área de cabeçalho é um &lt;header class=&quot;barra-superior&quot;&gt; próprio contendo só o link 'gov.br'. |
| body | ds-page-footer | Nenhum .br-footer nem &lt;br-footer&gt; no documento; a página termina na paginação da tabela. |
| #forma-presencial | label | O rádio 'Presencial' não tem nome acessível: o &lt;label&gt;Presencial&lt;/label&gt; não tem for=&quot;forma-presencial&quot;. Clicar no texto 'Presencial' não marca a opção. |
| .upload-button | aria-hidden-focus | O botão 'Selecione o arquivo' tem aria-hidden=&quot;true&quot; mas é focável \(tabindex=&quot;1&quot;\); o input file #documentos está com display:none, então leitores de tela não têm controle de upload exposto. |
| .upload-button | wcag:2.4.3 | O botão de upload tem tabindex=&quot;1&quot;: o primeiro Tab após o carregamento vai para ele \(no meio do formulário\), antes do skip link 'Ir para o conteúdo', do link gov.br, do breadcrumb e dos campos anteriores. |
| #servico, #unidade | wcag:2.4.7 | Com foco por teclado nos campos 'Tipo de serviço' e 'Unidade de atendimento' não há indicador visível: box-shadow none, outline none, borda inalterada rgb\(136,136,136\). A regra da aplicação '.campo-servico .br-input inp… |
| #servico\[aria-invalid=&quot;true&quot;\], #unidade\[aria-invalid=&quot;true&quot;\] | wcag:1.3.1 | No estado de erro, #servico e #unidade recebem aria-invalid=&quot;true&quot;, mas não têm aria-describedby; as mensagens 'Selecione o tipo de serviço.' e 'Selecione a unidade de atendimento.' estão em spans sem id. Os demais camp… |
| .mensagem-retorno.danger | govbr-3.7.0-component-message-66b01a712e67 | Na mensagem de erro 'Não foi possível enviar.', o botão Fechar aparece à esquerda \(x=201\) e o ícone semântico à direita \(x=1019\); no DOM a ordem é close, content, icon. A mensagem de sucesso segue a ordem correta. |
| .mensagem-retorno.danger .close &gt; div.br-button | ds-structure-button-tag | O botão Fechar da mensagem de erro é um &lt;div class=&quot;br-button circle small&quot; role=&quot;button&quot; tabindex=&quot;0&quot;&gt;, e não um &lt;button&gt;. Ele responde a Enter e Espaço \(verificado\). A mensagem de sucesso usa &lt;button&gt;. |
| .flatpickr-prev-month &gt; button, .flatpickr-next-month &gt; button | button-name | Os botões de mês anterior e mês seguinte do calendário só contêm ícone \(&lt;i class=&quot;fas fa-chevron-left/right&quot;&gt;\) e não têm aria-label nem texto: nome acessível vazio. |
| .flatpickr-calendar.open .flatpickr-day | tabindex | Com o calendário aberto, os 42 dias \(span.flatpickr-day\) recebem tabindex=&quot;1&quot; \(positivo\), alterando a ordem de tabulação da página. |
| .acao-cancelar | wcag:2.4.3 | Ao fechar o modal 'Descartar solicitação?' com Esc ou 'Continuar preenchendo', o foco vai para &lt;body&gt; em vez de voltar ao botão Cancelar que abriu o modal. |
| .dialogo-descarte | govbr-3.7.0-foundation-global-21b1a2733f7b | O modal tem color rgb\(51,67,51\) \(#334333\), definido pela regra da aplicação '.dialogo-descarte \{ color: rgb\(51,67,51\) \}' e herdado pelo título 'Descartar solicitação?'. Esse valor não corresponde a nenhum token de cor d… |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `f668a4d544d246304f876c3401c6eabb85c40b614b9a93a12b1cf2c6feecc9e4`

