# Resumo da análise — Vistorias (vistorias)

Revisão 2 · substitui [a revisão anterior](../rev-001/summary.md) (sem alterar o pacote bruto) · gerado em 2026-10-12T19:14:21.608Z (UTC)

## 1. Status técnico

Análise: **pronta**

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261009-001918-vistorias-sem-c983 | sem | rodou até o fim e o relatório foi aceito | — | aceita | final (revisão fechada) |
| 20261009-003628-vistorias-com-437f | com | rodou até o fim e o relatório foi aceito | — | aceita | final (revisão fechada) |

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
| Início (UTC) | 2026-10-09T00:19:42Z | 2026-10-09T00:36:56Z |
| Início (local) | 08/10/2026, 21:19:42 (horário de Brasília) | 08/10/2026, 21:36:56 (horário de Brasília) |
| Commit do harness | 7f189a9a0984459418e210aa1453acbee54e1160 | 7f189a9a0984459418e210aa1453acbee54e1160 |
| Repetição · tentativa | 8 · 1 | 8 · 1 |
| Campanha · slot · par | t7-tela-b-01 · p08-sem · p08 | t7-tela-b-01 · p08-com · p08 |

## 3. Resultado científico

| Medida | sem | com |
|---|---|---|
| Defeitos da referência confirmados | 31 de 102 | 33 de 102 |
| Recall (cobertura da referência) | 30,4% | 32,4% |
| Precisão sobre a referência — D/(D+F) | 93,9% | 94,3% |
| Precisão das afirmações — (D+N)/(D+N+F) | 97,7% | 98,0% |
| Afirmações incorretas (falsos positivos) | 2 | 2 |
| Defeitos novos corretos (fora da referência) | 53 | 66 |
| Duplicadas | 0 | 0 |
| Cartões pendentes de revisão | 0 | 0 |
| Maturidade | final (revisão fechada) | final (revisão fechada) |
| Entra na comparação principal | sim | sim |
| Achados enviados | 31 | 32 |

Recall e precisão só aparecem com a revisão fechada; enquanto houver cartão pendente ficam “indisponível” (nunca 0). “Achados enviados = 0” é um resultado válido (o agente olhou e não alegou nada); submissão recusada ou ausente é outra coisa.

Linha de base determinística (união das varreduras comparáveis), por unidade da referência:

| Unidades | sem | com |
|---|---|---|
| Agente e linha de base | 23 | 24 |
| Só o agente | 8 | 9 |
| Só a linha de base | 15 | 14 |
| Nenhum | 56 | 55 |
| Estado | provisório | provisório |

Linha de base: usada (lb-20261009-001858-vistorias-661b42)

## 4. Comparação com − sem

_n = 1 par, sem inferência. Nenhum braço é declarado melhor por contagem bruta._

Estado: final (as duas revisões fechadas)

- Diferença de defeitos confirmados (com − sem): +2
- Diferença de recall (com − sem): +2,0 p.p.
- Só o com detectou: B-03 (&lt;table&gt; &quot;# Nome da embarcação RAEP Data/Hora Vistoria Loc&quot;); B-26 (&lt;th&gt;)
- Só o sem detectou: nenhuma
- Os dois detectaram: B-11 (&lt;span&gt; &quot;Cidade&quot;); B-17 (&lt;div#avatar-menu&gt; &quot;Usuária de Teste usuaria.teste@exemplo.invalid S&quot;); B-06 (&lt;input&gt;); B-06 (&lt;input&gt;); B-11 (&lt;span&gt; &quot;Status&quot;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-06 (&lt;input&gt;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-13 (&lt;span&gt; &quot;Nenhum filtro de data aplicado&quot;); B-06 (&lt;input&gt;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-19 (&lt;span&gt; &quot;Trocar unidade&quot;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-06 (&lt;input&gt;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-06 (&lt;input&gt;); B-06 (&lt;input&gt;); B-06 (&lt;input&gt;); B-11 (&lt;span&gt; &quot;Vistoriador&quot;); B-02 (&lt;h2&gt; &quot;Vistorias&quot;); B-06 (&lt;input&gt;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-16 (&lt;img&gt;); B-06 (&lt;input&gt;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-25 (&lt;title&gt; &quot;PNIP&quot;); B-12 (&lt;div&gt; &quot;Vistoria agendada&quot;); B-06 (&lt;input&gt;); B-11 (&lt;span&gt; &quot;Porto&quot;)
- Nenhum detectou: B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-14 (&lt;span&gt; &quot;U&quot;); B-07 (&lt;button&gt; \[shadow\]); B-10 (&lt;button&gt; &quot;Exibir lista&quot;); B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-29 (&lt;button&gt; &quot;Exibir lista&quot;); B-20 (&lt;textarea&gt;); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-09 (&lt;button&gt; &quot;Buscar&quot;); B-08 (&lt;button&gt; \[shadow\]); B-15 (&lt;hr&gt;); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-23 (&lt;div&gt; &quot;0%&quot;); B-24 (&lt;div&gt; &quot;Trocar embarcação da vistoria Busque e selecione&quot;); B-05 (&lt;input#br-input-8&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-01 (&lt;pnip-root&gt; &quot;U Olá, Usuária de Teste, SUPERVISOR Programa Nac&quot;); B-04 (&lt;input#search&gt; &quot;Pesquise aqui ...&quot; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-21 (&lt;h3&gt; &quot;Programa Nacional de Regularização de Embarcação&quot;); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-18 (&lt;button&gt; &quot;Sair&quot;); B-08 (&lt;button&gt; \[shadow\]); B-27 (&lt;div&gt; &quot;Trocar embarcação da vistoria Busque e selecione&quot;); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-22 (&lt;table&gt; &quot;Status Data Hora Visualizado 06/03/2026 08:21:00&quot;); B-28 (&lt;button&gt; &quot;Buscar&quot;); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-10 (&lt;button&gt; &quot;Exibir lista&quot;); B-08 (&lt;button&gt; \[shadow\]); B-29 (&lt;button&gt; &quot;Exibir lista&quot;); B-08 (&lt;button&gt; \[shadow\]); B-07 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-05 (&lt;input#br-input-9&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\]); B-08 (&lt;button&gt; \[shadow\])

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
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_snapshot, browser\_take\_screenshot, browser\_click, browser\_press\_key, browser\_wait\_for, browser\_navigate\_back, browser\_type | browser\_navigate, browser\_evaluate, browser\_snapshot, scan\_page, get\_finding\_details, browser\_take\_screenshot, browser\_press\_key, browser\_click, get\_ds\_rules, browser\_type, browser\_fill\_form, get\_design\_tokens, get\_emag\_rules, verify\_finding |
| Erros de ferramenta | 5 (tool-events.ndjson \(eventos com isError: true\)) | 4 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 8 aprovado(s); falhos: nenhum | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | nenhuma | nenhuma |

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 6. Custo e tempo

| | sem | com |
|---|---|---|
| Tempo de relógio (s) | 722 (runner) | 698 (runner) |
| Turnos | 150 (stream-json do cliente \(result.num\_turns\)) | 129 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 149 (ponte MCP) | 128 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 33 (ponte MCP do oráculo) |
| Tokens de entrada | 138 (stream-json do cliente \(result.usage\)) | 166 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 49902 (stream-json do cliente \(result.usage\)) | 42713 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 5690615 (stream-json do cliente \(result.usage\)) | 9609888 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 154060 (stream-json do cliente \(result.usage\)) | 191285 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 3.3691949999999995 (estimativa do cliente \(result.total\_cost\_usd\)) | 4.307181599999999 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 172 cartão(ões), estimativa 1032 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 7. Detalhes e evidências

**sem** (20261009-001918-vistorias-sem-c983): [pacote](../../../../../restauracoes/20261009-001918-vistorias-sem-c983/2026-10-09T00-19-18Z__vistorias__opus__sem__rep-08__20261009-001918-vistorias-sem-c983) · [run.json](../../../../../restauracoes/20261009-001918-vistorias-sem-c983/2026-10-09T00-19-18Z__vistorias__opus__sem__rep-08__20261009-001918-vistorias-sem-c983/run.json) · [findings.json](../../../../../restauracoes/20261009-001918-vistorias-sem-c983/2026-10-09T00-19-18Z__vistorias__opus__sem__rep-08__20261009-001918-vistorias-sem-c983/findings.json) · [isolation.json](../../../../../restauracoes/20261009-001918-vistorias-sem-c983/2026-10-09T00-19-18Z__vistorias__opus__sem__rep-08__20261009-001918-vistorias-sem-c983/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261009-001918-vistorias-sem-c983/2026-10-09T00-19-18Z__vistorias__opus__sem__rep-08__20261009-001918-vistorias-sem-c983/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261009-001918-vistorias-sem-c983/2026-10-09T00-19-18Z__vistorias__opus__sem__rep-08__20261009-001918-vistorias-sem-c983/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261009-001918-vistorias-sem-c983/2026-10-09T00-19-18Z__vistorias__opus__sem__rep-08__20261009-001918-vistorias-sem-c983/evidence/cliente.json) [#3](../../../../../restauracoes/20261009-001918-vistorias-sem-c983/2026-10-09T00-19-18Z__vistorias__opus__sem__rep-08__20261009-001918-vistorias-sem-c983/evidence/container-config.json) [#4](../../../../../restauracoes/20261009-001918-vistorias-sem-c983/2026-10-09T00-19-18Z__vistorias__opus__sem__rep-08__20261009-001918-vistorias-sem-c983/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261009-001918-vistorias-sem-c983/2026-10-09T00-19-18Z__vistorias__opus__sem__rep-08__20261009-001918-vistorias-sem-c983/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261009-001918-vistorias-sem-c983/2026-10-09T00-19-18Z__vistorias__opus__sem__rep-08__20261009-001918-vistorias-sem-c983/evidence/preflight.json) [#7](../../../../../restauracoes/20261009-001918-vistorias-sem-c983/2026-10-09T00-19-18Z__vistorias__opus__sem__rep-08__20261009-001918-vistorias-sem-c983/evidence/prompt.txt) [#8](../../../../../restauracoes/20261009-001918-vistorias-sem-c983/2026-10-09T00-19-18Z__vistorias__opus__sem__rep-08__20261009-001918-vistorias-sem-c983/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261009-001918-vistorias-sem-c983/2026-10-09T00-19-18Z__vistorias__opus__sem__rep-08__20261009-001918-vistorias-sem-c983/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261009-001918-vistorias-sem-c983/2026-10-09T00-19-18Z__vistorias__opus__sem__rep-08__20261009-001918-vistorias-sem-c983/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261009-001918-vistorias-sem-c983/2026-10-09T00-19-18Z__vistorias__opus__sem__rep-08__20261009-001918-vistorias-sem-c983/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261009-001918-vistorias-sem-c983/2026-10-09T00-19-18Z__vistorias__opus__sem__rep-08__20261009-001918-vistorias-sem-c983/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261009-001918-vistorias-sem-c983/2026-10-09T00-19-18Z__vistorias__opus__sem__rep-08__20261009-001918-vistorias-sem-c983/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261009-001918-vistorias-sem-c983/2026-10-09T00-19-18Z__vistorias__opus__sem__rep-08__20261009-001918-vistorias-sem-c983/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261009-001918-vistorias-sem-c983/2026-10-09T00-19-18Z__vistorias__opus__sem__rep-08__20261009-001918-vistorias-sem-c983/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261009-001918-vistorias-sem-c983/2026-10-09T00-19-18Z__vistorias__opus__sem__rep-08__20261009-001918-vistorias-sem-c983/evidence/raw/probe/probe.json) [#17](../../../../../restauracoes/20261009-001918-vistorias-sem-c983/2026-10-09T00-19-18Z__vistorias__opus__sem__rep-08__20261009-001918-vistorias-sem-c983/evidence/raw/probe/sonda-escrita-1791505181914.txt) [#18](../../../../../restauracoes/20261009-001918-vistorias-sem-c983/2026-10-09T00-19-18Z__vistorias__opus__sem__rep-08__20261009-001918-vistorias-sem-c983/evidence/raw/task/mcp.json) [#19](../../../../../restauracoes/20261009-001918-vistorias-sem-c983/2026-10-09T00-19-18Z__vistorias__opus__sem__rep-08__20261009-001918-vistorias-sem-c983/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261009-001918-vistorias-sem-c983/2026-10-09T00-19-18Z__vistorias__opus__sem__rep-08__20261009-001918-vistorias-sem-c983/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261009-001918-vistorias-sem-c983/2026-10-09T00-19-18Z__vistorias__opus__sem__rep-08__20261009-001918-vistorias-sem-c983/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261009-001918-vistorias-sem-c983/2026-10-09T00-19-18Z__vistorias__opus__sem__rep-08__20261009-001918-vistorias-sem-c983/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261009-001918-vistorias-sem-c983/2026-10-09T00-19-18Z__vistorias__opus__sem__rep-08__20261009-001918-vistorias-sem-c983/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261009-001918-vistorias-sem-c983/2026-10-09T00-19-18Z__vistorias__opus__sem__rep-08__20261009-001918-vistorias-sem-c983/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261009-001918-vistorias-sem-c983/2026-10-09T00-19-18Z__vistorias__opus__sem__rep-08__20261009-001918-vistorias-sem-c983/evidence/logs/probe.log) [#7](../../../../../restauracoes/20261009-001918-vistorias-sem-c983/2026-10-09T00-19-18Z__vistorias__opus__sem__rep-08__20261009-001918-vistorias-sem-c983/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (31; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| br-button\[icon=&quot;eye&quot;\] | wcag:4.1.2 | O botão interno \(shadow DOM\) de cada linha, com ícone fa-eye, tem aria-label=&quot;&quot; e não tem title nem texto: a árvore de acessibilidade o expõe como &quot;button&quot; sem nome. A ativação leva aos detalhes da vistoria \(/vistorias/… |
| table input\[type=&quot;checkbox&quot;\] | wcag:4.1.2 | A caixa &quot;selecionar todas&quot; do cabeçalho e as caixas de cada linha não têm label, aria-label nem title: são expostas como &quot;checkbox&quot; sem nome. |
| br-input\[type=&quot;date&quot;\] | wcag:4.1.2 | Os campos de data \(input type=date dentro de br-input\) não têm nome acessível: os textos &quot;Data da vistoria:&quot; e &quot;até&quot; são spans soltos, sem associação \(a árvore mostra textbox sem nome\). |
| br-input#search | emag:6.2 | O campo de busca tem somente placeholder=&quot;Pesquise aqui ...&quot; como identificação; não há label associado e o texto some quando o usuário digita. |
| span.br-tag.primary-pastel-01 | wcag:1.4.3 | O texto &quot;Nenhum filtro de data aplicado&quot; é branco rgb\(255,255,255\) sobre rgb\(197,212,235\), 14px e peso 500: contraste de 1,5:1. |
| div.bg-blue-40 &gt; div | wcag:1.4.3 | O selo de status &quot;Vistoria agendada&quot; é texto branco sobre rgb\(79,151,209\), 14px e peso 500: contraste de 3,14:1. |
| div.bg-secondary-06 &gt; div | wcag:1.4.3 | Na aba Agendar, o selo &quot;Vistoria pré agendada&quot; é texto branco sobre rgb\(136,136,136\), 14px: contraste de 3,54:1. |
| pnip-filter-panel span.br-tag.interaction\[style\*=&quot;cursor&quot;\] | wcag:2.1.1 | Os filtros Cidade, Porto, Vistoriador e Status são &lt;span&gt; com cursor:pointer e handler de clique, sem tabindex nem role. A navegação por Tab vai de &quot;Concluídos&quot; direto ao campo de busca e os filtros só abrem com o mouse. |
| pnip-filter-panel .br-select .br-item | wcag:2.1.1 | A lista aberta pelo filtro tem opções \(div.br-item &gt; div.br-radio &gt; label, sem input\) que não são focáveis e não têm papel de opção; só são selecionáveis com o mouse. |
| pnip-filter-panel span.br-tag button.br-button.inverted | wcag:4.1.2 | O botão &quot;x&quot; do chip do filtro aplicado \(&quot;Barra Nova&quot;\) tem apenas o ícone fa-times, sem texto, aria-label nem title: botão sem nome. |
| div.col.align-content-center &gt; span.br-tag.interaction &gt; button.br-button.inver… | wcag:4.1.2 | O botão &quot;x&quot; do chip &quot;Exibindo vistorias a partir de 25/03/2026&quot; tem apenas o ícone fa-times, sem texto, aria-label nem title: botão sem nome. |
| nav.tab-nav li.tab-item.active &gt; button | wcag:4.1.2 | A aba ativa \(&quot;Tramitando&quot;\) só é indicada pela classe &quot;active&quot; no &lt;li&gt;; o botão não tem aria-selected, aria-current nem texto oculto. A troca de aba não muda nenhum estado exposto. |
| nav.br-pagination a.page.active | wcag:1.3.1 | A página atual da paginação é indicada só visualmente \(classe &quot;active&quot;, fundo escuro\), sem aria-current; os links têm href=&quot;javascript:void\(0\)&quot;. |
| nav.br-pagination li &gt; li | wcag:1.3.1 | Na paginação, cada número de página é um &lt;li&gt; dentro de outro &lt;li&gt;, sem &lt;ul&gt;/&lt;ol&gt; intermediário \(estrutura de lista inválida, exposta como listitem dentro de listitem\). |
| br-breadcrumb | wcag:4.1.2 | No breadcrumb \(shadow DOM\), o item Home é um &lt;a href=&quot;/portal-mpa&quot;&gt; que contém um &lt;button aria-label=&quot;&quot;&gt; \(controle interativo aninhado, exposto como link &quot;Home&quot; com button &quot;Home&quot; dentro\). |
| br-header | wcag:1.1.1 | O logotipo do cabeçalho \(img em shadow DOM, src=assets/images/govbr-logo.png\) tem alt=&quot;logo&quot;, que não informa o conteúdo da imagem \(marca gov.br\). |
| br-header\[has-menu\] | incerta | O botão &quot;Menu&quot; \(hambúrguer, #navigation, data-target=&quot;#main-navigation&quot;\) não faz nada ao ser clicado ou ativado com Enter: não existe #main-navigation nem .br-menu no documento e o botão não tem aria-expanded. |
| #avatar-dropdown-trigger | wcag:2.5.3 | O botão do usuário mostra o texto &quot;Olá, Usuária de Teste, SUPERVISOR&quot;, mas o aria-label=&quot;Avatar com dropdown&quot; substitui esse texto no nome acessível. |
| #avatar-menu | wcag:1.3.1 | O painel do usuário tem role=&quot;menu&quot;, mas os filhos são div, span e button sem role=&quot;menuitem&quot; \(dados do usuário, &quot;Trocar unidade&quot;, &quot;Sair&quot;\). |
| #avatar-menu span.text-blue-vivid-60 | wcag:2.1.1 | &quot;Trocar unidade&quot; é um &lt;span&gt; com cursor:pointer, sem tabindex nem role: não recebe foco por teclado. |
| #avatar-menu img | wcag:1.1.1 | O ícone do botão &quot;Sair&quot; \(img src=../../../assets/images/exit-icon.png\) não tem atributo alt. |
| main h2 | emag:1.3 | O único cabeçalho da página é &lt;h2&gt;Vistorias&lt;/h2&gt;; não há &lt;h1&gt; \(o título &quot;Plataforma Nacional...&quot; do header é um div\). |
| body | emag:1.5 | Não há links de salto \(&quot;Ir para o conteúdo&quot;, &quot;Ir para o menu&quot; etc.\): o primeiro Tab vai direto ao botão &quot;Menu&quot; do cabeçalho. |
| title | wcag:2.4.2 | O título do documento é só &quot;PNIP&quot;, igual ao da tela de detalhe \(/vistorias/agendar-vistoria/&lt;id&gt;\); não identifica a página &quot;Vistorias&quot;. |
| table.table | incerta | Em 1280px a tabela tem 1272px de largura e termina em x=1364; a página fica com scrollWidth=1364 \(rolagem horizontal\) e a coluna de ações \(botão &quot;Notificar solicitante da vistoria&quot; em x=1258\) fica cortada pela borda da … |
| br-button\[icon=&quot;bell&quot;\], br-button\[icon=&quot;trash&quot;\], br-button\[type=&quot;primary&quot;\] | wcag:2.4.3 | Depois de fechar o diálogo \(SweetAlert\) aberto por &quot;Notificar solicitante&quot; \(Esc\), &quot;Excluir vistoria&quot; \(Cancelar\) ou &quot;Exportar Vistorias&quot; \(Exportar\), o foco vai para &lt;body&gt; e não volta ao botão que o abriu. |
| #swal2-select | wcag:4.1.2 | No diálogo &quot;Atribuir Vistoriador&quot;, o select de vistoriadores não tem label, aria-label nem aria-labelledby; o texto &quot;Selecione um Vistoriador&quot; é só a descrição do diálogo. |
| .swal2-html-container input\[type=&quot;checkbox&quot;\] | emag:6.7 | No diálogo &quot;Exportar Vistorias&quot;, as 5 caixas de status ficam sob o texto &quot;Status:&quot; em &lt;strong&gt;, sem fieldset/legend nem role=&quot;group&quot;. |
| div.flex-column.align-items-center &gt; p | wcag:4.1.3 | Uma busca sem resultado \(&quot;xyz&quot; + Enter\) troca a tabela por &quot;Não há vistorias para exibir.&quot; fora de qualquer região aria-live/role=status, e o foco fica no campo de busca: a mensagem não é anunciada. |
| div.mt-5.text-center &gt; p | wcag:4.1.3 | Com um período de datas sem resultado aparece &quot;Não há vistorias para exibir nesse periodo selecionado.&quot;, fora de qualquer região aria-live/role=status. |
| br-select-pnip\[label=&quot;Exibir&quot;\] | incerta | Na aba Concluídos, página 3 \(itens 21–23 de 23\), mudar &quot;Exibir&quot; de 10 para 25 esvazia a lista \(&quot;Não há vistorias para exibir.&quot;\), remove a paginação e manda o foco para &lt;body&gt;, embora existam 23 itens. |

**com** (20261009-003628-vistorias-com-437f): [pacote](../../../../../restauracoes/20261009-003628-vistorias-com-437f/2026-10-09T00-36-28Z__vistorias__opus__com__rep-08__20261009-003628-vistorias-com-437f) · [run.json](../../../../../restauracoes/20261009-003628-vistorias-com-437f/2026-10-09T00-36-28Z__vistorias__opus__com__rep-08__20261009-003628-vistorias-com-437f/run.json) · [findings.json](../../../../../restauracoes/20261009-003628-vistorias-com-437f/2026-10-09T00-36-28Z__vistorias__opus__com__rep-08__20261009-003628-vistorias-com-437f/findings.json) · [isolation.json](../../../../../restauracoes/20261009-003628-vistorias-com-437f/2026-10-09T00-36-28Z__vistorias__opus__com__rep-08__20261009-003628-vistorias-com-437f/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261009-003628-vistorias-com-437f/2026-10-09T00-36-28Z__vistorias__opus__com__rep-08__20261009-003628-vistorias-com-437f/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261009-003628-vistorias-com-437f/2026-10-09T00-36-28Z__vistorias__opus__com__rep-08__20261009-003628-vistorias-com-437f/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261009-003628-vistorias-com-437f/2026-10-09T00-36-28Z__vistorias__opus__com__rep-08__20261009-003628-vistorias-com-437f/evidence/cliente.json) [#3](../../../../../restauracoes/20261009-003628-vistorias-com-437f/2026-10-09T00-36-28Z__vistorias__opus__com__rep-08__20261009-003628-vistorias-com-437f/evidence/container-config.json) [#4](../../../../../restauracoes/20261009-003628-vistorias-com-437f/2026-10-09T00-36-28Z__vistorias__opus__com__rep-08__20261009-003628-vistorias-com-437f/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261009-003628-vistorias-com-437f/2026-10-09T00-36-28Z__vistorias__opus__com__rep-08__20261009-003628-vistorias-com-437f/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261009-003628-vistorias-com-437f/2026-10-09T00-36-28Z__vistorias__opus__com__rep-08__20261009-003628-vistorias-com-437f/evidence/preflight.json) [#7](../../../../../restauracoes/20261009-003628-vistorias-com-437f/2026-10-09T00-36-28Z__vistorias__opus__com__rep-08__20261009-003628-vistorias-com-437f/evidence/prompt.txt) [#8](../../../../../restauracoes/20261009-003628-vistorias-com-437f/2026-10-09T00-36-28Z__vistorias__opus__com__rep-08__20261009-003628-vistorias-com-437f/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261009-003628-vistorias-com-437f/2026-10-09T00-36-28Z__vistorias__opus__com__rep-08__20261009-003628-vistorias-com-437f/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261009-003628-vistorias-com-437f/2026-10-09T00-36-28Z__vistorias__opus__com__rep-08__20261009-003628-vistorias-com-437f/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261009-003628-vistorias-com-437f/2026-10-09T00-36-28Z__vistorias__opus__com__rep-08__20261009-003628-vistorias-com-437f/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261009-003628-vistorias-com-437f/2026-10-09T00-36-28Z__vistorias__opus__com__rep-08__20261009-003628-vistorias-com-437f/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261009-003628-vistorias-com-437f/2026-10-09T00-36-28Z__vistorias__opus__com__rep-08__20261009-003628-vistorias-com-437f/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261009-003628-vistorias-com-437f/2026-10-09T00-36-28Z__vistorias__opus__com__rep-08__20261009-003628-vistorias-com-437f/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261009-003628-vistorias-com-437f/2026-10-09T00-36-28Z__vistorias__opus__com__rep-08__20261009-003628-vistorias-com-437f/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261009-003628-vistorias-com-437f/2026-10-09T00-36-28Z__vistorias__opus__com__rep-08__20261009-003628-vistorias-com-437f/evidence/raw/oracle/inventory.json) [#17](../../../../../restauracoes/20261009-003628-vistorias-com-437f/2026-10-09T00-36-28Z__vistorias__opus__com__rep-08__20261009-003628-vistorias-com-437f/evidence/raw/oracle/oracle-telemetry.ndjson) [#18](../../../../../restauracoes/20261009-003628-vistorias-com-437f/2026-10-09T00-36-28Z__vistorias__opus__com__rep-08__20261009-003628-vistorias-com-437f/evidence/raw/oracle/tool-events.ndjson) [#19](../../../../../restauracoes/20261009-003628-vistorias-com-437f/2026-10-09T00-36-28Z__vistorias__opus__com__rep-08__20261009-003628-vistorias-com-437f/evidence/raw/probe/probe.json) [#20](../../../../../restauracoes/20261009-003628-vistorias-com-437f/2026-10-09T00-36-28Z__vistorias__opus__com__rep-08__20261009-003628-vistorias-com-437f/evidence/raw/probe/sonda-escrita-1791506216381.txt) [#21](../../../../../restauracoes/20261009-003628-vistorias-com-437f/2026-10-09T00-36-28Z__vistorias__opus__com__rep-08__20261009-003628-vistorias-com-437f/evidence/raw/task/mcp.json) [#22](../../../../../restauracoes/20261009-003628-vistorias-com-437f/2026-10-09T00-36-28Z__vistorias__opus__com__rep-08__20261009-003628-vistorias-com-437f/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261009-003628-vistorias-com-437f/2026-10-09T00-36-28Z__vistorias__opus__com__rep-08__20261009-003628-vistorias-com-437f/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261009-003628-vistorias-com-437f/2026-10-09T00-36-28Z__vistorias__opus__com__rep-08__20261009-003628-vistorias-com-437f/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261009-003628-vistorias-com-437f/2026-10-09T00-36-28Z__vistorias__opus__com__rep-08__20261009-003628-vistorias-com-437f/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261009-003628-vistorias-com-437f/2026-10-09T00-36-28Z__vistorias__opus__com__rep-08__20261009-003628-vistorias-com-437f/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261009-003628-vistorias-com-437f/2026-10-09T00-36-28Z__vistorias__opus__com__rep-08__20261009-003628-vistorias-com-437f/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261009-003628-vistorias-com-437f/2026-10-09T00-36-28Z__vistorias__opus__com__rep-08__20261009-003628-vistorias-com-437f/evidence/logs/oracle.log) [#7](../../../../../restauracoes/20261009-003628-vistorias-com-437f/2026-10-09T00-36-28Z__vistorias__opus__com__rep-08__20261009-003628-vistorias-com-437f/evidence/logs/probe.log) [#8](../../../../../restauracoes/20261009-003628-vistorias-com-437f/2026-10-09T00-36-28Z__vistorias__opus__com__rep-08__20261009-003628-vistorias-com-437f/evidence/logs/screens.log) · [binding](analysis-binding.com.json)

Achados enviados (32; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| td:nth-child\(9\) br-button\[icon=&quot;eye&quot;\] | button-name | O botão de ícone &quot;olho&quot; de cada linha \(abre o detalhe da vistoria\) não tem nome acessível: o button interno tem aria-label=&quot;&quot; e não tem title nem texto; só o ícone fa-eye com aria-hidden. |
| br-input\[type=&quot;date&quot;\] | label | Os dois campos de data \(#br-input-8 e #br-input-9, no shadow DOM\) não têm rótulo associado; os textos &quot;Data da vistoria:&quot; e &quot;até&quot; são spans soltos. |
| table input\[type=&quot;checkbox&quot;\] | label | As 11 caixas de seleção da tabela \(a de &quot;selecionar todas&quot; no cabeçalho e uma por linha\) não têm nenhum nome acessível. |
| pnip-status-solicitacao-utils .bg-blue-40 &gt; .text-secondary-01 | color-contrast | A etiqueta de status &quot;Vistoria agendada&quot; \(aba Tramitando\) tem texto branco #ffffff sobre #4f97d1, com contraste de 3,14:1, em texto de 14px normal. |
| pnip-status-solicitacao-utils .bg-secondary-06 &gt; .text-secondary-01 | color-contrast | Na aba Agendar, a etiqueta de status &quot;Vistoria pré agendada&quot; tem texto branco #ffffff sobre #888888, com contraste de 3,54:1, em texto de 14px normal. |
| .br-tag.primary-pastel-01 | color-contrast | A etiqueta &quot;Nenhum filtro de data aplicado&quot; tem texto branco #ffffff sobre #c5d4eb, com contraste de 1,5:1, em texto de 14px. |
| thead th:last-child | empty-table-header | O cabeçalho da coluna de ações \(th scope=col\) está vazio. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] li &gt; li | listitem | Na paginação, cada número de página é um li aninhado diretamente dentro de outro li, sem ul/ol intermediário \(marcação de lista inválida\). |
| pnip-propesc-vistorias h2 | govbr-3.7.0-accessibility-global-3ac0aaa53900 | A página não tem h1; o título principal &quot;Vistorias&quot; é um h2 e é o único cabeçalho do documento. |
| html | govbr-3.7.0-accessibility-global-7d2b85f81c52 | Não há link de salto para o conteúdo: o primeiro link focável é o &quot;Home&quot; do breadcrumb \(href=&quot;/portal-mpa&quot;\). |
| br-breadcrumb | wcag:4.1.2 | O item &quot;Home&quot; do breadcrumb é um link a\[href=&quot;/portal-mpa&quot;\] com um button.br-button dentro \(elemento interativo aninhado\), o que cria duas paradas de Tab seguidas \(&quot;Home&quot; link e &quot;Home&quot; botão\) para o mesmo destino. |
| pnip-filter-panel span.br-tag.interaction | govbr-3.7.0-accessibility-global-e6fd5e1247de | Os gatilhos dos filtros &quot;Cidade&quot;, &quot;Porto&quot;, &quot;Vistoriador&quot; e &quot;Status&quot; são span.br-tag com cursor:pointer, sem role, sem tabindex e sem aria-expanded. Abrem só com o mouse e ficam fora da ordem de Tab. |
| pnip-filter-panel .br-radio | wcag:4.1.2 | As opções do painel de filtro \(ex.: &quot;Barra Nova&quot;\) são div.br-radio só com label, sem input type=radio, sem role e sem tabindex=-1: não comunicam papel nem estado de seleção e não podem ser operadas por teclado. |
| pnip-filter-panel .br-tag button.br-button.inverted | button-name | O botão &quot;×&quot; que remove o filtro aplicado \(chip &quot;Barra Nova&quot;\) não tem nome acessível; só tem o ícone fa-times. |
| .br-tag.interaction:not\(pnip-filter-panel .br-tag\) &gt; button.br-button.inverted.… | wcag:4.1.2 | O botão &quot;×&quot; do chip &quot;Exibindo vistorias a partir de 28/03/2026&quot; \(filtro de data\) não tem nome acessível; só tem o ícone fa-times e não tem aria-label. |
| nav.tab-nav .tab-item &gt; button | wcag:4.1.2 | As abas Agendar, Tramitando e Concluídos são buttons sem role=tab, aria-selected ou aria-current. A aba ativa só é indicada pela classe .active no li, então o estado não chega às tecnologias assistivas. |
| br-input#search | govbr-3.7.0-accessibility-global-b95c42b61ed3 | O campo de pesquisa só tem placeholder \(&quot;Pesquise aqui ...&quot;\) como rótulo; não há label visível nem associado, e o texto some ao digitar. |
| #avatar-dropdown-trigger | wcag:2.5.3 | O botão do usuário mostra &quot;Olá, Usuária de Teste, SUPERVISOR&quot;, mas o aria-label=&quot;Avatar com dropdown&quot; substitui esse texto visível no nome acessível. |
| #avatar-menu | aria-required-children | O menu do usuário tem role=&quot;menu&quot;, mas não contém elementos role=&quot;menuitem&quot;; contém divs, spans e um button. |
| #avatar-menu img | image-alt | O ícone img \(exit-icon.png\) do botão &quot;Sair&quot; não tem atributo alt. |
| #avatar-menu span\[style\*=&quot;cursor&quot;\] | govbr-3.7.0-accessibility-global-e6fd5e1247de | A ação &quot;Trocar unidade&quot; no menu do usuário é um span com cursor:pointer e tabIndex -1, sem role; não recebe foco nem pode ser acionada pelo teclado. |
| br-header | incerta | O botão &quot;Menu&quot; \(#navigation, data-target=&quot;#main-navigation&quot;\) do cabeçalho não faz nada: o alvo #main-navigation não existe no documento nem no shadow DOM, e o clique não abre nenhum menu nem define aria-expanded. |
| br-header | emag:3.6 | A imagem do logotipo no cabeçalho tem alt=&quot;logo&quot;, que não identifica a marca \(gov.br\). |
| #swal2-select | select-name | No modal &quot;Atribuir Vistoriador&quot;, o select de vistoriadores não tem rótulo associado; o texto &quot;Selecione um Vistoriador&quot; é só a descrição do diálogo. |
| td:nth-child\(9\) br-button\[icon=&quot;trash&quot;\], td:nth-child\(9\) br-button\[icon=&quot;bell&quot;\]… | wcag:2.4.3 | Ao abrir pelo teclado \(Enter\) os modais &quot;Excluir Vistoria&quot; e &quot;Notificar Vistoria\(s\)?&quot; e fechar com Esc, o foco vai para o body em vez de voltar ao botão da linha que abriu o modal. O mesmo acontece no modal &quot;Atribuir Vi… |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] a.page | wcag:2.4.3 | Ao ativar um número de página com Enter \(ex.: &quot;3&quot;\), a tabela é recarregada e o foco vai para o body, e o usuário de teclado perde a posição. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] a.page.active | wcag:1.3.1 | A página atual da paginação só é indicada pela classe .active, sem aria-current=&quot;page&quot;. |
| pnip-propesc-vistorias .d-flex.flex-column.justify-content-center &gt; p | wcag:4.1.3 | Depois de uma busca sem resultados, a mensagem &quot;Não há vistorias para exibir.&quot; aparece num p fora de qualquer região aria-live/role=status \(a região aria-live da paginação é removida\), então não é anunciada. |
| .br-table | incerta | Na janela de 1280px, a tabela \(1272px de largura\) transborda o contêiner .br-table \(1096px\), que não tem overflow, e gera rolagem horizontal na página \(scrollWidth 1364 &gt; 1280\). A coluna de ações \(botão &quot;Notificar&quot;\) fic… |
| head &gt; title | govbr-3.7.0-accessibility-global-5d5a5f21d94b | O título do documento é só &quot;PNIP&quot;, sem identificar o conteúdo da tela \(Vistorias\); o mesmo título aparece na tela de detalhe. |
| .br-table &gt; table | govbr-3.7.0-accessibility-global-cd705eb5da2a | A tabela de vistorias não tem caption nem aria-label/aria-labelledby. |
| .swal2-popup label &gt; input\[type=&quot;checkbox&quot;\] | govbr-3.7.0-accessibility-global-11ffc5c577f6 | No modal &quot;Exportar Vistorias&quot;, as cinco caixas de status ficam sob o texto solto &quot;Status:&quot;, sem fieldset/legend nem role=group com nome. |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `4718a133ecc94fde72616aa6c45dd2611893bd56f9d4a41120100824c5b5f2ac`

