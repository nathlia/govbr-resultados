# Resumo da análise — Vistorias (vistorias)

Revisão 1 · gerado em 2026-10-12T14:38:50.397Z (UTC)

## 1. Status técnico

Análise: **pronta**

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261006-054948-vistorias-sem-9fca | sem | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 36 cartão(ões), nenhum decidido |
| 20261006-053725-vistorias-com-da9c | com | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 30 cartão(ões), nenhum decidido |

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
| Início (UTC) | 2026-10-06T05:50:11Z | 2026-10-06T05:37:48Z |
| Início (local) | 06/10/2026, 02:50:11 (horário de Brasília) | 06/10/2026, 02:37:48 (horário de Brasília) |
| Commit do harness | 7f189a9a0984459418e210aa1453acbee54e1160 | 7f189a9a0984459418e210aa1453acbee54e1160 |
| Repetição · tentativa | 2 · 1 | 2 · 1 |
| Campanha · slot · par | t7-tela-b-01 · p02-sem · p02 | t7-tela-b-01 · p02-com · p02 |

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
| Cartões pendentes de revisão | 36 | 30 |
| Maturidade | aguardando revisão — 36 cartão(ões), nenhum decidido | aguardando revisão — 30 cartão(ões), nenhum decidido |
| Entra na comparação principal | sim | sim |
| Achados enviados | 36 | 30 |

Recall e precisão só aparecem com a revisão fechada; enquanto houver cartão pendente ficam “indisponível” (nunca 0). “Achados enviados = 0” é um resultado válido (o agente olhou e não alegou nada); submissão recusada ou ausente é outra coisa.

Linha de base determinística (união das varreduras comparáveis), por unidade da referência:

| Unidades | sem | com |
|---|---|---|
| Agente e linha de base | 0 | 0 |
| Só o agente | 0 | 0 |
| Só a linha de base | 0 | 0 |
| Nenhum | 102 | 102 |
| Estado | provisório | provisório |

Linha de base: usada (lb-20261006-053644-vistorias-1766c6)

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
| Uso do oráculo | ausente (confirmado) | não verificado |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 28 (ponte MCP do oráculo) |
| Protocolo | unverified | unverified |
| Ferramentas anunciadas | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for, get\_ds\_rules, get\_design\_tokens, get\_emag\_rules, get\_pag… |
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_snapshot, browser\_take\_screenshot, browser\_press\_key, browser\_click, browser\_type, browser\_navigate\_back, browser\_wait\_for | browser\_navigate, browser\_evaluate, browser\_snapshot, scan\_page, get\_finding\_details, browser\_click, browser\_press\_key, get\_ds\_rules, browser\_navigate\_back, browser\_type |
| Erros de ferramenta | 6 (tool-events.ndjson \(eventos com isError: true\)) | 4 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue | 36 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 8 aprovado(s); falhos: nenhum | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | nenhuma | nenhuma |

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 6. Custo e tempo

| | sem | com |
|---|---|---|
| Tempo de relógio (s) | 836 (runner) | 558 (runner) |
| Turnos | 151 (stream-json do cliente \(result.num\_turns\)) | 100 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 150 (ponte MCP) | 99 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) | 28 (ponte MCP do oráculo) |
| Tokens de entrada | 140 (stream-json do cliente \(result.usage\)) | 138 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 52349 (stream-json do cliente \(result.usage\)) | 38904 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 6130287 (stream-json do cliente \(result.usage\)) | 7091509 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 179501 (stream-json do cliente \(result.usage\)) | 177301 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 3.7096053999999996 (estimativa do cliente \(result.total\_cost\_usd\)) | 3.6153418000000004 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 175 cartão(ões), estimativa 1050 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 7. Detalhes e evidências

**sem** (20261006-054948-vistorias-sem-9fca): [pacote](../../../../../restauracoes/20261006-054948-vistorias-sem-9fca/2026-10-06T05-49-48Z__vistorias__opus__sem__rep-02__20261006-054948-vistorias-sem-9fca) · [run.json](../../../../../restauracoes/20261006-054948-vistorias-sem-9fca/2026-10-06T05-49-48Z__vistorias__opus__sem__rep-02__20261006-054948-vistorias-sem-9fca/run.json) · [findings.json](../../../../../restauracoes/20261006-054948-vistorias-sem-9fca/2026-10-06T05-49-48Z__vistorias__opus__sem__rep-02__20261006-054948-vistorias-sem-9fca/findings.json) · [isolation.json](../../../../../restauracoes/20261006-054948-vistorias-sem-9fca/2026-10-06T05-49-48Z__vistorias__opus__sem__rep-02__20261006-054948-vistorias-sem-9fca/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261006-054948-vistorias-sem-9fca/2026-10-06T05-49-48Z__vistorias__opus__sem__rep-02__20261006-054948-vistorias-sem-9fca/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261006-054948-vistorias-sem-9fca/2026-10-06T05-49-48Z__vistorias__opus__sem__rep-02__20261006-054948-vistorias-sem-9fca/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261006-054948-vistorias-sem-9fca/2026-10-06T05-49-48Z__vistorias__opus__sem__rep-02__20261006-054948-vistorias-sem-9fca/evidence/cliente.json) [#3](../../../../../restauracoes/20261006-054948-vistorias-sem-9fca/2026-10-06T05-49-48Z__vistorias__opus__sem__rep-02__20261006-054948-vistorias-sem-9fca/evidence/container-config.json) [#4](../../../../../restauracoes/20261006-054948-vistorias-sem-9fca/2026-10-06T05-49-48Z__vistorias__opus__sem__rep-02__20261006-054948-vistorias-sem-9fca/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261006-054948-vistorias-sem-9fca/2026-10-06T05-49-48Z__vistorias__opus__sem__rep-02__20261006-054948-vistorias-sem-9fca/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261006-054948-vistorias-sem-9fca/2026-10-06T05-49-48Z__vistorias__opus__sem__rep-02__20261006-054948-vistorias-sem-9fca/evidence/preflight.json) [#7](../../../../../restauracoes/20261006-054948-vistorias-sem-9fca/2026-10-06T05-49-48Z__vistorias__opus__sem__rep-02__20261006-054948-vistorias-sem-9fca/evidence/prompt.txt) [#8](../../../../../restauracoes/20261006-054948-vistorias-sem-9fca/2026-10-06T05-49-48Z__vistorias__opus__sem__rep-02__20261006-054948-vistorias-sem-9fca/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261006-054948-vistorias-sem-9fca/2026-10-06T05-49-48Z__vistorias__opus__sem__rep-02__20261006-054948-vistorias-sem-9fca/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261006-054948-vistorias-sem-9fca/2026-10-06T05-49-48Z__vistorias__opus__sem__rep-02__20261006-054948-vistorias-sem-9fca/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261006-054948-vistorias-sem-9fca/2026-10-06T05-49-48Z__vistorias__opus__sem__rep-02__20261006-054948-vistorias-sem-9fca/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261006-054948-vistorias-sem-9fca/2026-10-06T05-49-48Z__vistorias__opus__sem__rep-02__20261006-054948-vistorias-sem-9fca/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261006-054948-vistorias-sem-9fca/2026-10-06T05-49-48Z__vistorias__opus__sem__rep-02__20261006-054948-vistorias-sem-9fca/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261006-054948-vistorias-sem-9fca/2026-10-06T05-49-48Z__vistorias__opus__sem__rep-02__20261006-054948-vistorias-sem-9fca/evidence/raw/collector/refused/001.json) [#15](../../../../../restauracoes/20261006-054948-vistorias-sem-9fca/2026-10-06T05-49-48Z__vistorias__opus__sem__rep-02__20261006-054948-vistorias-sem-9fca/evidence/raw/egress-provider/egress.ndjson) [#16](../../../../../restauracoes/20261006-054948-vistorias-sem-9fca/2026-10-06T05-49-48Z__vistorias__opus__sem__rep-02__20261006-054948-vistorias-sem-9fca/evidence/raw/egress-site/egress.ndjson) [#17](../../../../../restauracoes/20261006-054948-vistorias-sem-9fca/2026-10-06T05-49-48Z__vistorias__opus__sem__rep-02__20261006-054948-vistorias-sem-9fca/evidence/raw/probe/probe.json) [#18](../../../../../restauracoes/20261006-054948-vistorias-sem-9fca/2026-10-06T05-49-48Z__vistorias__opus__sem__rep-02__20261006-054948-vistorias-sem-9fca/evidence/raw/probe/sonda-escrita-1791265811317.txt) [#19](../../../../../restauracoes/20261006-054948-vistorias-sem-9fca/2026-10-06T05-49-48Z__vistorias__opus__sem__rep-02__20261006-054948-vistorias-sem-9fca/evidence/raw/task/mcp.json) [#20](../../../../../restauracoes/20261006-054948-vistorias-sem-9fca/2026-10-06T05-49-48Z__vistorias__opus__sem__rep-02__20261006-054948-vistorias-sem-9fca/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261006-054948-vistorias-sem-9fca/2026-10-06T05-49-48Z__vistorias__opus__sem__rep-02__20261006-054948-vistorias-sem-9fca/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261006-054948-vistorias-sem-9fca/2026-10-06T05-49-48Z__vistorias__opus__sem__rep-02__20261006-054948-vistorias-sem-9fca/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261006-054948-vistorias-sem-9fca/2026-10-06T05-49-48Z__vistorias__opus__sem__rep-02__20261006-054948-vistorias-sem-9fca/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261006-054948-vistorias-sem-9fca/2026-10-06T05-49-48Z__vistorias__opus__sem__rep-02__20261006-054948-vistorias-sem-9fca/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261006-054948-vistorias-sem-9fca/2026-10-06T05-49-48Z__vistorias__opus__sem__rep-02__20261006-054948-vistorias-sem-9fca/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261006-054948-vistorias-sem-9fca/2026-10-06T05-49-48Z__vistorias__opus__sem__rep-02__20261006-054948-vistorias-sem-9fca/evidence/logs/probe.log) [#7](../../../../../restauracoes/20261006-054948-vistorias-sem-9fca/2026-10-06T05-49-48Z__vistorias__opus__sem__rep-02__20261006-054948-vistorias-sem-9fca/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (36; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| br-header | wcag:1.1.1 | A imagem do logotipo gov.br no shadow DOM do br-header tem alt=&quot;logo&quot;, que descreve o tipo da imagem e não o seu conteúdo. |
| br-header | emag:1.5 | Não há link para pular ao conteúdo: o primeiro Tab após o carregamento vai direto ao botão &quot;Menu&quot; do br-header; nenhum âncora para #main ou equivalente existe. |
| h2 | emag:1.3 | A página só tem um título, o h2 &quot;Vistorias&quot;; não há h1. |
| br-breadcrumb | wcag:2.4.2 | O title do documento é apenas &quot;PNIP&quot; e não muda para a tela de Vistorias. |
| br-header | wcag:4.1.2 | O botão &quot;Menu&quot; \(#navigation no shadow DOM\) tem data-target=&quot;#main-navigation&quot;, mas esse elemento não existe; clicar não abre nada e o botão não tem aria-expanded. |
| #avatar-dropdown-trigger | wcag:2.5.3 | O aria-label=&quot;Avatar com dropdown&quot; substitui o texto visível &quot;Olá, Usuária de Teste, SUPERVISOR&quot;; o nome acessível não contém o rótulo visível. |
| #avatar-menu | wcag:4.1.2 | O contêiner tem role=&quot;menu&quot;, mas nenhum filho tem role=&quot;menuitem&quot;: o botão &quot;Sair&quot; é um button comum e &quot;Trocar unidade&quot; é um span. |
| #avatar-menu span.text-blue-vivid-60.text-weight-bold | wcag:2.1.1 | &quot;Trocar unidade&quot; é um span com cursor:pointer, sem tabindex \(tabIndex=-1\) e sem role; não é alcançável nem acionável pelo teclado. |
| #avatar-menu button.dropdown-button img | wcag:1.1.1 | A imagem exit-icon.png dentro do botão &quot;Sair&quot; não tem atributo alt. |
| #avatar-menu | incerta | Com o menu do avatar aberto e o foco no botão de abertura, Esc não fecha o menu \(continua display:block\). |
| br-breadcrumb | wcag:4.1.2 | No shadow DOM do breadcrumb, o link &quot;Home&quot; \(a href=&quot;/portal-mpa&quot;\) contém um &lt;button&gt; \(interativo aninhado\); o Tab para duas vezes no mesmo item \(no &lt;a&gt; e depois no &lt;button&gt;\). |
| br-breadcrumb | incerta | A trilha \(ul.crumb-list\) não está dentro de um landmark nav nem tem rótulo; a árvore de acessibilidade mostra só uma lista solta. |
| nav.tab-nav li.tab-item.active &gt; button | wcag:4.1.2 | A aba ativa \(Tramitando\) é indicada só pela classe &quot;active&quot; no li e pelo sublinhado visual; o botão não tem aria-selected, aria-current nem outro estado programático. |
| span.br-tag.interaction | wcag:2.1.1 | Os filtros Cidade, Porto, Vistoriador e Status são span.br-tag com cursor:pointer, sem tabindex e sem role; o Tab pula de &quot;Concluídos&quot; para a busca e eles não podem ser abertos pelo teclado. |
| div.br-select.position-absolute .br-radio label | wcag:4.1.2 | As opções do filtro aberto \(ex.: &quot;Barra Nova&quot;\) são &lt;label&gt; dentro de div.br-radio sem input associado: não têm papel de opção/rádio, estado selecionado nem foco. |
| span.br-tag.interaction &gt; button.br-button.inverted.circle | wcag:4.1.2 | O botão &quot;×&quot; que remove o filtro aplicado \(chip &quot;Barra Nova&quot; e chip de data &quot;Exibindo vistorias até 30/03/2026&quot;\) só tem o ícone fa-times, sem texto, aria-label ou title; o nome acessível fica vazio. |
| br-input#search | emag:6.2 | O campo de busca \(input#search no shadow DOM\) não tem label; a única identificação é o placeholder &quot;Pesquise aqui ...&quot;, que some ao digitar. |
| br-input\[type=&quot;date&quot;\] | wcag:4.1.2 | Os dois input type=&quot;date&quot; \(br-input-8 e br-input-9\) não têm nome acessível: os textos &quot;Data da vistoria:&quot; e &quot;até&quot; são spans soltos, sem label/for nem aria-labelledby. |
| span.br-tag.primary-pastel-01 | wcag:1.4.3 | O texto &quot;Nenhum filtro de data aplicado&quot; \(14px, peso 500\) é #FFFFFF sobre #C5D4EB: contraste 1,5:1. |
| table | incerta | A tabela tem 1272px de largura num contêiner que termina em x=1188; com a janela de 1280px a página rola na horizontal \(scrollWidth 1364\) e o botão &quot;Notificar solicitante da vistoria&quot; aparece cortado. |
| thead input\[type=&quot;checkbox&quot;\] | wcag:4.1.2 | O checkbox &quot;selecionar todos&quot; no cabeçalho não tem nome acessível \(sem label, aria-label ou title\). |
| tbody input\[type=&quot;checkbox&quot;\] | wcag:4.1.2 | Os checkboxes de cada linha não têm nome acessível. |
| thead th:last-child | wcag:1.3.1 | O último cabeçalho de coluna \(coluna de ações\) é um th vazio. |
| br-button\[icon=&quot;eye&quot;\] | wcag:4.1.2 | O botão com ícone de olho em cada linha não tem nome acessível: o button interno tem aria-label=&quot;&quot; e só o ícone com aria-hidden; o host não tem title nem label. |
| br-button\[icon=&quot;user-times&quot;\] | incerta | Nas linhas que já têm vistoriador, o botão &quot;Atribuir vistoriador&quot; usa o ícone user-times \(remover usuário\), mas abre o mesmo diálogo &quot;Atribuir Vistoriador&quot; que o ícone user-plus das demais linhas. |
| pnip-status-solicitacao-utils .bg-blue-40 &gt; .text-secondary-01 | wcag:1.4.3 | O selo &quot;Vistoria agendada&quot; \(14px, peso 500\) é #FFFFFF sobre #4F97D1: contraste 3,14:1. |
| pnip-status-solicitacao-utils .bg-secondary-06 &gt; .text-secondary-01 | wcag:1.4.3 | Na aba Agendar, o selo &quot;Vistoria pré agendada&quot; \(14px, peso 500\) é #FFFFFF sobre #888888: contraste 3,54:1. |
| #swal2-select | wcag:4.1.2 | No diálogo &quot;Atribuir Vistoriador&quot;, o select de vistoriadores não tem nome acessível; &quot;Selecione um Vistoriador&quot; é texto do container, sem associação por label. |
| br-button\[title=&quot;Atribuir vistoriador&quot;\], br-button\[title=&quot;Excluir vistoria&quot;\], b… | wcag:2.4.3 | Depois de fechar os diálogos SweetAlert abertos por estes botões \(Atribuir com Esc; Excluir com &quot;Cancelar&quot;; Notificar com &quot;OK&quot;; Exportar com Esc\), o foco vai para &lt;body&gt; em vez de voltar ao botão que abriu o diálogo. |
| #swal2-html-container input\[type=&quot;checkbox&quot;\] | emag:6.7 | No diálogo &quot;Exportar Vistorias&quot;, os checkboxes de status \(Concluído, Vistoria Agendada…\) estão sob o texto &quot;Status:&quot; \(strong\) sem fieldset/legend nem role=&quot;group&quot; com rótulo. |
| nav.br-pagination.small &gt; ul &gt; li &gt; li | wcag:1.3.1 | Na paginação, cada número de página está num &lt;li&gt; aninhado diretamente em outro &lt;li&gt; \(li &gt; li\), o que gera uma estrutura de lista inválida \(listitem dentro de listitem sem lista\). |
| nav.br-pagination.small a.page.active | wcag:1.3.1 | A página atual é indicada só pela classe &quot;active&quot;; o link não tem aria-current=&quot;page&quot;. |
| nav.br-pagination.small a.page | wcag:2.4.3 | Ao ativar um número de página \(clique em &quot;2&quot; ou Enter em &quot;3&quot;\), a lista recarrega e o foco vai para &lt;body&gt;. |
| #total, #page | wcag:4.1.2 | Os seletores &quot;Exibir&quot; e &quot;Página&quot; são inputs de texto que abrem uma lista ao receber foco, mas não têm role=&quot;combobox&quot;, aria-expanded nem aria-controls; os itens são div.br-item focáveis sem papel de opção. |
| #total | incerta | Na página 3, escolher 25 em &quot;Exibir&quot; mostra &quot;Não há vistorias para exibir.&quot; e remove a paginação; o usuário fica sem meio de voltar a uma página com resultados. |
| pnip-propesc-vistorias p | wcag:4.1.3 | A mensagem &quot;Não há vistorias para exibir.&quot; aparece num &lt;p&gt; fora de qualquer região viva \(sem aria-live/role=status\), e a região viva da paginação é removida; quem usa leitor de tela não fica sabendo que a busca não teve… |

**com** (20261006-053725-vistorias-com-da9c): [pacote](../../../../../restauracoes/20261006-053725-vistorias-com-da9c/2026-10-06T05-37-25Z__vistorias__opus__com__rep-02__20261006-053725-vistorias-com-da9c) · [run.json](../../../../../restauracoes/20261006-053725-vistorias-com-da9c/2026-10-06T05-37-25Z__vistorias__opus__com__rep-02__20261006-053725-vistorias-com-da9c/run.json) · [findings.json](../../../../../restauracoes/20261006-053725-vistorias-com-da9c/2026-10-06T05-37-25Z__vistorias__opus__com__rep-02__20261006-053725-vistorias-com-da9c/findings.json) · [isolation.json](../../../../../restauracoes/20261006-053725-vistorias-com-da9c/2026-10-06T05-37-25Z__vistorias__opus__com__rep-02__20261006-053725-vistorias-com-da9c/isolation.json) · [eventos de ferramenta](../../../../../restauracoes/20261006-053725-vistorias-com-da9c/2026-10-06T05-37-25Z__vistorias__opus__com__rep-02__20261006-053725-vistorias-com-da9c/tool-events.ndjson) · — · evidências: [#1](../../../../../restauracoes/20261006-053725-vistorias-com-da9c/2026-10-06T05-37-25Z__vistorias__opus__com__rep-02__20261006-053725-vistorias-com-da9c/evidence/aderencia-oraculo.json) [#2](../../../../../restauracoes/20261006-053725-vistorias-com-da9c/2026-10-06T05-37-25Z__vistorias__opus__com__rep-02__20261006-053725-vistorias-com-da9c/evidence/cliente.json) [#3](../../../../../restauracoes/20261006-053725-vistorias-com-da9c/2026-10-06T05-37-25Z__vistorias__opus__com__rep-02__20261006-053725-vistorias-com-da9c/evidence/container-config.json) [#4](../../../../../restauracoes/20261006-053725-vistorias-com-da9c/2026-10-06T05-37-25Z__vistorias__opus__com__rep-02__20261006-053725-vistorias-com-da9c/evidence/controles-positivos.json) [#5](../../../../../restauracoes/20261006-053725-vistorias-com-da9c/2026-10-06T05-37-25Z__vistorias__opus__com__rep-02__20261006-053725-vistorias-com-da9c/evidence/mcp-config.json) [#6](../../../../../restauracoes/20261006-053725-vistorias-com-da9c/2026-10-06T05-37-25Z__vistorias__opus__com__rep-02__20261006-053725-vistorias-com-da9c/evidence/preflight.json) [#7](../../../../../restauracoes/20261006-053725-vistorias-com-da9c/2026-10-06T05-37-25Z__vistorias__opus__com__rep-02__20261006-053725-vistorias-com-da9c/evidence/prompt.txt) [#8](../../../../../restauracoes/20261006-053725-vistorias-com-da9c/2026-10-06T05-37-25Z__vistorias__opus__com__rep-02__20261006-053725-vistorias-com-da9c/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../../restauracoes/20261006-053725-vistorias-com-da9c/2026-10-06T05-37-25Z__vistorias__opus__com__rep-02__20261006-053725-vistorias-com-da9c/evidence/raw/browser/inventory.json) [#10](../../../../../restauracoes/20261006-053725-vistorias-com-da9c/2026-10-06T05-37-25Z__vistorias__opus__com__rep-02__20261006-053725-vistorias-com-da9c/evidence/raw/browser/tool-events.ndjson) [#11](../../../../../restauracoes/20261006-053725-vistorias-com-da9c/2026-10-06T05-37-25Z__vistorias__opus__com__rep-02__20261006-053725-vistorias-com-da9c/evidence/raw/collector/accepted-raw.txt) [#12](../../../../../restauracoes/20261006-053725-vistorias-com-da9c/2026-10-06T05-37-25Z__vistorias__opus__com__rep-02__20261006-053725-vistorias-com-da9c/evidence/raw/collector/events.ndjson) [#13](../../../../../restauracoes/20261006-053725-vistorias-com-da9c/2026-10-06T05-37-25Z__vistorias__opus__com__rep-02__20261006-053725-vistorias-com-da9c/evidence/raw/collector/findings.json) [#14](../../../../../restauracoes/20261006-053725-vistorias-com-da9c/2026-10-06T05-37-25Z__vistorias__opus__com__rep-02__20261006-053725-vistorias-com-da9c/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../../restauracoes/20261006-053725-vistorias-com-da9c/2026-10-06T05-37-25Z__vistorias__opus__com__rep-02__20261006-053725-vistorias-com-da9c/evidence/raw/egress-site/egress.ndjson) [#16](../../../../../restauracoes/20261006-053725-vistorias-com-da9c/2026-10-06T05-37-25Z__vistorias__opus__com__rep-02__20261006-053725-vistorias-com-da9c/evidence/raw/oracle/inventory.json) [#17](../../../../../restauracoes/20261006-053725-vistorias-com-da9c/2026-10-06T05-37-25Z__vistorias__opus__com__rep-02__20261006-053725-vistorias-com-da9c/evidence/raw/oracle/oracle-telemetry.ndjson) [#18](../../../../../restauracoes/20261006-053725-vistorias-com-da9c/2026-10-06T05-37-25Z__vistorias__opus__com__rep-02__20261006-053725-vistorias-com-da9c/evidence/raw/oracle/tool-events.ndjson) [#19](../../../../../restauracoes/20261006-053725-vistorias-com-da9c/2026-10-06T05-37-25Z__vistorias__opus__com__rep-02__20261006-053725-vistorias-com-da9c/evidence/raw/probe/probe.json) [#20](../../../../../restauracoes/20261006-053725-vistorias-com-da9c/2026-10-06T05-37-25Z__vistorias__opus__com__rep-02__20261006-053725-vistorias-com-da9c/evidence/raw/probe/sonda-escrita-1791265067648.txt) [#21](../../../../../restauracoes/20261006-053725-vistorias-com-da9c/2026-10-06T05-37-25Z__vistorias__opus__com__rep-02__20261006-053725-vistorias-com-da9c/evidence/raw/task/mcp.json) [#22](../../../../../restauracoes/20261006-053725-vistorias-com-da9c/2026-10-06T05-37-25Z__vistorias__opus__com__rep-02__20261006-053725-vistorias-com-da9c/evidence/raw/task/prompt.txt) · logs: [#1](../../../../../restauracoes/20261006-053725-vistorias-com-da9c/2026-10-06T05-37-25Z__vistorias__opus__com__rep-02__20261006-053725-vistorias-com-da9c/evidence/logs/agent.log) [#2](../../../../../restauracoes/20261006-053725-vistorias-com-da9c/2026-10-06T05-37-25Z__vistorias__opus__com__rep-02__20261006-053725-vistorias-com-da9c/evidence/logs/browser.log) [#3](../../../../../restauracoes/20261006-053725-vistorias-com-da9c/2026-10-06T05-37-25Z__vistorias__opus__com__rep-02__20261006-053725-vistorias-com-da9c/evidence/logs/collector.log) [#4](../../../../../restauracoes/20261006-053725-vistorias-com-da9c/2026-10-06T05-37-25Z__vistorias__opus__com__rep-02__20261006-053725-vistorias-com-da9c/evidence/logs/egress-provider.log) [#5](../../../../../restauracoes/20261006-053725-vistorias-com-da9c/2026-10-06T05-37-25Z__vistorias__opus__com__rep-02__20261006-053725-vistorias-com-da9c/evidence/logs/egress-site.log) [#6](../../../../../restauracoes/20261006-053725-vistorias-com-da9c/2026-10-06T05-37-25Z__vistorias__opus__com__rep-02__20261006-053725-vistorias-com-da9c/evidence/logs/oracle.log) [#7](../../../../../restauracoes/20261006-053725-vistorias-com-da9c/2026-10-06T05-37-25Z__vistorias__opus__com__rep-02__20261006-053725-vistorias-com-da9c/evidence/logs/probe.log) [#8](../../../../../restauracoes/20261006-053725-vistorias-com-da9c/2026-10-06T05-37-25Z__vistorias__opus__com__rep-02__20261006-053725-vistorias-com-da9c/evidence/logs/screens.log) · [binding](analysis-binding.com.json)

Achados enviados (30; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| html | ds-page-footer | Nenhum .br-footer nem &lt;br-footer&gt; no documento; a página termina no botão &quot;Voltar&quot;. |
| html | ds-page-skip-link | O primeiro link da página é &quot;Home&quot; \(href=&quot;/portal-mpa&quot;\) do breadcrumb; não há link de salto para o conteúdo. |
| main h2 | page-has-heading-one | O único título da página é &lt;h2&gt;Vistorias&lt;/h2&gt;; não existe h1. |
| head &gt; title | wcag:2.4.2 | &lt;title&gt; é &quot;PNIP&quot;, genérico e igual ao de /portal-mpa; não identifica a tela de Vistorias. |
| br-header | wcag:1.1.1 | A logo no shadow DOM do br-header \(img src govbr-logo.png\) tem alt=&quot;logo&quot;, que não informa o conteúdo da imagem. |
| br-header | incerta | O botão &quot;Menu&quot; \(#navigation, no shadow DOM do br-header\) tem data-target=&quot;#main-navigation&quot;, mas esse elemento não existe; ao clicar nada abre e não há aria-expanded/aria-controls. |
| #avatar-dropdown-trigger | wcag:2.5.3 | O nome acessível é aria-label=&quot;Avatar com dropdown&quot;, mas o texto visível é &quot;Olá, Usuária de Teste, SUPERVISOR&quot;; o nome não contém o rótulo visível. |
| #avatar-menu | aria-required-children | role=&quot;menu&quot; contém filhos que não são menuitem \(div de informações do usuário, span &quot;Trocar unidade&quot; e button &quot;Sair&quot;\). |
| #avatar-menu img | image-alt | A imagem do botão &quot;Sair&quot; \(exit-icon.png\) não tem atributo alt. |
| #avatar-menu .text-center &gt; span | wcag:2.1.1 | &quot;Trocar unidade&quot; é um &lt;span&gt; com cursor:pointer e ação de clique \(navega para /portal-mpa\), sem tabindex nem papel; não pode ser alcançado nem ativado por teclado. |
| br-breadcrumb | ds-structure-breadcrumb-tag | O breadcrumb \(shadow DOM de br-breadcrumb\) é aplicado a &lt;div&gt;, sem landmark de navegação. |
| br-breadcrumb | wcag:4.1.2 | O item &quot;Home&quot; é um &lt;a href=&quot;/portal-mpa&quot;&gt; que contém um &lt;button aria-label=&quot;&quot;&gt;; dois controles aninhados, que geram duas paradas de Tab para a mesma ação. |
| .tab-nav button | wcag:4.1.2 | As abas Agendar/Tramitando/Concluídos são &lt;button&gt; sem role=&quot;tab&quot;/aria-selected nem aria-current; a aba ativa só é indicada pela classe &quot;active&quot; no li. |
| pnip-filter-panel span.br-tag.interaction.bg-pure-0 | wcag:2.1.1 | Os filtros Cidade, Porto, Vistoriador e Status são &lt;span&gt; com cursor:pointer, sem tabindex nem papel; abrem a lista ao clique, mas ficam fora da ordem de tabulação. |
| pnip-filter-panel .br-radio &gt; label | wcag:4.1.2 | As opções do filtro \(ex.: Areia Branca do Leste, Barra Nova…\) são &lt;label&gt; dentro de div.br-radio sem &lt;input type=&quot;radio&quot;&gt; e sem papel ou estado; não são focáveis. |
| pnip-filter-panel .br-tag &gt; button.br-button.inverted | button-name | O botão de remover o filtro aplicado \(ícone fa-times\) não tem nome acessível. |
| pnip-propesc-vistorias .align-content-center .br-tag &gt; button.br-button.inverted | button-name | O botão de remover o filtro de período \(&quot;Exibindo vistorias de 25/03/2026 até 28/03/2026&quot;\) tem só um ícone, sem nome acessível. |
| br-input\[type=&quot;date&quot;\] | label | Os dois campos de data \(#br-input-8 e #br-input-9, no shadow DOM\) não têm nome acessível; os textos &quot;Data da vistoria:&quot; e &quot;até&quot; são spans soltos, não associados. |
| .br-tag.primary-pastel-01 | color-contrast | Texto &quot;Nenhum filtro de data aplicado&quot; em #ffffff sobre #c5d4eb, 14px normal: contraste de 1,5:1. |
| thead input\[type=&quot;checkbox&quot;\] | label | O checkbox &quot;selecionar todos&quot; do cabeçalho da tabela não tem rótulo nem nome acessível \(por isso o th também fica vazio\). |
| tbody td input\[type=&quot;checkbox&quot;\] | label | Os checkboxes de seleção de cada linha não têm rótulo nem nome acessível. |
| thead th:nth-child\(9\) | empty-table-header | O cabeçalho da coluna de ações está vazio. |
| tbody br-button\[icon=&quot;eye&quot;\] | button-name | O botão de visualizar \(ícone olho\) de cada linha não tem texto, title nem aria-label; o button interno tem aria-label=&quot;&quot; e nenhum nome acessível. |
| pnip-status-solicitacao-utils .text-secondary-01 | color-contrast | Na aba Tramitando, o texto do status &quot;Vistoria agendada&quot; em #ffffff sobre #4f97d1, 14px normal, tem contraste de 3,14:1. |
| pnip-status-solicitacao-utils .text-secondary-01 | color-contrast | Na aba Agendar, o texto do status &quot;Vistoria pré agendada&quot; em #ffffff sobre #888888, 14px normal, tem contraste de 3,54:1. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] li &gt; li | listitem | Os números de página são &lt;li&gt; aninhados diretamente dentro de outro &lt;li&gt;, sem &lt;ul&gt;/&lt;ol&gt; pai. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] a.page.active | wcag:1.3.1 | A página atual só é indicada visualmente pela classe &quot;active&quot;; não há aria-current. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] a.page | wcag:2.4.3 | Ao ativar um número de página \(Enter no link &quot;3&quot; ou clique no &quot;2&quot;\), a lista é recriada e o foco vai para &lt;body&gt;, perdendo a posição. |
| #swal2-select | select-name | No diálogo &quot;Atribuir Vistoriador&quot;, o select de vistoriadores não tem rótulo associado \(o texto &quot;Selecione um Vistoriador&quot; não está ligado a ele\). |
| pnip-propesc-vistorias .flex-column &gt; p | wcag:4.1.3 | Após uma busca sem resultados, a mensagem &quot;Não há vistorias para exibir.&quot; aparece num &lt;p&gt; fora de região viva; a paginação com aria-live é removida e nada é anunciado. |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `a3f9ce53dae4765bb6ba985e37fe81ff27b20b015a74139adf4e99843d9bda22`

