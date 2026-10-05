# Resumo da análise — Solicitar serviço (solicitacao)

Revisão 1 · gerado em 2026-10-05T02:30:10.089Z (UTC)

## 1. Status técnico

Análise: **pronta**

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261004-142321-solicitacao-sem-3f85 | sem | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 9 cartão(ões), nenhum decidido |
| 20261004-140827-solicitacao-com-1d0a | com | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 12 cartão(ões), nenhum decidido |

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
| Início (UTC) | 2026-10-04T14:23:43Z | 2026-10-04T14:08:55Z |
| Início (local) | 04/10/2026, 11:23:43 (horário de Brasília) | 04/10/2026, 11:08:55 (horário de Brasília) |
| Commit do harness | 1b6ed3e79deaab08c7109e7c0008bef947921077 | 1b6ed3e79deaab08c7109e7c0008bef947921077 |
| Repetição · tentativa | 7 · 1 | 7 · 1 |
| Campanha · slot · par | t7-tela-a-01 · p07-sem · p07 | t7-tela-a-01 · p07-com · p07 |

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
| Cartões pendentes de revisão | 9 | 12 |
| Maturidade | aguardando revisão — 9 cartão(ões), nenhum decidido | aguardando revisão — 12 cartão(ões), nenhum decidido |
| Entra na comparação principal | sim | sim |
| Achados enviados | 9 | 12 |

Recall e precisão só aparecem com a revisão fechada; enquanto houver cartão pendente ficam “indisponível” (nunca 0). “Achados enviados = 0” é um resultado válido (o agente olhou e não alegou nada); submissão recusada ou ausente é outra coisa.

Linha de base determinística (união das varreduras comparáveis), por unidade da referência:

| Unidades | sem | com |
|---|---|---|
| Agente e linha de base | 0 | 0 |
| Só o agente | 0 | 0 |
| Só a linha de base | 0 | 0 |
| Nenhum | 16 | 16 |
| Estado | provisório | provisório |

Linha de base: usada (lb-20261004-140737-solicitacao-9f6e92)

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
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 26 (ponte MCP do oráculo) |
| Protocolo | unverified | unverified |
| Ferramentas anunciadas | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for, get\_ds\_rules, get\_design\_tokens, get\_emag\_rules, get\_pag… |
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_console\_messages, browser\_take\_screenshot, browser\_press\_key, browser\_snapshot, browser\_click, browser\_tabs, browser\_fill\_form | browser\_navigate, browser\_evaluate, browser\_console\_messages, scan\_page, get\_component\_spec, browser\_take\_screenshot, browser\_press\_key, browser\_snapshot, browser\_click, get\_finding\_details, get\_ds\_rules, browser\_fill\_form, browser\_close, verify\_finding, get\_page\_rules |
| Erros de ferramenta | 4 (tool-events.ndjson \(eventos com isError: true\)) | 2 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 8 aprovado(s); falhos: nenhum | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | nenhuma | nenhuma |

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 6. Custo e tempo

| | sem | com |
|---|---|---|
| Tempo de relógio (s) | 500 (runner) | 698 (runner) |
| Turnos | 109 (stream-json do cliente \(result.num\_turns\)) | 129 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 108 (ponte MCP) | 128 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 26 (ponte MCP do oráculo) |
| Tokens de entrada | 110 (stream-json do cliente \(result.usage\)) | 142 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 32472 (stream-json do cliente \(result.usage\)) | 34977 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 3147011 (stream-json do cliente \(result.usage\)) | 6657163 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 104274 (stream-json do cliente \(result.usage\)) | 158101 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 2.1134741999999997 (estimativa do cliente \(result.total\_cost\_usd\)) | 3.2963486000000017 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 29 cartão(ões), estimativa 174 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 7. Detalhes e evidências

**sem** (20261004-142321-solicitacao-sem-3f85): [pacote](../../../../../restauracoes/20261004-142321-solicitacao-sem-3f85/2026-10-04T14-23-21Z__solicitacao__opus__sem__rep-07__20261004-142321-solicitacao-sem-3f85) · [run.json](../../../../../restauracoes/20261004-142321-solicitacao-sem-3f85/2026-10-04T14-23-21Z__solicitacao__opus__sem__rep-07__20261004-142321-solicitacao-sem-3f85/run.json) · [findings.json](../../../../../restauracoes/20261004-142321-solicitacao-sem-3f85/2026-10-04T14-23-21Z__solicitacao__opus__sem__rep-07__20261004-142321-solicitacao-sem-3f85/findings.json) · [isolation.json](../../../../../restauracoes/20261004-142321-solicitacao-sem-3f85/2026-10-04T14-23-21Z__solicitacao__opus__sem__rep-07__20261004-142321-solicitacao-sem-3f85/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261004-142321-solicitacao-sem-3f85/2026-10-04T14-23-21Z__solicitacao__opus__sem__rep-07__20261004-142321-solicitacao-sem-3f85/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261004-142321-solicitacao-sem-3f85/2026-10-04T14-23-21Z__solicitacao__opus__sem__rep-07__20261004-142321-solicitacao-sem-3f85/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261004-142321-solicitacao-sem-3f85/2026-10-04T14-23-21Z__solicitacao__opus__sem__rep-07__20261004-142321-solicitacao-sem-3f85/evidence/cliente.json) [#3](../../../../../restauracoes/20261004-142321-solicitacao-sem-3f85/2026-10-04T14-23-21Z__solicitacao__opus__sem__rep-07__20261004-142321-solicitacao-sem-3f85/evidence/container-config.json) [#4](../../../../../restauracoes/20261004-142321-solicitacao-sem-3f85/2026-10-04T14-23-21Z__solicitacao__opus__sem__rep-07__20261004-142321-solicitacao-sem-3f85/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261004-142321-solicitacao-sem-3f85/2026-10-04T14-23-21Z__solicitacao__opus__sem__rep-07__20261004-142321-solicitacao-sem-3f85/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261004-142321-solicitacao-sem-3f85/2026-10-04T14-23-21Z__solicitacao__opus__sem__rep-07__20261004-142321-solicitacao-sem-3f85/evidence/preflight.json) [#7](../../../../../restauracoes/20261004-142321-solicitacao-sem-3f85/2026-10-04T14-23-21Z__solicitacao__opus__sem__rep-07__20261004-142321-solicitacao-sem-3f85/evidence/prompt.txt) [#8](../../../../../restauracoes/20261004-142321-solicitacao-sem-3f85/2026-10-04T14-23-21Z__solicitacao__opus__sem__rep-07__20261004-142321-solicitacao-sem-3f85/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261004-142321-solicitacao-sem-3f85/2026-10-04T14-23-21Z__solicitacao__opus__sem__rep-07__20261004-142321-solicitacao-sem-3f85/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261004-142321-solicitacao-sem-3f85/2026-10-04T14-23-21Z__solicitacao__opus__sem__rep-07__20261004-142321-solicitacao-sem-3f85/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261004-142321-solicitacao-sem-3f85/2026-10-04T14-23-21Z__solicitacao__opus__sem__rep-07__20261004-142321-solicitacao-sem-3f85/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261004-142321-solicitacao-sem-3f85/2026-10-04T14-23-21Z__solicitacao__opus__sem__rep-07__20261004-142321-solicitacao-sem-3f85/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261004-142321-solicitacao-sem-3f85/2026-10-04T14-23-21Z__solicitacao__opus__sem__rep-07__20261004-142321-solicitacao-sem-3f85/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261004-142321-solicitacao-sem-3f85/2026-10-04T14-23-21Z__solicitacao__opus__sem__rep-07__20261004-142321-solicitacao-sem-3f85/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261004-142321-solicitacao-sem-3f85/2026-10-04T14-23-21Z__solicitacao__opus__sem__rep-07__20261004-142321-solicitacao-sem-3f85/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261004-142321-solicitacao-sem-3f85/2026-10-04T14-23-21Z__solicitacao__opus__sem__rep-07__20261004-142321-solicitacao-sem-3f85/evidence/raw/probe/probe.json) [#17](../../../../../restauracoes/20261004-142321-solicitacao-sem-3f85/2026-10-04T14-23-21Z__solicitacao__opus__sem__rep-07__20261004-142321-solicitacao-sem-3f85/evidence/raw/probe/sonda-escrita-1791123823417.txt) [#18](../../../../../restauracoes/20261004-142321-solicitacao-sem-3f85/2026-10-04T14-23-21Z__solicitacao__opus__sem__rep-07__20261004-142321-solicitacao-sem-3f85/evidence/raw/task/mcp.json) [#19](../../../../../restauracoes/20261004-142321-solicitacao-sem-3f85/2026-10-04T14-23-21Z__solicitacao__opus__sem__rep-07__20261004-142321-solicitacao-sem-3f85/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261004-142321-solicitacao-sem-3f85/2026-10-04T14-23-21Z__solicitacao__opus__sem__rep-07__20261004-142321-solicitacao-sem-3f85/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261004-142321-solicitacao-sem-3f85/2026-10-04T14-23-21Z__solicitacao__opus__sem__rep-07__20261004-142321-solicitacao-sem-3f85/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261004-142321-solicitacao-sem-3f85/2026-10-04T14-23-21Z__solicitacao__opus__sem__rep-07__20261004-142321-solicitacao-sem-3f85/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261004-142321-solicitacao-sem-3f85/2026-10-04T14-23-21Z__solicitacao__opus__sem__rep-07__20261004-142321-solicitacao-sem-3f85/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261004-142321-solicitacao-sem-3f85/2026-10-04T14-23-21Z__solicitacao__opus__sem__rep-07__20261004-142321-solicitacao-sem-3f85/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261004-142321-solicitacao-sem-3f85/2026-10-04T14-23-21Z__solicitacao__opus__sem__rep-07__20261004-142321-solicitacao-sem-3f85/evidence/logs/probe.log) [#7](../../../../../restauracoes/20261004-142321-solicitacao-sem-3f85/2026-10-04T14-23-21Z__solicitacao__opus__sem__rep-07__20261004-142321-solicitacao-sem-3f85/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (9; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| #forma-presencial | wcag:4.1.2 | O &lt;label&gt;Presencial&lt;/label&gt; não tem atributo for nem envolve o input; o rádio fica sem nome acessível \(árvore: 'radio' sem nome\). Clicar no texto ou no círculo de 'Presencial' não marca a opção \(elementFromPoint retorna… |
| .upload-button | wcag:4.1.2 | O botão 'Selecione o arquivo' tem aria-hidden=&quot;true&quot;, mas recebe foco por teclado \(tabindex=1\) e, com Enter, abre o seletor de arquivos. O input #documentos está com display:none, então esse botão é o único caminho por … |
| .upload-button | wcag:2.4.3 | tabindex=&quot;1&quot; no botão de upload: o primeiro Tab após o carregamento vai para o upload, no meio do formulário, antes do atalho 'Ir para o conteúdo', cabeçalho e campos anteriores. Após fechar o modal, o Tab também volta … |
| #servico, #unidade | wcag:2.4.7 | Com foco por teclado \(:focus-visible\), os inputs têm outline:none, box-shadow:none e borda inalterada \(#888\). A regra '.campo-servico/.campo-unidade .br-input input:focus-visible \{ box-shadow:none; outline:none \}' remov… |
| #servico, #unidade | wcag:1.3.1 | Após enviar vazio, as mensagens 'Selecione o tipo de serviço.' e 'Selecione a unidade de atendimento.' não têm id e os inputs \(aria-invalid=true\) não têm aria-describedby apontando para elas. Os outros campos referencia… |
| .paginacao-anteriores .page.active | wcag:1.3.1 | A página atual só é indicada visualmente \(classe active, fundo escuro\). Não há aria-current nem outro texto: os três links têm apenas aria-label 'Página N'. Igual após ir para as páginas 2 e 3. |
| .acao-cancelar | wcag:2.4.3 | Ao fechar o modal 'Descartar solicitação?' \(Esc, botão Fechar, 'Continuar preenchendo' ou 'Descartar'\), o foco vai para &lt;body&gt;, não volta ao botão Cancelar, e o próximo Tab recomeça do início da página \(vai para o botão… |
| .grupo-forma .br-radio label, .formulario-solicitacao .br-checkbox label | wcag:1.4.11 | A borda dos rádios e checkboxes desmarcados \(label::before, 24x24, 1px\) é #ccc sobre fundo #fff, contraste ≈1,6:1; é o único contorno visual do controle e do estado desmarcado. |
| .mensagem-retorno.danger .close | incerta | Na mensagem de erro do envio, o controle de fechar vem primeiro no DOM e aparece à esquerda \(x=201\), e o ícone de status aparece à direita \(x=1019\). Na mensagem de sucesso e na anatomia do br-message do DS, a ordem é íc… |

**com** (20261004-140827-solicitacao-com-1d0a): [pacote](../../../../../restauracoes/20261004-140827-solicitacao-com-1d0a/2026-10-04T14-08-27Z__solicitacao__opus__com__rep-07__20261004-140827-solicitacao-com-1d0a) · [run.json](../../../../../restauracoes/20261004-140827-solicitacao-com-1d0a/2026-10-04T14-08-27Z__solicitacao__opus__com__rep-07__20261004-140827-solicitacao-com-1d0a/run.json) · [findings.json](../../../../../restauracoes/20261004-140827-solicitacao-com-1d0a/2026-10-04T14-08-27Z__solicitacao__opus__com__rep-07__20261004-140827-solicitacao-com-1d0a/findings.json) · [isolation.json](../../../../../restauracoes/20261004-140827-solicitacao-com-1d0a/2026-10-04T14-08-27Z__solicitacao__opus__com__rep-07__20261004-140827-solicitacao-com-1d0a/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261004-140827-solicitacao-com-1d0a/2026-10-04T14-08-27Z__solicitacao__opus__com__rep-07__20261004-140827-solicitacao-com-1d0a/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261004-140827-solicitacao-com-1d0a/2026-10-04T14-08-27Z__solicitacao__opus__com__rep-07__20261004-140827-solicitacao-com-1d0a/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261004-140827-solicitacao-com-1d0a/2026-10-04T14-08-27Z__solicitacao__opus__com__rep-07__20261004-140827-solicitacao-com-1d0a/evidence/cliente.json) [#3](../../../../../restauracoes/20261004-140827-solicitacao-com-1d0a/2026-10-04T14-08-27Z__solicitacao__opus__com__rep-07__20261004-140827-solicitacao-com-1d0a/evidence/container-config.json) [#4](../../../../../restauracoes/20261004-140827-solicitacao-com-1d0a/2026-10-04T14-08-27Z__solicitacao__opus__com__rep-07__20261004-140827-solicitacao-com-1d0a/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261004-140827-solicitacao-com-1d0a/2026-10-04T14-08-27Z__solicitacao__opus__com__rep-07__20261004-140827-solicitacao-com-1d0a/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261004-140827-solicitacao-com-1d0a/2026-10-04T14-08-27Z__solicitacao__opus__com__rep-07__20261004-140827-solicitacao-com-1d0a/evidence/preflight.json) [#7](../../../../../restauracoes/20261004-140827-solicitacao-com-1d0a/2026-10-04T14-08-27Z__solicitacao__opus__com__rep-07__20261004-140827-solicitacao-com-1d0a/evidence/prompt.txt) [#8](../../../../../restauracoes/20261004-140827-solicitacao-com-1d0a/2026-10-04T14-08-27Z__solicitacao__opus__com__rep-07__20261004-140827-solicitacao-com-1d0a/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261004-140827-solicitacao-com-1d0a/2026-10-04T14-08-27Z__solicitacao__opus__com__rep-07__20261004-140827-solicitacao-com-1d0a/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261004-140827-solicitacao-com-1d0a/2026-10-04T14-08-27Z__solicitacao__opus__com__rep-07__20261004-140827-solicitacao-com-1d0a/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261004-140827-solicitacao-com-1d0a/2026-10-04T14-08-27Z__solicitacao__opus__com__rep-07__20261004-140827-solicitacao-com-1d0a/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261004-140827-solicitacao-com-1d0a/2026-10-04T14-08-27Z__solicitacao__opus__com__rep-07__20261004-140827-solicitacao-com-1d0a/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261004-140827-solicitacao-com-1d0a/2026-10-04T14-08-27Z__solicitacao__opus__com__rep-07__20261004-140827-solicitacao-com-1d0a/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261004-140827-solicitacao-com-1d0a/2026-10-04T14-08-27Z__solicitacao__opus__com__rep-07__20261004-140827-solicitacao-com-1d0a/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261004-140827-solicitacao-com-1d0a/2026-10-04T14-08-27Z__solicitacao__opus__com__rep-07__20261004-140827-solicitacao-com-1d0a/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261004-140827-solicitacao-com-1d0a/2026-10-04T14-08-27Z__solicitacao__opus__com__rep-07__20261004-140827-solicitacao-com-1d0a/evidence/raw/oracle/inventory.json) [#17](../../../../../restauracoes/20261004-140827-solicitacao-com-1d0a/2026-10-04T14-08-27Z__solicitacao__opus__com__rep-07__20261004-140827-solicitacao-com-1d0a/evidence/raw/oracle/oracle-telemetry.ndjson) [#18](../../../../../restauracoes/20261004-140827-solicitacao-com-1d0a/2026-10-04T14-08-27Z__solicitacao__opus__com__rep-07__20261004-140827-solicitacao-com-1d0a/evidence/raw/oracle/tool-events.ndjson) [#19](../../../../../restauracoes/20261004-140827-solicitacao-com-1d0a/2026-10-04T14-08-27Z__solicitacao__opus__com__rep-07__20261004-140827-solicitacao-com-1d0a/evidence/raw/probe/probe.json) [#20](../../../../../restauracoes/20261004-140827-solicitacao-com-1d0a/2026-10-04T14-08-27Z__solicitacao__opus__com__rep-07__20261004-140827-solicitacao-com-1d0a/evidence/raw/probe/sonda-escrita-1791122935200.txt) [#21](../../../../../restauracoes/20261004-140827-solicitacao-com-1d0a/2026-10-04T14-08-27Z__solicitacao__opus__com__rep-07__20261004-140827-solicitacao-com-1d0a/evidence/raw/task/mcp.json) [#22](../../../../../restauracoes/20261004-140827-solicitacao-com-1d0a/2026-10-04T14-08-27Z__solicitacao__opus__com__rep-07__20261004-140827-solicitacao-com-1d0a/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261004-140827-solicitacao-com-1d0a/2026-10-04T14-08-27Z__solicitacao__opus__com__rep-07__20261004-140827-solicitacao-com-1d0a/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261004-140827-solicitacao-com-1d0a/2026-10-04T14-08-27Z__solicitacao__opus__com__rep-07__20261004-140827-solicitacao-com-1d0a/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261004-140827-solicitacao-com-1d0a/2026-10-04T14-08-27Z__solicitacao__opus__com__rep-07__20261004-140827-solicitacao-com-1d0a/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261004-140827-solicitacao-com-1d0a/2026-10-04T14-08-27Z__solicitacao__opus__com__rep-07__20261004-140827-solicitacao-com-1d0a/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261004-140827-solicitacao-com-1d0a/2026-10-04T14-08-27Z__solicitacao__opus__com__rep-07__20261004-140827-solicitacao-com-1d0a/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261004-140827-solicitacao-com-1d0a/2026-10-04T14-08-27Z__solicitacao__opus__com__rep-07__20261004-140827-solicitacao-com-1d0a/evidence/logs/oracle.log) [#7](../../../../../restauracoes/20261004-140827-solicitacao-com-1d0a/2026-10-04T14-08-27Z__solicitacao__opus__com__rep-07__20261004-140827-solicitacao-com-1d0a/evidence/logs/probe.log) [#8](../../../../../restauracoes/20261004-140827-solicitacao-com-1d0a/2026-10-04T14-08-27Z__solicitacao__opus__com__rep-07__20261004-140827-solicitacao-com-1d0a/evidence/logs/screens.log) · [binding](analysis-binding.com.json)

Achados enviados (12; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| #forma-presencial | label | O radio 'Presencial' não tem nome acessível: o &lt;label&gt;Presencial&lt;/label&gt; não tem atributo for \(os outros radios têm\). Clicar no texto 'Presencial' não marca a opção; o radio fica sem nome na árvore de acessibilidade. |
| .upload-button | aria-hidden-focus | O botão 'Selecione o arquivo' tem aria-hidden='true', mas é focável \(tabindex='1'\) e recebe foco pelo Tab. O input file #documentos está com display:none, então o controle de upload fica sem nome/papel para tecnologia a… |
| .upload-button | govbr-3.7.0-accessibility-global-79db88c7f55d | O botão de upload tem tabindex='1': o primeiro Tab após o carregamento vai para ele, no meio do formulário, antes do link 'Ir para o conteúdo' e do restante da página. |
| #servico, #unidade | govbr-3.7.0-accessibility-global-21fbcc2fe37b | Com foco de teclado \(:focus-visible\) nos campos 'Tipo de serviço' e 'Unidade de atendimento', não aparece indicador: outline-style none, box-shadow none no input e nos ancestrais; a borda continua 1px #888. Os outros in… |
| #servico, #unidade | govbr-3.7.0-accessibility-global-cc837bbaf713 | No estado de erro, as mensagens 'Selecione o tipo de serviço.' e 'Selecione a unidade de atendimento.' não têm id e os inputs não têm aria-describedby \(null\). Os demais campos associam o erro \(ex.: #nome aria-describedb… |
| .mensagem-retorno.danger | govbr-3.7.0-component-message-66b01a712e67 | Na Message de erro, a ordem é close -&gt; content -&gt; icon: o botão Fechar fica à esquerda \(x=201\) e o ícone semântico \(fa-times-circle\) à direita \(x=1019\). A mensagem de sucesso segue a ordem correta. |
| .campo-servico \[role=option\], .campo-unidade \[role=option\] | wcag:2.4.3 | Ao escolher uma opção do select pelo teclado \(seta para baixo + Enter\), a lista fecha e o foco vai para o body, em vez de voltar ao input do select. O Tab seguinte não continua de forma previsível \(caiu em #forma-telefo… |
| .dialogo-descarte | wcag:2.4.3 | Ao fechar a caixa de diálogo 'Descartar solicitação?' \(Escape, 'Continuar preenchendo' ou 'Descartar'\), o foco vai para o body em vez de voltar ao botão 'Cancelar' que a abriu. |
| .flatpickr-prev-month &gt; button, .flatpickr-next-month &gt; button | button-name | Com o calendário aberto, os botões de mês anterior/seguinte só têm ícone \(&lt;i class='fas fa-chevron-left/right'&gt; sem aria-hidden\) e nenhum nome acessível \(sem texto, aria-label ou title\). |
| header.barra-superior | ds-page-header | A área de cabeçalho é um &lt;header class='barra-superior'&gt; próprio, só com a marca 'gov.br'. Não há componente Header do DS \(.br-header ou &lt;br-header&gt;\): 0 elementos. |
| body | ds-page-footer | A página não tem Área de Rodapé: 0 elementos .br-footer/&lt;br-footer&gt; e nenhum &lt;footer&gt;. |
| form.formulario-solicitacao | ds-token-color | A borda do contêiner do formulário usa border-color rgb\(222,226,230\) \(#dee2e6\), valor fora do registro de tokens do DS \(o mais próximo é --gray-cool-10 #dfe1e2\). |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `01c49f236e0b5ba0005dd6f6c7f4da52cdc5553b1df9067a42c6b764826ce44f`

