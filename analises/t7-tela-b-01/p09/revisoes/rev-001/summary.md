# Resumo da análise — Vistorias (vistorias)

Revisão 1 · gerado em 2026-10-12T14:41:29.421Z (UTC)

## 1. Status técnico

Análise: **pronta**

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261009-052835-vistorias-sem-e268 | sem | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 36 cartão(ões), nenhum decidido |
| 20261009-051236-vistorias-com-74a3 | com | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 32 cartão(ões), nenhum decidido |

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
| Início (UTC) | 2026-10-09T05:28:59Z | 2026-10-09T05:13:04Z |
| Início (local) | 09/10/2026, 02:28:59 (horário de Brasília) | 09/10/2026, 02:13:04 (horário de Brasília) |
| Commit do harness | 7f189a9a0984459418e210aa1453acbee54e1160 | 7f189a9a0984459418e210aa1453acbee54e1160 |
| Repetição · tentativa | 9 · 1 | 9 · 1 |
| Campanha · slot · par | t7-tela-b-01 · p09-sem · p09 | t7-tela-b-01 · p09-com · p09 |

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
| Cartões pendentes de revisão | 36 | 32 |
| Maturidade | aguardando revisão — 36 cartão(ões), nenhum decidido | aguardando revisão — 32 cartão(ões), nenhum decidido |
| Entra na comparação principal | sim | sim |
| Achados enviados | 36 | 32 |

Recall e precisão só aparecem com a revisão fechada; enquanto houver cartão pendente ficam “indisponível” (nunca 0). “Achados enviados = 0” é um resultado válido (o agente olhou e não alegou nada); submissão recusada ou ausente é outra coisa.

Linha de base determinística (união das varreduras comparáveis), por unidade da referência:

| Unidades | sem | com |
|---|---|---|
| Agente e linha de base | 0 | 0 |
| Só o agente | 0 | 0 |
| Só a linha de base | 0 | 0 |
| Nenhum | 102 | 102 |
| Estado | provisório | provisório |

Linha de base: usada (lb-20261009-051200-vistorias-d5d710)

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
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 30 (ponte MCP do oráculo) |
| Protocolo | unverified | unverified |
| Ferramentas anunciadas | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for, get\_ds\_rules, get\_design\_tokens, get\_emag\_rules, get\_pag… |
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_snapshot, browser\_take\_screenshot, browser\_console\_messages, browser\_press\_key, browser\_click, browser\_wait\_for, browser\_navigate\_back, browser\_type | browser\_navigate, browser\_evaluate, browser\_snapshot, scan\_page, get\_finding\_details, browser\_click, get\_ds\_rules, browser\_press\_key, browser\_take\_screenshot, verify\_finding, browser\_type, browser\_fill\_form, get\_page\_rules |
| Erros de ferramenta | 6 (tool-events.ndjson \(eventos com isError: true\)) | 6 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 8 aprovado(s); falhos: nenhum | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | nenhuma | nenhuma |

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 6. Custo e tempo

| | sem | com |
|---|---|---|
| Tempo de relógio (s) | 834 (runner) | 674 (runner) |
| Turnos | 172 (stream-json do cliente \(result.num\_turns\)) | 127 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 171 (ponte MCP) | 126 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 30 (ponte MCP do oráculo) |
| Tokens de entrada | 152 (stream-json do cliente \(result.usage\)) | 168 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 53660 (stream-json do cliente \(result.usage\)) | 46352 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 6705520 (stream-json do cliente \(result.usage\)) | 9568445 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 167577 (stream-json do cliente \(result.usage\)) | 200129 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 3.7555279999999995 (estimativa do cliente \(result.total\_cost\_usd\)) | 4.442433 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 177 cartão(ões), estimativa 1062 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 7. Detalhes e evidências

**sem** (20261009-052835-vistorias-sem-e268): [pacote](../../../../../restauracoes/20261009-052835-vistorias-sem-e268/2026-10-09T05-28-35Z__vistorias__opus__sem__rep-09__20261009-052835-vistorias-sem-e268) · [run.json](../../../../../restauracoes/20261009-052835-vistorias-sem-e268/2026-10-09T05-28-35Z__vistorias__opus__sem__rep-09__20261009-052835-vistorias-sem-e268/run.json) · [findings.json](../../../../../restauracoes/20261009-052835-vistorias-sem-e268/2026-10-09T05-28-35Z__vistorias__opus__sem__rep-09__20261009-052835-vistorias-sem-e268/findings.json) · [isolation.json](../../../../../restauracoes/20261009-052835-vistorias-sem-e268/2026-10-09T05-28-35Z__vistorias__opus__sem__rep-09__20261009-052835-vistorias-sem-e268/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261009-052835-vistorias-sem-e268/2026-10-09T05-28-35Z__vistorias__opus__sem__rep-09__20261009-052835-vistorias-sem-e268/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261009-052835-vistorias-sem-e268/2026-10-09T05-28-35Z__vistorias__opus__sem__rep-09__20261009-052835-vistorias-sem-e268/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261009-052835-vistorias-sem-e268/2026-10-09T05-28-35Z__vistorias__opus__sem__rep-09__20261009-052835-vistorias-sem-e268/evidence/cliente.json) [#3](../../../../../restauracoes/20261009-052835-vistorias-sem-e268/2026-10-09T05-28-35Z__vistorias__opus__sem__rep-09__20261009-052835-vistorias-sem-e268/evidence/container-config.json) [#4](../../../../../restauracoes/20261009-052835-vistorias-sem-e268/2026-10-09T05-28-35Z__vistorias__opus__sem__rep-09__20261009-052835-vistorias-sem-e268/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261009-052835-vistorias-sem-e268/2026-10-09T05-28-35Z__vistorias__opus__sem__rep-09__20261009-052835-vistorias-sem-e268/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261009-052835-vistorias-sem-e268/2026-10-09T05-28-35Z__vistorias__opus__sem__rep-09__20261009-052835-vistorias-sem-e268/evidence/preflight.json) [#7](../../../../../restauracoes/20261009-052835-vistorias-sem-e268/2026-10-09T05-28-35Z__vistorias__opus__sem__rep-09__20261009-052835-vistorias-sem-e268/evidence/prompt.txt) [#8](../../../../../restauracoes/20261009-052835-vistorias-sem-e268/2026-10-09T05-28-35Z__vistorias__opus__sem__rep-09__20261009-052835-vistorias-sem-e268/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261009-052835-vistorias-sem-e268/2026-10-09T05-28-35Z__vistorias__opus__sem__rep-09__20261009-052835-vistorias-sem-e268/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261009-052835-vistorias-sem-e268/2026-10-09T05-28-35Z__vistorias__opus__sem__rep-09__20261009-052835-vistorias-sem-e268/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261009-052835-vistorias-sem-e268/2026-10-09T05-28-35Z__vistorias__opus__sem__rep-09__20261009-052835-vistorias-sem-e268/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261009-052835-vistorias-sem-e268/2026-10-09T05-28-35Z__vistorias__opus__sem__rep-09__20261009-052835-vistorias-sem-e268/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261009-052835-vistorias-sem-e268/2026-10-09T05-28-35Z__vistorias__opus__sem__rep-09__20261009-052835-vistorias-sem-e268/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261009-052835-vistorias-sem-e268/2026-10-09T05-28-35Z__vistorias__opus__sem__rep-09__20261009-052835-vistorias-sem-e268/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261009-052835-vistorias-sem-e268/2026-10-09T05-28-35Z__vistorias__opus__sem__rep-09__20261009-052835-vistorias-sem-e268/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261009-052835-vistorias-sem-e268/2026-10-09T05-28-35Z__vistorias__opus__sem__rep-09__20261009-052835-vistorias-sem-e268/evidence/raw/probe/probe.json) [#17](../../../../../restauracoes/20261009-052835-vistorias-sem-e268/2026-10-09T05-28-35Z__vistorias__opus__sem__rep-09__20261009-052835-vistorias-sem-e268/evidence/raw/probe/sonda-escrita-1791523738700.txt) [#18](../../../../../restauracoes/20261009-052835-vistorias-sem-e268/2026-10-09T05-28-35Z__vistorias__opus__sem__rep-09__20261009-052835-vistorias-sem-e268/evidence/raw/task/mcp.json) [#19](../../../../../restauracoes/20261009-052835-vistorias-sem-e268/2026-10-09T05-28-35Z__vistorias__opus__sem__rep-09__20261009-052835-vistorias-sem-e268/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261009-052835-vistorias-sem-e268/2026-10-09T05-28-35Z__vistorias__opus__sem__rep-09__20261009-052835-vistorias-sem-e268/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261009-052835-vistorias-sem-e268/2026-10-09T05-28-35Z__vistorias__opus__sem__rep-09__20261009-052835-vistorias-sem-e268/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261009-052835-vistorias-sem-e268/2026-10-09T05-28-35Z__vistorias__opus__sem__rep-09__20261009-052835-vistorias-sem-e268/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261009-052835-vistorias-sem-e268/2026-10-09T05-28-35Z__vistorias__opus__sem__rep-09__20261009-052835-vistorias-sem-e268/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261009-052835-vistorias-sem-e268/2026-10-09T05-28-35Z__vistorias__opus__sem__rep-09__20261009-052835-vistorias-sem-e268/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261009-052835-vistorias-sem-e268/2026-10-09T05-28-35Z__vistorias__opus__sem__rep-09__20261009-052835-vistorias-sem-e268/evidence/logs/probe.log) [#7](../../../../../restauracoes/20261009-052835-vistorias-sem-e268/2026-10-09T05-28-35Z__vistorias__opus__sem__rep-09__20261009-052835-vistorias-sem-e268/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (36; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| title | wcag:2.4.2 | O título da página é apenas &quot;PNIP&quot; e não identifica a tela \(Vistorias\). |
| h2 | emag:1.3 | A página não tem h1. O título principal &quot;Vistorias&quot; é h2 e é o único cabeçalho da tela. |
| br-header | emag:1.5 | Não há link de salto para o conteúdo. A primeira parada de Tab é o botão &quot;Menu&quot; do cabeçalho, e depois vêm avatar, breadcrumb, Exportar etc. |
| br-header | wcag:1.1.1 | O logotipo gov.br \(img.large-img no shadow DOM de br-header\) tem alt=&quot;logo&quot;, que não descreve a imagem. |
| br-header | incerta | O botão &quot;Menu&quot; \(#navigation no shadow DOM de br-header\) tem data-target=&quot;#main-navigation&quot;, mas esse elemento não existe. Ao clicar, nenhum menu abre e o botão não expõe aria-expanded. |
| #avatar-dropdown-trigger | wcag:2.5.3 | O nome acessível é aria-label=&quot;Avatar com dropdown&quot;, mas o texto visível é &quot;Olá, Usuária de Teste, SUPERVISOR&quot;. O nome não contém o rótulo visível. |
| #avatar-dropdown-trigger | wcag:1.3.1 | A área do usuário \(avatar e saudação\) fica visualmente no cabeçalho, mas está fora do landmark banner: o &lt;header&gt; está no shadow DOM de br-header e o avatar é irmão desse host. |
| .br-avatar &gt; .content | wcag:1.4.3 | A letra &quot;U&quot; do avatar é branca \(#FFF\) sobre laranja rgb\(255,140,0\), com contraste de 2,33:1 \(24,19px, negrito\). |
| #avatar-menu | wcag:1.3.1 | O painel do usuário tem role=&quot;menu&quot;, mas não contém nenhum elemento role=&quot;menuitem&quot;. O conteúdo é composto de textos, um span clicável e um &lt;button&gt;. |
| #avatar-menu .text-center &gt; span\[style\*=&quot;cursor&quot;\] | wcag:2.1.1 | &quot;Trocar unidade&quot; é um &lt;span&gt; com cursor:pointer, sem tabindex e sem papel, e não pode ser alcançado por teclado. |
| #avatar-menu img | wcag:1.1.1 | A imagem exit-icon.png do botão &quot;Sair&quot; não tem atributo alt. |
| br-breadcrumb | wcag:4.1.2 | No breadcrumb \(shadow DOM\), o link Home &lt;a href=&quot;/portal-mpa&quot;&gt; contém um &lt;button&gt;: um controle interativo dentro de outro, com duas paradas de Tab consecutivas \(a e button\). |
| br-breadcrumb | wcag:1.3.1 | O breadcrumb \(div.br-breadcrumb no shadow DOM\) não é um &lt;nav&gt; nem tem aria-label, e o item atual &quot;Vistorias&quot; não tem aria-current. |
| .tab-item.active &gt; button | wcag:4.1.2 | A aba ativa é indicada só pela classe .active no &lt;li&gt;. Os botões das abas não têm aria-selected nem aria-current, e não há role tablist/tab. |
| span.br-tag.interaction | wcag:2.1.1 | Os filtros Cidade, Porto, Vistoriador e Status são &lt;span&gt; com cursor:pointer, sem tabindex, sem papel e sem aria-expanded. A navegação por Tab pula os quatro filtros, que só funcionam com mouse. |
| .br-select.position-absolute .br-radio &gt; label | wcag:2.1.1 | As opções do filtro aberto \(ex.: &quot;Barra Nova&quot;\) são apenas &lt;label&gt; dentro de div.br-radio, sem input, papel ou tabindex. Não dá para focá-las nem selecioná-las por teclado. |
| .br-tag.interaction &gt; button.br-button.circle | wcag:4.1.2 | O botão &quot;×&quot; que remove o filtro aplicado \(ex.: chip &quot;Barra Nova&quot;\) contém apenas o ícone fa-times, sem aria-label nem texto, e fica sem nome acessível. O mesmo ocorre no chip &quot;Exibindo vistorias de … até …&quot; do filtro de … |
| br-input#search | emag:6.2 | O campo de busca não tem &lt;label&gt; nem aria-label. A única identificação é o placeholder &quot;Pesquise aqui ...&quot;, que some ao digitar. |
| br-input\[type=&quot;date&quot;\] | wcag:4.1.2 | Os dois campos de data \(input type=date no shadow DOM\) não têm label, aria-label nem title. O texto &quot;Data da vistoria:&quot; e &quot;até&quot; são spans soltos, e a árvore de acessibilidade mostra os campos como textbox sem nome. |
| span.br-tag.primary-pastel-01 | wcag:1.4.3 | O texto &quot;Nenhum filtro de data aplicado&quot; é branco sobre rgb\(197,212,235\), com contraste de 1,50:1 \(14px\). |
| table input\[type=&quot;checkbox&quot;\] | wcag:4.1.2 | Os 11 checkboxes da tabela \(selecionar todos no cabeçalho e um por linha\) não têm label, aria-label nem title, e não têm nome acessível. |
| thead th:last-child | wcag:1.3.1 | O cabeçalho da coluna de ações é um &lt;th&gt; vazio. |
| table.table | emag:3.9 | A tabela de vistorias não tem &lt;caption&gt; nem outro título associado. |
| .bg-blue-40 &gt; .text-secondary-01 | wcag:1.4.3 | O status &quot;Vistoria agendada&quot; é branco sobre rgb\(79,151,209\), com contraste de 3,14:1 \(14px, peso 500\). |
| .bg-secondary-06 &gt; .text-secondary-01 | wcag:1.4.3 | Na aba Agendar, o status &quot;Vistoria pré agendada&quot; é branco sobre rgb\(136,136,136\), com contraste de 3,54:1 \(14px\). |
| br-button\[icon=&quot;eye&quot;\] | wcag:4.1.2 | O botão de visualizar \(ícone fa-eye\) não tem title, label nem aria-label \(o button interno tem aria-label=&quot;&quot;\). A árvore de acessibilidade mostra &quot;button&quot; sem nome nas abas Tramitando e Concluídos. |
| br-button\[icon=&quot;user-times&quot;\] | wcag:3.2.4 | A mesma função &quot;Atribuir vistoriador&quot; \(o mesmo diálogo abre\) usa o ícone user-plus em linhas sem vistoriador e user-times \(&quot;remover usuário&quot;\) em linhas com vistoriador. A identificação visual é inconsistente e sugere um… |
| br-button\[icon=&quot;trash&quot;\], br-button\[icon=&quot;user-plus&quot;\] | wcag:2.4.3 | Depois de abrir pelo teclado os diálogos &quot;Excluir Vistoria&quot; ou &quot;Atribuir Vistoriador&quot; e fechá-los \(Cancelar ou Esc\), o foco vai para &lt;body&gt; em vez de voltar ao botão que abriu o diálogo. |
| #swal2-select | wcag:4.1.2 | No diálogo &quot;Atribuir Vistoriador&quot;, o &lt;select&gt; de vistoriadores não tem label, aria-label nem aria-labelledby. O texto &quot;Selecione um Vistoriador&quot; é só a descrição do diálogo. |
| #swal2-html-container input\[type=&quot;checkbox&quot;\] | emag:6.7 | No diálogo &quot;Exportar Vistorias&quot;, os cinco checkboxes de status não estão em fieldset/legend nem em role=&quot;group&quot;. O título &quot;Status:&quot; é apenas um &lt;strong&gt;. |
| div.p-5 &gt; div.flex-column &gt; p, div.mt-5.text-center &gt; p | wcag:4.1.3 | Quando a busca ou o filtro de data não retornam resultados, a tabela e a paginação \(que tinha aria-live\) são removidas e aparece &quot;Não há vistorias para exibir.&quot; \(ou &quot;…nesse periodo selecionado.&quot;\), fora de qualquer regiã… |
| .br-pagination a.page.active | wcag:1.3.1 | A página atual da paginação é indicada só pela classe .active, sem aria-current=&quot;page&quot;. |
| .br-pagination li &gt; li | wcag:1.3.1 | Na paginação, cada &lt;li&gt; com link de página está dentro de outro &lt;li&gt; \(ul &gt; li &gt; li\), uma estrutura de lista inválida. |
| .br-pagination a.page | wcag:2.4.3 | Ao ativar uma página com Enter \(ex.: &quot;2&quot;\) ou escolher outro valor em &quot;Exibir&quot;, a paginação é renderizada de novo e o foco vai para &lt;body&gt;. |
| #total, #page | wcag:4.1.2 | Os seletores &quot;Exibir&quot; e &quot;Página&quot; são inputs de texto que abrem uma lista de opções \(ArrowDown\), mas não têm role=&quot;combobox&quot;, aria-expanded nem aria-controls. O foco passa para div.br-item sem papel de opção. |
| table.table | incerta | Em 1280px de largura, a tabela tem 1272px dentro de div.br-table de 1096px, sem overflow próprio. A página rola na horizontal \(scrollWidth 1364px na aba Tramitando\) e os botões &quot;Notificar&quot; ficam cortados à direita da ár… |

**com** (20261009-051236-vistorias-com-74a3): [pacote](../../../../../restauracoes/20261009-051236-vistorias-com-74a3/2026-10-09T05-12-36Z__vistorias__opus__com__rep-09__20261009-051236-vistorias-com-74a3) · [run.json](../../../../../restauracoes/20261009-051236-vistorias-com-74a3/2026-10-09T05-12-36Z__vistorias__opus__com__rep-09__20261009-051236-vistorias-com-74a3/run.json) · [findings.json](../../../../../restauracoes/20261009-051236-vistorias-com-74a3/2026-10-09T05-12-36Z__vistorias__opus__com__rep-09__20261009-051236-vistorias-com-74a3/findings.json) · [isolation.json](../../../../../restauracoes/20261009-051236-vistorias-com-74a3/2026-10-09T05-12-36Z__vistorias__opus__com__rep-09__20261009-051236-vistorias-com-74a3/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261009-051236-vistorias-com-74a3/2026-10-09T05-12-36Z__vistorias__opus__com__rep-09__20261009-051236-vistorias-com-74a3/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261009-051236-vistorias-com-74a3/2026-10-09T05-12-36Z__vistorias__opus__com__rep-09__20261009-051236-vistorias-com-74a3/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261009-051236-vistorias-com-74a3/2026-10-09T05-12-36Z__vistorias__opus__com__rep-09__20261009-051236-vistorias-com-74a3/evidence/cliente.json) [#3](../../../../../restauracoes/20261009-051236-vistorias-com-74a3/2026-10-09T05-12-36Z__vistorias__opus__com__rep-09__20261009-051236-vistorias-com-74a3/evidence/container-config.json) [#4](../../../../../restauracoes/20261009-051236-vistorias-com-74a3/2026-10-09T05-12-36Z__vistorias__opus__com__rep-09__20261009-051236-vistorias-com-74a3/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261009-051236-vistorias-com-74a3/2026-10-09T05-12-36Z__vistorias__opus__com__rep-09__20261009-051236-vistorias-com-74a3/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261009-051236-vistorias-com-74a3/2026-10-09T05-12-36Z__vistorias__opus__com__rep-09__20261009-051236-vistorias-com-74a3/evidence/preflight.json) [#7](../../../../../restauracoes/20261009-051236-vistorias-com-74a3/2026-10-09T05-12-36Z__vistorias__opus__com__rep-09__20261009-051236-vistorias-com-74a3/evidence/prompt.txt) [#8](../../../../../restauracoes/20261009-051236-vistorias-com-74a3/2026-10-09T05-12-36Z__vistorias__opus__com__rep-09__20261009-051236-vistorias-com-74a3/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261009-051236-vistorias-com-74a3/2026-10-09T05-12-36Z__vistorias__opus__com__rep-09__20261009-051236-vistorias-com-74a3/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261009-051236-vistorias-com-74a3/2026-10-09T05-12-36Z__vistorias__opus__com__rep-09__20261009-051236-vistorias-com-74a3/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261009-051236-vistorias-com-74a3/2026-10-09T05-12-36Z__vistorias__opus__com__rep-09__20261009-051236-vistorias-com-74a3/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261009-051236-vistorias-com-74a3/2026-10-09T05-12-36Z__vistorias__opus__com__rep-09__20261009-051236-vistorias-com-74a3/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261009-051236-vistorias-com-74a3/2026-10-09T05-12-36Z__vistorias__opus__com__rep-09__20261009-051236-vistorias-com-74a3/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261009-051236-vistorias-com-74a3/2026-10-09T05-12-36Z__vistorias__opus__com__rep-09__20261009-051236-vistorias-com-74a3/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261009-051236-vistorias-com-74a3/2026-10-09T05-12-36Z__vistorias__opus__com__rep-09__20261009-051236-vistorias-com-74a3/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261009-051236-vistorias-com-74a3/2026-10-09T05-12-36Z__vistorias__opus__com__rep-09__20261009-051236-vistorias-com-74a3/evidence/raw/oracle/inventory.json) [#17](../../../../../restauracoes/20261009-051236-vistorias-com-74a3/2026-10-09T05-12-36Z__vistorias__opus__com__rep-09__20261009-051236-vistorias-com-74a3/evidence/raw/oracle/oracle-telemetry.ndjson) [#18](../../../../../restauracoes/20261009-051236-vistorias-com-74a3/2026-10-09T05-12-36Z__vistorias__opus__com__rep-09__20261009-051236-vistorias-com-74a3/evidence/raw/oracle/tool-events.ndjson) [#19](../../../../../restauracoes/20261009-051236-vistorias-com-74a3/2026-10-09T05-12-36Z__vistorias__opus__com__rep-09__20261009-051236-vistorias-com-74a3/evidence/raw/probe/probe.json) [#20](../../../../../restauracoes/20261009-051236-vistorias-com-74a3/2026-10-09T05-12-36Z__vistorias__opus__com__rep-09__20261009-051236-vistorias-com-74a3/evidence/raw/probe/sonda-escrita-1791522784155.txt) [#21](../../../../../restauracoes/20261009-051236-vistorias-com-74a3/2026-10-09T05-12-36Z__vistorias__opus__com__rep-09__20261009-051236-vistorias-com-74a3/evidence/raw/task/mcp.json) [#22](../../../../../restauracoes/20261009-051236-vistorias-com-74a3/2026-10-09T05-12-36Z__vistorias__opus__com__rep-09__20261009-051236-vistorias-com-74a3/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261009-051236-vistorias-com-74a3/2026-10-09T05-12-36Z__vistorias__opus__com__rep-09__20261009-051236-vistorias-com-74a3/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261009-051236-vistorias-com-74a3/2026-10-09T05-12-36Z__vistorias__opus__com__rep-09__20261009-051236-vistorias-com-74a3/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261009-051236-vistorias-com-74a3/2026-10-09T05-12-36Z__vistorias__opus__com__rep-09__20261009-051236-vistorias-com-74a3/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261009-051236-vistorias-com-74a3/2026-10-09T05-12-36Z__vistorias__opus__com__rep-09__20261009-051236-vistorias-com-74a3/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261009-051236-vistorias-com-74a3/2026-10-09T05-12-36Z__vistorias__opus__com__rep-09__20261009-051236-vistorias-com-74a3/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261009-051236-vistorias-com-74a3/2026-10-09T05-12-36Z__vistorias__opus__com__rep-09__20261009-051236-vistorias-com-74a3/evidence/logs/oracle.log) [#7](../../../../../restauracoes/20261009-051236-vistorias-com-74a3/2026-10-09T05-12-36Z__vistorias__opus__com__rep-09__20261009-051236-vistorias-com-74a3/evidence/logs/probe.log) [#8](../../../../../restauracoes/20261009-051236-vistorias-com-74a3/2026-10-09T05-12-36Z__vistorias__opus__com__rep-09__20261009-051236-vistorias-com-74a3/evidence/logs/screens.log) · [binding](analysis-binding.com.json)

Achados enviados (32; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| td br-button\[icon=&quot;eye&quot;\] | button-name | Botão interno \(shadow\) só com ícone fa-eye, aria-label vazio, sem title nem texto: nome acessível vazio. Ocorre em todas as linhas das abas Tramitando e Concluídos. |
| td br-button\[icon\]:not\(\[label\]\) | govbr-3.7.0-component-button-4d7b5f978df1 | Botões de ação das linhas usam a variante 'secondary middle' \(não circular\) e exibem só ícone \(user-plus/user-times, eye, trash, bell\), sem rótulo visível. |
| pnip-status-solicitacao-utils .bg-blue-40 &gt; .text-secondary-01 | color-contrast | Texto 'Vistoria agendada' #ffffff sobre #4f97d1, 14px normal: contraste 3,14:1. |
| pnip-status-solicitacao-utils .bg-secondary-06 &gt; .text-secondary-01 | color-contrast | Na aba Agendar, texto 'Vistoria pré agendada' #ffffff sobre #888888, 14px normal: contraste 3,54:1. |
| .br-tag.primary-pastel-01 | color-contrast | Tag 'Nenhum filtro de data aplicado' com texto #ffffff sobre #c5d4eb, 14px: contraste 1,5:1. |
| table input\[type=&quot;checkbox&quot;\] | label | Checkbox 'selecionar todos' no cabeçalho e checkboxes de cada linha sem label, aria-label ou aria-labelledby \(nome acessível vazio\). |
| br-input\[type=&quot;date&quot;\] | label | Os dois inputs de data \(#br-input-8 e #br-input-9, no shadow DOM\) não têm rótulo associado; os textos 'Data da vistoria:' e 'até' estão soltos. |
| br-input#search | wcag:3.3.2 | O campo de busca só é identificado pelo placeholder 'Pesquise aqui ...'; não há label visível e o placeholder some ao digitar. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] &gt; ul &gt; li &gt; li | listitem | Os números de página são &lt;li&gt; aninhados diretamente em outro &lt;li&gt;, sem &lt;ul&gt;/&lt;ol&gt; pai. |
| .br-pagination a.page.active | wcag:1.3.1 | A página atual só é indicada pela classe visual 'active'; não há aria-current nem texto oculto. |
| main h2 | page-has-heading-one | O título da página 'Vistorias' é &lt;h2&gt;; o documento não tem &lt;h1&gt;. |
| table thead th:last-child | empty-table-header | O cabeçalho da coluna de ações é um &lt;th&gt; vazio. |
| html | ds-page-footer | Não há .br-footer nem &lt;br-footer&gt; no documento. |
| html | ds-page-skip-link | Não há link de salto; o primeiro link é o 'Home' do breadcrumb \(href='/portal-mpa'\). |
| .br-tag.interaction.bg-pure-0 | wcag:2.1.1 | Os filtros Cidade, Porto, Vistoriador e Status são &lt;span class='br-tag interaction'&gt; com cursor pointer, sem tabindex nem role: abrem por clique mas ficam fora da ordem de tabulação. |
| .br-select.position-absolute .br-item | wcag:2.1.1 | As opções do filtro aberto \(ex.: 'Areia Branca do Leste'\) são &lt;div class='br-item'&gt;&lt;div class='br-radio'&gt;&lt;label&gt; sem input nem tabindex: só funcionam por clique. |
| .br-tag button.br-button.inverted.circle | button-name | No chip do filtro aplicado 'Areia Branca do Leste', o botão de remover só tem o ícone fa-times, sem aria-label: nome acessível vazio. |
| .br-tag button.br-button.inverted.circle | wcag:4.1.2 | No chip 'Exibindo vistorias de 25/03/2026 até 31/03/2026', o botão de remover só tem o ícone fa-times \(aria-hidden\), sem aria-label: nome acessível vazio. |
| #avatar-dropdown-trigger | wcag:2.5.3 | O botão mostra 'Olá, Usuária de Teste, SUPERVISOR', mas aria-label='Avatar com dropdown' substitui o nome, que não contém o texto visível. |
| #avatar-menu | aria-required-children | role='menu' contém divs, span e um &lt;button&gt; 'Sair', sem nenhum elemento role='menuitem'. |
| #avatar-menu img | image-alt | &lt;img src='exit-icon.png'&gt; do botão 'Sair' não tem atributo alt. |
| #avatar-menu .text-center &gt; span | wcag:2.1.1 | 'Trocar unidade' é um &lt;span&gt; com cursor pointer, sem tabindex nem role, fora da ordem de tabulação. |
| br-header | wcag:1.1.1 | O logo no shadow DOM do br-header tem alt='logo', texto que não identifica a marca. |
| br-header | incerta | O botão 'Menu' \(#navigation no shadow DOM, data-target='#main-navigation'\) não tem efeito ao ser clicado: #main-navigation não existe e nada se abre. |
| br-breadcrumb | wcag:4.1.2 | No shadow DOM, o item Home é &lt;a href='/portal-mpa'&gt; contendo &lt;button class='br-button small circle'&gt;: elementos interativos aninhados, com duas paradas de tabulação para o mesmo destino. |
| .br-tab .tab-item &gt; button | wcag:4.1.2 | A aba ativa só é marcada pela classe 'active' no &lt;li&gt;; os botões não têm role='tab', aria-selected nem aria-current. |
| #swal2-select | select-name | No diálogo 'Atribuir Vistoriador', o &lt;select&gt; de vistoriadores não tem label nem aria-label. |
| td br-button\[title\] | wcag:2.4.3 | Depois de abrir pelo teclado \(Enter\) os diálogos Atribuir vistoriador, Excluir vistoria ou Notificar e fechar com Escape, o foco vai para &lt;body&gt; e não volta ao botão que abriu o diálogo. |
| .br-pagination a.page | wcag:2.4.3 | Ao ativar uma página \(Enter no link '3'\) ou escolher 25 itens em 'Exibir' pelo teclado, a tabela é atualizada e o foco vai para &lt;body&gt;. |
| .br-table table | incerta | A tabela tem 1272 px de largura dentro do contêiner .br-table de 1096 px \(overflow visível\); a página rola na horizontal \(scrollWidth 1364 em 1280\) e o botão Notificar da coluna de ações fica cortado na borda direita. |
| pnip-propesc-vistorias div.mt-5.text-center &gt; p | wcag:4.1.3 | Quando a busca/filtro não traz resultados, a tabela e a região aria-live da paginação são removidas e aparece 'Não há vistorias para exibir nesse periodo selecionado.' num &lt;p&gt; sem role=status nem aria-live. |
| pnip-propesc-vistorias div.mt-5.text-center &gt; p | incerta | Mensagem de estado vazio com erro de grafia: 'nesse periodo selecionado'. |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `1f0d0ed4881309869e71741c3d15c02d661a21d443266c3dbd5b9c5fa5325a1f`

