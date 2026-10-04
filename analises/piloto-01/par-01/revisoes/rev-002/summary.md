# Resumo da análise — Solicitar serviço (solicitacao)

Revisão 2 · substitui [a revisão anterior](../rev-001/summary.md) (sem alterar o pacote bruto) · gerado em 2026-10-04T01:09:56.240Z (UTC)

## 1. Status técnico

Análise: **pronta**

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261003-112525-solicitacao-sem-d049 | sem | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 8 cartão(ões), nenhum decidido |
| 20261003-115250-solicitacao-com-c38a | com | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 11 cartão(ões), nenhum decidido |

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
| Início (UTC) | 2026-10-03T11:25:49Z | 2026-10-03T11:53:16Z |
| Início (local) | 03/10/2026, 08:25:49 (horário de Brasília) | 03/10/2026, 08:53:16 (horário de Brasília) |
| Commit do harness | a793dfdee82cd4c2d768d8b078f5c788a659cd07 | a793dfdee82cd4c2d768d8b078f5c788a659cd07 |
| Repetição · tentativa | 1 · 1 | 1 · 1 |
| Campanha · slot · par | piloto-01 · p01-sem · par-01 | piloto-01 · p01-com · par-01 |

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
| Cartões pendentes de revisão | 8 | 11 |
| Maturidade | aguardando revisão — 8 cartão(ões), nenhum decidido | aguardando revisão — 11 cartão(ões), nenhum decidido |
| Achados enviados | 8 | 11 |

Recall e precisão só aparecem com a revisão fechada; enquanto houver cartão pendente ficam “indisponível” (nunca 0). “Achados enviados = 0” é um resultado válido (o agente olhou e não alegou nada); submissão recusada ou ausente é outra coisa.

Linha de base determinística (união das varreduras comparáveis), por unidade da referência:

| Unidades | sem | com |
|---|---|---|
| Agente e linha de base | 0 | 0 |
| Só o agente | 0 | 0 |
| Só a linha de base | 0 | 0 |
| Nenhum | 14 | 14 |
| Estado | provisório | provisório |

Linha de base: usada (lb-20261003-112513-solicitacao-70f4f6)

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
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 22 (ponte MCP do oráculo) |
| Protocolo | unverified | unverified |
| Ferramentas anunciadas | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for, get\_ds\_rules, get\_design\_tokens, get\_emag\_rules, get\_pag… |
| Ferramentas usadas | browser\_navigate, browser\_snapshot, browser\_console\_messages, browser\_evaluate, browser\_take\_screenshot, browser\_press\_key, browser\_click, browser\_fill\_form, browser\_tabs, browser\_type | browser\_navigate, browser\_evaluate, browser\_console\_messages, scan\_page, get\_component\_spec, browser\_take\_screenshot, browser\_press\_key, browser\_snapshot, browser\_click, get\_ds\_rules, browser\_fill\_form, verify\_finding, get\_page\_rules |
| Erros de ferramenta | 4 (tool-events.ndjson \(eventos com isError: true\)) | 0 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 8 aprovado(s); falhos: nenhum | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | nenhuma | nenhuma |

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 6. Custo e tempo

| | sem | com |
|---|---|---|
| Tempo de relógio (s) | 642 (runner) | 555 (runner) |
| Turnos | 156 (stream-json do cliente \(result.num\_turns\)) | 106 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 155 (ponte MCP) | 105 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 22 (ponte MCP do oráculo) |
| Tokens de entrada | 136 (stream-json do cliente \(result.usage\)) | 98 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 35976 (stream-json do cliente \(result.usage\)) | 28796 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 4341086 (stream-json do cliente \(result.usage\)) | 4091918 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 118391 (stream-json do cliente \(result.usage\)) | 135848 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 2.5354091999999993 (estimativa do cliente \(result.total\_cost\_usd\)) | 2.4814796 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 27 cartão(ões), estimativa 162 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 7. Detalhes e evidências

**sem** (20261003-112525-solicitacao-sem-d049): [pacote](../../../../../restauracoes/20261003-112525-solicitacao-sem-d049/2026-10-03T11-25-25Z__solicitacao__opus__sem__rep-01__20261003-112525-solicitacao-sem-d049) · [run.json](../../../../../restauracoes/20261003-112525-solicitacao-sem-d049/2026-10-03T11-25-25Z__solicitacao__opus__sem__rep-01__20261003-112525-solicitacao-sem-d049/run.json) · [findings.json](../../../../../restauracoes/20261003-112525-solicitacao-sem-d049/2026-10-03T11-25-25Z__solicitacao__opus__sem__rep-01__20261003-112525-solicitacao-sem-d049/findings.json) · [isolation.json](../../../../../restauracoes/20261003-112525-solicitacao-sem-d049/2026-10-03T11-25-25Z__solicitacao__opus__sem__rep-01__20261003-112525-solicitacao-sem-d049/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261003-112525-solicitacao-sem-d049/2026-10-03T11-25-25Z__solicitacao__opus__sem__rep-01__20261003-112525-solicitacao-sem-d049/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261003-112525-solicitacao-sem-d049/2026-10-03T11-25-25Z__solicitacao__opus__sem__rep-01__20261003-112525-solicitacao-sem-d049/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261003-112525-solicitacao-sem-d049/2026-10-03T11-25-25Z__solicitacao__opus__sem__rep-01__20261003-112525-solicitacao-sem-d049/evidence/cliente.json) [#3](../../../../../restauracoes/20261003-112525-solicitacao-sem-d049/2026-10-03T11-25-25Z__solicitacao__opus__sem__rep-01__20261003-112525-solicitacao-sem-d049/evidence/container-config.json) [#4](../../../../../restauracoes/20261003-112525-solicitacao-sem-d049/2026-10-03T11-25-25Z__solicitacao__opus__sem__rep-01__20261003-112525-solicitacao-sem-d049/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261003-112525-solicitacao-sem-d049/2026-10-03T11-25-25Z__solicitacao__opus__sem__rep-01__20261003-112525-solicitacao-sem-d049/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261003-112525-solicitacao-sem-d049/2026-10-03T11-25-25Z__solicitacao__opus__sem__rep-01__20261003-112525-solicitacao-sem-d049/evidence/preflight.json) [#7](../../../../../restauracoes/20261003-112525-solicitacao-sem-d049/2026-10-03T11-25-25Z__solicitacao__opus__sem__rep-01__20261003-112525-solicitacao-sem-d049/evidence/prompt.txt) [#8](../../../../../restauracoes/20261003-112525-solicitacao-sem-d049/2026-10-03T11-25-25Z__solicitacao__opus__sem__rep-01__20261003-112525-solicitacao-sem-d049/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261003-112525-solicitacao-sem-d049/2026-10-03T11-25-25Z__solicitacao__opus__sem__rep-01__20261003-112525-solicitacao-sem-d049/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261003-112525-solicitacao-sem-d049/2026-10-03T11-25-25Z__solicitacao__opus__sem__rep-01__20261003-112525-solicitacao-sem-d049/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261003-112525-solicitacao-sem-d049/2026-10-03T11-25-25Z__solicitacao__opus__sem__rep-01__20261003-112525-solicitacao-sem-d049/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261003-112525-solicitacao-sem-d049/2026-10-03T11-25-25Z__solicitacao__opus__sem__rep-01__20261003-112525-solicitacao-sem-d049/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261003-112525-solicitacao-sem-d049/2026-10-03T11-25-25Z__solicitacao__opus__sem__rep-01__20261003-112525-solicitacao-sem-d049/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261003-112525-solicitacao-sem-d049/2026-10-03T11-25-25Z__solicitacao__opus__sem__rep-01__20261003-112525-solicitacao-sem-d049/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261003-112525-solicitacao-sem-d049/2026-10-03T11-25-25Z__solicitacao__opus__sem__rep-01__20261003-112525-solicitacao-sem-d049/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261003-112525-solicitacao-sem-d049/2026-10-03T11-25-25Z__solicitacao__opus__sem__rep-01__20261003-112525-solicitacao-sem-d049/evidence/raw/probe/probe.json) [#17](../../../../../restauracoes/20261003-112525-solicitacao-sem-d049/2026-10-03T11-25-25Z__solicitacao__opus__sem__rep-01__20261003-112525-solicitacao-sem-d049/evidence/raw/probe/sonda-escrita-1791026749433.txt) [#18](../../../../../restauracoes/20261003-112525-solicitacao-sem-d049/2026-10-03T11-25-25Z__solicitacao__opus__sem__rep-01__20261003-112525-solicitacao-sem-d049/evidence/raw/task/mcp.json) [#19](../../../../../restauracoes/20261003-112525-solicitacao-sem-d049/2026-10-03T11-25-25Z__solicitacao__opus__sem__rep-01__20261003-112525-solicitacao-sem-d049/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261003-112525-solicitacao-sem-d049/2026-10-03T11-25-25Z__solicitacao__opus__sem__rep-01__20261003-112525-solicitacao-sem-d049/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261003-112525-solicitacao-sem-d049/2026-10-03T11-25-25Z__solicitacao__opus__sem__rep-01__20261003-112525-solicitacao-sem-d049/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261003-112525-solicitacao-sem-d049/2026-10-03T11-25-25Z__solicitacao__opus__sem__rep-01__20261003-112525-solicitacao-sem-d049/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261003-112525-solicitacao-sem-d049/2026-10-03T11-25-25Z__solicitacao__opus__sem__rep-01__20261003-112525-solicitacao-sem-d049/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261003-112525-solicitacao-sem-d049/2026-10-03T11-25-25Z__solicitacao__opus__sem__rep-01__20261003-112525-solicitacao-sem-d049/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261003-112525-solicitacao-sem-d049/2026-10-03T11-25-25Z__solicitacao__opus__sem__rep-01__20261003-112525-solicitacao-sem-d049/evidence/logs/probe.log) [#7](../../../../../restauracoes/20261003-112525-solicitacao-sem-d049/2026-10-03T11-25-25Z__solicitacao__opus__sem__rep-01__20261003-112525-solicitacao-sem-d049/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (8; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| #forma-presencial | wcag:4.1.2 | O rádio 'Presencial' não tem nome acessível: o &lt;label&gt;Presencial&lt;/label&gt; não tem atributo for \(os outros rádios têm\), então a árvore de acessibilidade expõe 'radio' sem nome, e clicar no texto 'Presencial' não marca a o… |
| #servico, #unidade | wcag:2.4.7 | Ao receber foco por teclado, os campos 'Tipo de serviço' e 'Unidade de atendimento' ficam com outline:none, box-shadow:none e borda rgb\(136,136,136\), idêntica ao estado sem foco. Regra do CSS da página: '.campo-servico … |
| .upload-button | wcag:2.4.3 | O botão 'Selecione o arquivo' tem tabindex='1', por isso é o primeiro elemento a receber foco na página, antes do skiplink e do cabeçalho; depois o foco volta a ele só no fim do ciclo. |
| .upload-button | wcag:4.1.2 | O botão 'Selecione o arquivo' recebe foco e abre o seletor de arquivo, mas tem aria-hidden='true'; o input file #documentos está com display:none. Assim, o único controle de envio de documento fica fora da árvore de ace… |
| #servico, #unidade | wcag:1.3.1 | Após enviar o formulário vazio, os campos recebem aria-invalid='true' e as mensagens 'Selecione o tipo de serviço.' e 'Selecione a unidade de atendimento.' aparecem, mas as mensagens não têm id e os inputs não têm aria-… |
| .acao-cancelar | wcag:2.4.3 | Ao fechar o diálogo 'Descartar solicitação?' \(Esc, botão Fechar, 'Continuar preenchendo' ou 'Descartar'\), o foco vai para o &lt;body&gt;, em vez de voltar ao botão 'Cancelar' que abriu o diálogo. |
| .paginacao-anteriores .page.active | wcag:1.3.1 | A página atual da paginação é indicada só visualmente \(classe 'active', fundo azul-escuro\); o link não tem aria-current e o nome acessível é igual ao das outras páginas \('Página 1'\). |
| .mensagem-retorno.danger .close \[role=button\] | incerta | Na mensagem de erro de envio \(br-message danger\), o botão 'Fechar a mensagem' é um &lt;div class='br-button circle small' role='button' tabindex='0'&gt;, enquanto a mensagem de sucesso da mesma tela usa &lt;button type='button'&gt;… |

**com** (20261003-115250-solicitacao-com-c38a): [pacote](../../../../../restauracoes/20261003-115250-solicitacao-com-c38a/2026-10-03T11-52-50Z__solicitacao__opus__com__rep-01__20261003-115250-solicitacao-com-c38a) · [run.json](../../../../../restauracoes/20261003-115250-solicitacao-com-c38a/2026-10-03T11-52-50Z__solicitacao__opus__com__rep-01__20261003-115250-solicitacao-com-c38a/run.json) · [findings.json](../../../../../restauracoes/20261003-115250-solicitacao-com-c38a/2026-10-03T11-52-50Z__solicitacao__opus__com__rep-01__20261003-115250-solicitacao-com-c38a/findings.json) · [isolation.json](../../../../../restauracoes/20261003-115250-solicitacao-com-c38a/2026-10-03T11-52-50Z__solicitacao__opus__com__rep-01__20261003-115250-solicitacao-com-c38a/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261003-115250-solicitacao-com-c38a/2026-10-03T11-52-50Z__solicitacao__opus__com__rep-01__20261003-115250-solicitacao-com-c38a/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261003-115250-solicitacao-com-c38a/2026-10-03T11-52-50Z__solicitacao__opus__com__rep-01__20261003-115250-solicitacao-com-c38a/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261003-115250-solicitacao-com-c38a/2026-10-03T11-52-50Z__solicitacao__opus__com__rep-01__20261003-115250-solicitacao-com-c38a/evidence/cliente.json) [#3](../../../../../restauracoes/20261003-115250-solicitacao-com-c38a/2026-10-03T11-52-50Z__solicitacao__opus__com__rep-01__20261003-115250-solicitacao-com-c38a/evidence/container-config.json) [#4](../../../../../restauracoes/20261003-115250-solicitacao-com-c38a/2026-10-03T11-52-50Z__solicitacao__opus__com__rep-01__20261003-115250-solicitacao-com-c38a/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261003-115250-solicitacao-com-c38a/2026-10-03T11-52-50Z__solicitacao__opus__com__rep-01__20261003-115250-solicitacao-com-c38a/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261003-115250-solicitacao-com-c38a/2026-10-03T11-52-50Z__solicitacao__opus__com__rep-01__20261003-115250-solicitacao-com-c38a/evidence/preflight.json) [#7](../../../../../restauracoes/20261003-115250-solicitacao-com-c38a/2026-10-03T11-52-50Z__solicitacao__opus__com__rep-01__20261003-115250-solicitacao-com-c38a/evidence/prompt.txt) [#8](../../../../../restauracoes/20261003-115250-solicitacao-com-c38a/2026-10-03T11-52-50Z__solicitacao__opus__com__rep-01__20261003-115250-solicitacao-com-c38a/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261003-115250-solicitacao-com-c38a/2026-10-03T11-52-50Z__solicitacao__opus__com__rep-01__20261003-115250-solicitacao-com-c38a/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261003-115250-solicitacao-com-c38a/2026-10-03T11-52-50Z__solicitacao__opus__com__rep-01__20261003-115250-solicitacao-com-c38a/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261003-115250-solicitacao-com-c38a/2026-10-03T11-52-50Z__solicitacao__opus__com__rep-01__20261003-115250-solicitacao-com-c38a/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261003-115250-solicitacao-com-c38a/2026-10-03T11-52-50Z__solicitacao__opus__com__rep-01__20261003-115250-solicitacao-com-c38a/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261003-115250-solicitacao-com-c38a/2026-10-03T11-52-50Z__solicitacao__opus__com__rep-01__20261003-115250-solicitacao-com-c38a/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261003-115250-solicitacao-com-c38a/2026-10-03T11-52-50Z__solicitacao__opus__com__rep-01__20261003-115250-solicitacao-com-c38a/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261003-115250-solicitacao-com-c38a/2026-10-03T11-52-50Z__solicitacao__opus__com__rep-01__20261003-115250-solicitacao-com-c38a/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261003-115250-solicitacao-com-c38a/2026-10-03T11-52-50Z__solicitacao__opus__com__rep-01__20261003-115250-solicitacao-com-c38a/evidence/raw/oracle/inventory.json) [#17](../../../../../restauracoes/20261003-115250-solicitacao-com-c38a/2026-10-03T11-52-50Z__solicitacao__opus__com__rep-01__20261003-115250-solicitacao-com-c38a/evidence/raw/oracle/oracle-telemetry.ndjson) [#18](../../../../../restauracoes/20261003-115250-solicitacao-com-c38a/2026-10-03T11-52-50Z__solicitacao__opus__com__rep-01__20261003-115250-solicitacao-com-c38a/evidence/raw/oracle/tool-events.ndjson) [#19](../../../../../restauracoes/20261003-115250-solicitacao-com-c38a/2026-10-03T11-52-50Z__solicitacao__opus__com__rep-01__20261003-115250-solicitacao-com-c38a/evidence/raw/probe/probe.json) [#20](../../../../../restauracoes/20261003-115250-solicitacao-com-c38a/2026-10-03T11-52-50Z__solicitacao__opus__com__rep-01__20261003-115250-solicitacao-com-c38a/evidence/raw/probe/sonda-escrita-1791028395598.txt) [#21](../../../../../restauracoes/20261003-115250-solicitacao-com-c38a/2026-10-03T11-52-50Z__solicitacao__opus__com__rep-01__20261003-115250-solicitacao-com-c38a/evidence/raw/task/mcp.json) [#22](../../../../../restauracoes/20261003-115250-solicitacao-com-c38a/2026-10-03T11-52-50Z__solicitacao__opus__com__rep-01__20261003-115250-solicitacao-com-c38a/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261003-115250-solicitacao-com-c38a/2026-10-03T11-52-50Z__solicitacao__opus__com__rep-01__20261003-115250-solicitacao-com-c38a/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261003-115250-solicitacao-com-c38a/2026-10-03T11-52-50Z__solicitacao__opus__com__rep-01__20261003-115250-solicitacao-com-c38a/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261003-115250-solicitacao-com-c38a/2026-10-03T11-52-50Z__solicitacao__opus__com__rep-01__20261003-115250-solicitacao-com-c38a/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261003-115250-solicitacao-com-c38a/2026-10-03T11-52-50Z__solicitacao__opus__com__rep-01__20261003-115250-solicitacao-com-c38a/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261003-115250-solicitacao-com-c38a/2026-10-03T11-52-50Z__solicitacao__opus__com__rep-01__20261003-115250-solicitacao-com-c38a/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261003-115250-solicitacao-com-c38a/2026-10-03T11-52-50Z__solicitacao__opus__com__rep-01__20261003-115250-solicitacao-com-c38a/evidence/logs/oracle.log) [#7](../../../../../restauracoes/20261003-115250-solicitacao-com-c38a/2026-10-03T11-52-50Z__solicitacao__opus__com__rep-01__20261003-115250-solicitacao-com-c38a/evidence/logs/probe.log) [#8](../../../../../restauracoes/20261003-115250-solicitacao-com-c38a/2026-10-03T11-52-50Z__solicitacao__opus__com__rep-01__20261003-115250-solicitacao-com-c38a/evidence/logs/screens.log) · [binding](analysis-binding.com.json)

Achados enviados (11; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| html | ds-page-header | Não há .br-header nem &lt;br-header&gt; no documento; o topo é um header.barra-superior customizado só com o link 'gov.br'. |
| html | ds-page-footer | Não há .br-footer nem &lt;br-footer&gt; nem qualquer rodapé no documento. |
| #forma-presencial | label | O rádio 'Presencial' não tem nome acessível: o &lt;label&gt; irmão não tem atributo for, e clicar no texto 'Presencial' não marca a opção. |
| .upload-button | aria-hidden-focus | O botão 'Selecione o arquivo' tem aria-hidden=&quot;true&quot;, mas é focável \(tabindex=&quot;1&quot;\); como o input file está com display:none, o envio de documentos fica sem representação acessível. |
| .upload-button | wcag:2.4.3 | tabindex=&quot;1&quot; no botão de upload: ele é o primeiro elemento a receber foco pelo Tab na página, antes do skip link, do cabeçalho e dos campos anteriores do formulário. |
| #servico, #unidade | wcag:2.4.7 | Com foco pelo teclado \(classe focus-visible\), os campos Tipo de serviço e Unidade de atendimento ficam com outline-style none e box-shadow none, sem nenhum indicador visível. A regra da tela '.campo-servico .br-input in… |
| #unidade | wcag:1.3.1 | Depois do envio vazio, #unidade recebe aria-invalid=&quot;true&quot;, mas não tem aria-describedby; a mensagem 'Selecione a unidade de atendimento.' não tem id e não fica associada ao campo. Os demais campos associam suas mensage… |
| .mensagem-retorno | govbr-3.7.0-component-message-66b01a712e67 | Na Message de erro, o botão Fechar aparece à esquerda \(x=201\) e o ícone semântico à direita \(x=1019\); a ordem no DOM é close, content, icon. |
| .mensagem-retorno .close &gt; \[role=&quot;button&quot;\] | ds-structure-button-tag | O botão 'Fechar a mensagem' da Message de erro é um &lt;div class=&quot;br-button circle small&quot; role=&quot;button&quot; tabindex=&quot;0&quot;&gt;. |
| .acao-cancelar | wcag:2.4.3 | Ao fechar o modal 'Descartar solicitação?' por Escape, 'Continuar preenchendo' ou 'Fechar', document.activeElement passa a ser &lt;body&gt;; o foco não volta ao botão Cancelar que abriu o modal. |
| .dialogo-descarte | ds-token-color | A cor de texto do modal \(título 'Descartar solicitação?'\) é rgb\(51, 67, 51\) / #334333, valor que não pertence ao registro de tokens do DS. |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `cde2754874d4bdc02047ad78a6539b81d3285192eea8cb3fdbbd50b89a6e7de3`

