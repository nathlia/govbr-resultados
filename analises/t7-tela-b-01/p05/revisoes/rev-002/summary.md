# Resumo da análise — Vistorias (vistorias)

Revisão 2 · substitui [a revisão anterior](../rev-001/summary.md) (sem alterar o pacote bruto) · gerado em 2026-10-12T18:57:27.567Z (UTC)

## 1. Status técnico

Análise: **pronta**

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261008-122101-vistorias-sem-ee65 | sem | rodou até o fim e o relatório foi aceito | — | aceita | final (revisão fechada) |
| 20261008-120354-vistorias-com-563b | com | rodou até o fim e o relatório foi aceito | — | aceita | final (revisão fechada) |

Uma execução pode ter rodado bem e ainda estar esperando revisão: isso é normal. A pontuação só é final quando todos os cartões dela foram decididos.

## 2. Identidade

| | sem | com |
|---|---|---|
| Tela | Vistorias (vistorias @ govbr-telas-site-1a6e8daf3cdb) | Vistorias (vistorias @ govbr-telas-site-1a6e8daf3cdb) |
| Braço | sem oráculo | com oráculo |
| Modelo (família) | claude | claude |
| ID pedido | claude-opus-5-5 | claude-opus-5-5 |
| ID efetivo | claude-opus-5-5 (client-log) | claude-opus-5-5 (client-log) |
| Esforço | high | high |
| Cliente | claude-code 2.1.288 \(Claude Code\) | claude-code 2.1.288 \(Claude Code\) |
| Início (UTC) | 2026-10-08T12:21:25Z | 2026-10-08T12:04:19Z |
| Início (local) | 08/10/2026, 09:21:25 (horário de Brasília) | 08/10/2026, 09:04:19 (horário de Brasília) |
| Commit do harness | 7f189a9a0984459418e210aa1453acbee54e1160 | 7f189a9a0984459418e210aa1453acbee54e1160 |
| Repetição · tentativa | 5 · 1 | 5 · 1 |
| Campanha · slot · par | t7-tela-b-01 · p05-sem · p05 | t7-tela-b-01 · p05-com · p05 |

## 3. Resultado científico

| Medida | sem | com |
|---|---|---|
| Defeitos da referência confirmados | 33 de 102 | 33 de 102 |
| Recall (cobertura da referência) | 32,4% | 32,4% |
| Precisão sobre a referência — D/(D+F) | 94,3% | 94,3% |
| Precisão das afirmações — (D+N)/(D+N+F) | 97,1% | 98,6% |
| Afirmações incorretas (falsos positivos) | 2 | 2 |
| Defeitos novos corretos (fora da referência) | 34 | 107 |
| Duplicadas | 0 | 0 |
| Cartões pendentes de revisão | 0 | 0 |
| Maturidade | final (revisão fechada) | final (revisão fechada) |
| Entra na comparação principal | sim | sim |
| Achados enviados | 33 | 35 |

Recall e precisão só aparecem com a revisão fechada; enquanto houver cartão pendente ficam “indisponível” (nunca 0). “Achados enviados = 0” é um resultado válido (o agente olhou e não alegou nada); submissão recusada ou ausente é outra coisa.

Linha de base determinística (união das varreduras comparáveis), por unidade da referência:

| Unidades | sem | com |
|---|---|---|
| Agente e linha de base | 24 | 24 |
| Só o agente | 9 | 9 |
| Só a linha de base | 14 | 14 |
| Nenhum | 55 | 55 |
| Estado | provisório | provisório |

Linha de base: usada (lb-20261008-120301-vistorias-12b21f)

## 4. Comparação com − sem

_n = 1 par, sem inferência. Nenhum braço é declarado melhor por contagem bruta._

Estado: final (as duas revisões fechadas)

- Diferença de defeitos confirmados (com − sem): 0
- Diferença de recall (com − sem): 0,0 p.p.
- Só o com detectou: B-09 (&lt;button&gt; &quot;Buscar&quot;)
- Só o sem detectou: B-25 (&lt;title&gt; &quot;PNIP&quot;)
- Os dois detectaram: B-11 (&lt;span&gt; &quot;Cidade&quot;); B-17 (&lt;div#avatar-menu&gt; &quot;Usuária de Teste usuaria.teste@exemplo.invalid S&quot;); B-06 (&lt;input&gt;); B-06 (&lt;input&gt;); B-11 (&lt;span&gt; &quot;Status&quot;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-06 (&lt;input&gt;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-13 (&lt;span&gt; &quot;Nenhum filtro de data aplicado&quot;); B-06 (&lt;input&gt;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-19 (&lt;span&gt; &quot;Trocar unidade&quot;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-06 (&lt;input&gt;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-06 (&lt;input&gt;); B-06 (&lt;input&gt;); B-01 (&lt;pnip-root&gt; &quot;U Olá, Usuária de Teste, SUPERVISOR Programa Nac&quot;); B-06 (&lt;input&gt;); B-11 (&lt;span&gt; &quot;Vistoriador&quot;); B-02 (&lt;h2&gt; &quot;Vistorias&quot;); B-06 (&lt;input&gt;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-16 (&lt;img&gt;); B-06 (&lt;input&gt;); B-26 (&lt;th&gt;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-06 (&lt;input&gt;); B-11 (&lt;span&gt; &quot;Porto&quot;)
- Nenhum detectou: B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-14 (&lt;span&gt; &quot;U&quot;); B-07 (&lt;button&gt; \[shadow\]); B-10 (&lt;button&gt; &quot;Exibir lista&quot;); B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-29 (&lt;button&gt; &quot;Exibir lista&quot;); B-20 (&lt;textarea&gt;); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-15 (&lt;hr&gt;); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-23 (&lt;div&gt; &quot;0%&quot;); B-24 (&lt;div&gt; &quot;Trocar embarcação da vistoria Busque e selecione&quot;); B-05 (&lt;input#br-input-8&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-04 (&lt;input#search&gt; &quot;Pesquise aqui ...&quot; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-21 (&lt;h3&gt; &quot;Programa Nacional de Regularização de Embarcação&quot;); B-03 (&lt;table&gt; &quot;# Nome da embarcação RAEP Data/Hora Vistoria Loc&quot;); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-18 (&lt;button&gt; &quot;Sair&quot;); B-08 (&lt;button&gt; \[shadow\]); B-27 (&lt;div&gt; &quot;Trocar embarcação da vistoria Busque e selecione&quot;); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-22 (&lt;table&gt; &quot;Status Data Hora Visualizado 06/03/2026 08:21:00&quot;); B-28 (&lt;button&gt; &quot;Buscar&quot;); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-10 (&lt;button&gt; &quot;Exibir lista&quot;); B-08 (&lt;button&gt; \[shadow\]); B-29 (&lt;button&gt; &quot;Exibir lista&quot;); B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-05 (&lt;input#br-input-9&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\])

## 5. MCP e isolamento

| | sem | com |
|---|---|---|
| Isolamento | passed | passed |
| Oráculo anunciado ao cliente | não | sim |
| Oráculo (pacote) | nenhum | govbr-ds-validator-server 2.7.0 (combined) |
| Uso do oráculo | ausente (confirmado) | usado com erros |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 30 (ponte MCP do oráculo) |
| Protocolo | unverified | unverified |
| Ferramentas anunciadas | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for, get\_ds\_rules, get\_design\_tokens, get\_emag\_rules, get\_pag… |
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_snapshot, browser\_take\_screenshot, browser\_click, browser\_press\_key, browser\_navigate\_back, browser\_type | browser\_navigate, browser\_evaluate, browser\_snapshot, scan\_page, get\_finding\_details, browser\_click, browser\_press\_key, browser\_take\_screenshot, get\_ds\_rules, browser\_type, browser\_wait\_for |
| Erros de ferramenta | 5 (tool-events.ndjson \(eventos com isError: true\)) | 5 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 8 aprovado(s); falhos: nenhum | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | nenhuma | nenhuma |

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 6. Custo e tempo

| | sem | com |
|---|---|---|
| Tempo de relógio (s) | 724 (runner) | 799 (runner) |
| Turnos | 170 (stream-json do cliente \(result.num\_turns\)) | 147 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 169 (ponte MCP) | 146 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 30 (ponte MCP do oráculo) |
| Tokens de entrada | 144 (stream-json do cliente \(result.usage\)) | 166 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 50077 (stream-json do cliente \(result.usage\)) | 49617 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 6006967 (stream-json do cliente \(result.usage\)) | 9370528 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 156153 (stream-json do cliente \(result.usage\)) | 179319 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 3.4527333999999996 (estimativa do cliente \(result.total\_cost\_usd\)) | 4.301661599999999 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 177 cartão(ões), estimativa 1062 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 7. Detalhes e evidências

**sem** (20261008-122101-vistorias-sem-ee65): [pacote](../../../../../restauracoes/20261008-122101-vistorias-sem-ee65/2026-10-08T12-21-01Z__vistorias__opus__sem__rep-05__20261008-122101-vistorias-sem-ee65) · [run.json](../../../../../restauracoes/20261008-122101-vistorias-sem-ee65/2026-10-08T12-21-01Z__vistorias__opus__sem__rep-05__20261008-122101-vistorias-sem-ee65/run.json) · [findings.json](../../../../../restauracoes/20261008-122101-vistorias-sem-ee65/2026-10-08T12-21-01Z__vistorias__opus__sem__rep-05__20261008-122101-vistorias-sem-ee65/findings.json) · [isolation.json](../../../../../restauracoes/20261008-122101-vistorias-sem-ee65/2026-10-08T12-21-01Z__vistorias__opus__sem__rep-05__20261008-122101-vistorias-sem-ee65/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261008-122101-vistorias-sem-ee65/2026-10-08T12-21-01Z__vistorias__opus__sem__rep-05__20261008-122101-vistorias-sem-ee65/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261008-122101-vistorias-sem-ee65/2026-10-08T12-21-01Z__vistorias__opus__sem__rep-05__20261008-122101-vistorias-sem-ee65/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261008-122101-vistorias-sem-ee65/2026-10-08T12-21-01Z__vistorias__opus__sem__rep-05__20261008-122101-vistorias-sem-ee65/evidence/cliente.json) [#3](../../../../../restauracoes/20261008-122101-vistorias-sem-ee65/2026-10-08T12-21-01Z__vistorias__opus__sem__rep-05__20261008-122101-vistorias-sem-ee65/evidence/container-config.json) [#4](../../../../../restauracoes/20261008-122101-vistorias-sem-ee65/2026-10-08T12-21-01Z__vistorias__opus__sem__rep-05__20261008-122101-vistorias-sem-ee65/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261008-122101-vistorias-sem-ee65/2026-10-08T12-21-01Z__vistorias__opus__sem__rep-05__20261008-122101-vistorias-sem-ee65/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261008-122101-vistorias-sem-ee65/2026-10-08T12-21-01Z__vistorias__opus__sem__rep-05__20261008-122101-vistorias-sem-ee65/evidence/preflight.json) [#7](../../../../../restauracoes/20261008-122101-vistorias-sem-ee65/2026-10-08T12-21-01Z__vistorias__opus__sem__rep-05__20261008-122101-vistorias-sem-ee65/evidence/prompt.txt) [#8](../../../../../restauracoes/20261008-122101-vistorias-sem-ee65/2026-10-08T12-21-01Z__vistorias__opus__sem__rep-05__20261008-122101-vistorias-sem-ee65/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261008-122101-vistorias-sem-ee65/2026-10-08T12-21-01Z__vistorias__opus__sem__rep-05__20261008-122101-vistorias-sem-ee65/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261008-122101-vistorias-sem-ee65/2026-10-08T12-21-01Z__vistorias__opus__sem__rep-05__20261008-122101-vistorias-sem-ee65/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261008-122101-vistorias-sem-ee65/2026-10-08T12-21-01Z__vistorias__opus__sem__rep-05__20261008-122101-vistorias-sem-ee65/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261008-122101-vistorias-sem-ee65/2026-10-08T12-21-01Z__vistorias__opus__sem__rep-05__20261008-122101-vistorias-sem-ee65/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261008-122101-vistorias-sem-ee65/2026-10-08T12-21-01Z__vistorias__opus__sem__rep-05__20261008-122101-vistorias-sem-ee65/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261008-122101-vistorias-sem-ee65/2026-10-08T12-21-01Z__vistorias__opus__sem__rep-05__20261008-122101-vistorias-sem-ee65/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261008-122101-vistorias-sem-ee65/2026-10-08T12-21-01Z__vistorias__opus__sem__rep-05__20261008-122101-vistorias-sem-ee65/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261008-122101-vistorias-sem-ee65/2026-10-08T12-21-01Z__vistorias__opus__sem__rep-05__20261008-122101-vistorias-sem-ee65/evidence/raw/probe/probe.json) [#17](../../../../../restauracoes/20261008-122101-vistorias-sem-ee65/2026-10-08T12-21-01Z__vistorias__opus__sem__rep-05__20261008-122101-vistorias-sem-ee65/evidence/raw/probe/sonda-escrita-1791462084965.txt) [#18](../../../../../restauracoes/20261008-122101-vistorias-sem-ee65/2026-10-08T12-21-01Z__vistorias__opus__sem__rep-05__20261008-122101-vistorias-sem-ee65/evidence/raw/task/mcp.json) [#19](../../../../../restauracoes/20261008-122101-vistorias-sem-ee65/2026-10-08T12-21-01Z__vistorias__opus__sem__rep-05__20261008-122101-vistorias-sem-ee65/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261008-122101-vistorias-sem-ee65/2026-10-08T12-21-01Z__vistorias__opus__sem__rep-05__20261008-122101-vistorias-sem-ee65/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261008-122101-vistorias-sem-ee65/2026-10-08T12-21-01Z__vistorias__opus__sem__rep-05__20261008-122101-vistorias-sem-ee65/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261008-122101-vistorias-sem-ee65/2026-10-08T12-21-01Z__vistorias__opus__sem__rep-05__20261008-122101-vistorias-sem-ee65/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261008-122101-vistorias-sem-ee65/2026-10-08T12-21-01Z__vistorias__opus__sem__rep-05__20261008-122101-vistorias-sem-ee65/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261008-122101-vistorias-sem-ee65/2026-10-08T12-21-01Z__vistorias__opus__sem__rep-05__20261008-122101-vistorias-sem-ee65/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261008-122101-vistorias-sem-ee65/2026-10-08T12-21-01Z__vistorias__opus__sem__rep-05__20261008-122101-vistorias-sem-ee65/evidence/logs/probe.log) [#7](../../../../../restauracoes/20261008-122101-vistorias-sem-ee65/2026-10-08T12-21-01Z__vistorias__opus__sem__rep-05__20261008-122101-vistorias-sem-ee65/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (33; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| pnip-filter-panel span.br-tag.interaction.bg-pure-0 | wcag:2.1.1 | Os filtros &quot;Cidade&quot;, &quot;Porto&quot;, &quot;Vistoriador&quot; e &quot;Status&quot; são &lt;span class=&quot;br-tag interaction&quot;&gt; com cursor:pointer e handler de clique, sem tabindex. Percorrendo a página com Tab, o foco vai de &quot;Concluídos&quot; direto para o c… |
| pnip-filter-panel span.br-tag.interaction.bg-pure-0 | wcag:4.1.2 | Os acionadores de dropdown dos filtros não têm papel de controle \(span genérico\) nem estado: não há aria-expanded, e abrir ou fechar só troca o ícone fa-caret-down/fa-caret-up. |
| pnip-filter-panel .br-select .br-item | wcag:2.1.1 | As opções do dropdown de filtro \(por exemplo, &quot;Vistoria agendada&quot;, &quot;Vistoria preenchida&quot;, &quot;Não comparecimento&quot; em Status; cidades em Cidade\) são &lt;div class=&quot;br-item&quot;&gt;&lt;div class=&quot;br-radio&quot;&gt;&lt;label&gt;texto&lt;/label&gt;&lt;/div&gt;&lt;/div… |
| pnip-filter-panel span.br-tag &gt; button.br-button.inverted.circle | wcag:4.1.2 | Depois de aplicar o filtro Cidade = &quot;Barra Nova&quot;, a tag do filtro ativo tem um botão &quot;×&quot; para remover o filtro, com apenas &lt;i class=&quot;fas fa-times&quot;&gt; e sem aria-label, title ou texto. O nome acessível fica vazio. |
| table input\[type=&quot;checkbox&quot;\] | wcag:4.1.2 | Os checkboxes de seleção de linha e o de &quot;selecionar todos&quot; no cabeçalho são &lt;input type=&quot;checkbox&quot;&gt; sem label, aria-label ou title. A árvore de acessibilidade expõe &quot;checkbox&quot; sem nome. |
| tbody br-button\[icon=&quot;eye&quot;\] | wcag:4.1.2 | O botão de visualizar de cada linha \(ícone de olho\) não tem title nem aria-label \(o botão interno no shadow DOM tem aria-label=&quot;&quot;\). A árvore de acessibilidade expõe &quot;button&quot; sem nome. Os botões vizinhos têm nome pelo ti… |
| br-input#search | wcag:3.3.2 | O campo de busca da tabela não tem &lt;label&gt; nem aria-label; a única identificação é o placeholder &quot;Pesquise aqui ...&quot;, que some ao digitar. |
| br-input\[type=&quot;date&quot;\] | wcag:4.1.2 | Os dois campos de data \(inputs id br-input-8 e br-input-9 no shadow DOM\) não têm nome acessível. Os textos &quot;Data da vistoria:&quot; e &quot;até&quot; são &lt;span&gt; soltos, sem associação; a árvore expõe &quot;textbox&quot; sem nome. |
| span.br-tag.primary-pastel-01 | wcag:1.4.3 | O texto &quot;Nenhum filtro de data aplicado&quot; é branco rgb\(255,255,255\) sobre fundo rgb\(197,212,235\), com contraste de 1,50:1, em 14px e peso 500. |
| pnip-status-solicitacao-utils .bg-blue-40 &gt; .text-secondary-01 | wcag:1.4.3 | O badge de status &quot;Vistoria agendada&quot; tem texto branco sobre rgb\(79,151,209\), com contraste de 3,14:1, em 14px e peso 500. |
| pnip-status-solicitacao-utils .bg-secondary-06 &gt; .text-secondary-01 | wcag:1.4.3 | Na aba Agendar, o badge de status &quot;Vistoria pré agendada&quot; tem texto branco sobre rgb\(136,136,136\), com contraste de 3,54:1, em 14px e peso 500. |
| div.br-table &gt; table | incerta | A tabela tem 1272px de largura e termina em x=1364, além do contêiner .br-table \(1096px\), que tem overflow visível. O documento ganha rolagem horizontal \(scrollWidth 1364 &gt; 1280\), e a coluna de ações \(botão &quot;Notificar s… |
| thead th:last-child | incerta | O cabeçalho da coluna de ações \(&lt;th scope=&quot;col&quot;&gt;\) está vazio: a árvore expõe &quot;columnheader&quot; sem texto. |
| #swal2-select | wcag:4.1.2 | No modal &quot;Atribuir Vistoriador&quot;, o &lt;select id=&quot;swal2-select&quot;&gt; não tem label, aria-label nem aria-labelledby. O texto &quot;Selecione um Vistoriador&quot; está num div separado, e a árvore expõe &quot;combobox&quot; sem nome. |
| tbody tr:first-child br-button\[icon=&quot;user-plus&quot;\], tbody tr:first-child br-butto… | wcag:2.4.3 | Ao abrir pelo teclado \(Enter\) os modais &quot;Atribuir Vistoriador&quot;, &quot;Excluir Vistoria&quot; e &quot;Notificar Vistoria\(s\)?&quot; e fechá-los com Esc ou &quot;Cancelar&quot;, o foco vai para o &lt;body&gt; em vez de voltar ao botão que abriu o modal. |
| #total | wcag:2.4.3 | No seletor &quot;Exibir&quot; da paginação, escolher a opção 25 pelo teclado \(ArrowDown, ArrowDown, Enter\) fecha a lista e o foco vai para o &lt;body&gt;, em vez de voltar ao campo. |
| pnip-search-table-utils .search-bar button.br-button | wcag:2.4.3 | Com texto digitado na busca, o botão ao lado vira &quot;Limpar&quot; \(×\). Acioná-lo com Enter limpa a busca e troca o botão de volta por &quot;Buscar&quot;; o foco vai para o &lt;body&gt;. |
| div.col.align-content-center.px-1 &gt; span.br-tag.interaction &gt; button.br-button.… | wcag:4.1.2 | Depois de informar a data inicial, aparece a tag &quot;Exibindo vistorias a partir de 01/01/2026&quot; com um botão &quot;×&quot; que tem apenas &lt;i class=&quot;fas fa-times&quot; aria-hidden=&quot;true&quot;&gt;, sem aria-label, title ou texto. O nome acessível … |
| div.col.align-content-center.px-1 &gt; span.br-tag.interaction &gt; button.br-button.… | wcag:2.4.3 | Acionar com Enter o botão &quot;×&quot; da tag de filtro de data remove o filtro e a tag, e o foco vai para o &lt;body&gt;. |
| div.d-flex.flex-column.justify-content-center.align-items-center.mt-5 &gt; p | wcag:4.1.3 | Uma busca sem resultados \(&quot;Corz&quot;\) troca a tabela pela mensagem &quot;Não há vistorias para exibir.&quot;, que está num &lt;p&gt; fora de qualquer região aria-live ou role=status. A região aria-live da paginação também é removida, então… |
| #avatar-dropdown-trigger | wcag:2.5.3 | O botão do usuário mostra o texto &quot;Olá, Usuária de Teste, SUPERVISOR&quot;, mas tem aria-label=&quot;Avatar com dropdown&quot;, que substitui o texto visível no nome acessível. |
| #avatar-menu | wcag:1.3.1 | O painel do usuário tem role=&quot;menu&quot;, mas não contém nenhum elemento role=&quot;menuitem&quot;: os filhos são divs, spans e um &lt;button&gt; comum \(&quot;Sair&quot;\), com nome, e-mail e perfil. |
| #avatar-menu span.text-blue-vivid-60 | wcag:2.1.1 | Com o menu do usuário aberto, &quot;Trocar unidade&quot; é um &lt;span&gt; com cursor:pointer, sem tabindex nem role. O Tab sai do botão do usuário direto para &quot;Sair&quot;. |
| #avatar-menu button.dropdown-button img | wcag:1.1.1 | O ícone do botão &quot;Sair&quot; é &lt;img src=&quot;../../../assets/images/exit-icon.png&quot;&gt; sem atributo alt. |
| .tab-nav .tab-item.active &gt; button | wcag:1.3.1 | A aba ativa \(&quot;Tramitando&quot; ao carregar\) só aparece pela classe .active no &lt;li&gt; e pelo sublinhado visual. Os botões das abas não têm aria-selected, aria-current nem papel tab/tablist. |
| .br-pagination a.page.active | wcag:1.3.1 | O link da página atual \(&quot;1&quot;\) só se distingue pela classe .active, sem aria-current=&quot;page&quot;. Os links usam href=&quot;javascript:void\(0\)&quot;. |
| .br-pagination ul &gt; li &gt; li | wcag:1.3.1 | Na lista de páginas, cada número está num &lt;li&gt; aninhado direto dentro de outro &lt;li&gt; \(ul &gt; li &gt; li &gt; a\), sem &lt;ul&gt; intermediário. A estrutura de lista é inválida e a árvore expõe listitem dentro de listitem. |
| br-header | wcag:1.1.1 | O logotipo gov.br no cabeçalho \(img dentro do shadow DOM de br-header\) tem alt=&quot;logo&quot;, que não identifica a imagem. |
| br-header | incerta | O botão &quot;Menu&quot; \(#navigation, data-target=&quot;#main-navigation&quot;\) não faz nada quando acionado com Enter: nenhum painel abre e aria-expanded não muda. O elemento #main-navigation não existe no documento. |
| br-breadcrumb | wcag:4.1.2 | No breadcrumb \(shadow DOM\), o item Home é um &lt;a href=&quot;/portal-mpa&quot;&gt; que contém um &lt;button&gt; \(controle interativo aninhado em link\). |
| pnip-propesc-vistorias h2 | emag:1.3 | O único cabeçalho da página é &lt;h2&gt;Vistorias&lt;/h2&gt;; não existe &lt;h1&gt;. O título da plataforma no cabeçalho é um div. |
| title | wcag:2.4.2 | O título do documento é apenas &quot;PNIP&quot; e não muda com a tela \(continua &quot;PNIP&quot; na tela de agendar-vistoria\). |
| pnip-header | emag:1.5 | Não há link de salto para o conteúdo: o primeiro elemento focável com Tab é o botão &quot;Menu&quot; do cabeçalho, e não existe âncora para main nem para outro bloco. |

**com** (20261008-120354-vistorias-com-563b): [pacote](../../../../../restauracoes/20261008-120354-vistorias-com-563b/2026-10-08T12-03-54Z__vistorias__opus__com__rep-05__20261008-120354-vistorias-com-563b) · [run.json](../../../../../restauracoes/20261008-120354-vistorias-com-563b/2026-10-08T12-03-54Z__vistorias__opus__com__rep-05__20261008-120354-vistorias-com-563b/run.json) · [findings.json](../../../../../restauracoes/20261008-120354-vistorias-com-563b/2026-10-08T12-03-54Z__vistorias__opus__com__rep-05__20261008-120354-vistorias-com-563b/findings.json) · [isolation.json](../../../../../restauracoes/20261008-120354-vistorias-com-563b/2026-10-08T12-03-54Z__vistorias__opus__com__rep-05__20261008-120354-vistorias-com-563b/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261008-120354-vistorias-com-563b/2026-10-08T12-03-54Z__vistorias__opus__com__rep-05__20261008-120354-vistorias-com-563b/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261008-120354-vistorias-com-563b/2026-10-08T12-03-54Z__vistorias__opus__com__rep-05__20261008-120354-vistorias-com-563b/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261008-120354-vistorias-com-563b/2026-10-08T12-03-54Z__vistorias__opus__com__rep-05__20261008-120354-vistorias-com-563b/evidence/cliente.json) [#3](../../../../../restauracoes/20261008-120354-vistorias-com-563b/2026-10-08T12-03-54Z__vistorias__opus__com__rep-05__20261008-120354-vistorias-com-563b/evidence/container-config.json) [#4](../../../../../restauracoes/20261008-120354-vistorias-com-563b/2026-10-08T12-03-54Z__vistorias__opus__com__rep-05__20261008-120354-vistorias-com-563b/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261008-120354-vistorias-com-563b/2026-10-08T12-03-54Z__vistorias__opus__com__rep-05__20261008-120354-vistorias-com-563b/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261008-120354-vistorias-com-563b/2026-10-08T12-03-54Z__vistorias__opus__com__rep-05__20261008-120354-vistorias-com-563b/evidence/preflight.json) [#7](../../../../../restauracoes/20261008-120354-vistorias-com-563b/2026-10-08T12-03-54Z__vistorias__opus__com__rep-05__20261008-120354-vistorias-com-563b/evidence/prompt.txt) [#8](../../../../../restauracoes/20261008-120354-vistorias-com-563b/2026-10-08T12-03-54Z__vistorias__opus__com__rep-05__20261008-120354-vistorias-com-563b/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261008-120354-vistorias-com-563b/2026-10-08T12-03-54Z__vistorias__opus__com__rep-05__20261008-120354-vistorias-com-563b/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261008-120354-vistorias-com-563b/2026-10-08T12-03-54Z__vistorias__opus__com__rep-05__20261008-120354-vistorias-com-563b/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261008-120354-vistorias-com-563b/2026-10-08T12-03-54Z__vistorias__opus__com__rep-05__20261008-120354-vistorias-com-563b/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261008-120354-vistorias-com-563b/2026-10-08T12-03-54Z__vistorias__opus__com__rep-05__20261008-120354-vistorias-com-563b/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261008-120354-vistorias-com-563b/2026-10-08T12-03-54Z__vistorias__opus__com__rep-05__20261008-120354-vistorias-com-563b/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261008-120354-vistorias-com-563b/2026-10-08T12-03-54Z__vistorias__opus__com__rep-05__20261008-120354-vistorias-com-563b/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261008-120354-vistorias-com-563b/2026-10-08T12-03-54Z__vistorias__opus__com__rep-05__20261008-120354-vistorias-com-563b/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261008-120354-vistorias-com-563b/2026-10-08T12-03-54Z__vistorias__opus__com__rep-05__20261008-120354-vistorias-com-563b/evidence/raw/oracle/inventory.json) [#17](../../../../../restauracoes/20261008-120354-vistorias-com-563b/2026-10-08T12-03-54Z__vistorias__opus__com__rep-05__20261008-120354-vistorias-com-563b/evidence/raw/oracle/oracle-telemetry.ndjson) [#18](../../../../../restauracoes/20261008-120354-vistorias-com-563b/2026-10-08T12-03-54Z__vistorias__opus__com__rep-05__20261008-120354-vistorias-com-563b/evidence/raw/oracle/tool-events.ndjson) [#19](../../../../../restauracoes/20261008-120354-vistorias-com-563b/2026-10-08T12-03-54Z__vistorias__opus__com__rep-05__20261008-120354-vistorias-com-563b/evidence/raw/probe/probe.json) [#20](../../../../../restauracoes/20261008-120354-vistorias-com-563b/2026-10-08T12-03-54Z__vistorias__opus__com__rep-05__20261008-120354-vistorias-com-563b/evidence/raw/probe/sonda-escrita-1791461059035.txt) [#21](../../../../../restauracoes/20261008-120354-vistorias-com-563b/2026-10-08T12-03-54Z__vistorias__opus__com__rep-05__20261008-120354-vistorias-com-563b/evidence/raw/task/mcp.json) [#22](../../../../../restauracoes/20261008-120354-vistorias-com-563b/2026-10-08T12-03-54Z__vistorias__opus__com__rep-05__20261008-120354-vistorias-com-563b/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261008-120354-vistorias-com-563b/2026-10-08T12-03-54Z__vistorias__opus__com__rep-05__20261008-120354-vistorias-com-563b/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261008-120354-vistorias-com-563b/2026-10-08T12-03-54Z__vistorias__opus__com__rep-05__20261008-120354-vistorias-com-563b/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261008-120354-vistorias-com-563b/2026-10-08T12-03-54Z__vistorias__opus__com__rep-05__20261008-120354-vistorias-com-563b/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261008-120354-vistorias-com-563b/2026-10-08T12-03-54Z__vistorias__opus__com__rep-05__20261008-120354-vistorias-com-563b/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261008-120354-vistorias-com-563b/2026-10-08T12-03-54Z__vistorias__opus__com__rep-05__20261008-120354-vistorias-com-563b/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261008-120354-vistorias-com-563b/2026-10-08T12-03-54Z__vistorias__opus__com__rep-05__20261008-120354-vistorias-com-563b/evidence/logs/oracle.log) [#7](../../../../../restauracoes/20261008-120354-vistorias-com-563b/2026-10-08T12-03-54Z__vistorias__opus__com__rep-05__20261008-120354-vistorias-com-563b/evidence/logs/probe.log) [#8](../../../../../restauracoes/20261008-120354-vistorias-com-563b/2026-10-08T12-03-54Z__vistorias__opus__com__rep-05__20261008-120354-vistorias-com-563b/evidence/logs/screens.log) · [binding](analysis-binding.com.json)

Achados enviados (35; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| br-button\[icon=&quot;eye&quot;\] | button-name | Botões de ação com ícone de olho \(visualizar vistoria\) na coluna de ações não têm nome acessível: o &lt;button&gt; interno do br-button tem aria-label=&quot;&quot; e só contém ícone; o host não tem title nem label. |
| pnip-status-solicitacao-utils .bg-blue-40 &gt; .text-secondary-01 | color-contrast | Selo de status &quot;Vistoria agendada&quot; na aba Tramitando: texto #ffffff sobre fundo #4f97d1, 14px normal, contraste 3,14:1. |
| pnip-status-solicitacao-utils .bg-secondary-06 &gt; .text-secondary-01 | color-contrast | Selo de status &quot;Vistoria pré agendada&quot; na aba Agendar: texto #ffffff sobre fundo #888888, 14px normal, contraste 3,54:1. |
| span.br-tag.primary-pastel-01 | color-contrast | Tag &quot;Nenhum filtro de data aplicado&quot;: texto #ffffff sobre #c5d4eb, 14px, contraste 1,5:1 \(parece desabilitada, mas é texto informativo\). |
| thead th:last-child | empty-table-header | Cabeçalho da coluna de ações \(último th\) está vazio, sem texto acessível. |
| thead input\[type=&quot;checkbox&quot;\] | label | Caixa &quot;selecionar todas&quot; no cabeçalho da tabela não tem rótulo \(sem label, aria-label nem title\); por isso o th da coluna também fica sem texto acessível. |
| tbody input\[type=&quot;checkbox&quot;\] | label | Caixas de seleção das linhas não têm rótulo \(sem label, aria-label, aria-labelledby nem title\). |
| br-input\[type=&quot;date&quot;\] | label | Os dois campos de data \(input#br-input-8 e #br-input-9 no shadow DOM\) não têm rótulo programático; os textos &quot;Data da vistoria:&quot; e &quot;até&quot; são spans soltos sem associação. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] li &gt; li | listitem | Na paginação, cada link de página está em um &lt;li&gt; aninhado diretamente em outro &lt;li&gt; \(sem ul/ol pai\). |
| h2 | page-has-heading-one | A página não tem h1; o título principal &quot;Vistorias&quot; está marcado como h2 e é o único cabeçalho do conteúdo. |
| body | ds-page-footer | Não existe .br-footer nem &lt;br-footer&gt; no documento. |
| body | ds-page-skip-link | Não há link de salto para o conteúdo; o primeiro link da página é &quot;Home&quot; \(href=&quot;/portal-mpa&quot;\) do breadcrumb. |
| br-breadcrumb | ds-structure-breadcrumb-tag | O breadcrumb é renderizado como &lt;div class=&quot;br-breadcrumb&quot;&gt; no shadow root, sem &lt;nav&gt; nem landmark de navegação. |
| br-breadcrumb | wcag:4.1.2 | No breadcrumb \(shadow root\), o item Home é um &lt;a href=&quot;/portal-mpa&quot;&gt; que contém um &lt;button aria-label=&quot;&quot;&gt;: controles interativos aninhados que geram duas paradas de Tab \(&quot;A Home&quot; e &quot;BUTTON Home&quot;\). |
| pnip-filter-panel span.br-tag.interaction | wcag:2.1.1 | Os filtros &quot;Cidade&quot;, &quot;Porto&quot;, &quot;Vistoriador&quot; e &quot;Status&quot; são &lt;span class=&quot;br-tag interaction&quot;&gt; com cursor:pointer, tabIndex -1, sem role nem aria-expanded; abrem só por clique. Pressionando Tab a partir das abas, o foco v… |
| pnip-filter-panel .br-select .br-item label | wcag:2.1.1 | Com o filtro aberto, as opções \(ex.: &quot;Barra Nova&quot;\) são &lt;label&gt; dentro de div.br-radio sem nenhum input associado; não recebem foco nem têm papel de opção. |
| pnip-filter-panel span.br-tag.interaction &gt; button.inverted | button-name | Depois de aplicar um filtro, a tag &quot;Barra Nova&quot; tem o botão de remover \(button.br-button.inverted.circle, só ícone fa-times\) sem nome acessível. |
| .col.align-content-center &gt; span.br-tag.interaction &gt; button.inverted | wcag:4.1.2 | Depois de informar a data inicial, aparece a tag &quot;Exibindo vistorias a partir de 25/03/2026&quot; com o botão de remover \(button.br-button.inverted.circle, só ícone\) sem aria-label nem texto. |
| nav.tab-nav button | wcag:4.1.2 | As abas Agendar/Tramitando/Concluídos são &lt;button&gt; comuns; a aba ativa é indicada só pela classe &quot;active&quot; no li, sem role=&quot;tab&quot;, aria-selected nem aria-current. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] a.page.active | wcag:1.3.1 | A página atual da paginação é indicada só visualmente \(classe &quot;active&quot;\), sem aria-current=&quot;page&quot;. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] a.page | wcag:2.4.3 | Ao ativar o link &quot;2&quot; da paginação com Enter, a lista muda \(26–34 de 34\) e o foco vai para o body, saindo da paginação. |
| br-button\[title=&quot;Atribuir vistoriador&quot;\], br-button\[title=&quot;Excluir vistoria&quot;\], b… | wcag:2.4.3 | Abrindo pelo teclado os diálogos \(SweetAlert2\) de Atribuir vistoriador, Excluir vistoria ou Notificar e fechando com Esc, o foco vai para o body; o botão de origem continua no DOM \(isConnected=true\). |
| #swal2-select | select-name | No diálogo &quot;Atribuir Vistoriador&quot;, o &lt;select id=&quot;swal2-select&quot;&gt; não tem nome acessível; o texto &quot;Selecione um Vistoriador&quot; não está associado. |
| #avatar-menu | aria-required-children | O menu do usuário tem role=&quot;menu&quot;, mas contém divs e um &lt;button&gt; sem role=&quot;menuitem&quot; \(Sair\). |
| #avatar-menu | region | O conteúdo do menu do usuário aberto fica fora de qualquer landmark \(a área de login está fora do banner do br-header\). |
| #avatar-menu img | image-alt | A imagem exit-icon.png do botão &quot;Sair&quot; não tem alt. |
| #avatar-menu span.text-blue-vivid-60 | wcag:2.1.1 | &quot;Trocar unidade&quot; é um &lt;span&gt; com cursor:pointer e tabIndex -1 que navega para /portal-mpa ao clicar; Tab a partir do gatilho vai direto para &quot;Sair&quot;, pulando-o. |
| #avatar-menu | incerta | Com o menu do usuário \(role=&quot;menu&quot;\) aberto e o foco em &quot;Sair&quot;, Escape não fecha o menu \(aria-expanded continua &quot;true&quot;\). |
| br-header | incerta | O botão &quot;Menu&quot; \(#navigation no shadow do br-header, data-target=&quot;#main-navigation&quot;\) não faz nada ao ser acionado: não existe #main-navigation na página e o botão não tem aria-expanded. |
| table | incerta | Na janela de 1280 px, a tabela \(largura 1272 px, borda direita em 1364 px\) ultrapassa o contêiner e a página: documentElement.scrollWidth = 1364 &gt; 1280 e os botões &quot;Notificar&quot; da última coluna ficam parcialmente fora da… |
| td br-button\[icon\]:not\(\[label\]\) | govbr-3.7.0-component-button-4d7b5f978df1 | Os botões de ação das linhas \(atribuir, visualizar, excluir, notificar\) são br-button type=&quot;secondary&quot; \(classe &quot;secondary middle&quot;, 78×40 px\) só com ícone, sem rótulo visível e fora da variante circular. |
| br-input#search + button.br-button | govbr-3.7.0-component-input-3788829b08fe | A ação interna do campo de busca \(&quot;Buscar&quot; e, com texto, &quot;Limpar&quot;\) é um &lt;button class=&quot;br-button&quot;&gt; sem as variantes circle/small, posicionado sobre o input com margin-top:-38px, fora do br-input. |
| div.flex-column.align-items-center.mt-5 &gt; p | wcag:4.1.3 | Ao buscar um termo sem resultados \(&quot;qqqqq&quot;\), a tabela e a região aria-live da paginação somem e aparece &quot;Não há vistorias para exibir.&quot; em &lt;p&gt; sem role=&quot;status&quot;/aria-live; não há nenhuma região viva na página. |
| #avatar-menu &gt; button | ds-token-radius | Botão &quot;Sair&quot; do menu do usuário com border-radius 20px, fora da escala de raio do DS. |
| pnip-filter-panel button.br-button.secondary | ds-token-spacing | Botão &quot;Limpar Filtro&quot; com margin -5px 0 0 \(inline style\), fora da escala de espaçamento. |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `facb5cf2eb3ec25da99224c4fec30b8be99faca898cddba0d671b51d392c7f72`

