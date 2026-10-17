# Resumo da análise — Vistorias (vistorias)

Revisão 1 · gerado em 2026-10-16T00:00:00Z (UTC)

## 1. Status técnico

Análise: **pronta**

Aviso: derivado retrospectivo nat74-retrospectiva-1.0.0: campanha congelada com flow-semantic-1.5.0, repreparada com flow-semantic-1.7.0 \(não substitui a análise oficial\)

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261012-082722-vistorias-sem-3826 | sem | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 29 cartão(ões), nenhum decidido |
| 20261012-084440-vistorias-com-8c64 | com | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 35 cartão(ões), nenhum decidido |

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
| Início (UTC) | 2026-10-12T08:27:47Z | 2026-10-12T08:45:08Z |
| Início (local) | 12/10/2026, 05:27:47 (horário de Brasília) | 12/10/2026, 05:45:08 (horário de Brasília) |
| Commit do harness | 7f189a9a0984459418e210aa1453acbee54e1160 | 7f189a9a0984459418e210aa1453acbee54e1160 |
| Repetição · tentativa | 10 · 1 | 10 · 1 |
| Campanha · slot · par | t7-tela-b-01 · p10-sem · p10 | t7-tela-b-01 · p10-com · p10 |

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
| Cartões pendentes de revisão | 29 | 35 |
| Maturidade | aguardando revisão — 29 cartão(ões), nenhum decidido | aguardando revisão — 35 cartão(ões), nenhum decidido |
| Entra na comparação principal | sim | sim |
| Achados enviados | 29 | 35 |

Recall e precisão só aparecem com a revisão fechada; enquanto houver cartão pendente ficam “indisponível” (nunca 0). “Achados enviados = 0” é um resultado válido (o agente olhou e não alegou nada); submissão recusada ou ausente é outra coisa.

Linha de base determinística (união das varreduras comparáveis), por unidade da referência:

| Unidades | sem | com |
|---|---|---|
| Agente e linha de base | 0 | 0 |
| Só o agente | 0 | 0 |
| Só a linha de base | 0 | 0 |
| Nenhum | 102 | 102 |
| Estado | provisório | provisório |

Linha de base: usada (lb-20261012-082703-vistorias-b9fcc0)

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
| Uso do oráculo | ausente (confirmado) | usado com erros |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 22 (ponte MCP do oráculo) |
| Protocolo | unverified | unverified |
| Ferramentas anunciadas | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for, get\_ds\_rules, get\_design\_tokens, get\_emag\_rules, get\_pag… |
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_snapshot, browser\_console\_messages, browser\_press\_key, browser\_click, browser\_take\_screenshot, browser\_navigate\_back, browser\_type, browser\_wait\_for | browser\_navigate, browser\_evaluate, browser\_snapshot, scan\_page, get\_finding\_details, browser\_take\_screenshot, browser\_click, browser\_press\_key, get\_emag\_rules, get\_ds\_rules, browser\_type |
| Erros de ferramenta | 6 (tool-events.ndjson \(eventos com isError: true\)) | 4 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 8 aprovado(s); falhos: nenhum | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | nenhuma | nenhuma |
| Registro de inspeção | registro indisponível \(pacote findings.v1, anterior ao registro de inspeção\) — não é zero cobertura | registro indisponível \(pacote findings.v1, anterior ao registro de inspeção\) — não é zero cobertura |

O registro de inspeção é declaração do agente sobre o inventário que ele mesmo descobriu; “com evento de ferramenta” só diz que o identificador citado aparece num evento gravado. Não pontua nem decide elegibilidade, e a cobertura da página continua desconhecida.

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 6. Custo e tempo

| | sem | com |
|---|---|---|
| Tempo de relógio (s) | 722 (runner) | 640 (runner) |
| Turnos | 126 (stream-json do cliente \(result.num\_turns\)) | 111 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 125 (ponte MCP) | 110 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 22 (ponte MCP do oráculo) |
| Tokens de entrada | 136 (stream-json do cliente \(result.usage\)) | 148 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 44907 (stream-json do cliente \(result.usage\)) | 40145 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 5325337 (stream-json do cliente \(result.usage\)) | 8006111 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 147041 (stream-json do cliente \(result.usage\)) | 180865 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 3.1400793999999994 (estimativa do cliente \(result.total\_cost\_usd\)) | 3.8516342000000003 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 173 cartão(ões), estimativa 1038 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 7. Detalhes e evidências

**sem** (20261012-082722-vistorias-sem-3826): [pacote](../../../../../../restauracoes/20261012-082722-vistorias-sem-3826/2026-10-12T08-27-22Z__vistorias__opus__sem__rep-10__20261012-082722-vistorias-sem-3826) · [run.json](../../../../../../restauracoes/20261012-082722-vistorias-sem-3826/2026-10-12T08-27-22Z__vistorias__opus__sem__rep-10__20261012-082722-vistorias-sem-3826/run.json) · [findings.json](../../../../../../restauracoes/20261012-082722-vistorias-sem-3826/2026-10-12T08-27-22Z__vistorias__opus__sem__rep-10__20261012-082722-vistorias-sem-3826/findings.json) · [isolation.json](../../../../../../restauracoes/20261012-082722-vistorias-sem-3826/2026-10-12T08-27-22Z__vistorias__opus__sem__rep-10__20261012-082722-vistorias-sem-3826/isolation.json) · [eventos de ferramenta](../../../../../../restauracoes/20261012-082722-vistorias-sem-3826/2026-10-12T08-27-22Z__vistorias__opus__sem__rep-10__20261012-082722-vistorias-sem-3826/tool-events.ndjson) · — · evidências: [#1](../../../../../../restauracoes/20261012-082722-vistorias-sem-3826/2026-10-12T08-27-22Z__vistorias__opus__sem__rep-10__20261012-082722-vistorias-sem-3826/evidence/aderencia-oraculo.json) [#2](../../../../../../restauracoes/20261012-082722-vistorias-sem-3826/2026-10-12T08-27-22Z__vistorias__opus__sem__rep-10__20261012-082722-vistorias-sem-3826/evidence/cliente.json) [#3](../../../../../../restauracoes/20261012-082722-vistorias-sem-3826/2026-10-12T08-27-22Z__vistorias__opus__sem__rep-10__20261012-082722-vistorias-sem-3826/evidence/container-config.json) [#4](../../../../../../restauracoes/20261012-082722-vistorias-sem-3826/2026-10-12T08-27-22Z__vistorias__opus__sem__rep-10__20261012-082722-vistorias-sem-3826/evidence/controles-positivos.json) [#5](../../../../../../restauracoes/20261012-082722-vistorias-sem-3826/2026-10-12T08-27-22Z__vistorias__opus__sem__rep-10__20261012-082722-vistorias-sem-3826/evidence/mcp-config.json) [#6](../../../../../../restauracoes/20261012-082722-vistorias-sem-3826/2026-10-12T08-27-22Z__vistorias__opus__sem__rep-10__20261012-082722-vistorias-sem-3826/evidence/preflight.json) [#7](../../../../../../restauracoes/20261012-082722-vistorias-sem-3826/2026-10-12T08-27-22Z__vistorias__opus__sem__rep-10__20261012-082722-vistorias-sem-3826/evidence/prompt.txt) [#8](../../../../../../restauracoes/20261012-082722-vistorias-sem-3826/2026-10-12T08-27-22Z__vistorias__opus__sem__rep-10__20261012-082722-vistorias-sem-3826/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../../restauracoes/20261012-082722-vistorias-sem-3826/2026-10-12T08-27-22Z__vistorias__opus__sem__rep-10__20261012-082722-vistorias-sem-3826/evidence/raw/browser/inventory.json) [#10](../../../../../../restauracoes/20261012-082722-vistorias-sem-3826/2026-10-12T08-27-22Z__vistorias__opus__sem__rep-10__20261012-082722-vistorias-sem-3826/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../../restauracoes/20261012-082722-vistorias-sem-3826/2026-10-12T08-27-22Z__vistorias__opus__sem__rep-10__20261012-082722-vistorias-sem-3826/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../../restauracoes/20261012-082722-vistorias-sem-3826/2026-10-12T08-27-22Z__vistorias__opus__sem__rep-10__20261012-082722-vistorias-sem-3826/evidence/raw/collector/events.ndjson) [#13](../../../../../../restauracoes/20261012-082722-vistorias-sem-3826/2026-10-12T08-27-22Z__vistorias__opus__sem__rep-10__20261012-082722-vistorias-sem-3826/evidence/raw/collector/findings.json) [#14](../../../../../../restauracoes/20261012-082722-vistorias-sem-3826/2026-10-12T08-27-22Z__vistorias__opus__sem__rep-10__20261012-082722-vistorias-sem-3826/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../../restauracoes/20261012-082722-vistorias-sem-3826/2026-10-12T08-27-22Z__vistorias__opus__sem__rep-10__20261012-082722-vistorias-sem-3826/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../../restauracoes/20261012-082722-vistorias-sem-3826/2026-10-12T08-27-22Z__vistorias__opus__sem__rep-10__20261012-082722-vistorias-sem-3826/evidence/raw/probe/probe.json) [#17](../../../../../../restauracoes/20261012-082722-vistorias-sem-3826/2026-10-12T08-27-22Z__vistorias__opus__sem__rep-10__20261012-082722-vistorias-sem-3826/evidence/raw/probe/sonda-escrita-1791793666459.txt) [#18](../../../../../../restauracoes/20261012-082722-vistorias-sem-3826/2026-10-12T08-27-22Z__vistorias__opus__sem__rep-10__20261012-082722-vistorias-sem-3826/evidence/raw/task/mcp.json) [#19](../../../../../../restauracoes/20261012-082722-vistorias-sem-3826/2026-10-12T08-27-22Z__vistorias__opus__sem__rep-10__20261012-082722-vistorias-sem-3826/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../../restauracoes/20261012-082722-vistorias-sem-3826/2026-10-12T08-27-22Z__vistorias__opus__sem__rep-10__20261012-082722-vistorias-sem-3826/evidence/logs/agent.log) [#2](../../../../../../restauracoes/20261012-082722-vistorias-sem-3826/2026-10-12T08-27-22Z__vistorias__opus__sem__rep-10__20261012-082722-vistorias-sem-3826/evidence/logs/browser.log) [#3](../../../../../../restauracoes/20261012-082722-vistorias-sem-3826/2026-10-12T08-27-22Z__vistorias__opus__sem__rep-10__20261012-082722-vistorias-sem-3826/evidence/logs/collector.log) [#4](../../../../../../restauracoes/20261012-082722-vistorias-sem-3826/2026-10-12T08-27-22Z__vistorias__opus__sem__rep-10__20261012-082722-vistorias-sem-3826/evidence/logs/egress-provider.log) [#5](../../../../../../restauracoes/20261012-082722-vistorias-sem-3826/2026-10-12T08-27-22Z__vistorias__opus__sem__rep-10__20261012-082722-vistorias-sem-3826/evidence/logs/egress-site.log) [#6](../../../../../../restauracoes/20261012-082722-vistorias-sem-3826/2026-10-12T08-27-22Z__vistorias__opus__sem__rep-10__20261012-082722-vistorias-sem-3826/evidence/logs/probe.log) [#7](../../../../../../restauracoes/20261012-082722-vistorias-sem-3826/2026-10-12T08-27-22Z__vistorias__opus__sem__rep-10__20261012-082722-vistorias-sem-3826/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (29; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| br-header | wcag:1.1.1 | A imagem do logotipo gov.br, no shadow DOM de br-header, tem alt=&quot;logo&quot; \(árvore de acessibilidade: img &quot;logo&quot;\). |
| #avatar-dropdown-trigger | wcag:2.5.3 | O botão mostra o texto &quot;Olá, Usuária de Teste, SUPERVISOR&quot;, mas aria-label=&quot;Avatar com dropdown&quot; substitui esse texto no nome acessível. |
| br-header | incerta | O botão &quot;Menu&quot; \(#navigation, no shadow DOM de br-header\) tem data-target=&quot;#main-navigation&quot;, mas esse elemento não existe no documento nem no shadow root. Ao clicar, nada abre nem muda \(sem aria-expanded\). |
| br-breadcrumb | wcag:4.1.2 | No shadow DOM da trilha, o link Home \(&lt;a href=&quot;/portal-mpa&quot;&gt;\) contém um &lt;button class=&quot;br-button small circle&quot;&gt;: controle interativo aninhado em outro \(a árvore mostra link &quot;Home&quot; &gt; button &quot;Home&quot;\). |
| br-breadcrumb | incerta | A trilha é renderizada como &lt;div class=&quot;br-breadcrumb&quot;&gt;&lt;ul class=&quot;crumb-list&quot;&gt;, sem elemento nav nem rótulo de região. |
| pnip-propesc-vistorias h2 | emag:1.3 | O único cabeçalho da página é &lt;h2&gt; &quot;Vistorias&quot;. Não há &lt;h1&gt; \(o título do sistema no cabeçalho é um div.header-title\). |
| .tab-nav .tab-item button | wcag:4.1.2 | A aba selecionada \(Tramitando\) só é indicada pela classe &quot;active&quot; no li; os botões têm só id e type, sem aria-selected, aria-current nem role=&quot;tab&quot;. |
| pnip-filter-panel .br-tag.bg-pure-0 | wcag:2.1.1 | Os gatilhos de filtro Cidade, Porto, Vistoriador e Status são &lt;span class=&quot;br-tag ...&quot; style=&quot;cursor:pointer&quot;&gt; sem tabindex nem role. Funcionam com o mouse, mas o Tab passa direto da busca de Concluídos para o campo de … |
| pnip-filter-panel .br-select .br-item | wcag:2.1.1 | As opções da lista de filtro \(ex.: &quot;Areia Branca do Leste&quot;, &quot;Barra Nova&quot;\) são div.br-item &gt; div.br-radio &gt; label, sem input, role nem tabindex \(tabIndex -1\). Só respondem ao clique do mouse. |
| pnip-filter-panel .br-tag button | wcag:4.1.2 | Depois de aplicar um filtro, a tag &quot;Barra Nova&quot; tem um botão de remover \(&lt;button class=&quot;br-button inverted circle&quot;&gt;&lt;i class=&quot;fas fa-times&quot;&gt;&lt;/i&gt;&lt;/button&gt;\) sem texto, aria-label nem title: nome acessível vazio. |
| pnip-search-table-utils br-input#search | emag:6.2 | O campo de pesquisa \(input#search no shadow DOM\) não tem label. O único texto identificador é o placeholder &quot;Pesquise aqui ...&quot;, que some ao digitar. |
| br-input\[type=&quot;date&quot;\] | wcag:4.1.2 | Os dois campos de data \(input type=&quot;date&quot; no shadow DOM de br-input\) não têm nome acessível \(a árvore mostra &quot;textbox&quot; sem nome\). Os textos &quot;Data da vistoria:&quot; e &quot;até&quot; são spans soltos, não associados. |
| .br-tag.primary-pastel-01 | wcag:1.4.3 | O texto &quot;Nenhum filtro de data aplicado&quot; \(14px, peso 400\) é rgb\(255,255,255\) sobre rgb\(197,212,235\): contraste de 1,50:1. |
| .col.align-content-center .br-tag.interaction &gt; button | wcag:4.1.2 | Depois de preencher a data inicial, a tag &quot;Exibindo vistorias a partir de 01/03/2026&quot; tem um botão de remover só com ícone \(fa-times com aria-hidden\) e sem aria-label/title: nome acessível vazio. |
| table input\[type=&quot;checkbox&quot;\] | wcag:4.1.2 | As caixas de seleção do cabeçalho \(selecionar todas\) e de cada linha não têm label, aria-label nem title \(a árvore mostra &quot;checkbox&quot; sem nome\). |
| td br-button\[icon=&quot;eye&quot;\] | wcag:4.1.2 | O botão só com ícone de olho em cada linha \(abre o detalhe/agendamento da vistoria\) não tem nome: o botão interno tem aria-label=&quot;&quot; e o host não tem title; o ícone tem aria-hidden. |
| .bg-blue-40 &gt; .text-secondary-01 | wcag:1.4.3 | O status &quot;Vistoria agendada&quot; \(14px, peso 500\) é rgb\(255,255,255\) sobre rgb\(79,151,209\): contraste de 3,14:1. |
| .bg-secondary-06 &gt; .text-secondary-01 | wcag:1.4.3 | Na aba Agendar, o status &quot;Vistoria pré agendada&quot; \(14px, peso 500\) é rgb\(255,255,255\) sobre rgb\(136,136,136\): contraste de 3,54:1. |
| td br-button\[title\] | wcag:2.4.3 | Ao fechar pelo teclado \(Escape\) os diálogos abertos pelos botões &quot;Atribuir vistoriador&quot;, &quot;Excluir vistoria&quot; e &quot;Notificar solicitante da vistoria&quot;, o foco vai para o &lt;body&gt; em vez de voltar ao botão que abriu o diálogo. |
| #swal2-select | wcag:4.1.2 | No diálogo &quot;Atribuir Vistoriador&quot;, o &lt;select id=&quot;swal2-select&quot;&gt; recebe o foco inicial, mas não tem label, aria-label nem aria-labelledby. O texto &quot;Selecione um Vistoriador&quot; está só no aria-describedby do diálogo. |
| govbr-custom-pagination a.page, #total, #page | wcag:2.4.3 | Ao ativar pelo teclado um link de página \(Enter em &quot;1&quot;\) ou escolher uma opção nos seletores &quot;Exibir&quot; \(#total\) e &quot;Página&quot; \(#page\) com setas + Enter, a lista é recarregada e o foco vai para o &lt;body&gt;. |
| #total, #page | incerta | Os seletores &quot;Exibir&quot; e &quot;Página&quot; são input type=&quot;text&quot; expostos como textbox. Ao receber foco, abrem uma lista \(.br-list\) de opções, sem role=&quot;combobox&quot;, aria-expanded nem aria-controls. |
| govbr-custom-pagination nav\[aria-label=&quot;Paginação de resultados&quot;\] li &gt; li | wcag:1.3.1 | Na paginação, cada link de página está em &lt;li&gt; aninhado diretamente em outro &lt;li&gt; \(ul &gt; li &gt; li &gt; a\); a árvore mostra listitem dentro de listitem. |
| govbr-custom-pagination a.page.active | wcag:1.3.1 | A página atual só é indicada pela classe &quot;active&quot; \(fundo azul\). O link não tem aria-current e o href é &quot;javascript:void\(0\)&quot;. |
| pnip-propesc-vistorias .d-flex.flex-column.justify-content-center &gt; p | wcag:4.1.3 | Uma busca sem resultados troca a tabela pela mensagem &lt;p&gt;Não há vistorias para exibir.&lt;/p&gt;, fora de qualquer região viva \(sem role=&quot;status&quot;/aria-live\), e o foco continua na busca. |
| #avatar-menu .text-blue-vivid-60 | wcag:2.1.1 | No menu do avatar, &quot;Trocar unidade&quot; é um &lt;span style=&quot;cursor:pointer&quot;&gt; sem tabindex nem role: Tab vai do gatilho direto para &quot;Sair&quot;. |
| #avatar-menu .dropdown-button img | wcag:1.1.1 | No botão &quot;Sair&quot;, &lt;img src=&quot;../../../assets/images/exit-icon.png&quot;&gt; não tem atributo alt. |
| #avatar-menu | wcag:4.1.2 | O container tem role=&quot;menu&quot;, mas nenhum descendente tem role=&quot;menuitem&quot;: contém divs, spans e um &lt;button&gt; comum. |
| table | incerta | A tabela tem 1272px de largura dentro de um container de 1096px \(.br-table sem overflow\). A página fica com scrollWidth 1364px para viewport de 1280px, e a coluna de ações \(botão &quot;Notificar&quot;\) sai da área visível. |

**com** (20261012-084440-vistorias-com-8c64): [pacote](../../../../../../restauracoes/20261012-084440-vistorias-com-8c64/2026-10-12T08-44-40Z__vistorias__opus__com__rep-10__20261012-084440-vistorias-com-8c64) · [run.json](../../../../../../restauracoes/20261012-084440-vistorias-com-8c64/2026-10-12T08-44-40Z__vistorias__opus__com__rep-10__20261012-084440-vistorias-com-8c64/run.json) · [findings.json](../../../../../../restauracoes/20261012-084440-vistorias-com-8c64/2026-10-12T08-44-40Z__vistorias__opus__com__rep-10__20261012-084440-vistorias-com-8c64/findings.json) · [isolation.json](../../../../../../restauracoes/20261012-084440-vistorias-com-8c64/2026-10-12T08-44-40Z__vistorias__opus__com__rep-10__20261012-084440-vistorias-com-8c64/isolation.json) · [eventos de ferramenta](../../../../../../restauracoes/20261012-084440-vistorias-com-8c64/2026-10-12T08-44-40Z__vistorias__opus__com__rep-10__20261012-084440-vistorias-com-8c64/tool-events.ndjson) · — · evidências: [#1](../../../../../../restauracoes/20261012-084440-vistorias-com-8c64/2026-10-12T08-44-40Z__vistorias__opus__com__rep-10__20261012-084440-vistorias-com-8c64/evidence/aderencia-oraculo.json) [#2](../../../../../../restauracoes/20261012-084440-vistorias-com-8c64/2026-10-12T08-44-40Z__vistorias__opus__com__rep-10__20261012-084440-vistorias-com-8c64/evidence/cliente.json) [#3](../../../../../../restauracoes/20261012-084440-vistorias-com-8c64/2026-10-12T08-44-40Z__vistorias__opus__com__rep-10__20261012-084440-vistorias-com-8c64/evidence/container-config.json) [#4](../../../../../../restauracoes/20261012-084440-vistorias-com-8c64/2026-10-12T08-44-40Z__vistorias__opus__com__rep-10__20261012-084440-vistorias-com-8c64/evidence/controles-positivos.json) [#5](../../../../../../restauracoes/20261012-084440-vistorias-com-8c64/2026-10-12T08-44-40Z__vistorias__opus__com__rep-10__20261012-084440-vistorias-com-8c64/evidence/mcp-config.json) [#6](../../../../../../restauracoes/20261012-084440-vistorias-com-8c64/2026-10-12T08-44-40Z__vistorias__opus__com__rep-10__20261012-084440-vistorias-com-8c64/evidence/preflight.json) [#7](../../../../../../restauracoes/20261012-084440-vistorias-com-8c64/2026-10-12T08-44-40Z__vistorias__opus__com__rep-10__20261012-084440-vistorias-com-8c64/evidence/prompt.txt) [#8](../../../../../../restauracoes/20261012-084440-vistorias-com-8c64/2026-10-12T08-44-40Z__vistorias__opus__com__rep-10__20261012-084440-vistorias-com-8c64/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../../restauracoes/20261012-084440-vistorias-com-8c64/2026-10-12T08-44-40Z__vistorias__opus__com__rep-10__20261012-084440-vistorias-com-8c64/evidence/raw/browser/inventory.json) [#10](../../../../../../restauracoes/20261012-084440-vistorias-com-8c64/2026-10-12T08-44-40Z__vistorias__opus__com__rep-10__20261012-084440-vistorias-com-8c64/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../../restauracoes/20261012-084440-vistorias-com-8c64/2026-10-12T08-44-40Z__vistorias__opus__com__rep-10__20261012-084440-vistorias-com-8c64/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../../restauracoes/20261012-084440-vistorias-com-8c64/2026-10-12T08-44-40Z__vistorias__opus__com__rep-10__20261012-084440-vistorias-com-8c64/evidence/raw/collector/events.ndjson) [#13](../../../../../../restauracoes/20261012-084440-vistorias-com-8c64/2026-10-12T08-44-40Z__vistorias__opus__com__rep-10__20261012-084440-vistorias-com-8c64/evidence/raw/collector/findings.json) [#14](../../../../../../restauracoes/20261012-084440-vistorias-com-8c64/2026-10-12T08-44-40Z__vistorias__opus__com__rep-10__20261012-084440-vistorias-com-8c64/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../../restauracoes/20261012-084440-vistorias-com-8c64/2026-10-12T08-44-40Z__vistorias__opus__com__rep-10__20261012-084440-vistorias-com-8c64/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../../restauracoes/20261012-084440-vistorias-com-8c64/2026-10-12T08-44-40Z__vistorias__opus__com__rep-10__20261012-084440-vistorias-com-8c64/evidence/raw/oracle/inventory.json) [#17](../../../../../../restauracoes/20261012-084440-vistorias-com-8c64/2026-10-12T08-44-40Z__vistorias__opus__com__rep-10__20261012-084440-vistorias-com-8c64/evidence/raw/oracle/oracle-telemetry.ndjson) [#18](../../../../../../restauracoes/20261012-084440-vistorias-com-8c64/2026-10-12T08-44-40Z__vistorias__opus__com__rep-10__20261012-084440-vistorias-com-8c64/evidence/raw/oracle/tool-events.ndjson) [#19](../../../../../../restauracoes/20261012-084440-vistorias-com-8c64/2026-10-12T08-44-40Z__vistorias__opus__com__rep-10__20261012-084440-vistorias-com-8c64/evidence/raw/probe/probe.json) [#20](../../../../../../restauracoes/20261012-084440-vistorias-com-8c64/2026-10-12T08-44-40Z__vistorias__opus__com__rep-10__20261012-084440-vistorias-com-8c64/evidence/raw/probe/sonda-escrita-1791794708227.txt) [#21](../../../../../../restauracoes/20261012-084440-vistorias-com-8c64/2026-10-12T08-44-40Z__vistorias__opus__com__rep-10__20261012-084440-vistorias-com-8c64/evidence/raw/task/mcp.json) [#22](../../../../../../restauracoes/20261012-084440-vistorias-com-8c64/2026-10-12T08-44-40Z__vistorias__opus__com__rep-10__20261012-084440-vistorias-com-8c64/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../../restauracoes/20261012-084440-vistorias-com-8c64/2026-10-12T08-44-40Z__vistorias__opus__com__rep-10__20261012-084440-vistorias-com-8c64/evidence/logs/agent.log) [#2](../../../../../../restauracoes/20261012-084440-vistorias-com-8c64/2026-10-12T08-44-40Z__vistorias__opus__com__rep-10__20261012-084440-vistorias-com-8c64/evidence/logs/browser.log) [#3](../../../../../../restauracoes/20261012-084440-vistorias-com-8c64/2026-10-12T08-44-40Z__vistorias__opus__com__rep-10__20261012-084440-vistorias-com-8c64/evidence/logs/collector.log) [#4](../../../../../../restauracoes/20261012-084440-vistorias-com-8c64/2026-10-12T08-44-40Z__vistorias__opus__com__rep-10__20261012-084440-vistorias-com-8c64/evidence/logs/egress-provider.log) [#5](../../../../../../restauracoes/20261012-084440-vistorias-com-8c64/2026-10-12T08-44-40Z__vistorias__opus__com__rep-10__20261012-084440-vistorias-com-8c64/evidence/logs/egress-site.log) [#6](../../../../../../restauracoes/20261012-084440-vistorias-com-8c64/2026-10-12T08-44-40Z__vistorias__opus__com__rep-10__20261012-084440-vistorias-com-8c64/evidence/logs/oracle.log) [#7](../../../../../../restauracoes/20261012-084440-vistorias-com-8c64/2026-10-12T08-44-40Z__vistorias__opus__com__rep-10__20261012-084440-vistorias-com-8c64/evidence/logs/probe.log) [#8](../../../../../../restauracoes/20261012-084440-vistorias-com-8c64/2026-10-12T08-44-40Z__vistorias__opus__com__rep-10__20261012-084440-vistorias-com-8c64/evidence/logs/screens.log) · [binding](analysis-binding.com.json)

Achados enviados (35; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| br-button\[icon=&quot;eye&quot;\] | button-name | Botão 'visualizar' \(ícone fa-eye\) de cada linha da tabela: o &lt;button&gt; interno tem aria-label=&quot;&quot; e não tem title nem texto; nome acessível vazio \(aparece como 'button' sem nome na árvore de acessibilidade\). Ocorre em tod… |
| tbody input\[type=&quot;checkbox&quot;\] | label | Checkboxes de seleção de cada linha não têm &lt;label&gt;, aria-label nem aria-labelledby; nome acessível vazio. |
| thead input\[type=&quot;checkbox&quot;\] | label | Checkbox 'selecionar todos' no cabeçalho da tabela sem nome acessível \(e o &lt;th&gt; que o contém fica sem texto\). |
| br-input\[type=&quot;date&quot;\] | label | Os dois campos de data \(input type=date #br-input-8 e #br-input-9 no shadow DOM\) não têm label associado; o texto visível 'Data da vistoria:' é um &lt;span&gt; e 'até' é texto solto, sem vínculo programático. |
| br-input#search | emag:6.2 | Campo de pesquisa da tabela tem apenas placeholder 'Pesquise aqui ...' como identificação; sem &lt;label&gt;, aria-label ou aria-labelledby. |
| pnip-status-solicitacao-utils .bg-blue-40 &gt; .text-secondary-01 | color-contrast | Tag de status 'Vistoria agendada': texto #ffffff sobre fundo #4f97d1, 14px normal, contraste 3,14:1. |
| pnip-status-solicitacao-utils .bg-secondary-06 &gt; .text-secondary-01 | color-contrast | Tag de status 'Vistoria pré agendada' na aba Agendar: texto #ffffff sobre fundo #888888, 14px normal, contraste 3,54:1. |
| .br-tag.primary-pastel-01 | color-contrast | Tag informativa 'Nenhum filtro de data aplicado': texto #ffffff sobre fundo #c5d4eb, 14px, contraste 1,5:1. |
| thead th:last-child | empty-table-header | Cabeçalho da coluna de ações \(&lt;th scope=col&gt;\) está vazio; leitores de tela não anunciam o propósito da coluna. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] li &gt; li | listitem | Na paginação, cada número de página é um &lt;li&gt; aninhado diretamente dentro de outro &lt;li&gt; \(li &gt; li\), sem &lt;ul&gt;/&lt;ol&gt; pai. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] a.page.active | wcag:1.3.1 | A página atual \('1'\) é indicada só pela classe visual 'active'; o link não tem aria-current=&quot;page&quot; e usa href=&quot;javascript:void\(0\)&quot;. |
| html | page-has-heading-one | A página não tem &lt;h1&gt;; o único título é &lt;h2&gt;Vistorias&lt;/h2&gt;. |
| html | ds-page-skip-link | O primeiro link da página é o 'Home' do breadcrumb \(href=&quot;/portal-mpa&quot;\); não há link de salto para o conteúdo. O primeiro Tab vai para o botão Menu do cabeçalho. |
| html | ds-page-footer | Não há .br-footer nem &lt;br-footer&gt; no documento \(DOM e shadow roots\). |
| title | wcag:2.4.2 | O título do documento é apenas 'PNIP' \(o mesmo também na tela de detalhe agendar-vistoria/&lt;id&gt;\); não identifica a página 'Vistorias'. |
| br-breadcrumb | ds-structure-breadcrumb-tag | O breadcrumb renderiza &lt;div class=&quot;br-breadcrumb&quot;&gt; no shadow DOM; não há &lt;nav&gt; nem landmark de navegação. |
| br-breadcrumb | wcag:4.1.2 | O item 'Home' do breadcrumb é um &lt;a href=&quot;/portal-mpa&quot;&gt; contendo um &lt;button aria-label=&quot;&quot;&gt; \(elemento interativo aninhado; link exposto com um botão filho na árvore de acessibilidade\). |
| br-header | incerta | O botão 'Menu' \(#navigation, data-target=&quot;#main-navigation&quot;\) não faz nada ao ser clicado: não existe elemento #main-navigation no documento nem em shadow roots, e nenhum menu aparece. |
| br-header | wcag:1.1.1 | A imagem do logotipo gov.br no cabeçalho tem alt=&quot;logo&quot;, que não informa o conteúdo/finalidade. |
| #avatar-dropdown-trigger | wcag:2.5.3 | O botão do usuário mostra o texto 'Olá, Usuária de Teste, SUPERVISOR', mas seu nome acessível é aria-label=&quot;Avatar com dropdown&quot;, que não contém o texto visível. |
| #avatar-menu | aria-required-children | Com o menu do avatar aberto, o contêiner tem role=&quot;menu&quot;, mas os filhos não são menuitem: há um &lt;button&gt; 'Sair' e divs/spans sem papel. |
| #avatar-menu img | image-alt | A imagem do item 'Sair' \(exit-icon.png\) não tem atributo alt. |
| #avatar-menu | region | O menu do avatar aberto \(e o bloco do usuário\) fica fora de qualquer landmark; o banner fica só dentro do br-header. |
| #avatar-menu .text-center &gt; span | wcag:2.1.1 | 'Trocar unidade' é um &lt;span&gt; com cursor:pointer, que navega para /portal-mpa ao ser clicado, mas não tem tabindex nem papel: com o menu aberto, o Tab pula do botão do avatar direto para 'Sair'. |
| pnip-filter-panel span.br-tag.bg-pure-0 | wcag:2.1.1 | As tags de filtro 'Cidade', 'Porto', 'Vistoriador' e 'Status' são &lt;span&gt; com cursor:pointer, que abrem a lista de opções ao clique, mas têm tabIndex -1, nenhum papel e nenhum nome de controle; não recebem foco por tecla… |
| pnip-filter-panel .br-radio | wcag:2.1.1 | As opções da lista de filtro \(ex.: 'Areia Branca do Leste', 'Barra Nova'\) são &lt;div class=br-radio&gt; com apenas &lt;label&gt;, sem input/role; não são focáveis e só podem ser selecionadas com mouse. |
| pnip-filter-panel span.br-tag &gt; button.inverted | button-name | O botão '×' para remover o filtro aplicado \(chip 'Barra Nova'/'Areia Branca do Leste'\) contém apenas o ícone fa-times, sem aria-label ou texto; nome acessível vazio. |
| .tab-panel &gt; .col &gt; .row &gt; .col &gt; span.br-tag &gt; button.inverted | wcag:4.1.2 | Após preencher a data, aparece o chip 'Exibindo vistorias a partir de 01/01/2026' com botão '×' \(só o ícone fa-times aria-hidden\), sem aria-label/texto: nome acessível vazio. |
| .tab-nav button | wcag:4.1.2 | As abas Agendar/Tramitando/Concluídos indicam a aba ativa só pela classe 'active' no &lt;li&gt;; os botões não têm aria-selected, aria-current nem papel de aba, e o estado selecionado não é exposto. |
| #swal2-select | select-name | No diálogo 'Atribuir Vistoriador', o &lt;select&gt; não tem label associado; o texto 'Selecione um Vistoriador' é um div \(#swal2-html-container\) sem vínculo com o campo. |
| br-button\[title=&quot;Atribuir vistoriador&quot;\] | wcag:2.4.3 | Ao fechar com Esc o diálogo aberto pelo botão de ação da linha, o foco vai para &lt;body&gt; \(document.activeElement = body\), em vez de voltar ao botão que abriu o diálogo. |
| #swal2-html-container input\[type=&quot;checkbox&quot;\] | emag:6.7 | No diálogo 'Exportar Vistorias', os 5 checkboxes de status estão em divs soltos; o título do grupo 'Status:' é um &lt;span&gt;&lt;strong&gt;, sem fieldset/legend nem role=group. |
| pnip-propesc-vistorias table | incerta | Em 1280px a tabela \(largura 1272px a partir de x=92\) ultrapassa o contêiner .br-table \(clientWidth 1096\) e a janela: documentElement.scrollWidth 1364 &gt; 1280. A página inteira rola horizontalmente e o último botão de açã… |
| pnip-search-table-utils button\[aria-label=&quot;Buscar&quot;\] | ds-token-spacing | margin-top: -38px inline no botão Buscar \(fora da escala de espaçamento do DS\). |
| pnip-filter-panel &gt; div &gt; div:nth-of-type\(5\) &gt; button | ds-token-spacing | margin-top: -5px inline no botão 'Limpar Filtro' \(fora da escala de espaçamento do DS\). |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `19d5ea1f92ebbe64cf2265f512d0041fe88e1dc8e3700b822002c3344897eab4`

