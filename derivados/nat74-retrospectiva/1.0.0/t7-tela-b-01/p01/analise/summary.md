# Resumo da análise — Vistorias (vistorias)

Revisão 1 · gerado em 2026-10-16T00:00:00Z (UTC)

## 1. Status técnico

Análise: **pronta**

Aviso: derivado retrospectivo nat74-retrospectiva-1.0.0: campanha congelada com flow-semantic-1.5.0, repreparada com flow-semantic-1.7.0 \(não substitui a análise oficial\)

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261006-005727-vistorias-sem-1fa6 | sem | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 37 cartão(ões), nenhum decidido |
| 20261006-011601-vistorias-com-940e | com | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 32 cartão(ões), nenhum decidido |

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
| Início (UTC) | 2026-10-06T00:57:54Z | 2026-10-06T01:16:27Z |
| Início (local) | 05/10/2026, 21:57:54 (horário de Brasília) | 05/10/2026, 22:16:27 (horário de Brasília) |
| Commit do harness | 7f189a9a0984459418e210aa1453acbee54e1160 | 7f189a9a0984459418e210aa1453acbee54e1160 |
| Repetição · tentativa | 1 · 1 | 1 · 1 |
| Campanha · slot · par | t7-tela-b-01 · p01-sem · p01 | t7-tela-b-01 · p01-com · p01 |

## 3. Resultado científico

| Medida | sem | com |
|---|---|---|
| Defeitos da referência confirmados | 0 de 102 (até agora) | 0 de 102 (até agora) |
| Recall (cobertura da referência) | indisponível | indisponível |
| Precisão sobre a referência — D/(D+F) | indisponível | indisponível |
| Precisão das afirmações — (D+N)/(D+N+F) | indisponível | indisponível |
| Afirmações incorretas (falsos positivos) | 0 | 0 |
| Defeitos novos corretos (fora da referência) | 0 | 0 |
| Duplicadas | 0 | 0 |
| Cartões pendentes de revisão | 37 | 32 |
| Maturidade | aguardando revisão — 37 cartão(ões), nenhum decidido | aguardando revisão — 32 cartão(ões), nenhum decidido |
| Entra na comparação principal | sim | sim |
| Achados enviados | 37 | 32 |

Recall e precisão só aparecem com a revisão fechada; enquanto houver cartão pendente ficam “indisponível” (nunca 0). “Achados enviados = 0” é um resultado válido (o agente olhou e não alegou nada); submissão recusada ou ausente é outra coisa.

Linha de base determinística (união das varreduras comparáveis), por unidade da referência:

| Unidades | sem | com |
|---|---|---|
| Agente e linha de base | 0 | 0 |
| Só o agente | 0 | 0 |
| Só a linha de base | 0 | 0 |
| Nenhum | 102 | 102 |
| Estado | provisório | provisório |

Linha de base: usada (lb-20261006-005700-vistorias-01133b)

## 4. Comparação com − sem

_n = 1 par, sem inferência. Nenhum braço é declarado melhor por contagem bruta._

Estado: provisória (há cartões pendentes em pelo menos um braço)

- Diferença de defeitos confirmados (com − sem): 0 (até agora)
- Diferença de recall (com − sem): indisponível (revisão aberta)
- Só o com detectou: nenhuma
- Só o sem detectou: nenhuma
- Os dois detectaram: nenhuma
- Nenhum detectou: B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-11 (&lt;span&gt; &quot;Cidade&quot;); B-17 (&lt;div#avatar-menu&gt; &quot;Usuária de Teste usuaria.teste@exemplo.invalid S&quot;); B-06 (&lt;input&gt;); B-06 (&lt;input&gt;); B-14 (&lt;span&gt; &quot;U&quot;); B-07 (&lt;button&gt; \[shadow\]); B-10 (&lt;button&gt; &quot;Exibir lista&quot;); B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-11 (&lt;span&gt; &quot;Status&quot;); B-08 (&lt;button&gt; \[shadow\]); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-08 (&lt;button&gt; \[shadow\]); B-06 (&lt;input&gt;); B-29 (&lt;button&gt; &quot;Exibir lista&quot;); B-20 (&lt;textarea&gt;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-13 (&lt;span&gt; &quot;Nenhum filtro de data aplicado&quot;); B-06 (&lt;input&gt;); B-07 (&lt;button&gt; \[shadow\]); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-08 (&lt;button&gt; \[shadow\]); B-19 (&lt;span&gt; &quot;Trocar unidade&quot;); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-09 (&lt;button&gt; &quot;Buscar&quot;); B-08 (&lt;button&gt; \[shadow\]); B-15 (&lt;hr&gt;); B-08 (&lt;button&gt; \[shadow\]); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-08 (&lt;button&gt; \[shadow\]); B-06 (&lt;input&gt;); B-23 (&lt;div&gt; &quot;0%&quot;); B-24 (&lt;div&gt; &quot;Trocar embarcação da vistoria Busque e selecione&quot;); B-05 (&lt;input#br-input-8&gt; \[shadow\]); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-06 (&lt;input&gt;); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-06 (&lt;input&gt;); B-01 (&lt;pnip-root&gt; &quot;U Olá, Usuária de Teste, SUPERVISOR Programa Nac&quot;); B-04 (&lt;input#search&gt; &quot;Pesquise aqui ...&quot; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-06 (&lt;input&gt;); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-11 (&lt;span&gt; &quot;Vistoriador&quot;); B-07 (&lt;button&gt; \[shadow\]); B-02 (&lt;h2&gt; &quot;Vistorias&quot;); B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-06 (&lt;input&gt;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-08 (&lt;button&gt; \[shadow\]); B-21 (&lt;h3&gt; &quot;Programa Nacional de Regularização de Embarcação&quot;); B-03 (&lt;table&gt; &quot;# Nome da embarcação RAEP Data/Hora Vistoria Loc&quot;); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-16 (&lt;img&gt;); B-08 (&lt;button&gt; \[shadow\]); B-18 (&lt;button&gt; &quot;Sair&quot;); B-08 (&lt;button&gt; \[shadow\]); B-27 (&lt;div&gt; &quot;Trocar embarcação da vistoria Busque e selecione&quot;); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-06 (&lt;input&gt;); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-26 (&lt;th&gt;); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-22 (&lt;table&gt; &quot;Status Data Hora Visualizado 06/03/2026 08:21:00&quot;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-28 (&lt;button&gt; &quot;Buscar&quot;); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-10 (&lt;button&gt; &quot;Exibir lista&quot;); B-25 (&lt;title&gt; &quot;PNIP&quot;); B-08 (&lt;button&gt; \[shadow\]); B-29 (&lt;button&gt; &quot;Exibir lista&quot;); B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-08 (&lt;button&gt; \[shadow\]); B-05 (&lt;input#br-input-9&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-06 (&lt;input&gt;); B-08 (&lt;button&gt; \[shadow\]); B-11 (&lt;span&gt; &quot;Porto&quot;)

## 5. MCP e isolamento

| | sem | com |
|---|---|---|
| Isolamento | passed | passed |
| Oráculo anunciado ao cliente | não | sim |
| Oráculo (pacote) | nenhum | govbr-ds-validator-server 2.7.0 (combined) |
| Uso do oráculo | ausente (confirmado) | usado conforme o protocolo |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 33 (ponte MCP do oráculo) |
| Protocolo | unverified | unverified |
| Ferramentas anunciadas | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for, get\_ds\_rules, get\_design\_tokens, get\_emag\_rules, get\_pag… |
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_snapshot, browser\_take\_screenshot, browser\_press\_key, browser\_click, browser\_type, browser\_navigate\_back, browser\_wait\_for | browser\_navigate, browser\_evaluate, browser\_snapshot, scan\_page, get\_finding\_details, browser\_click, browser\_press\_key, get\_ds\_rules, browser\_type, browser\_fill\_form, browser\_take\_screenshot, verify\_finding, get\_page\_rules |
| Erros de ferramenta | 4 (tool-events.ndjson \(eventos com isError: true\)) | 4 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 8 aprovado(s); falhos: nenhum | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | nenhuma | nenhuma |
| Registro de inspeção | registro indisponível \(pacote findings.v1, anterior ao registro de inspeção\) — não é zero cobertura | registro indisponível \(pacote findings.v1, anterior ao registro de inspeção\) — não é zero cobertura |

O registro de inspeção é declaração do agente sobre o inventário que ele mesmo descobriu; “com evento de ferramenta” só diz que o identificador citado aparece num evento gravado. Não pontua nem decide elegibilidade, e a cobertura da página continua desconhecida.

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 6. Custo e tempo

| | sem | com |
|---|---|---|
| Tempo de relógio (s) | 832 (runner) | 662 (runner) |
| Turnos | 137 (stream-json do cliente \(result.num\_turns\)) | 135 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 136 (ponte MCP) | 133 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 33 (ponte MCP do oráculo) |
| Tokens de entrada | 146 (stream-json do cliente \(result.usage\)) | 154 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 52475 (stream-json do cliente \(result.usage\)) | 46769 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 5793701 (stream-json do cliente \(result.usage\)) | 9154462 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 151136 (stream-json do cliente \(result.usage\)) | 206223 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 3.4179122000000004 (estimativa do cliente \(result.total\_cost\_usd\)) | 4.4166723999999995 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 178 cartão(ões), estimativa 1068 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 7. Detalhes e evidências

**sem** (20261006-005727-vistorias-sem-1fa6): [pacote](../../../../../../restauracoes/20261006-005727-vistorias-sem-1fa6/2026-10-06T00-57-27Z__vistorias__opus__sem__rep-01__20261006-005727-vistorias-sem-1fa6) · [run.json](../../../../../../restauracoes/20261006-005727-vistorias-sem-1fa6/2026-10-06T00-57-27Z__vistorias__opus__sem__rep-01__20261006-005727-vistorias-sem-1fa6/run.json) · [findings.json](../../../../../../restauracoes/20261006-005727-vistorias-sem-1fa6/2026-10-06T00-57-27Z__vistorias__opus__sem__rep-01__20261006-005727-vistorias-sem-1fa6/findings.json) · [isolation.json](../../../../../../restauracoes/20261006-005727-vistorias-sem-1fa6/2026-10-06T00-57-27Z__vistorias__opus__sem__rep-01__20261006-005727-vistorias-sem-1fa6/isolation.json) · [eventos de ferramenta](../../../../../../restauracoes/20261006-005727-vistorias-sem-1fa6/2026-10-06T00-57-27Z__vistorias__opus__sem__rep-01__20261006-005727-vistorias-sem-1fa6/tool-events.ndjson) · — · evidências: [#1](../../../../../../restauracoes/20261006-005727-vistorias-sem-1fa6/2026-10-06T00-57-27Z__vistorias__opus__sem__rep-01__20261006-005727-vistorias-sem-1fa6/evidence/aderencia-oraculo.json) [#2](../../../../../../restauracoes/20261006-005727-vistorias-sem-1fa6/2026-10-06T00-57-27Z__vistorias__opus__sem__rep-01__20261006-005727-vistorias-sem-1fa6/evidence/cliente.json) [#3](../../../../../../restauracoes/20261006-005727-vistorias-sem-1fa6/2026-10-06T00-57-27Z__vistorias__opus__sem__rep-01__20261006-005727-vistorias-sem-1fa6/evidence/container-config.json) [#4](../../../../../../restauracoes/20261006-005727-vistorias-sem-1fa6/2026-10-06T00-57-27Z__vistorias__opus__sem__rep-01__20261006-005727-vistorias-sem-1fa6/evidence/controles-positivos.json) [#5](../../../../../../restauracoes/20261006-005727-vistorias-sem-1fa6/2026-10-06T00-57-27Z__vistorias__opus__sem__rep-01__20261006-005727-vistorias-sem-1fa6/evidence/mcp-config.json) [#6](../../../../../../restauracoes/20261006-005727-vistorias-sem-1fa6/2026-10-06T00-57-27Z__vistorias__opus__sem__rep-01__20261006-005727-vistorias-sem-1fa6/evidence/preflight.json) [#7](../../../../../../restauracoes/20261006-005727-vistorias-sem-1fa6/2026-10-06T00-57-27Z__vistorias__opus__sem__rep-01__20261006-005727-vistorias-sem-1fa6/evidence/prompt.txt) [#8](../../../../../../restauracoes/20261006-005727-vistorias-sem-1fa6/2026-10-06T00-57-27Z__vistorias__opus__sem__rep-01__20261006-005727-vistorias-sem-1fa6/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../../restauracoes/20261006-005727-vistorias-sem-1fa6/2026-10-06T00-57-27Z__vistorias__opus__sem__rep-01__20261006-005727-vistorias-sem-1fa6/evidence/raw/browser/inventory.json) [#10](../../../../../../restauracoes/20261006-005727-vistorias-sem-1fa6/2026-10-06T00-57-27Z__vistorias__opus__sem__rep-01__20261006-005727-vistorias-sem-1fa6/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../../restauracoes/20261006-005727-vistorias-sem-1fa6/2026-10-06T00-57-27Z__vistorias__opus__sem__rep-01__20261006-005727-vistorias-sem-1fa6/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../../restauracoes/20261006-005727-vistorias-sem-1fa6/2026-10-06T00-57-27Z__vistorias__opus__sem__rep-01__20261006-005727-vistorias-sem-1fa6/evidence/raw/collector/events.ndjson) [#13](../../../../../../restauracoes/20261006-005727-vistorias-sem-1fa6/2026-10-06T00-57-27Z__vistorias__opus__sem__rep-01__20261006-005727-vistorias-sem-1fa6/evidence/raw/collector/findings.json) [#14](../../../../../../restauracoes/20261006-005727-vistorias-sem-1fa6/2026-10-06T00-57-27Z__vistorias__opus__sem__rep-01__20261006-005727-vistorias-sem-1fa6/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../../restauracoes/20261006-005727-vistorias-sem-1fa6/2026-10-06T00-57-27Z__vistorias__opus__sem__rep-01__20261006-005727-vistorias-sem-1fa6/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../../restauracoes/20261006-005727-vistorias-sem-1fa6/2026-10-06T00-57-27Z__vistorias__opus__sem__rep-01__20261006-005727-vistorias-sem-1fa6/evidence/raw/probe/probe.json) [#17](../../../../../../restauracoes/20261006-005727-vistorias-sem-1fa6/2026-10-06T00-57-27Z__vistorias__opus__sem__rep-01__20261006-005727-vistorias-sem-1fa6/evidence/raw/probe/sonda-escrita-1791248273747.txt) [#18](../../../../../../restauracoes/20261006-005727-vistorias-sem-1fa6/2026-10-06T00-57-27Z__vistorias__opus__sem__rep-01__20261006-005727-vistorias-sem-1fa6/evidence/raw/task/mcp.json) [#19](../../../../../../restauracoes/20261006-005727-vistorias-sem-1fa6/2026-10-06T00-57-27Z__vistorias__opus__sem__rep-01__20261006-005727-vistorias-sem-1fa6/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../../restauracoes/20261006-005727-vistorias-sem-1fa6/2026-10-06T00-57-27Z__vistorias__opus__sem__rep-01__20261006-005727-vistorias-sem-1fa6/evidence/logs/agent.log) [#2](../../../../../../restauracoes/20261006-005727-vistorias-sem-1fa6/2026-10-06T00-57-27Z__vistorias__opus__sem__rep-01__20261006-005727-vistorias-sem-1fa6/evidence/logs/browser.log) [#3](../../../../../../restauracoes/20261006-005727-vistorias-sem-1fa6/2026-10-06T00-57-27Z__vistorias__opus__sem__rep-01__20261006-005727-vistorias-sem-1fa6/evidence/logs/collector.log) [#4](../../../../../../restauracoes/20261006-005727-vistorias-sem-1fa6/2026-10-06T00-57-27Z__vistorias__opus__sem__rep-01__20261006-005727-vistorias-sem-1fa6/evidence/logs/egress-provider.log) [#5](../../../../../../restauracoes/20261006-005727-vistorias-sem-1fa6/2026-10-06T00-57-27Z__vistorias__opus__sem__rep-01__20261006-005727-vistorias-sem-1fa6/evidence/logs/egress-site.log) [#6](../../../../../../restauracoes/20261006-005727-vistorias-sem-1fa6/2026-10-06T00-57-27Z__vistorias__opus__sem__rep-01__20261006-005727-vistorias-sem-1fa6/evidence/logs/probe.log) [#7](../../../../../../restauracoes/20261006-005727-vistorias-sem-1fa6/2026-10-06T00-57-27Z__vistorias__opus__sem__rep-01__20261006-005727-vistorias-sem-1fa6/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (37; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| br-button\[icon=&quot;eye&quot;\] | wcag:4.1.2 | Botão de ação só com ícone fa-eye: o &lt;button&gt; no shadow DOM tem aria-label=&quot;&quot; e não tem title nem texto; a árvore de acessibilidade o expõe como &quot;button&quot; sem nome \(10 linhas na aba Tramitando; também na aba Concluídos\). |
| thead input\[type=&quot;checkbox&quot;\] | wcag:4.1.2 | Checkbox de &quot;selecionar todas&quot; no cabeçalho da tabela sem label, aria-label nem title: exposta como &quot;checkbox&quot; sem nome. |
| tbody input\[type=&quot;checkbox&quot;\] | wcag:4.1.2 | Checkboxes de seleção de linha sem label, aria-label nem title: expostas como &quot;checkbox&quot; sem nome. |
| br-input\[type=&quot;date&quot;\] | wcag:1.3.1 | Os dois campos de data \(input type=date no shadow DOM, ids br-input-8/br-input-9\) não têm nome acessível; os textos visíveis &quot;Data da vistoria:&quot; e &quot;até&quot; são &lt;span&gt; sem associação \(snapshot: &quot;textbox&quot; sem nome\). |
| br-input#search | incerta | O campo de busca só tem o placeholder &quot;Pesquise aqui ...&quot; como rótulo; não há &lt;label&gt; visível, e o texto some ao digitar. |
| pnip-filter-panel span.br-tag.interaction | wcag:2.1.1 | Os gatilhos de filtro Cidade, Porto, Vistoriador e Status são &lt;span&gt; com cursor:pointer e handler de clique, sem tabindex nem role. A navegação por Tab vai de &quot;Concluídos&quot; direto para o campo de busca, sem passar por el… |
| pnip-filter-panel .br-select .br-radio label | wcag:2.1.1 | As opções da lista de filtro \(ex.: Areia Branca do Leste, Barra Nova\) são &lt;label&gt; dentro de div.br-radio, sem input associado; nenhum elemento da lista é focalizável \(0 elementos com tabindex&gt;=0\) nem tem papel de opção. |
| pnip-filter-panel .br-tag button.br-button.circle | wcag:4.1.2 | Com um filtro aplicado \(tag &quot;Barra Nova&quot;\), o botão de remover só contém o ícone &lt;i class=&quot;fas fa-times&quot;&gt; sem aria-hidden, sem texto, aria-label ou title: botão sem nome acessível. |
| .tab-panel .align-content-center .br-tag button.br-button.circle | wcag:4.1.2 | Com filtro de data aplicado, aparece a tag &quot;Exibindo vistorias até 30/03/2026&quot; com um botão &quot;×&quot; \(só ícone fa-times aria-hidden\) sem texto, aria-label ou title: botão sem nome acessível. |
| pnip-status-solicitacao-utils .bg-blue-40 &gt; .text-secondary-01 | wcag:1.4.3 | Selo de status &quot;Vistoria agendada&quot;: texto branco rgb\(255,255,255\) sobre rgb\(79,151,209\), 14px peso 500, contraste 3,14:1. |
| pnip-status-solicitacao-utils .bg-secondary-06 &gt; .text-secondary-01 | wcag:1.4.3 | Na aba Agendar, selo &quot;Vistoria pré agendada&quot;: texto branco sobre rgb\(136,136,136\), 14px peso 500, contraste 3,54:1. |
| span.br-tag.primary-pastel-01 | wcag:1.4.3 | Tag informativa &quot;Nenhum filtro de data aplicado&quot;: texto branco sobre rgb\(197,212,235\), 14px peso 500, contraste 1,50:1. Não é um controle desabilitado. |
| .br-tab .tab-item.active &gt; button | wcag:4.1.2 | A aba ativa \(&quot;Tramitando&quot;, depois &quot;Agendar&quot;/&quot;Concluídos&quot;\) só é indicada pela classe CSS &quot;active&quot; no &lt;li&gt;. Os botões das abas não têm role=tab, aria-selected nem aria-current, e o leitor de tela não recebe o estado de se… |
| #avatar-dropdown-trigger | wcag:2.5.3 | O botão do usuário mostra o texto &quot;Olá, Usuária de Teste, SUPERVISOR&quot;, mas aria-label=&quot;Avatar com dropdown&quot; substitui esse texto no nome acessível, que não contém o rótulo visível. |
| br-header | wcag:1.1.1 | A imagem do logotipo gov.br no shadow DOM de br-header tem alt=&quot;logo&quot;, texto que não identifica a marca. |
| br-header | incerta | O botão &quot;Menu&quot; \(#navigation no shadow DOM de br-header, data-target=&quot;#main-navigation&quot;\) não abre nenhum conteúdo ao ser acionado por clique ou Enter. O alvo #main-navigation não existe no documento e o botão não tem ari… |
| br-breadcrumb | wcag:4.1.2 | No breadcrumb, o item Home é um &lt;a href=&quot;/portal-mpa&quot;&gt; que contém um &lt;button class=&quot;br-button circle&quot;&gt; \(controle interativo aninhado; a árvore mostra link &quot;Home&quot; &gt; button &quot;Home&quot;\). |
| br-breadcrumb | ds:breadcrumb | O breadcrumb é renderizado como div.br-breadcrumb &gt; ul, sem elemento &lt;nav&gt; nem aria-label, e não aparece como região de navegação. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] &gt; ul &gt; li &gt; li | wcag:1.3.1 | Na paginação, cada número de página fica num &lt;li&gt; aninhado diretamente em outro &lt;li&gt; \(listitem &gt; listitem\), estrutura de lista inválida. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] a.page.active | wcag:1.3.1 | A página atual só é indicada pela classe &quot;active&quot;; o link não tem aria-current=&quot;page&quot;. Os links usam href=&quot;javascript:void\(0\)&quot;. |
| #avatar-menu | wcag:1.3.1 | O painel do usuário tem role=&quot;menu&quot;, mas nenhum descendente tem role=&quot;menuitem&quot; \(contém texto, um span &quot;Trocar unidade&quot; e um button &quot;Sair&quot;\). |
| #avatar-menu span.text-blue-vivid-60 | wcag:2.1.1 | Com o painel do usuário aberto, &quot;Trocar unidade&quot; é um &lt;span&gt; com cursor:pointer \(tabIndex -1, sem role\). O Tab a partir do botão do avatar vai direto para &quot;Sair&quot;. |
| #avatar-menu button.dropdown-button img | wcag:1.1.1 | A imagem decorativa exit-icon.png no botão &quot;Sair&quot; não tem atributo alt. |
| #avatar-menu | incerta | Com o painel do usuário aberto, Esc não o fecha: aria-expanded continua &quot;true&quot; e o painel segue visível. |
| br-button\[type=&quot;primary&quot;\], tbody br-button\[icon=&quot;trash&quot;\], tbody br-button\[icon=… | wcag:2.4.3 | Ao fechar os diálogos SweetAlert2 abertos por &quot;Exportar Vistorias&quot;, &quot;Excluir vistoria&quot;, &quot;Notificar solicitante da vistoria&quot; e &quot;Atribuir vistoriador&quot; \(com Esc ou Cancelar\), o foco vai para &lt;body&gt;, e não para o botão que … |
| #swal2-select | wcag:4.1.2 | No diálogo &quot;Atribuir Vistoriador&quot;, o &lt;select id=&quot;swal2-select&quot;&gt; com a lista de vistoriadores não tem label, aria-label nem aria-labelledby. O texto &quot;Selecione um Vistoriador&quot; só descreve o diálogo \(aria-describedby\). |
| .swal2-html-container input\[type=&quot;checkbox&quot;\] | wcag:1.3.1 | No diálogo &quot;Exportar Vistorias&quot;, as 5 checkboxes de status ficam sob um texto &quot;Status:&quot; em &lt;strong&gt;, sem fieldset/legend nem role=group associando o grupo à instrução. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] a.page, #total | wcag:2.4.3 | Ao ativar pelo teclado o link da página &quot;2&quot; \(Enter\) e ao escolher &quot;25&quot; no seletor &quot;Exibir&quot; \(setas + Enter\), a paginação é re-renderizada e o foco vai para &lt;body&gt;. |
| .br-table tbody | wcag:2.2.2 | A tabela se atualiza sozinha: &quot;Última atualização&quot; avança \(09:37 → 09:38 → 09:39\) e as linhas &lt;tr&gt; são substituídas \(MutationObserver registrou a troca sem interação\). Não há controle para pausar ou desligar. Com o foco… |
| pnip-propesc-vistorias &gt; div.p-5 &gt; div.flex-column &gt; p | wcag:4.1.3 | Quando a busca não retorna resultados, a mensagem &quot;Não há vistorias para exibir.&quot; aparece num &lt;p&gt; fora de qualquer região viva. A região aria-live da paginação é removida nesse estado \(0 elementos com aria-live\). |
| head &gt; title | wcag:2.4.2 | O título do documento é apenas &quot;PNIP&quot; e não muda entre telas; não identifica a página &quot;Vistorias&quot;. |
| h2.text-blue-vivid-60 | emag:1.3 | O título principal da página, &quot;Vistorias&quot;, é um &lt;h2&gt;; a página não tem nenhum &lt;h1&gt;. |
| main | emag:1.5 | Não há atalhos/âncoras para saltar blocos \(0 links com href=&quot;#...&quot;\); o primeiro elemento focalizável é o botão &quot;Menu&quot; do cabeçalho. |
| .br-table &gt; table | emag:3.9 | A tabela de vistorias não tem &lt;caption&gt;, aria-label nem aria-labelledby. |
| thead th:nth-child\(4\) | emag:3.12 | O cabeçalho da coluna usa a sigla &quot;RAEP&quot; sem expansão \(nenhum &lt;abbr&gt;, title ou texto explicativo na página\). |
| .br-table &gt; table | incerta | Em 1280×900 a tabela \(largura 1272px\) ultrapassa o contêiner .br-table \(1096px, overflow visível\) e termina em x=1364. O documento fica com rolagem horizontal \(scrollWidth 1364\) e a coluna de ações aparece cortada na bo… |
| tbody td:nth-child\(7\) | incerta | Na aba Concluídos, a coluna &quot;Situação&quot; mostra valores crus de enumeração em caixa alta e sem acentos: &quot;NAO COMPARECIMENTO&quot;, &quot;NAO ADEQUADA&quot;, &quot;ADEQUADA&quot;. |

**com** (20261006-011601-vistorias-com-940e): [pacote](../../../../../../restauracoes/20261006-011601-vistorias-com-940e/2026-10-06T01-16-01Z__vistorias__opus__com__rep-01__20261006-011601-vistorias-com-940e) · [run.json](../../../../../../restauracoes/20261006-011601-vistorias-com-940e/2026-10-06T01-16-01Z__vistorias__opus__com__rep-01__20261006-011601-vistorias-com-940e/run.json) · [findings.json](../../../../../../restauracoes/20261006-011601-vistorias-com-940e/2026-10-06T01-16-01Z__vistorias__opus__com__rep-01__20261006-011601-vistorias-com-940e/findings.json) · [isolation.json](../../../../../../restauracoes/20261006-011601-vistorias-com-940e/2026-10-06T01-16-01Z__vistorias__opus__com__rep-01__20261006-011601-vistorias-com-940e/isolation.json) · [eventos de ferramenta](../../../../../../restauracoes/20261006-011601-vistorias-com-940e/2026-10-06T01-16-01Z__vistorias__opus__com__rep-01__20261006-011601-vistorias-com-940e/tool-events.ndjson) · — · evidências: [#1](../../../../../../restauracoes/20261006-011601-vistorias-com-940e/2026-10-06T01-16-01Z__vistorias__opus__com__rep-01__20261006-011601-vistorias-com-940e/evidence/aderencia-oraculo.json) [#2](../../../../../../restauracoes/20261006-011601-vistorias-com-940e/2026-10-06T01-16-01Z__vistorias__opus__com__rep-01__20261006-011601-vistorias-com-940e/evidence/cliente.json) [#3](../../../../../../restauracoes/20261006-011601-vistorias-com-940e/2026-10-06T01-16-01Z__vistorias__opus__com__rep-01__20261006-011601-vistorias-com-940e/evidence/container-config.json) [#4](../../../../../../restauracoes/20261006-011601-vistorias-com-940e/2026-10-06T01-16-01Z__vistorias__opus__com__rep-01__20261006-011601-vistorias-com-940e/evidence/controles-positivos.json) [#5](../../../../../../restauracoes/20261006-011601-vistorias-com-940e/2026-10-06T01-16-01Z__vistorias__opus__com__rep-01__20261006-011601-vistorias-com-940e/evidence/mcp-config.json) [#6](../../../../../../restauracoes/20261006-011601-vistorias-com-940e/2026-10-06T01-16-01Z__vistorias__opus__com__rep-01__20261006-011601-vistorias-com-940e/evidence/preflight.json) [#7](../../../../../../restauracoes/20261006-011601-vistorias-com-940e/2026-10-06T01-16-01Z__vistorias__opus__com__rep-01__20261006-011601-vistorias-com-940e/evidence/prompt.txt) [#8](../../../../../../restauracoes/20261006-011601-vistorias-com-940e/2026-10-06T01-16-01Z__vistorias__opus__com__rep-01__20261006-011601-vistorias-com-940e/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../../restauracoes/20261006-011601-vistorias-com-940e/2026-10-06T01-16-01Z__vistorias__opus__com__rep-01__20261006-011601-vistorias-com-940e/evidence/raw/browser/inventory.json) [#10](../../../../../../restauracoes/20261006-011601-vistorias-com-940e/2026-10-06T01-16-01Z__vistorias__opus__com__rep-01__20261006-011601-vistorias-com-940e/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../../restauracoes/20261006-011601-vistorias-com-940e/2026-10-06T01-16-01Z__vistorias__opus__com__rep-01__20261006-011601-vistorias-com-940e/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../../restauracoes/20261006-011601-vistorias-com-940e/2026-10-06T01-16-01Z__vistorias__opus__com__rep-01__20261006-011601-vistorias-com-940e/evidence/raw/collector/events.ndjson) [#13](../../../../../../restauracoes/20261006-011601-vistorias-com-940e/2026-10-06T01-16-01Z__vistorias__opus__com__rep-01__20261006-011601-vistorias-com-940e/evidence/raw/collector/findings.json) [#14](../../../../../../restauracoes/20261006-011601-vistorias-com-940e/2026-10-06T01-16-01Z__vistorias__opus__com__rep-01__20261006-011601-vistorias-com-940e/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../../restauracoes/20261006-011601-vistorias-com-940e/2026-10-06T01-16-01Z__vistorias__opus__com__rep-01__20261006-011601-vistorias-com-940e/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../../restauracoes/20261006-011601-vistorias-com-940e/2026-10-06T01-16-01Z__vistorias__opus__com__rep-01__20261006-011601-vistorias-com-940e/evidence/raw/oracle/inventory.json) [#17](../../../../../../restauracoes/20261006-011601-vistorias-com-940e/2026-10-06T01-16-01Z__vistorias__opus__com__rep-01__20261006-011601-vistorias-com-940e/evidence/raw/oracle/oracle-telemetry.ndjson) [#18](../../../../../../restauracoes/20261006-011601-vistorias-com-940e/2026-10-06T01-16-01Z__vistorias__opus__com__rep-01__20261006-011601-vistorias-com-940e/evidence/raw/oracle/tool-events.ndjson) [#19](../../../../../../restauracoes/20261006-011601-vistorias-com-940e/2026-10-06T01-16-01Z__vistorias__opus__com__rep-01__20261006-011601-vistorias-com-940e/evidence/raw/probe/probe.json) [#20](../../../../../../restauracoes/20261006-011601-vistorias-com-940e/2026-10-06T01-16-01Z__vistorias__opus__com__rep-01__20261006-011601-vistorias-com-940e/evidence/raw/probe/sonda-escrita-1791249386753.txt) [#21](../../../../../../restauracoes/20261006-011601-vistorias-com-940e/2026-10-06T01-16-01Z__vistorias__opus__com__rep-01__20261006-011601-vistorias-com-940e/evidence/raw/task/mcp.json) [#22](../../../../../../restauracoes/20261006-011601-vistorias-com-940e/2026-10-06T01-16-01Z__vistorias__opus__com__rep-01__20261006-011601-vistorias-com-940e/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../../restauracoes/20261006-011601-vistorias-com-940e/2026-10-06T01-16-01Z__vistorias__opus__com__rep-01__20261006-011601-vistorias-com-940e/evidence/logs/agent.log) [#2](../../../../../../restauracoes/20261006-011601-vistorias-com-940e/2026-10-06T01-16-01Z__vistorias__opus__com__rep-01__20261006-011601-vistorias-com-940e/evidence/logs/browser.log) [#3](../../../../../../restauracoes/20261006-011601-vistorias-com-940e/2026-10-06T01-16-01Z__vistorias__opus__com__rep-01__20261006-011601-vistorias-com-940e/evidence/logs/collector.log) [#4](../../../../../../restauracoes/20261006-011601-vistorias-com-940e/2026-10-06T01-16-01Z__vistorias__opus__com__rep-01__20261006-011601-vistorias-com-940e/evidence/logs/egress-provider.log) [#5](../../../../../../restauracoes/20261006-011601-vistorias-com-940e/2026-10-06T01-16-01Z__vistorias__opus__com__rep-01__20261006-011601-vistorias-com-940e/evidence/logs/egress-site.log) [#6](../../../../../../restauracoes/20261006-011601-vistorias-com-940e/2026-10-06T01-16-01Z__vistorias__opus__com__rep-01__20261006-011601-vistorias-com-940e/evidence/logs/oracle.log) [#7](../../../../../../restauracoes/20261006-011601-vistorias-com-940e/2026-10-06T01-16-01Z__vistorias__opus__com__rep-01__20261006-011601-vistorias-com-940e/evidence/logs/probe.log) [#8](../../../../../../restauracoes/20261006-011601-vistorias-com-940e/2026-10-06T01-16-01Z__vistorias__opus__com__rep-01__20261006-011601-vistorias-com-940e/evidence/logs/screens.log) · [binding](analysis-binding.com.json)

Achados enviados (32; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| br-button\[icon=&quot;eye&quot;\] | button-name | Botão de ação só com ícone de olho \(fa-eye\) em cada linha da tabela; o &lt;button&gt; interno tem aria-label=&quot;&quot; e não tem texto, title nem aria-labelledby: nome acessível vazio. Ocorre também na aba Concluídos. |
| table input\[type=&quot;checkbox&quot;\] | label | As 11 caixas de seleção da tabela \(a do cabeçalho, &quot;selecionar todas&quot;, e uma por linha\) não têm &lt;label&gt;, aria-label nem aria-labelledby; o cabeçalho th:nth-child\(2\) também fica sem texto. |
| thead th:last-child | empty-table-header | O cabeçalho da coluna de ações \(&lt;th scope=&quot;col&quot;&gt;\) está vazio, sem texto visível nem texto para leitor de tela. |
| pnip-status-solicitacao-utils .text-secondary-01 | color-contrast | Etiqueta de status &quot;Vistoria agendada&quot;: texto branco #ffffff sobre #4f97d1, 14px normal, contraste 3.14:1. |
| pnip-status-solicitacao-utils .text-secondary-01 | color-contrast | Na aba Agendar, a etiqueta de status &quot;Vistoria pré agendada&quot; tem texto branco #ffffff sobre #888888, 14px normal, contraste 3.54:1. |
| .br-tag.primary-pastel-01 | color-contrast | A etiqueta &quot;Nenhum filtro de data aplicado&quot; tem texto branco #ffffff sobre #c5d4eb, 14px, contraste 1.5:1. |
| br-input\[type=&quot;date&quot;\] | label | Os dois campos de data \(#br-input-8 e #br-input-9 dentro do shadow DOM\) não têm rótulo associado; &quot;Data da vistoria:&quot; e &quot;até&quot; são &lt;span&gt; soltos, sem associação programática. |
| br-input#search | govbr-3.7.0-accessibility-global-b5fad7ce076d | O campo de pesquisa \(input#search\) não tem &lt;label&gt; nem aria-label; a única identificação é o placeholder &quot;Pesquise aqui ...&quot;, que some ao digitar. |
| .br-pagination li &gt; li | listitem | Na paginação, cada número de página é um &lt;li&gt; aninhado dentro de outro &lt;li&gt;, sem &lt;ul&gt;/&lt;ol&gt; pai direto. |
| .br-pagination a.page.active | wcag:1.3.1 | A página atual \(link &quot;1&quot;\) é indicada só visualmente pela classe &quot;active&quot;; não há aria-current=&quot;page&quot; nem texto equivalente. |
| .br-tab .tab-item.active &gt; button | wcag:4.1.2 | A aba selecionada \(&quot;Tramitando&quot;; e &quot;Agendar&quot;/&quot;Concluídos&quot; depois de clicadas\) é indicada só pela classe &quot;active&quot; no &lt;li&gt;; os botões não têm aria-selected, aria-current nem role=&quot;tab&quot;. |
| pnip-filter-panel span.br-tag.interaction | wcag:2.1.1 | Os filtros Cidade, Porto, Vistoriador e Status são &lt;span&gt; com evento de clique, sem tabindex nem role. Navegando com Tab, o foco passa das abas direto para o campo de pesquisa e pula os quatro filtros. |
| pnip-filter-panel .br-select .br-radio label | wcag:2.1.1 | Com o filtro Cidade aberto, as opções \(Areia Branca do Leste, Barra Nova etc.\) são &lt;label&gt; dentro de .br-radio sem &lt;input&gt; associado e sem tabindex: só funcionam com clique do mouse. |
| pnip-filter-panel .br-tag.interaction &gt; button.inverted | button-name | Depois de aplicar o filtro Cidade=Barra Nova, o botão de remover o filtro \(ícone fa-times\) não tem nome acessível. |
| .col.align-content-center &gt; .br-tag.interaction &gt; button.inverted | button-name | O botão de remover o filtro de data na etiqueta &quot;Exibindo vistorias de ... até ...&quot; \(ícone fa-times\) não tem nome acessível. |
| #avatar-dropdown-trigger | wcag:2.5.3 | O botão do usuário mostra o texto &quot;Olá, Usuária de Teste, SUPERVISOR&quot;, mas o aria-label &quot;Avatar com dropdown&quot; substitui esse texto no nome acessível. |
| #avatar-menu | aria-required-children | Com o menu do usuário aberto, o contêiner role=&quot;menu&quot; tem como filhos um &lt;button&gt; e divs comuns, sem nenhum role=&quot;menuitem&quot;. |
| #avatar-menu &gt; button &gt; img | image-alt | O ícone do botão &quot;Sair&quot; no menu do usuário é um &lt;img src=&quot;exit-icon.png&quot;&gt; sem atributo alt. |
| #avatar-menu .text-center &gt; span | wcag:2.1.1 | A opção &quot;Trocar unidade&quot; do menu do usuário é um &lt;span&gt; com cursor:pointer, sem tabindex e sem role: não é alcançável nem acionável pelo teclado. |
| html | ds-page-footer | O documento não tem rodapé do Template Base: não há .br-footer nem &lt;br-footer&gt;. |
| html | ds-page-skip-link | O primeiro link da página é o &quot;Home&quot; do breadcrumb \(href=&quot;/portal-mpa&quot;\); não há atalho para pular ao conteúdo principal. |
| html | page-has-heading-one | A página não tem &lt;h1&gt;; o título &quot;Vistorias&quot; é &lt;h2&gt; e é o único cabeçalho da página. |
| title | emag:3.3 | O título do documento é apenas &quot;PNIP&quot;, sem indicar a página \(Vistorias\); o mesmo título aparece em outras telas \(ex.: agendar-vistoria\). |
| br-header | wcag:1.1.1 | O logotipo gov.br no cabeçalho \(img dentro do shadow DOM de br-header\) tem alt=&quot;logo&quot;, que não identifica a imagem. |
| table | govbr-3.7.0-accessibility-global-cd705eb5da2a | A tabela de vistorias não tem &lt;caption&gt;, aria-label nem aria-labelledby. |
| #swal2-select | select-name | No diálogo &quot;Atribuir Vistoriador&quot;, o &lt;select&gt; de vistoriadores não tem rótulo associado; &quot;Selecione um Vistoriador&quot; é só o texto descritivo do diálogo. |
| br-button\[title=&quot;Excluir vistoria&quot;\] | wcag:2.4.3 | Depois de abrir o diálogo &quot;Excluir Vistoria&quot; e fechá-lo \(Cancelar pelo teclado, ou Esc\), o foco vai para &lt;body&gt; em vez de voltar ao botão que abriu o diálogo. |
| .flex-column.align-items-center.mt-5 &gt; p | wcag:4.1.3 | Uma pesquisa sem resultados troca a tabela por &quot;Não há vistorias para exibir.&quot; fora de qualquer região viva; a região aria-live da paginação é removida, então nada é anunciado. |
| #swal2-html-container input\[type=&quot;checkbox&quot;\] | emag:6.7 | No diálogo &quot;Exportar Vistorias&quot;, as 5 caixas de status ficam sob o texto &quot;Status:&quot; \(&lt;strong&gt; solto\), sem fieldset/legend ou role=&quot;group&quot; com nome. |
| br-breadcrumb | incerta | No breadcrumb \(shadow DOM\), o item Home é um &lt;a href=&quot;/portal-mpa&quot;&gt; com um &lt;button aria-label=&quot;&quot;&gt; dentro: um elemento interativo aninhado em outro. |
| br-header | incerta | O botão &quot;Menu&quot; do cabeçalho \(#navigation, data-target=&quot;#main-navigation&quot;\) não abre nada, nem com clique nem com Enter: #main-navigation não existe no documento e o botão não tem aria-expanded. |
| .br-table &gt; table | incerta | A tabela tem 1272px de largura dentro de um contêiner .br-table de 1096px, sem overflow; a página rola na horizontal \(scrollWidth 1364 &gt; 1280\) e os botões de ação da última coluna ficam parcialmente fora da área visível. |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `703621402955cf3b3d8b9d56f062016cb9e72d7b223ac3f10d36107d947aa909`

