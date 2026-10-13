# Resumo da análise — Vistorias (vistorias)

Revisão 2 · substitui [a revisão anterior](../rev-001/summary.md) (sem alterar o pacote bruto) · gerado em 2026-10-12T18:56:55.162Z (UTC)

## 1. Status técnico

Análise: **pronta**

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261008-155808-vistorias-sem-9dbf | sem | rodou até o fim e o relatório foi aceito | — | aceita | final (revisão fechada) |
| 20261008-161315-vistorias-com-adea | com | rodou até o fim e o relatório foi aceito | — | aceita | final (revisão fechada) |

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
| Início (UTC) | 2026-10-08T15:58:34Z | 2026-10-08T16:13:40Z |
| Início (local) | 08/10/2026, 12:58:34 (horário de Brasília) | 08/10/2026, 13:13:40 (horário de Brasília) |
| Commit do harness | 7f189a9a0984459418e210aa1453acbee54e1160 | 7f189a9a0984459418e210aa1453acbee54e1160 |
| Repetição · tentativa | 6 · 1 | 6 · 1 |
| Campanha · slot · par | t7-tela-b-01 · p06-sem · p06 | t7-tela-b-01 · p06-com · p06 |

## 3. Resultado científico

| Medida | sem | com |
|---|---|---|
| Defeitos da referência confirmados | 33 de 102 | 33 de 102 |
| Recall (cobertura da referência) | 32,4% | 32,4% |
| Precisão sobre a referência — D/(D+F) | 91,7% | 94,3% |
| Precisão das afirmações — (D+N)/(D+N+F) | 97,1% | 98,1% |
| Afirmações incorretas (falsos positivos) | 3 | 2 |
| Defeitos novos corretos (fora da referência) | 66 | 71 |
| Duplicadas | 0 | 0 |
| Cartões pendentes de revisão | 0 | 0 |
| Maturidade | final (revisão fechada) | final (revisão fechada) |
| Entra na comparação principal | sim | sim |
| Achados enviados | 33 | 33 |

Recall e precisão só aparecem com a revisão fechada; enquanto houver cartão pendente ficam “indisponível” (nunca 0). “Achados enviados = 0” é um resultado válido (o agente olhou e não alegou nada); submissão recusada ou ausente é outra coisa.

Linha de base determinística (união das varreduras comparáveis), por unidade da referência:

| Unidades | sem | com |
|---|---|---|
| Agente e linha de base | 24 | 24 |
| Só o agente | 9 | 9 |
| Só a linha de base | 14 | 14 |
| Nenhum | 55 | 55 |
| Estado | provisório | provisório |

Linha de base: usada (lb-20261008-155745-vistorias-ae26d8)

## 4. Comparação com − sem

_n = 1 par, sem inferência. Nenhum braço é declarado melhor por contagem bruta._

Estado: final (as duas revisões fechadas)

- Diferença de defeitos confirmados (com − sem): 0
- Diferença de recall (com − sem): 0,0 p.p.
- Só o com detectou: B-03 (&lt;table&gt; &quot;# Nome da embarcação RAEP Data/Hora Vistoria Loc&quot;)
- Só o sem detectou: B-01 (&lt;pnip-root&gt; &quot;U Olá, Usuária de Teste, SUPERVISOR Programa Nac&quot;)
- Os dois detectaram: B-11 (&lt;span&gt; &quot;Cidade&quot;); B-17 (&lt;div#avatar-menu&gt; &quot;Usuária de Teste usuaria.teste@exemplo.invalid S&quot;); B-06 (&lt;input&gt;); B-06 (&lt;input&gt;); B-11 (&lt;span&gt; &quot;Status&quot;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-06 (&lt;input&gt;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-13 (&lt;span&gt; &quot;Nenhum filtro de data aplicado&quot;); B-06 (&lt;input&gt;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-19 (&lt;span&gt; &quot;Trocar unidade&quot;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-06 (&lt;input&gt;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-06 (&lt;input&gt;); B-06 (&lt;input&gt;); B-06 (&lt;input&gt;); B-11 (&lt;span&gt; &quot;Vistoriador&quot;); B-02 (&lt;h2&gt; &quot;Vistorias&quot;); B-06 (&lt;input&gt;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-16 (&lt;img&gt;); B-06 (&lt;input&gt;); B-26 (&lt;th&gt;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-25 (&lt;title&gt; &quot;PNIP&quot;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-06 (&lt;input&gt;); B-11 (&lt;span&gt; &quot;Porto&quot;)
- Nenhum detectou: B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-14 (&lt;span&gt; &quot;U&quot;); B-07 (&lt;button&gt; \[shadow\]); B-10 (&lt;button&gt; &quot;Exibir lista&quot;); B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-29 (&lt;button&gt; &quot;Exibir lista&quot;); B-20 (&lt;textarea&gt;); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-09 (&lt;button&gt; &quot;Buscar&quot;); B-08 (&lt;button&gt; \[shadow\]); B-15 (&lt;hr&gt;); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-23 (&lt;div&gt; &quot;0%&quot;); B-24 (&lt;div&gt; &quot;Trocar embarcação da vistoria Busque e selecione&quot;); B-05 (&lt;input#br-input-8&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-04 (&lt;input#search&gt; &quot;Pesquise aqui ...&quot; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-21 (&lt;h3&gt; &quot;Programa Nacional de Regularização de Embarcação&quot;); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-18 (&lt;button&gt; &quot;Sair&quot;); B-08 (&lt;button&gt; \[shadow\]); B-27 (&lt;div&gt; &quot;Trocar embarcação da vistoria Busque e selecione&quot;); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-22 (&lt;table&gt; &quot;Status Data Hora Visualizado 06/03/2026 08:21:00&quot;); B-28 (&lt;button&gt; &quot;Buscar&quot;); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-10 (&lt;button&gt; &quot;Exibir lista&quot;); B-08 (&lt;button&gt; \[shadow\]); B-29 (&lt;button&gt; &quot;Exibir lista&quot;); B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-05 (&lt;input#br-input-9&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\])

## 5. MCP e isolamento

| | sem | com |
|---|---|---|
| Isolamento | passed | passed |
| Oráculo anunciado ao cliente | não | sim |
| Oráculo (pacote) | nenhum | govbr-ds-validator-server 2.7.0 (combined) |
| Uso do oráculo | ausente (confirmado) | usado conforme o protocolo |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 25 (ponte MCP do oráculo) |
| Protocolo | unverified | unverified |
| Ferramentas anunciadas | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for, get\_ds\_rules, get\_design\_tokens, get\_emag\_rules, get\_pag… |
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_snapshot, browser\_console\_messages, browser\_take\_screenshot, browser\_press\_key, browser\_click, browser\_type, browser\_fill\_form, browser\_navigate\_back | browser\_navigate, browser\_evaluate, browser\_snapshot, scan\_page, get\_finding\_details, get\_ds\_rules, browser\_click, browser\_press\_key, browser\_take\_screenshot, verify\_finding, browser\_type, browser\_fill\_form, get\_component\_spec |
| Erros de ferramenta | 4 (tool-events.ndjson \(eventos com isError: true\)) | 4 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 8 aprovado(s); falhos: nenhum | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | nenhuma | nenhuma |

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 6. Custo e tempo

| | sem | com |
|---|---|---|
| Tempo de relógio (s) | 674 (runner) | 682 (runner) |
| Turnos | 142 (stream-json do cliente \(result.num\_turns\)) | 115 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 141 (ponte MCP) | 114 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 25 (ponte MCP do oráculo) |
| Tokens de entrada | 150 (stream-json do cliente \(result.usage\)) | 174 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 44275 (stream-json do cliente \(result.usage\)) | 44009 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 5870262 (stream-json do cliente \(result.usage\)) | 10060940 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 146831 (stream-json do cliente \(result.usage\)) | 197433 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 3.234800400000001 (estimativa do cliente \(result.total\_cost\_usd\)) | 4.4725280000000005 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 175 cartão(ões), estimativa 1050 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 7. Detalhes e evidências

**sem** (20261008-155808-vistorias-sem-9dbf): [pacote](../../../../../restauracoes/20261008-155808-vistorias-sem-9dbf/2026-10-08T15-58-08Z__vistorias__opus__sem__rep-06__20261008-155808-vistorias-sem-9dbf) · [run.json](../../../../../restauracoes/20261008-155808-vistorias-sem-9dbf/2026-10-08T15-58-08Z__vistorias__opus__sem__rep-06__20261008-155808-vistorias-sem-9dbf/run.json) · [findings.json](../../../../../restauracoes/20261008-155808-vistorias-sem-9dbf/2026-10-08T15-58-08Z__vistorias__opus__sem__rep-06__20261008-155808-vistorias-sem-9dbf/findings.json) · [isolation.json](../../../../../restauracoes/20261008-155808-vistorias-sem-9dbf/2026-10-08T15-58-08Z__vistorias__opus__sem__rep-06__20261008-155808-vistorias-sem-9dbf/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261008-155808-vistorias-sem-9dbf/2026-10-08T15-58-08Z__vistorias__opus__sem__rep-06__20261008-155808-vistorias-sem-9dbf/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261008-155808-vistorias-sem-9dbf/2026-10-08T15-58-08Z__vistorias__opus__sem__rep-06__20261008-155808-vistorias-sem-9dbf/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261008-155808-vistorias-sem-9dbf/2026-10-08T15-58-08Z__vistorias__opus__sem__rep-06__20261008-155808-vistorias-sem-9dbf/evidence/cliente.json) [#3](../../../../../restauracoes/20261008-155808-vistorias-sem-9dbf/2026-10-08T15-58-08Z__vistorias__opus__sem__rep-06__20261008-155808-vistorias-sem-9dbf/evidence/container-config.json) [#4](../../../../../restauracoes/20261008-155808-vistorias-sem-9dbf/2026-10-08T15-58-08Z__vistorias__opus__sem__rep-06__20261008-155808-vistorias-sem-9dbf/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261008-155808-vistorias-sem-9dbf/2026-10-08T15-58-08Z__vistorias__opus__sem__rep-06__20261008-155808-vistorias-sem-9dbf/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261008-155808-vistorias-sem-9dbf/2026-10-08T15-58-08Z__vistorias__opus__sem__rep-06__20261008-155808-vistorias-sem-9dbf/evidence/preflight.json) [#7](../../../../../restauracoes/20261008-155808-vistorias-sem-9dbf/2026-10-08T15-58-08Z__vistorias__opus__sem__rep-06__20261008-155808-vistorias-sem-9dbf/evidence/prompt.txt) [#8](../../../../../restauracoes/20261008-155808-vistorias-sem-9dbf/2026-10-08T15-58-08Z__vistorias__opus__sem__rep-06__20261008-155808-vistorias-sem-9dbf/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261008-155808-vistorias-sem-9dbf/2026-10-08T15-58-08Z__vistorias__opus__sem__rep-06__20261008-155808-vistorias-sem-9dbf/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261008-155808-vistorias-sem-9dbf/2026-10-08T15-58-08Z__vistorias__opus__sem__rep-06__20261008-155808-vistorias-sem-9dbf/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261008-155808-vistorias-sem-9dbf/2026-10-08T15-58-08Z__vistorias__opus__sem__rep-06__20261008-155808-vistorias-sem-9dbf/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261008-155808-vistorias-sem-9dbf/2026-10-08T15-58-08Z__vistorias__opus__sem__rep-06__20261008-155808-vistorias-sem-9dbf/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261008-155808-vistorias-sem-9dbf/2026-10-08T15-58-08Z__vistorias__opus__sem__rep-06__20261008-155808-vistorias-sem-9dbf/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261008-155808-vistorias-sem-9dbf/2026-10-08T15-58-08Z__vistorias__opus__sem__rep-06__20261008-155808-vistorias-sem-9dbf/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261008-155808-vistorias-sem-9dbf/2026-10-08T15-58-08Z__vistorias__opus__sem__rep-06__20261008-155808-vistorias-sem-9dbf/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261008-155808-vistorias-sem-9dbf/2026-10-08T15-58-08Z__vistorias__opus__sem__rep-06__20261008-155808-vistorias-sem-9dbf/evidence/raw/probe/probe.json) [#17](../../../../../restauracoes/20261008-155808-vistorias-sem-9dbf/2026-10-08T15-58-08Z__vistorias__opus__sem__rep-06__20261008-155808-vistorias-sem-9dbf/evidence/raw/probe/sonda-escrita-1791475114248.txt) [#18](../../../../../restauracoes/20261008-155808-vistorias-sem-9dbf/2026-10-08T15-58-08Z__vistorias__opus__sem__rep-06__20261008-155808-vistorias-sem-9dbf/evidence/raw/task/mcp.json) [#19](../../../../../restauracoes/20261008-155808-vistorias-sem-9dbf/2026-10-08T15-58-08Z__vistorias__opus__sem__rep-06__20261008-155808-vistorias-sem-9dbf/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261008-155808-vistorias-sem-9dbf/2026-10-08T15-58-08Z__vistorias__opus__sem__rep-06__20261008-155808-vistorias-sem-9dbf/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261008-155808-vistorias-sem-9dbf/2026-10-08T15-58-08Z__vistorias__opus__sem__rep-06__20261008-155808-vistorias-sem-9dbf/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261008-155808-vistorias-sem-9dbf/2026-10-08T15-58-08Z__vistorias__opus__sem__rep-06__20261008-155808-vistorias-sem-9dbf/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261008-155808-vistorias-sem-9dbf/2026-10-08T15-58-08Z__vistorias__opus__sem__rep-06__20261008-155808-vistorias-sem-9dbf/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261008-155808-vistorias-sem-9dbf/2026-10-08T15-58-08Z__vistorias__opus__sem__rep-06__20261008-155808-vistorias-sem-9dbf/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261008-155808-vistorias-sem-9dbf/2026-10-08T15-58-08Z__vistorias__opus__sem__rep-06__20261008-155808-vistorias-sem-9dbf/evidence/logs/probe.log) [#7](../../../../../restauracoes/20261008-155808-vistorias-sem-9dbf/2026-10-08T15-58-08Z__vistorias__opus__sem__rep-06__20261008-155808-vistorias-sem-9dbf/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (33; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| thead input\[type=&quot;checkbox&quot;\] | wcag:4.1.2 | Checkbox &quot;selecionar todos&quot; no cabeçalho da tabela sem nome acessível \(sem label, aria-label ou title\); exposto apenas como &quot;checkbox&quot;. |
| tbody input\[type=&quot;checkbox&quot;\] | wcag:4.1.2 | Checkboxes de seleção de cada linha sem nome acessível; leitor de tela anuncia só &quot;caixa de seleção&quot;. |
| tbody br-button\[icon=&quot;eye&quot;\] | wcag:4.1.2 | Botão de ícone &quot;olho&quot; \(abre a vistoria\) sem nome acessível: o &lt;button&gt; interno do shadow DOM tem aria-label=&quot;&quot; e nenhum texto ou title. |
| pnip-filter-panel span.br-tag.interaction | wcag:2.1.1 | Gatilhos de filtro Cidade, Porto, Vistoriador e Status são &lt;span&gt; com cursor:pointer, sem tabindex, role ou aria-expanded; não recebem foco por Tab e só abrem com mouse. |
| pnip-filter-panel .br-select .br-list .br-item | wcag:2.1.1 | Opções da lista de filtro aberta \(ex.: cidades\) são &lt;div&gt;/&lt;label&gt; sem input, role ou tabindex; nenhuma é focável ou selecionável por teclado. |
| pnip-filter-panel .br-tag:not\(.border-gray-50\) &gt; button | wcag:4.1.2 | Botão &quot;×&quot; da etiqueta de filtro aplicado \(ex.: &quot;Barra Nova&quot;\) sem nome acessível: só um ícone fa-times, sem texto, aria-label ou title. |
| .col.align-content-center &gt; .br-tag &gt; button | wcag:4.1.2 | Botão &quot;×&quot; da etiqueta &quot;Exibindo vistorias a partir de 25/03/2026&quot; sem nome acessível \(ícone com aria-hidden, sem texto/aria-label\). |
| br-input\[type=&quot;date&quot;\] | wcag:4.1.2 | Os dois campos de data \(inicial e final\) não têm nome acessível; os textos &quot;Data da vistoria:&quot; e &quot;até&quot; são &lt;span&gt; não associados aos inputs \(no shadow DOM, sem label/aria-label\). |
| br-input#search | wcag:3.3.2 | O campo de busca tem só placeholder \(&quot;Pesquise aqui ...&quot;\) como rótulo; não há label visível persistente e a indicação some ao digitar. |
| span.br-tag.primary-pastel-01 | wcag:1.4.3 | Texto &quot;Nenhum filtro de data aplicado&quot; branco rgb\(255,255,255\) sobre rgb\(197,212,235\), 14px/500: contraste de 1,50:1. Não é um controle desabilitado. |
| pnip-status-solicitacao-utils .bg-blue-40 &gt; div | wcag:1.4.3 | Selo de status &quot;Vistoria agendada&quot;: texto branco sobre rgb\(79,151,209\), 14px/500, contraste de 3,14:1. |
| pnip-status-solicitacao-utils .bg-secondary-06 &gt; div | wcag:1.4.3 | Selo de status &quot;Vistoria pré agendada&quot; \(aba Agendar\): texto branco sobre rgb\(136,136,136\), 14px/500, contraste de 3,54:1. |
| thead th:last-child | wcag:1.3.1 | O cabeçalho da coluna de ações \(&lt;th scope=&quot;col&quot;&gt;\) está vazio; as células de ações não têm cabeçalho que as identifique. |
| .tab-nav button | wcag:4.1.2 | Abas Agendar/Tramitando/Concluídos são &lt;button&gt; comuns sem role=&quot;tab&quot;, aria-selected ou aria-current; a aba ativa só é indicada pela classe &quot;active&quot; no &lt;li&gt; \(visual\). |
| nav.br-pagination.small &gt; ul &gt; li &gt; li | wcag:1.3.1 | Na paginação, cada link de página fica num &lt;li&gt; aninhado diretamente dentro de outro &lt;li&gt; \(li &gt; li\), estrutura de lista inválida; a árvore de acessibilidade mostra listitem dentro de listitem. |
| nav.br-pagination.small a.page.active | wcag:1.3.1 | A página atual da paginação é indicada só pela classe visual &quot;active&quot;; sem aria-current=&quot;page&quot;. |
| nav.br-pagination.small a.page | wcag:2.4.3 | Ao ativar um link de página pelo teclado \(Enter na página 3\), a lista é recarregada e o foco vai para &lt;body&gt;, perdendo a posição. |
| tbody br-button\[title\], br-button\[type=&quot;primary&quot;\]:not\(\[label\]\) | wcag:2.4.3 | Ao fechar os diálogos \(SweetAlert2\) de Atribuir vistoriador, Excluir vistoria, Notificar e Exportar Vistorias \(Esc ou Cancelar\), o foco vai para &lt;body&gt; em vez de voltar ao botão que abriu o diálogo. |
| #swal2-select | wcag:4.1.2 | No diálogo &quot;Atribuir Vistoriador&quot;, o &lt;select&gt; de vistoriadores não tem nome acessível; o texto &quot;Selecione um Vistoriador&quot; é a descrição do diálogo \(swal2-html-container\), não um label do campo. |
| #swal2-html-container input\[type=&quot;checkbox&quot;\] | wcag:1.3.1 | No diálogo &quot;Exportar Vistorias&quot;, os 5 checkboxes de status não estão agrupados: o título &quot;Status:&quot; é um &lt;strong&gt; solto, sem fieldset/legend ou role=&quot;group&quot; com nome. |
| pnip-propesc-vistorias .flex-column &gt; p | wcag:4.1.3 | Quando a busca não retorna resultados, a tabela é removida e aparece &quot;Não há vistorias para exibir.&quot; num &lt;p&gt; sem role=&quot;status&quot; ou aria-live; o contador aria-live da paginação também some, e o resultado não é anunciado. |
| #avatar-dropdown-trigger | wcag:2.5.3 | O botão do usuário mostra o texto &quot;Olá, Usuária de Teste, SUPERVISOR&quot;, mas o nome acessível é aria-label=&quot;Avatar com dropdown&quot; e não contém o texto visível. |
| #avatar-menu | wcag:4.1.2 | O painel do usuário tem role=&quot;menu&quot;, mas nenhum filho tem role=&quot;menuitem&quot; \(há só texto, span e um button\) e o padrão de teclado de menu não existe \(Esc não fecha, setas não navegam\). |
| #avatar-menu .text-center &gt; span | wcag:2.1.1 | &quot;Trocar unidade&quot; no menu do usuário é um &lt;span&gt; com cursor:pointer, sem tabindex nem role; não é alcançável por teclado. |
| #avatar-menu img | wcag:1.1.1 | O ícone do botão &quot;Sair&quot; \(&lt;img src=&quot;exit-icon.png&quot;&gt;\) não tem atributo alt. |
| br-header | wcag:1.1.1 | O logotipo gov.br no cabeçalho \(img no shadow DOM de br-header\) tem alt=&quot;logo&quot;, texto que não identifica a imagem. |
| br-header | incerta | O botão &quot;Menu&quot; \(hambúrguer, #navigation no shadow DOM\) tem data-target=&quot;#main-navigation&quot;, mas esse elemento não existe; clique ou Enter não abre nenhum menu e não há aria-expanded. |
| br-breadcrumb | wcag:4.1.2 | No breadcrumb \(shadow DOM\), o item Home é um &lt;button&gt; dentro de um &lt;a href=&quot;/portal-mpa&quot;&gt;: controles interativos aninhados que geram duas paradas de Tab seguidas para o mesmo destino. |
| br-breadcrumb | incerta | A trilha de navegação \(breadcrumb\) é &lt;div class=&quot;br-breadcrumb&quot;&gt; com &lt;ul&gt;, sem elemento &lt;nav&gt; nem aria-label; não aparece como região de navegação. |
| head &gt; title | wcag:2.4.2 | O título do documento é só &quot;PNIP&quot; e não identifica a página \(Vistorias\). |
| h2 | emag:1.3 | A página não tem &lt;h1&gt;; o único cabeçalho é &lt;h2&gt; &quot;Vistorias&quot;. |
| main | emag:1.5 | Não há âncoras \(links de salto\) para ir direto ao conteúdo, ao menu ou à busca: o primeiro elemento focável é o botão &quot;Menu&quot; do cabeçalho. |
| table.table | incerta | Em 1280×900, a tabela ultrapassa a largura disponível \(borda direita em x≈1364px; documentElement.scrollWidth=1364\); a coluna de ações fica parcialmente fora da área visível e exige rolagem horizontal da página. |

**com** (20261008-161315-vistorias-com-adea): [pacote](../../../../../restauracoes/20261008-161315-vistorias-com-adea/2026-10-08T16-13-15Z__vistorias__opus__com__rep-06__20261008-161315-vistorias-com-adea) · [run.json](../../../../../restauracoes/20261008-161315-vistorias-com-adea/2026-10-08T16-13-15Z__vistorias__opus__com__rep-06__20261008-161315-vistorias-com-adea/run.json) · [findings.json](../../../../../restauracoes/20261008-161315-vistorias-com-adea/2026-10-08T16-13-15Z__vistorias__opus__com__rep-06__20261008-161315-vistorias-com-adea/findings.json) · [isolation.json](../../../../../restauracoes/20261008-161315-vistorias-com-adea/2026-10-08T16-13-15Z__vistorias__opus__com__rep-06__20261008-161315-vistorias-com-adea/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261008-161315-vistorias-com-adea/2026-10-08T16-13-15Z__vistorias__opus__com__rep-06__20261008-161315-vistorias-com-adea/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261008-161315-vistorias-com-adea/2026-10-08T16-13-15Z__vistorias__opus__com__rep-06__20261008-161315-vistorias-com-adea/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261008-161315-vistorias-com-adea/2026-10-08T16-13-15Z__vistorias__opus__com__rep-06__20261008-161315-vistorias-com-adea/evidence/cliente.json) [#3](../../../../../restauracoes/20261008-161315-vistorias-com-adea/2026-10-08T16-13-15Z__vistorias__opus__com__rep-06__20261008-161315-vistorias-com-adea/evidence/container-config.json) [#4](../../../../../restauracoes/20261008-161315-vistorias-com-adea/2026-10-08T16-13-15Z__vistorias__opus__com__rep-06__20261008-161315-vistorias-com-adea/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261008-161315-vistorias-com-adea/2026-10-08T16-13-15Z__vistorias__opus__com__rep-06__20261008-161315-vistorias-com-adea/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261008-161315-vistorias-com-adea/2026-10-08T16-13-15Z__vistorias__opus__com__rep-06__20261008-161315-vistorias-com-adea/evidence/preflight.json) [#7](../../../../../restauracoes/20261008-161315-vistorias-com-adea/2026-10-08T16-13-15Z__vistorias__opus__com__rep-06__20261008-161315-vistorias-com-adea/evidence/prompt.txt) [#8](../../../../../restauracoes/20261008-161315-vistorias-com-adea/2026-10-08T16-13-15Z__vistorias__opus__com__rep-06__20261008-161315-vistorias-com-adea/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261008-161315-vistorias-com-adea/2026-10-08T16-13-15Z__vistorias__opus__com__rep-06__20261008-161315-vistorias-com-adea/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261008-161315-vistorias-com-adea/2026-10-08T16-13-15Z__vistorias__opus__com__rep-06__20261008-161315-vistorias-com-adea/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261008-161315-vistorias-com-adea/2026-10-08T16-13-15Z__vistorias__opus__com__rep-06__20261008-161315-vistorias-com-adea/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261008-161315-vistorias-com-adea/2026-10-08T16-13-15Z__vistorias__opus__com__rep-06__20261008-161315-vistorias-com-adea/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261008-161315-vistorias-com-adea/2026-10-08T16-13-15Z__vistorias__opus__com__rep-06__20261008-161315-vistorias-com-adea/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261008-161315-vistorias-com-adea/2026-10-08T16-13-15Z__vistorias__opus__com__rep-06__20261008-161315-vistorias-com-adea/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261008-161315-vistorias-com-adea/2026-10-08T16-13-15Z__vistorias__opus__com__rep-06__20261008-161315-vistorias-com-adea/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261008-161315-vistorias-com-adea/2026-10-08T16-13-15Z__vistorias__opus__com__rep-06__20261008-161315-vistorias-com-adea/evidence/raw/oracle/inventory.json) [#17](../../../../../restauracoes/20261008-161315-vistorias-com-adea/2026-10-08T16-13-15Z__vistorias__opus__com__rep-06__20261008-161315-vistorias-com-adea/evidence/raw/oracle/oracle-telemetry.ndjson) [#18](../../../../../restauracoes/20261008-161315-vistorias-com-adea/2026-10-08T16-13-15Z__vistorias__opus__com__rep-06__20261008-161315-vistorias-com-adea/evidence/raw/oracle/tool-events.ndjson) [#19](../../../../../restauracoes/20261008-161315-vistorias-com-adea/2026-10-08T16-13-15Z__vistorias__opus__com__rep-06__20261008-161315-vistorias-com-adea/evidence/raw/probe/probe.json) [#20](../../../../../restauracoes/20261008-161315-vistorias-com-adea/2026-10-08T16-13-15Z__vistorias__opus__com__rep-06__20261008-161315-vistorias-com-adea/evidence/raw/probe/sonda-escrita-1791476020074.txt) [#21](../../../../../restauracoes/20261008-161315-vistorias-com-adea/2026-10-08T16-13-15Z__vistorias__opus__com__rep-06__20261008-161315-vistorias-com-adea/evidence/raw/task/mcp.json) [#22](../../../../../restauracoes/20261008-161315-vistorias-com-adea/2026-10-08T16-13-15Z__vistorias__opus__com__rep-06__20261008-161315-vistorias-com-adea/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261008-161315-vistorias-com-adea/2026-10-08T16-13-15Z__vistorias__opus__com__rep-06__20261008-161315-vistorias-com-adea/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261008-161315-vistorias-com-adea/2026-10-08T16-13-15Z__vistorias__opus__com__rep-06__20261008-161315-vistorias-com-adea/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261008-161315-vistorias-com-adea/2026-10-08T16-13-15Z__vistorias__opus__com__rep-06__20261008-161315-vistorias-com-adea/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261008-161315-vistorias-com-adea/2026-10-08T16-13-15Z__vistorias__opus__com__rep-06__20261008-161315-vistorias-com-adea/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261008-161315-vistorias-com-adea/2026-10-08T16-13-15Z__vistorias__opus__com__rep-06__20261008-161315-vistorias-com-adea/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261008-161315-vistorias-com-adea/2026-10-08T16-13-15Z__vistorias__opus__com__rep-06__20261008-161315-vistorias-com-adea/evidence/logs/oracle.log) [#7](../../../../../restauracoes/20261008-161315-vistorias-com-adea/2026-10-08T16-13-15Z__vistorias__opus__com__rep-06__20261008-161315-vistorias-com-adea/evidence/logs/probe.log) [#8](../../../../../restauracoes/20261008-161315-vistorias-com-adea/2026-10-08T16-13-15Z__vistorias__opus__com__rep-06__20261008-161315-vistorias-com-adea/evidence/logs/screens.log) · [binding](analysis-binding.com.json)

Achados enviados (33; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| br-button\[icon=&quot;eye&quot;\] | button-name | Botão de ação com apenas o ícone &quot;eye&quot; \(visualizar vistoria\) em cada linha; o &lt;button&gt; interno tem aria-label=&quot;&quot; e nenhum texto, title ou aria-labelledby: nome acessível vazio. Ocorre também na aba Concluídos. |
| thead input\[type=&quot;checkbox&quot;\] | label | Checkbox &quot;selecionar todos&quot; no cabeçalho da tabela \(input nativo, sem br-checkbox\) sem label, aria-label ou aria-labelledby; o th que o contém também não tem texto. |
| tbody input\[type=&quot;checkbox&quot;\] | label | Checkboxes de seleção de cada linha sem label, aria-label nem aria-labelledby \(nome acessível vazio\). |
| br-input\[type=&quot;date&quot;\] | label | Os dois campos de data \(início e fim\) não têm rótulo programático; os textos &quot;Data da vistoria:&quot; e &quot;até&quot; são &lt;span&gt; soltos, sem associação ao input no shadow DOM. |
| pnip-status-solicitacao-utils .text-secondary-01 | color-contrast | Etiqueta de status &quot;Vistoria agendada&quot;: texto #ffffff sobre fundo #4f97d1, 14px normal, contraste 3,14:1 \(aba Tramitando\). |
| pnip-status-solicitacao-utils .text-secondary-01 | color-contrast | Na aba Agendar, etiqueta de status &quot;Vistoria pré agendada&quot;: texto #ffffff sobre fundo #888888, 14px normal, contraste 3,54:1. |
| .br-tag.primary-pastel-01 | color-contrast | Tag &quot;Nenhum filtro de data aplicado&quot;: texto #ffffff sobre fundo #c5d4eb, 14px normal, contraste 1,5:1. |
| .br-pagination li &gt; li | listitem | Na paginação, cada link de página é um &lt;li&gt; aninhado diretamente dentro de outro &lt;li&gt; \(sem &lt;ul&gt;/&lt;ol&gt; pai\). |
| pnip-propesc-vistorias h2 | page-has-heading-one | A página não tem h1; o título principal &quot;Vistorias&quot; está marcado como h2 e é o único cabeçalho. |
| html | ds-page-footer | Nenhum .br-footer nem &lt;br-footer&gt; no documento \(DOM e shadow roots abertos\). |
| html | ds-page-skip-link | Não há link de salto para o conteúdo; o primeiro link da página é &quot;Home&quot; do breadcrumb \(href=&quot;/portal-mpa&quot;\). |
| thead th:last-child | empty-table-header | Cabeçalho da coluna de ações \(última coluna\) vazio, sem texto acessível. |
| pnip-filter-panel .br-tag button.br-button.inverted | button-name | Após aplicar um filtro \(ex.: Cidade = Barra Nova\), o botão &quot;×&quot; que remove o filtro contém só o ícone fa-times, sem aria-label: nome acessível vazio. |
| div.col.align-content-center .br-tag button.br-button.inverted | button-name | Após preencher a data inicial, a tag &quot;Exibindo vistorias a partir de 25/03/2026&quot; tem botão &quot;×&quot; só com ícone, sem nome acessível. |
| #swal2-select | select-name | No diálogo &quot;Atribuir Vistoriador&quot; \(SweetAlert2\), o &lt;select&gt; de vistoriadores não tem label, aria-label nem aria-labelledby; &quot;Selecione um Vistoriador&quot; é texto solto. |
| #avatar-menu | aria-required-children | Menu do usuário aberto tem role=&quot;menu&quot;, mas seus filhos são div e button sem role=&quot;menuitem&quot;. |
| #avatar-menu button.dropdown-button img | image-alt | Imagem exit-icon.png do item &quot;Sair&quot; sem atributo alt. |
| pnip-filter-panel span.br-tag.interaction | wcag:2.1.1 | Os filtros &quot;Cidade&quot;, &quot;Porto&quot;, &quot;Vistoriador&quot; e &quot;Status&quot; são &lt;span class=&quot;br-tag&quot;&gt; com cursor:pointer e clique, sem tabindex, role nem aria-expanded \(tabIndex=-1\): não recebem foco pelo teclado e o dropdown só abre com mo… |
| pnip-filter-panel .br-list .br-item | wcag:2.1.1 | Opções do dropdown de filtro \(ex.: cidades\) são div.br-item com &lt;label&gt; sem input, sem tabindex nem role; só selecionáveis por clique. |
| #avatar-menu .text-center &gt; span | wcag:2.1.1 | &quot;Trocar unidade&quot; no menu do usuário é um &lt;span&gt; com cursor:pointer, sem tabindex nem role; Tab a partir do gatilho vai direto para &quot;Sair&quot;. |
| #avatar-dropdown-trigger | wcag:2.5.3 | O botão mostra o texto &quot;Olá, Usuária de Teste, SUPERVISOR&quot;, mas aria-label=&quot;Avatar com dropdown&quot; substitui o nome acessível, que não contém o texto visível. |
| .tab-nav .tab-item button | wcag:4.1.2 | As abas Agendar/Tramitando/Concluídos são &lt;button&gt; sem role=&quot;tab&quot; e sem aria-selected/aria-current; a aba ativa só é indicada pela classe &quot;active&quot; no li \(visual\). |
| .br-pagination a.page.active | wcag:1.3.1 | A página atual da paginação só é indicada pela classe &quot;active&quot;; o link não tem aria-current nem outro texto de estado, e o nome é só o número. |
| br-button\[title=&quot;Atribuir vistoriador&quot;\], br-button\[title=&quot;Excluir vistoria&quot;\] | wcag:2.4.3 | Ao abrir pelo teclado \(Enter\) os diálogos &quot;Atribuir Vistoriador&quot; ou &quot;Excluir Vistoria&quot; e fechá-los com Escape, o foco vai para &lt;body&gt;, e não para o botão que abriu o diálogo. |
| #swal2-html-container input\[type=&quot;checkbox&quot;\] | govbr-3.7.0-accessibility-global-11ffc5c577f6 | No diálogo &quot;Exportar Vistorias&quot;, as cinco opções de status são checkboxes sem fieldset/legend; o texto &quot;Status:&quot; é &lt;strong&gt; solto, não associado ao grupo. |
| div.flex-column.justify-content-center &gt; p | wcag:4.1.3 | Ao pesquisar sem resultado \(&quot;zzzz&quot; + Enter\), a tabela é substituída por &quot;Não há vistorias para exibir.&quot; sem região aria-live/role=status; o anúncio de resultados da paginação \(aria-live\) também desaparece. |
| title | govbr-3.7.0-accessibility-global-5d5a5f21d94b | Título do documento é apenas &quot;PNIP&quot;, sem identificar a página \(Vistorias\). |
| br-header | wcag:1.1.1 | A imagem do logotipo gov.br no cabeçalho \(shadow DOM de br-header\) tem alt=&quot;logo&quot;, que não descreve o conteúdo. |
| br-input#search | govbr-3.7.0-accessibility-global-b5fad7ce076d | O campo de pesquisa só tem placeholder &quot;Pesquise aqui ...&quot; como identificação; não há &lt;label&gt; associado. |
| table.table | govbr-3.7.0-accessibility-global-cd705eb5da2a | A tabela de vistorias não tem &lt;caption&gt; nem aria-label/aria-labelledby. |
| table.table | incerta | Com viewport de 1280px a tabela \(1272px\) estoura o contêiner .br-table \(1096px\) sem rolagem própria; o documento fica com scrollWidth 1364px \(rolagem horizontal da página\) e o botão &quot;Notificar solicitante&quot; da coluna de … |
| br-breadcrumb | incerta | No breadcrumb \(shadow DOM\), o item Home é um &lt;a href=&quot;/portal-mpa&quot;&gt; que contém um &lt;button&gt; \(conteúdo interativo aninhado\): dois pontos de foco para a mesma ação e papéis conflitantes \(link &quot;Home&quot; &gt; botão &quot;Home&quot;\). |
| tbody td:nth-child\(7\) | incerta | Na aba Concluídos, a coluna &quot;Situação&quot; mostra o valor bruto &quot;NAO COMPARECIMENTO&quot;, em caixa alta e sem acento. |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `cf550fc5ad421748622376e625d919cead68a9a362bc0fa12745c917c4d87f13`

