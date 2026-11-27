# Resumo da análise — Processos (processos-f3)

Revisão 1 · gerado em 2026-11-27T07:15:28.058Z (UTC)

## 1. Status técnico

Análise: **pronta**

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261127-061622-processos-f3-ferramentas-ea42 | ferramentas | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 52 cartão(ões), nenhum decidido |

Uma execução pode ter rodado bem e ainda estar esperando revisão: isso é normal. A pontuação só é final quando todos os cartões dela foram decididos.

## 2. Identidade

| | ferramentas |
|---|---|
| Tela | Processos (processos-f3 @ govbr-telas-site-bc38c2332381) |
| Braço | oráculo sem conhecimento (ferramentas) |
| Modelo (família) | claude |
| ID pedido | claude-opus-5-5 |
| ID efetivo | claude-opus-5-5 (client-log) |
| Esforço | high |
| Cliente | claude-code 2.1.288 \(Claude Code\) |
| Início (UTC) | 2026-11-27T06:16:52Z |
| Início (local) | 27/11/2026, 03:16:52 (horário de Brasília) |
| Commit do harness | cce6dd825ae84448f49a8a01267ac05a70d6325b |
| Repetição · tentativa | 1 · 1 |
| Campanha · slot · par | portao-ferramentas-f3-01 · s01 · p01 |

## 3. Resultado científico

| Medida | ferramentas |
|---|---|
| Defeitos da referência confirmados | 0 de 69 (até agora) |
| Recall (cobertura da referência) | indisponível |
| Precisão sobre a referência — D/(D+F) | indisponível |
| Precisão das afirmações — (D+N)/(D+N+F) | indisponível |
| Afirmações incorretas (falsos positivos) | 0 |
| Defeitos novos corretos (fora da referência) | 0 |
| Duplicadas | 0 |
| Cartões pendentes de revisão | 52 |
| Maturidade | aguardando revisão — 52 cartão(ões), nenhum decidido |
| Entra na comparação principal | sim |
| Achados enviados | 52 |

Recall e precisão só aparecem com a revisão fechada; enquanto houver cartão pendente ficam “indisponível” (nunca 0). “Achados enviados = 0” é um resultado válido (o agente olhou e não alegou nada); submissão recusada ou ausente é outra coisa.

Linha de base: ausência planejada na campanha antes da coleta — Adendo 3 §5.2 \(controle 2 da errata 1 do adendo 2\): o controle conta só as specs semeadas que o agente do ferramentas confirma \(creditosDoTrio, chave principal\|1.2.0\); a linha de base não entra na conta. A linha de base da F3 é medida no controle 1 \(cobertura, sem modelo, a do dublê sem da ensaio-trio-f3-01\); o diagnóstico guiado e o axe dela continuam fechados até o fim da coleta \(adendo 2 §5 e …

## 4. MCP e isolamento

| | ferramentas |
|---|---|
| Isolamento | passed |
| Oráculo anunciado ao cliente | sim |
| Oráculo (pacote) | govbr-ds-validator-server 3.7.12 (knowledge-free) |
| Oráculo: ferramentas efetivas (tools/list) | get\_finding\_details, scan\_page, verify\_finding (5b9c59aaa490) |
| Uso do oráculo | usado conforme o protocolo |
| Chamadas ao oráculo | 24 (ponte MCP do oráculo) |
| Protocolo | unverified |
| Ferramentas anunciadas | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for, scan\_page, get\_finding\_details, verify\_finding |
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_snapshot, scan\_page, get\_finding\_details, browser\_click, browser\_press\_key, browser\_take\_screenshot, browser\_console\_messages, browser\_type, verify\_finding |
| Erros de ferramenta | 4 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 47 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 10 aprovado(s); falhos: nenhum |
| Limitações declaradas | agente \(registro de inspeção\): 9 — unreachable 1, budget 1, out-of-scope 1, other 5, tool-failure 1 |
| Registro de inspeção | registro parcial pelo agente: 7 de 8 região\(ões\) que ele mesmo descobriu inspecionadas; 19 estado\(s\) \(16 confirmado\(s\) por ele, 16 com evento de ferramenta\); 63 candidato\(s\); 9 limitação\(ões\). Cobertura da página: desconhecida. |
| Auditoria do registro (processo, não pontua) | registro registrado; 187 candidato\(s\) de ferramenta recebido\(s\) — aceitos 65, rejeitados 1, incertos 0, não examinados 121; auditoria: regiao-nao-percorrida 1, reproducao-nao-comprovada 3, candidato-sem-destino 121 · parcial \(registro-parcial, limitacao:budget, limitacao:tool-failure; 121 conhecido\(s\) não revisado\(s\)\). Relatório de processo: não pontua nem exclui. |

O registro de inspeção é declaração do agente sobre o inventário que ele mesmo descobriu; “com evento de ferramenta” só diz que o identificador citado aparece num evento gravado. Não pontua nem decide elegibilidade, e a cobertura da página continua desconhecida.

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 5. Custo e tempo

| | ferramentas |
|---|---|
| Tempo de relógio (s) | 1025 (runner) |
| Turnos | 135 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 134 (ponte MCP) |
| Chamadas ao oráculo | 24 (ponte MCP do oráculo) |
| Tokens de entrada | 198 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 84671 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 13775160 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 308372 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 6.91622 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 52 cartão(ões), estimativa 312 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 6. Detalhes e evidências

**ferramentas** (20261127-061622-processos-f3-ferramentas-ea42): [pacote](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42) · [run.json](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/run.json) · [findings.json](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/findings.json) · [isolation.json](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/isolation.json) · [eventos de ferramenta](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/tool-events.ndjson) · — · evidências: [#1](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/evidence/aderencia-oraculo.json) [#2](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/evidence/cliente.json) [#3](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/evidence/container-config.json) [#4](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/evidence/controles-positivos.json) [#5](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/evidence/mcp-config.json) [#6](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/evidence/preflight.json) [#7](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/evidence/prompt.txt) [#8](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/evidence/raw/browser/inventory.json) [#10](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/evidence/raw/browser/tool-events.ndjson) [#11](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/evidence/raw/collector/accepted-raw.txt) [#12](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/evidence/raw/collector/events.ndjson) [#13](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/evidence/raw/collector/findings.json) [#14](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/evidence/raw/collector/refused/001.json) [#15](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/evidence/raw/egress-provider/egress.ndjson) [#16](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/evidence/raw/egress-site/egress.ndjson) [#17](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/evidence/raw/oracle/inventory.json) [#18](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/evidence/raw/oracle/oracle-telemetry.ndjson) [#19](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/evidence/raw/oracle/tool-events.ndjson) [#20](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/evidence/raw/probe/probe.json) [#21](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/evidence/raw/probe/sonda-escrita-1795760212374.txt) [#22](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/evidence/raw/task/mcp.json) [#23](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/evidence/raw/task/prompt.txt) [#24](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/evidence/uso.json) [#25](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/evidence/vazamento-conhecimento.json) · logs: [#1](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/evidence/logs/agent.log) [#2](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/evidence/logs/browser.log) [#3](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/evidence/logs/collector.log) [#4](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/evidence/logs/egress-provider.log) [#5](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/evidence/logs/egress-site.log) [#6](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/evidence/logs/oracle.log) [#7](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/evidence/logs/probe.log) [#8](../../../../restauracoes/20261127-061622-processos-f3-ferramentas-ea42/2026-11-27T06-16-22Z__processos-f3__opus__ferramentas__rep-01__20261127-061622-processos-f3-ferramentas-ea42/evidence/logs/screens.log) · [binding](analysis-binding.ferramentas.json)

Achados enviados (52; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| .bg-orange-vivid-40 &gt; .text-secondary-01 | wcag:1.4.3 | Etiquetas de status laranja \(Em análise analista/supervisor, Aguardando plano de ação\): texto #ffffff sobre #e66f0e, 14px normal, contraste 3,16:1 \(5 elementos\). |
| .bg-indigo-vivid-40 &gt; .text-secondary-01 | wcag:1.4.3 | Etiqueta de status &quot;Em revisão analista&quot;: texto #ffffff sobre #8289ff, 14px normal, contraste 3,01:1. |
| .bg-secondary-06 &gt; .text-secondary-01 | wcag:1.4.3 | Etiquetas de status cinza \(&quot;Em análise diretor&quot;, &quot;Aguardando SFPA&quot;\): texto #ffffff sobre #888888, 14px normal, contraste 3,54:1. |
| #avatar-dropdown-trigger .bg-orange-vivid-30 | wcag:1.4.3 | Inicial &quot;U&quot; do avatar: #ffffff sobre #ff8c00, 24,19px negrito \(texto grande\), contraste 2,33:1. |
| main table input\[type=&quot;checkbox&quot;\] | wcag:4.1.2 | Caixas de seleção da tabela \(cabeçalho e 6 linhas\) sem label, aria-label nem aria-labelledby: nome acessível vazio. |
| main table thead th:nth-child\(2\), main table thead th:nth-child\(9\) | wcag:1.3.1 | Cabeçalhos de coluna sem texto: coluna das caixas de seleção e coluna de ações \(Ver/Desassociar/Assinar\). |
| main iframe | wcag:4.1.2 | iframe \(about:blank, 100% x 500px, sem borda\) sem title, aria-label ou aria-labelledby. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] li &gt; li | wcag:1.3.1 | Paginação: &lt;li&gt; do link da página aninhado diretamente em outro &lt;li&gt; \(li &gt; li\), sem &lt;ul&gt;/&lt;ol&gt; pai. |
| main h2 | emag:1.3 | A página não tem &lt;h1&gt;; o título principal &quot;Processos&quot; é &lt;h2&gt;. |
| pnip-mpa-processos span.br-tag.interaction | wcag:2.1.1 | Chips &quot;Meus processos&quot;, &quot;Aberto há&quot;, &quot;Tipo de processo&quot;, &quot;Status&quot;, &quot;Espécie alvo&quot;, &quot;Método de pesca&quot;, &quot;Petrecho&quot; são &lt;span&gt; clicáveis \(cursor pointer\) sem tabindex nem papel \(tabIndex -1\): percorrendo com Tab, o foco va… |
| pnip-mpa-processos .col-auto.mb-1 &gt; span.br-tag | wcag:4.1.2 | &quot;Meus processos&quot; alterna entre ligado \(fundo #1755a9\) e desligado \(fundo branco, borda cinza\) ao clicar, e a lista muda; o estado só é indicado pela cor, sem aria-pressed/role. |
| #searchTableUtils .br-list.d-block .br-item label | wcag:2.1.1 | Opções do filtro &quot;Aberto há&quot; \(Últimos 7/30/60/90 dias\) são &lt;label&gt; em .br-radio sem input associado nem tabindex: não recebem foco, só clique. |
| #searchTableUtils span.br-tag &gt; button.br-button.inverted | wcag:4.1.2 | Após aplicar &quot;Últimos 7 dias&quot;, o botão &quot;×&quot; de remover o filtro contém só ícone aria-hidden; sem texto, aria-label ou title. |
| tbody td:nth-child\(3\) &gt; a\[role=&quot;button&quot;\] | wcag:2.1.1 | Números de processo são &lt;a role=&quot;button&quot;&gt; sem href e sem tabindex \(tabIndex -1\): clicáveis com mouse \(abrem o detalhe\) mas fora da sequência de Tab. |
| br-tab | wcag:2.5.3 | Botões das abas \(shadow DOM de br-tab\) têm aria-label &quot;AGUARDANDO\_ANALISE&quot;, &quot;TRAMITANDO&quot;, &quot;HISTORICO&quot;, enquanto o texto visível é &quot;Aguardando análise&quot;, &quot;Tramitando&quot;, &quot;Concluídos&quot;: o nome acessível não contém o rótulo vi… |
| br-tab | wcag:4.1.2 | As abas são &lt;button&gt; comuns em nav/ul; a aba ativa só tem class &quot;active&quot; no li: sem role=&quot;tab&quot;/tablist, aria-selected nem aria-current; a aba selecionada não é exposta. |
| td.solicitante | incerta | Coluna Solicitante com overflow:hidden, white-space:nowrap, text-overflow:clip: largura útil \~102px e o texto mede 139 a 543px; o nome é cortado sem reticências, sem title e sem meio de ver o conteúdo completo. |
| #avatar-menu | wcag:4.1.2 | Menu do avatar aberto tem role=&quot;menu&quot;, mas os filhos são div/span/button sem role=&quot;menuitem&quot; \(axe aria-required-children\). |
| #avatar-menu .text-center &gt; span | wcag:2.1.1 | &quot;Trocar unidade&quot; no menu do avatar é &lt;span&gt; com cursor pointer, sem tabindex nem papel: não é focável por teclado. |
| #avatar-menu img | wcag:1.1.1 | Imagem exit-icon.png no botão &quot;Sair&quot; sem atributo alt. |
| br-header | incerta | Botão &quot;Menu&quot; do cabeçalho \(#navigation no shadow DOM, data-target=&quot;#main-navigation&quot;\) não faz nada ao ser acionado: #main-navigation não existe, nenhum menu aparece, sem aria-expanded. |
| .swal2-popup | wcag:4.1.2 | Diálogo do PDF aberto por &quot;Assinar&quot;: role=&quot;dialog&quot; com aria-labelledby=&quot;swal2-title&quot;, mas #swal2-title está vazio e display:none; diálogo sem nome acessível. |
| .swal2-html-container object | wcag:1.1.1 | &lt;object type=&quot;application/pdf&quot;&gt; do documento a assinar sem title, aria-label nem conteúdo alternativo. |
| .swal2-close | wcag:3.1.2 | Botão de fechar do diálogo tem aria-label em inglês &quot;Close this dialog&quot; numa página lang=&quot;pt-br&quot;, sem lang=&quot;en&quot;. |
| .swal2-popup | wcag:4.1.2 | Diálogo de confirmação de &quot;Desassociar processo do analista responsável&quot;: #swal2-title vazio e oculto; aria-labelledby aponta para elemento vazio, diálogo sem nome. |
| #swal2-textarea | wcag:4.1.2 | No diálogo &quot;Solicitar Revisão&quot;, o textarea do motivo não tem label, aria-label nem aria-labelledby. |
| body | wcag:2.4.3 | Com o foco no botão &quot;Desassociar processo do analista responsável&quot; \(linha 1\), ao abrir o diálogo e clicar em &quot;Não&quot;, o foco vai para &lt;body&gt; em vez de voltar ao botão que o abriu. |
| pnip-mpa-processos .mt-5.text-center &gt; p | wcag:4.1.3 | Buscar &quot;zzzzzz&quot; troca a tabela pela mensagem &quot;Não há processos para exibir.&quot; num &lt;p&gt; sem role=&quot;status&quot;/aria-live; a região aria-live da contagem some junto com a paginação. |
| title | wcag:2.4.2 | O título do documento da lista de processos é apenas &quot;PNIP&quot;; não descreve a página. |
| #total, #page | wcag:4.1.2 | Seletores &quot;Exibir&quot; e &quot;Página&quot;: input de texto que abre a lista de opções ao clicar, sem role=&quot;combobox&quot;, aria-expanded nem aria-controls; com a lista aberta, o estado expandido não é exposto. |
| br-breadcrumb | incerta | Na trilha da lista, o último item &quot;Processos&quot; \(página atual\) é link para a própria página, sem aria-current. |
| #searchTableUtils span.br-tag &gt; .fas:not\(\[aria-hidden\]\), #searchTableUtils span… | wcag:1.1.1 | Ícones decorativos de fonte \(chips e &quot;Última atualização&quot;\) sem aria-hidden: aparecem na árvore de acessibilidade como caracteres de uso privado \(ex.: &quot;&quot;\). |
| .swal2-popup | wcag:4.1.2 | No detalhe, o diálogo de tela cheia aberto pelo ícone &quot;Ofício&quot; tem aria-labelledby=&quot;swal2-title&quot; vazio e oculto: sem nome acessível. |
| .swal2-html-container object | wcag:1.1.1 | No diálogo do Ofício, &lt;object type=&quot;application/pdf&quot;&gt; sem title, aria-label nem conteúdo alternativo. |
| .swal2-popup.fullscreen .swal2-close | wcag:1.4.3 | No diálogo do Ofício \(tela cheia\), o botão &quot;×&quot; \(32px\) tem cor #1351b4 sobre fundo #676767: contraste 1,29:1. |
| main table td br-icon-base\[icon-name^=&quot;file&quot;\] | wcag:2.1.1 | No detalhe de Alteração de Certificado, os ícones das colunas Ofício e Certificado são br-icon-base clicáveis \(o de Ofício abre o PDF\) sem tabindex, papel nem nome. |
| main table a\[role=&quot;button&quot;\] | wcag:2.1.1 | No detalhe de Alteração de Certificado, o Protocolo é &lt;a role=&quot;button&quot;&gt; sem href e sem tabindex \(não focável\) e sem texto neste estado. |
| main h4 | wcag:1.3.1 | Detalhe de Alteração de Certificado: após o h2, as seções &quot;1. Dados da embarcação&quot; ... &quot;4. Dados do técnico responsável&quot; são h4, pulando o nível 3. |
| main h4 | wcag:1.3.1 | Detalhe União Europeia \(00000.000033/2026-00\): após o h2, as seções &quot;Dados da Embarcação&quot; etc. são h4, pulando o nível 3. |
| main .br-card .card-content &gt; h5 | wcag:1.3.1 | Detalhe CAOL: após o h2 &quot;Solicitação de CAOL&quot;, &quot;Produto a exportar&quot; e &quot;Matéria-prima necessária&quot; são h5 \(salto de h2 para h5\). |
| pnip-solicitacao-uniao-europeia .row.align-items-center &gt; .col-auto &gt; span | wcag:2.1.1 | &quot;Mostrar&quot;/&quot;Ocultar&quot; das seções do detalhe União Europeia são &lt;span&gt; com cursor pointer \(expandem/recolhem ao clicar\) sem tabindex, papel nem aria-expanded. |
| main table th:nth-child\(6\) | wcag:1.3.1 | Detalhe CAOL: o 6º cabeçalho da tabela de resumo \(após Data, Protocolo, Solicitante, Status, Parecer\) está vazio. |
| .bg-secondary-06 &gt; .text-secondary-01 | wcag:1.4.3 | Detalhe União Europeia: etiqueta de status &quot;SUCCESS&quot; #ffffff sobre #888888, 14px, contraste 3,54:1. |
| .bg-secondary-06 &gt; .text-secondary-01 | wcag:1.4.3 | Detalhe CAOL: etiqueta de status &quot;SUCCESS&quot; #ffffff sobre #888888, 14px, contraste 3,54:1. |
| main table a\[role=&quot;button&quot;\] | wcag:2.1.1 | Detalhe União Europeia: Protocolo é &lt;a role=&quot;button&quot;&gt; sem href/tabindex \(não focável\) e sem texto. |
| main table a\[role=&quot;button&quot;\] | wcag:2.1.1 | Detalhe CAOL: Protocolo é &lt;a role=&quot;button&quot;&gt; sem href/tabindex \(não focável\) e sem texto. |
| main h2 | emag:1.3 | Detalhe de Alteração de Certificado sem &lt;h1&gt;; o título &quot;Alteração de Certificado&quot; é h2. |
| main h2 | emag:1.3 | Detalhe União Europeia sem &lt;h1&gt;; o título é h2. |
| main h2 | emag:1.3 | Detalhe CAOL sem &lt;h1&gt;; o título &quot;Solicitação de CAOL&quot; é h2. |
| .swal2-close | wcag:3.1.2 | No diálogo do Ofício, o botão de fechar tem aria-label em inglês &quot;Close this dialog&quot; \(página lang=&quot;pt-br&quot;\). |
| main table thead th:nth-child\(8\) | wcag:1.3.1 | Aba Concluídos: o cabeçalho da coluna de ações \(8ª\) está vazio. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] li &gt; li | wcag:1.3.1 | Aba Concluídos \(2 páginas\): os &lt;li&gt; dos links das páginas 1 e 2 estão aninhados em outros &lt;li&gt;. |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `2a7e89e9f7ed30824bdb3f8ebef062f279f491981125b67f312d6c4066e35267`

