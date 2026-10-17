# Resumo da análise — Solicitar serviço (solicitacao)

Revisão 1 · gerado em 2026-10-16T00:00:00Z (UTC)

## 1. Status técnico

Análise: **pronta**

Aviso: derivado retrospectivo nat74-retrospectiva-1.0.0: campanha congelada com flow-semantic-1.5.0, repreparada com flow-semantic-1.7.0 \(não substitui a análise oficial\)

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261004-094446-solicitacao-sem-ffa5 | sem | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 8 cartão(ões), nenhum decidido |
| 20261004-093251-solicitacao-com-f707 | com | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 12 cartão(ões), nenhum decidido |

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
| Início (UTC) | 2026-10-04T09:45:11Z | 2026-10-04T09:33:20Z |
| Início (local) | 04/10/2026, 06:45:11 (horário de Brasília) | 04/10/2026, 06:33:20 (horário de Brasília) |
| Commit do harness | 1b6ed3e79deaab08c7109e7c0008bef947921077 | 1b6ed3e79deaab08c7109e7c0008bef947921077 |
| Repetição · tentativa | 5 · 1 | 5 · 1 |
| Campanha · slot · par | t7-tela-a-01 · p05-sem · p05 | t7-tela-a-01 · p05-com · p05 |

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
| Cartões pendentes de revisão | 8 | 12 |
| Maturidade | aguardando revisão — 8 cartão(ões), nenhum decidido | aguardando revisão — 12 cartão(ões), nenhum decidido |
| Entra na comparação principal | sim | sim |
| Achados enviados | 8 | 12 |

Recall e precisão só aparecem com a revisão fechada; enquanto houver cartão pendente ficam “indisponível” (nunca 0). “Achados enviados = 0” é um resultado válido (o agente olhou e não alegou nada); submissão recusada ou ausente é outra coisa.

Linha de base determinística (união das varreduras comparáveis), por unidade da referência:

| Unidades | sem | com |
|---|---|---|
| Agente e linha de base | 0 | 0 |
| Só o agente | 0 | 0 |
| Só a linha de base | 0 | 0 |
| Nenhum | 16 | 16 |
| Estado | provisório | provisório |

Linha de base: usada (lb-20261004-093147-solicitacao-25340b)

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
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 18 (ponte MCP do oráculo) |
| Protocolo | unverified | unverified |
| Ferramentas anunciadas | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for, get\_ds\_rules, get\_design\_tokens, get\_emag\_rules, get\_pag… |
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_console\_messages, browser\_take\_screenshot, browser\_snapshot, browser\_press\_key, browser\_click, browser\_fill\_form, browser\_close | browser\_navigate, browser\_evaluate, browser\_console\_messages, scan\_page, browser\_take\_screenshot, browser\_press\_key, browser\_snapshot, browser\_click, get\_finding\_details, get\_component\_spec, get\_ds\_rules, browser\_fill\_form, verify\_finding, get\_page\_rules |
| Erros de ferramenta | 3 (tool-events.ndjson \(eventos com isError: true\)) | 1 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 8 aprovado(s); falhos: nenhum | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | nenhuma | nenhuma |
| Registro de inspeção | registro indisponível \(pacote findings.v1, anterior ao registro de inspeção\) — não é zero cobertura | registro indisponível \(pacote findings.v1, anterior ao registro de inspeção\) — não é zero cobertura |

O registro de inspeção é declaração do agente sobre o inventário que ele mesmo descobriu; “com evento de ferramenta” só diz que o identificador citado aparece num evento gravado. Não pontua nem decide elegibilidade, e a cobertura da página continua desconhecida.

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 6. Custo e tempo

| | sem | com |
|---|---|---|
| Tempo de relógio (s) | 459 (runner) | 534 (runner) |
| Turnos | 123 (stream-json do cliente \(result.num\_turns\)) | 136 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 122 (ponte MCP) | 135 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 18 (ponte MCP do oráculo) |
| Tokens de entrada | 108 (stream-json do cliente \(result.usage\)) | 120 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 24998 (stream-json do cliente \(result.usage\)) | 33772 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 3266674 (stream-json do cliente \(result.usage\)) | 5289860 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 89340 (stream-json do cliente \(result.usage\)) | 139317 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 1.8684467999999996 (estimativa do cliente \(result.total\_cost\_usd\)) | 2.8484279999999993 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 28 cartão(ões), estimativa 168 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 7. Detalhes e evidências

**sem** (20261004-094446-solicitacao-sem-ffa5): [pacote](../../../../../../restauracoes/20261004-094446-solicitacao-sem-ffa5/2026-10-04T09-44-46Z__solicitacao__opus__sem__rep-05__20261004-094446-solicitacao-sem-ffa5) · [run.json](../../../../../../restauracoes/20261004-094446-solicitacao-sem-ffa5/2026-10-04T09-44-46Z__solicitacao__opus__sem__rep-05__20261004-094446-solicitacao-sem-ffa5/run.json) · [findings.json](../../../../../../restauracoes/20261004-094446-solicitacao-sem-ffa5/2026-10-04T09-44-46Z__solicitacao__opus__sem__rep-05__20261004-094446-solicitacao-sem-ffa5/findings.json) · [isolation.json](../../../../../../restauracoes/20261004-094446-solicitacao-sem-ffa5/2026-10-04T09-44-46Z__solicitacao__opus__sem__rep-05__20261004-094446-solicitacao-sem-ffa5/isolation.json) · [eventos de ferramenta](../../../../../../restauracoes/20261004-094446-solicitacao-sem-ffa5/2026-10-04T09-44-46Z__solicitacao__opus__sem__rep-05__20261004-094446-solicitacao-sem-ffa5/tool-events.ndjson) · — · evidências: [#1](../../../../../../restauracoes/20261004-094446-solicitacao-sem-ffa5/2026-10-04T09-44-46Z__solicitacao__opus__sem__rep-05__20261004-094446-solicitacao-sem-ffa5/evidence/aderencia-oraculo.json) [#2](../../../../../../restauracoes/20261004-094446-solicitacao-sem-ffa5/2026-10-04T09-44-46Z__solicitacao__opus__sem__rep-05__20261004-094446-solicitacao-sem-ffa5/evidence/cliente.json) [#3](../../../../../../restauracoes/20261004-094446-solicitacao-sem-ffa5/2026-10-04T09-44-46Z__solicitacao__opus__sem__rep-05__20261004-094446-solicitacao-sem-ffa5/evidence/container-config.json) [#4](../../../../../../restauracoes/20261004-094446-solicitacao-sem-ffa5/2026-10-04T09-44-46Z__solicitacao__opus__sem__rep-05__20261004-094446-solicitacao-sem-ffa5/evidence/controles-positivos.json) [#5](../../../../../../restauracoes/20261004-094446-solicitacao-sem-ffa5/2026-10-04T09-44-46Z__solicitacao__opus__sem__rep-05__20261004-094446-solicitacao-sem-ffa5/evidence/mcp-config.json) [#6](../../../../../../restauracoes/20261004-094446-solicitacao-sem-ffa5/2026-10-04T09-44-46Z__solicitacao__opus__sem__rep-05__20261004-094446-solicitacao-sem-ffa5/evidence/preflight.json) [#7](../../../../../../restauracoes/20261004-094446-solicitacao-sem-ffa5/2026-10-04T09-44-46Z__solicitacao__opus__sem__rep-05__20261004-094446-solicitacao-sem-ffa5/evidence/prompt.txt) [#8](../../../../../../restauracoes/20261004-094446-solicitacao-sem-ffa5/2026-10-04T09-44-46Z__solicitacao__opus__sem__rep-05__20261004-094446-solicitacao-sem-ffa5/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../../restauracoes/20261004-094446-solicitacao-sem-ffa5/2026-10-04T09-44-46Z__solicitacao__opus__sem__rep-05__20261004-094446-solicitacao-sem-ffa5/evidence/raw/browser/inventory.json) [#10](../../../../../../restauracoes/20261004-094446-solicitacao-sem-ffa5/2026-10-04T09-44-46Z__solicitacao__opus__sem__rep-05__20261004-094446-solicitacao-sem-ffa5/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../../restauracoes/20261004-094446-solicitacao-sem-ffa5/2026-10-04T09-44-46Z__solicitacao__opus__sem__rep-05__20261004-094446-solicitacao-sem-ffa5/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../../restauracoes/20261004-094446-solicitacao-sem-ffa5/2026-10-04T09-44-46Z__solicitacao__opus__sem__rep-05__20261004-094446-solicitacao-sem-ffa5/evidence/raw/collector/events.ndjson) [#13](../../../../../../restauracoes/20261004-094446-solicitacao-sem-ffa5/2026-10-04T09-44-46Z__solicitacao__opus__sem__rep-05__20261004-094446-solicitacao-sem-ffa5/evidence/raw/collector/findings.json) [#14](../../../../../../restauracoes/20261004-094446-solicitacao-sem-ffa5/2026-10-04T09-44-46Z__solicitacao__opus__sem__rep-05__20261004-094446-solicitacao-sem-ffa5/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../../restauracoes/20261004-094446-solicitacao-sem-ffa5/2026-10-04T09-44-46Z__solicitacao__opus__sem__rep-05__20261004-094446-solicitacao-sem-ffa5/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../../restauracoes/20261004-094446-solicitacao-sem-ffa5/2026-10-04T09-44-46Z__solicitacao__opus__sem__rep-05__20261004-094446-solicitacao-sem-ffa5/evidence/raw/probe/probe.json) [#17](../../../../../../restauracoes/20261004-094446-solicitacao-sem-ffa5/2026-10-04T09-44-46Z__solicitacao__opus__sem__rep-05__20261004-094446-solicitacao-sem-ffa5/evidence/raw/probe/sonda-escrita-1791107110492.txt) [#18](../../../../../../restauracoes/20261004-094446-solicitacao-sem-ffa5/2026-10-04T09-44-46Z__solicitacao__opus__sem__rep-05__20261004-094446-solicitacao-sem-ffa5/evidence/raw/task/mcp.json) [#19](../../../../../../restauracoes/20261004-094446-solicitacao-sem-ffa5/2026-10-04T09-44-46Z__solicitacao__opus__sem__rep-05__20261004-094446-solicitacao-sem-ffa5/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../../restauracoes/20261004-094446-solicitacao-sem-ffa5/2026-10-04T09-44-46Z__solicitacao__opus__sem__rep-05__20261004-094446-solicitacao-sem-ffa5/evidence/logs/agent.log) [#2](../../../../../../restauracoes/20261004-094446-solicitacao-sem-ffa5/2026-10-04T09-44-46Z__solicitacao__opus__sem__rep-05__20261004-094446-solicitacao-sem-ffa5/evidence/logs/browser.log) [#3](../../../../../../restauracoes/20261004-094446-solicitacao-sem-ffa5/2026-10-04T09-44-46Z__solicitacao__opus__sem__rep-05__20261004-094446-solicitacao-sem-ffa5/evidence/logs/collector.log) [#4](../../../../../../restauracoes/20261004-094446-solicitacao-sem-ffa5/2026-10-04T09-44-46Z__solicitacao__opus__sem__rep-05__20261004-094446-solicitacao-sem-ffa5/evidence/logs/egress-provider.log) [#5](../../../../../../restauracoes/20261004-094446-solicitacao-sem-ffa5/2026-10-04T09-44-46Z__solicitacao__opus__sem__rep-05__20261004-094446-solicitacao-sem-ffa5/evidence/logs/egress-site.log) [#6](../../../../../../restauracoes/20261004-094446-solicitacao-sem-ffa5/2026-10-04T09-44-46Z__solicitacao__opus__sem__rep-05__20261004-094446-solicitacao-sem-ffa5/evidence/logs/probe.log) [#7](../../../../../../restauracoes/20261004-094446-solicitacao-sem-ffa5/2026-10-04T09-44-46Z__solicitacao__opus__sem__rep-05__20261004-094446-solicitacao-sem-ffa5/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (8; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| #forma-presencial | wcag:4.1.2 | O rádio 'Presencial' não tem nome acessível: o &lt;label&gt;Presencial&lt;/label&gt; não tem atributo for e não envolve o input \(a árvore de acessibilidade mostra 'radio' sem nome\). Clicar no texto 'Presencial' não marca a opção \(c… |
| .br-upload .upload-button | wcag:4.1.2 | O botão 'Selecione o arquivo' tem aria-hidden='true', mas é focável e operável \(abre o seletor de arquivos\). O input file #documentos tem display:none, então este botão é o único acesso ao upload e fica oculto para tecn… |
| .br-upload .upload-button | wcag:2.4.3 | O botão de upload tem tabindex='1'. O primeiro Tab depois do carregamento leva o foco a ele, no meio do formulário, antes do skiplink 'Ir para o conteúdo', do cabeçalho e dos campos anteriores. |
| #servico, #unidade | wcag:2.4.7 | Os campos 'Tipo de serviço' e 'Unidade de atendimento' não mostram indicador de foco: outline none, box-shadow none e borda inalterada \(regra '.campo-servico .br-input input:focus, ... \{ box-shadow: none; outline: none;… |
| #servico, #unidade | wcag:1.3.1 | Depois do envio com erro, os inputs ficam com aria-invalid='true', mas não têm aria-describedby; as mensagens 'Selecione o tipo de serviço.' e 'Selecione a unidade de atendimento.' não têm id e não ficam associadas ao c… |
| .mensagem-retorno.danger .close | incerta | Na mensagem de erro geral, o bloco .close é o primeiro filho e aparece à esquerda; o ícone de status fica no fim, à direita; o fechar é um &lt;div role='button' tabindex='0'&gt;. Na mensagem de sucesso da mesma tela, a ordem … |
| .acao-cancelar | wcag:2.4.3 | Depois de abrir o modal 'Descartar solicitação?' pelo botão Cancelar e fechá-lo com Escape, 'Continuar preenchendo' ou 'Fechar', o foco vai para o BODY \(document.activeElement = BODY\) em vez de voltar ao botão Cancelar. |
| .paginacao-anteriores a.page.active | wcag:1.3.1 | A página atual da paginação é indicada só visualmente \(classe 'active', fundo escuro\). O link não tem aria-current='page' nem outra indicação programática; a árvore de acessibilidade mostra 'Página 1', 'Página 2' e 'Pág… |

**com** (20261004-093251-solicitacao-com-f707): [pacote](../../../../../../restauracoes/20261004-093251-solicitacao-com-f707/2026-10-04T09-32-51Z__solicitacao__opus__com__rep-05__20261004-093251-solicitacao-com-f707) · [run.json](../../../../../../restauracoes/20261004-093251-solicitacao-com-f707/2026-10-04T09-32-51Z__solicitacao__opus__com__rep-05__20261004-093251-solicitacao-com-f707/run.json) · [findings.json](../../../../../../restauracoes/20261004-093251-solicitacao-com-f707/2026-10-04T09-32-51Z__solicitacao__opus__com__rep-05__20261004-093251-solicitacao-com-f707/findings.json) · [isolation.json](../../../../../../restauracoes/20261004-093251-solicitacao-com-f707/2026-10-04T09-32-51Z__solicitacao__opus__com__rep-05__20261004-093251-solicitacao-com-f707/isolation.json) · [eventos de ferramenta](../../../../../../restauracoes/20261004-093251-solicitacao-com-f707/2026-10-04T09-32-51Z__solicitacao__opus__com__rep-05__20261004-093251-solicitacao-com-f707/tool-events.ndjson) · — · evidências: [#1](../../../../../../restauracoes/20261004-093251-solicitacao-com-f707/2026-10-04T09-32-51Z__solicitacao__opus__com__rep-05__20261004-093251-solicitacao-com-f707/evidence/aderencia-oraculo.json) [#2](../../../../../../restauracoes/20261004-093251-solicitacao-com-f707/2026-10-04T09-32-51Z__solicitacao__opus__com__rep-05__20261004-093251-solicitacao-com-f707/evidence/cliente.json) [#3](../../../../../../restauracoes/20261004-093251-solicitacao-com-f707/2026-10-04T09-32-51Z__solicitacao__opus__com__rep-05__20261004-093251-solicitacao-com-f707/evidence/container-config.json) [#4](../../../../../../restauracoes/20261004-093251-solicitacao-com-f707/2026-10-04T09-32-51Z__solicitacao__opus__com__rep-05__20261004-093251-solicitacao-com-f707/evidence/controles-positivos.json) [#5](../../../../../../restauracoes/20261004-093251-solicitacao-com-f707/2026-10-04T09-32-51Z__solicitacao__opus__com__rep-05__20261004-093251-solicitacao-com-f707/evidence/mcp-config.json) [#6](../../../../../../restauracoes/20261004-093251-solicitacao-com-f707/2026-10-04T09-32-51Z__solicitacao__opus__com__rep-05__20261004-093251-solicitacao-com-f707/evidence/preflight.json) [#7](../../../../../../restauracoes/20261004-093251-solicitacao-com-f707/2026-10-04T09-32-51Z__solicitacao__opus__com__rep-05__20261004-093251-solicitacao-com-f707/evidence/prompt.txt) [#8](../../../../../../restauracoes/20261004-093251-solicitacao-com-f707/2026-10-04T09-32-51Z__solicitacao__opus__com__rep-05__20261004-093251-solicitacao-com-f707/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../../restauracoes/20261004-093251-solicitacao-com-f707/2026-10-04T09-32-51Z__solicitacao__opus__com__rep-05__20261004-093251-solicitacao-com-f707/evidence/raw/browser/inventory.json) [#10](../../../../../../restauracoes/20261004-093251-solicitacao-com-f707/2026-10-04T09-32-51Z__solicitacao__opus__com__rep-05__20261004-093251-solicitacao-com-f707/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../../restauracoes/20261004-093251-solicitacao-com-f707/2026-10-04T09-32-51Z__solicitacao__opus__com__rep-05__20261004-093251-solicitacao-com-f707/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../../restauracoes/20261004-093251-solicitacao-com-f707/2026-10-04T09-32-51Z__solicitacao__opus__com__rep-05__20261004-093251-solicitacao-com-f707/evidence/raw/collector/events.ndjson) [#13](../../../../../../restauracoes/20261004-093251-solicitacao-com-f707/2026-10-04T09-32-51Z__solicitacao__opus__com__rep-05__20261004-093251-solicitacao-com-f707/evidence/raw/collector/findings.json) [#14](../../../../../../restauracoes/20261004-093251-solicitacao-com-f707/2026-10-04T09-32-51Z__solicitacao__opus__com__rep-05__20261004-093251-solicitacao-com-f707/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../../restauracoes/20261004-093251-solicitacao-com-f707/2026-10-04T09-32-51Z__solicitacao__opus__com__rep-05__20261004-093251-solicitacao-com-f707/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../../restauracoes/20261004-093251-solicitacao-com-f707/2026-10-04T09-32-51Z__solicitacao__opus__com__rep-05__20261004-093251-solicitacao-com-f707/evidence/raw/oracle/inventory.json) [#17](../../../../../../restauracoes/20261004-093251-solicitacao-com-f707/2026-10-04T09-32-51Z__solicitacao__opus__com__rep-05__20261004-093251-solicitacao-com-f707/evidence/raw/oracle/oracle-telemetry.ndjson) [#18](../../../../../../restauracoes/20261004-093251-solicitacao-com-f707/2026-10-04T09-32-51Z__solicitacao__opus__com__rep-05__20261004-093251-solicitacao-com-f707/evidence/raw/oracle/tool-events.ndjson) [#19](../../../../../../restauracoes/20261004-093251-solicitacao-com-f707/2026-10-04T09-32-51Z__solicitacao__opus__com__rep-05__20261004-093251-solicitacao-com-f707/evidence/raw/probe/probe.json) [#20](../../../../../../restauracoes/20261004-093251-solicitacao-com-f707/2026-10-04T09-32-51Z__solicitacao__opus__com__rep-05__20261004-093251-solicitacao-com-f707/evidence/raw/probe/sonda-escrita-1791106399695.txt) [#21](../../../../../../restauracoes/20261004-093251-solicitacao-com-f707/2026-10-04T09-32-51Z__solicitacao__opus__com__rep-05__20261004-093251-solicitacao-com-f707/evidence/raw/task/mcp.json) [#22](../../../../../../restauracoes/20261004-093251-solicitacao-com-f707/2026-10-04T09-32-51Z__solicitacao__opus__com__rep-05__20261004-093251-solicitacao-com-f707/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../../restauracoes/20261004-093251-solicitacao-com-f707/2026-10-04T09-32-51Z__solicitacao__opus__com__rep-05__20261004-093251-solicitacao-com-f707/evidence/logs/agent.log) [#2](../../../../../../restauracoes/20261004-093251-solicitacao-com-f707/2026-10-04T09-32-51Z__solicitacao__opus__com__rep-05__20261004-093251-solicitacao-com-f707/evidence/logs/browser.log) [#3](../../../../../../restauracoes/20261004-093251-solicitacao-com-f707/2026-10-04T09-32-51Z__solicitacao__opus__com__rep-05__20261004-093251-solicitacao-com-f707/evidence/logs/collector.log) [#4](../../../../../../restauracoes/20261004-093251-solicitacao-com-f707/2026-10-04T09-32-51Z__solicitacao__opus__com__rep-05__20261004-093251-solicitacao-com-f707/evidence/logs/egress-provider.log) [#5](../../../../../../restauracoes/20261004-093251-solicitacao-com-f707/2026-10-04T09-32-51Z__solicitacao__opus__com__rep-05__20261004-093251-solicitacao-com-f707/evidence/logs/egress-site.log) [#6](../../../../../../restauracoes/20261004-093251-solicitacao-com-f707/2026-10-04T09-32-51Z__solicitacao__opus__com__rep-05__20261004-093251-solicitacao-com-f707/evidence/logs/oracle.log) [#7](../../../../../../restauracoes/20261004-093251-solicitacao-com-f707/2026-10-04T09-32-51Z__solicitacao__opus__com__rep-05__20261004-093251-solicitacao-com-f707/evidence/logs/probe.log) [#8](../../../../../../restauracoes/20261004-093251-solicitacao-com-f707/2026-10-04T09-32-51Z__solicitacao__opus__com__rep-05__20261004-093251-solicitacao-com-f707/evidence/logs/screens.log) · [binding](analysis-binding.com.json)

Achados enviados (12; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| header.barra-superior | ds-page-header | A Área de Cabeçalho é um &lt;header class=&quot;barra-superior&quot;&gt; próprio, só com a marca gov.br; não há .br-header nem &lt;br-header&gt; no documento. |
| body | ds-page-footer | O documento não tem Área de Rodapé: nenhum .br-footer, &lt;br-footer&gt; nem &lt;footer&gt;. |
| #forma-presencial | label | O radio 'Presencial' não tem nome acessível: o &lt;label&gt; 'Presencial' não tem for=&quot;forma-presencial&quot; \(os outros dois radios têm\), e clicar no texto não seleciona a opção. |
| .upload-button | aria-hidden-focus | O botão 'Selecione o arquivo' tem aria-hidden=&quot;true&quot;, mas recebe foco \(tabindex=1\). Como o input file #documentos está com display:none, o upload fica sem controle acessível para leitores de tela \(o botão aparece sem no… |
| .upload-button | wcag:2.4.3 | tabindex=&quot;1&quot; no botão de upload: o primeiro Tab após o carregamento vai para esse botão, no meio do formulário, antes do skip link 'Ir para o conteúdo', da marca e do breadcrumb. |
| .flatpickr-prev-month &gt; button, .flatpickr-next-month &gt; button | button-name | Os botões de mês anterior e mês seguinte do calendário contêm só um ícone &lt;i&gt; e não têm aria-label nem texto, por isso ficam sem nome acessível. |
| .flatpickr-day | tabindex | Com o calendário aberto, os 42 dias \(span.flatpickr-day\) recebem tabindex=&quot;1&quot;, alterando a ordem de tabulação de toda a página. |
| .mensagem-retorno.danger .close \[role=button\] | ds-structure-button-tag | O botão Fechar da Message de erro é um &lt;div class=&quot;br-button circle small&quot; role=&quot;button&quot; tabindex=&quot;0&quot;&gt;. Na Message de sucesso, o mesmo botão é um &lt;button&gt;. |
| .mensagem-retorno.danger .close | govbr-3.7.0-component-message-66b01a712e67 | Na Message de erro, o botão Fechar fica à esquerda \(x=201\) e o ícone semântico fa-times-circle fica à direita \(x=1019\). A ordem no DOM é close, content, icon. |
| #servico, #unidade | wcag:1.3.1 | Após o envio inválido, #servico e #unidade ficam com aria-invalid=&quot;true&quot;, mas sem aria-describedby; as mensagens 'Selecione o tipo de serviço.' e 'Selecione a unidade de atendimento.' não têm id e não estão associadas a… |
| .acao-cancelar | wcag:2.4.3 | Ao fechar o modal 'Descartar solicitação?' por Escape ou por 'Continuar preenchendo', o foco vai para &lt;body&gt; e não volta ao botão Cancelar que abriu o modal. |
| .dialogo-descarte | ds-token-color | O modal de descarte define color: #334333 \(rgb\(51,67,51\)\), herdado pelo título 'Descartar solicitação?'. Esse valor não pertence ao registro de tokens do DS. |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `ee2e6c69eb509902b7435e701fe5dd8687e3bf4c35190aa8653e768a32e3c38b`

