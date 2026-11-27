# Resumo da análise — Processos (processos-f3)

Revisão 1 · gerado em 2026-11-27T07:16:06.108Z (UTC)

## 1. Status técnico

Análise: **pronta**

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261127-063732-processos-f3-ferramentas-cf1b | ferramentas | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 37 cartão(ões), nenhum decidido |

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
| Início (UTC) | 2026-11-27T06:38:04Z |
| Início (local) | 27/11/2026, 03:38:04 (horário de Brasília) |
| Commit do harness | cce6dd825ae84448f49a8a01267ac05a70d6325b |
| Repetição · tentativa | 1 · 1 |
| Campanha · slot · par | portao-ferramentas-f3-01 · s02 · p02 |

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
| Cartões pendentes de revisão | 37 |
| Maturidade | aguardando revisão — 37 cartão(ões), nenhum decidido |
| Entra na comparação principal | sim |
| Achados enviados | 37 |

Recall e precisão só aparecem com a revisão fechada; enquanto houver cartão pendente ficam “indisponível” (nunca 0). “Achados enviados = 0” é um resultado válido (o agente olhou e não alegou nada); submissão recusada ou ausente é outra coisa.

Linha de base: ausência planejada na campanha antes da coleta — Adendo 3 §5.2 \(controle 2 da errata 1 do adendo 2\): o controle conta só as specs semeadas que o agente do ferramentas confirma \(creditosDoTrio, chave principal\|1.2.0\); a linha de base não entra na conta. A linha de base da F3 é medida no controle 1 \(cobertura, sem modelo, a do dublê sem da ensaio-trio-f3-01\); o diagnóstico guiado e o axe dela continuam fechados até o fim da coleta \(adendo 2 §5 e …

## 4. MCP e isolamento

| | ferramentas |
|---|---|
| Isolamento | passed |
| Oráculo anunciado ao cliente | sim |
| Oráculo (pacote) | govbr-ds-validator-server 3.7.12 (knowledge-free) |
| Oráculo: ferramentas efetivas (tools/list) | get\_finding\_details, scan\_page, verify\_finding (5b9c59aaa490) |
| Uso do oráculo | usado com erros |
| Chamadas ao oráculo | 19 (ponte MCP do oráculo) |
| Protocolo | unverified |
| Ferramentas anunciadas | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for, scan\_page, get\_finding\_details, verify\_finding |
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_snapshot, scan\_page, get\_finding\_details, browser\_click, browser\_press\_key, browser\_take\_screenshot, browser\_type, verify\_finding, browser\_wait\_for |
| Erros de ferramenta | 4 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 47 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 10 aprovado(s); falhos: nenhum |
| Limitações declaradas | agente \(registro de inspeção\): 8 — out-of-scope 1, other 6, tool-failure 1 |
| Registro de inspeção | registro parcial pelo agente: 10 de 10 região\(ões\) que ele mesmo descobriu inspecionadas; 16 estado\(s\) \(12 confirmado\(s\) por ele, 12 com evento de ferramenta\); 46 candidato\(s\); 8 limitação\(ões\). Cobertura da página: desconhecida. |
| Auditoria do registro (processo, não pontua) | registro registrado; 184 candidato\(s\) de ferramenta recebido\(s\) — aceitos 40, rejeitados 0, incertos 0, não examinados 144; auditoria: reproducao-nao-comprovada 4, candidato-sem-destino 144 · parcial \(registro-parcial, limitacao:tool-failure; 144 conhecido\(s\) não revisado\(s\)\). Relatório de processo: não pontua nem exclui. |

O registro de inspeção é declaração do agente sobre o inventário que ele mesmo descobriu; “com evento de ferramenta” só diz que o identificador citado aparece num evento gravado. Não pontua nem decide elegibilidade, e a cobertura da página continua desconhecida.

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 5. Custo e tempo

| | ferramentas |
|---|---|
| Tempo de relógio (s) | 909 (runner) |
| Turnos | 121 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 120 (ponte MCP) |
| Chamadas ao oráculo | 19 (ponte MCP do oráculo) |
| Tokens de entrada | 158 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 62792 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 10295216 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 228993 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 5.147459200000002 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 37 cartão(ões), estimativa 222 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 6. Detalhes e evidências

**ferramentas** (20261127-063732-processos-f3-ferramentas-cf1b): [pacote](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b) · [run.json](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/run.json) · [findings.json](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/findings.json) · [isolation.json](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/isolation.json) · [eventos de ferramenta](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/tool-events.ndjson) · — · evidências: [#1](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/evidence/aderencia-oraculo.json) [#2](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/evidence/cliente.json) [#3](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/evidence/container-config.json) [#4](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/evidence/controles-positivos.json) [#5](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/evidence/mcp-config.json) [#6](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/evidence/preflight.json) [#7](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/evidence/prompt.txt) [#8](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/evidence/raw/browser/inventory.json) [#10](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/evidence/raw/browser/tool-events.ndjson) [#11](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/evidence/raw/collector/accepted-raw.txt) [#12](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/evidence/raw/collector/events.ndjson) [#13](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/evidence/raw/collector/findings.json) [#14](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/evidence/raw/egress-site/egress.ndjson) [#16](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/evidence/raw/oracle/inventory.json) [#17](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/evidence/raw/oracle/oracle-telemetry.ndjson) [#18](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/evidence/raw/oracle/tool-events.ndjson) [#19](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/evidence/raw/probe/probe.json) [#20](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/evidence/raw/probe/sonda-escrita-1795761483883.txt) [#21](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/evidence/raw/task/mcp.json) [#22](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/evidence/raw/task/prompt.txt) [#23](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/evidence/uso.json) [#24](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/evidence/vazamento-conhecimento.json) · logs: [#1](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/evidence/logs/agent.log) [#2](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/evidence/logs/browser.log) [#3](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/evidence/logs/collector.log) [#4](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/evidence/logs/egress-provider.log) [#5](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/evidence/logs/egress-site.log) [#6](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/evidence/logs/oracle.log) [#7](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/evidence/logs/probe.log) [#8](../../../../restauracoes/20261127-063732-processos-f3-ferramentas-cf1b/2026-11-27T06-37-32Z__processos-f3__opus__ferramentas__rep-01__20261127-063732-processos-f3-ferramentas-cf1b/evidence/logs/screens.log) · [binding](analysis-binding.ferramentas.json)

Achados enviados (37; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| span.br-tag.interaction | wcag:2.1.1 | Os 7 chips de filtro \('Meus processos', 'Aberto há', 'Tipo de processo', 'Status', 'Espécie alvo', 'Método de pesca', 'Petrecho'\) são &lt;span&gt; com cursor:pointer e handler de clique, sem role nem tabindex. Na sequência de… |
| .col-auto.mb-1 &gt; span.br-tag.interaction | wcag:4.1.2 | O chip 'Meus processos' funciona como alternância \(ativo: fundo rgb\(23,85,169\) e 9 linhas; inativo: fundo branco e 10 linhas\), mas não expõe papel nem estado \(sem role=button nem aria-pressed\); o estado só é percebido p… |
| #searchTableUtils .br-select .br-radio &gt; label | wcag:4.1.2 | As opções do filtro 'Aberto há' \('Últimos 7/30/60/90 dias'\) são &lt;div class='br-radio'&gt;&lt;label&gt;…&lt;/label&gt;&lt;/div&gt; sem input radio: sem papel, sem estado selecionado e sem foco \(label.focus\(\) não recebe foco\). |
| #searchTableUtils span.br-tag.interaction &gt; button.br-button | button-name | O botão de remover o filtro aplicado \('Últimos 7 dias'\) contém só o ícone fa-times com aria-hidden e não tem aria-label/texto: nome acessível vazio. |
| tbody td a\[role=&quot;button&quot;\] | wcag:2.1.1 | Os números de processo \(ex.: 00000.000010/2026-00\) são &lt;a role='button'&gt; sem href e sem tabindex; element.focus\(\) não lhes dá foco e não entram na sequência de Tab. O clique abre o detalhe do processo. O mesmo ocorre na… |
| br-tab | wcag:2.5.3 | Os botões das abas têm aria-label 'AGUARDANDO\_ANALISE', 'TRAMITANDO' e 'HISTORICO', que substituem os textos visíveis 'Aguardando análise', 'Tramitando' e 'Concluídos' \(nome acessível não contém o rótulo visível; 'HISTO… |
| br-tab | wcag:4.1.2 | A aba ativa só é indicada visualmente \(classe 'active' no li\); os botões não têm role=tab nem aria-selected/aria-current, de modo que leitores de tela não sabem qual aba está selecionada \(testado em 'Aguardando análise'… |
| #avatar-dropdown-trigger | wcag:2.5.3 | O botão do usuário mostra o texto 'Olá, Usuária de Teste, SUPERVISOR', mas o aria-label 'Avatar com dropdown' substitui esse texto no nome acessível. |
| #avatar-dropdown-trigger .bg-orange-vivid-30 | wcag-1.4.3 | Inicial 'U' do avatar: texto #ffffff sobre #ff8c00, 24,19px bold, contraste 2,33:1. |
| #avatar-menu .text-center &gt; span | wcag:2.1.1 | 'Trocar unidade' no menu do usuário é um &lt;span&gt; com cursor:pointer \(clique navega para /pnip-f3/portal-mpa\); não tem role nem tabindex. Com o menu aberto, Tab vai do gatilho direto para 'Sair'. |
| #avatar-menu | aria-required-children | O contêiner role='menu' contém um &lt;button&gt; comum e textos, sem nenhum role=menuitem. |
| #avatar-menu img | image-alt | O ícone &lt;img src='…/exit-icon.png'&gt; dentro do botão 'Sair' não tem atributo alt. |
| #avatar-menu | region | O menu do usuário aberto \(nome, e-mail, perfil, Trocar unidade, Sair\) fica fora de qualquer landmark: está fora do &lt;header&gt; do br-header e do &lt;main&gt;. |
| .bg-orange-vivid-40 &gt; .text-secondary-01 | color-contrast | Etiquetas de status 'Em análise analista/supervisor/diretor': texto #ffffff sobre #e66f0e, 14px normal, contraste 3,16:1 \(5 ocorrências\). |
| .bg-indigo-vivid-40 &gt; .text-secondary-01 | color-contrast | Etiqueta 'Aguarda complementos': texto #ffffff sobre #8289ff, 14px normal, contraste 3,01:1. |
| .bg-secondary-06 &gt; .text-secondary-01 | color-contrast | Etiquetas 'Aguardando plano de ação' e 'Aguardando SFPA': texto #ffffff sobre #888888, 14px normal, contraste 3,54:1. |
| table input\[type=&quot;checkbox&quot;\] | label | O checkbox 'selecionar todos' do cabeçalho e os 6 checkboxes das linhas não têm label, aria-label nem aria-labelledby \(nome acessível vazio\). |
| thead th:nth-child\(2\), thead th:nth-child\(9\) | empty-table-header | Os cabeçalhos da coluna de seleção \(só contém o checkbox\) e da coluna de ações estão sem texto acessível. |
| iframe | frame-title | &lt;iframe&gt; visível \(1160×500px, about:blank\) abaixo do conteúdo, sem title/aria-label. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] li &gt; li | listitem | Na paginação, o &lt;li&gt; com o link de página está aninhado diretamente em outro &lt;li&gt;, sem &lt;ul&gt;/&lt;ol&gt; intermediário. |
| pnip-mpa-processos h2 | page-has-heading-one | O título principal da tela 'Processos' é um h2; a página não tem nenhum h1. |
| pnip-mpa-processos .mt-5.text-center | wcag:4.1.3 | Após buscar 'zzzz', a tabela é substituída por &lt;p&gt;Não há processos para exibir.&lt;/p&gt; num div sem role=status/alert nem aria-live \(nenhum ancestral é região viva\); o foco continua no campo de busca. |
| .swal2-popup | aria-dialog-name | O diálogo de confirmação 'Tem certeza que deseja desassociar…' \(role=dialog, aria-modal\) tem aria-labelledby apontando para #swal2-title, que está vazio e display:none: o diálogo fica sem nome acessível. |
| .swal2-popup | aria-dialog-name | O diálogo de 'Assinar' \(PDF + 'Solicitar Revisão' / 'Assinar com gov.br'\) tem aria-labelledby apontando para #swal2-title vazio e oculto: sem nome acessível. |
| .swal2-html-container object | object-alt | O documento PDF exibido no diálogo de assinatura é um &lt;object type='application/pdf'&gt; sem title/aria-label nem conteúdo alternativo. |
| .swal2-close | wcag:3.1.2 | O botão de fechar \(×\) do diálogo de assinatura tem aria-label 'Close this dialog', em inglês, numa página lang='pt-br' e sem lang='en' no elemento. |
| tbody tr:nth-child\(1\) br-button\[title=&quot;Desassociar processo do analista respons… | wcag:2.4.3 | Com foco no botão 'Desassociar' da linha 1, Enter abre o diálogo \(foco vai para 'Sim'\); ao fechar com Esc, document.activeElement passa a ser &lt;body&gt;: o foco não volta ao botão que abriu o diálogo. |
| table tbody | incerta | A tabela se atualiza sozinha \(\~58 s no relógio da página; 'Última atualização' 09:30→09:31\) e recria as linhas: o checkbox que tinha foco é removido do DOM \(isConnected=false\) e o foco cai em &lt;body&gt;, sem ação do usuário… |
| td.solicitante | incerta | As células da coluna 'Solicitante' têm max-width 150px, white-space:nowrap, overflow:hidden e text-overflow:clip, sem title: o texto é cortado sem reticências \(ex.: 'Pessoa Exemplo Gc…' de 'Pessoa Exemplo Gomes'; scroll… |
| thead th:first-child | wcag:1.3.1 | O cabeçalho 'Aberto há' \(na aba Concluídos: 'Data/Hora'\) mostra o ícone fa-sort-down \(aria-hidden\) indicando a ordenação, mas o th não tem aria-sort nem texto alternativo. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] a.page.active | wcag:1.3.1 | A página atual da paginação só é indicada pela classe 'active' \(estilo\); o link não tem aria-current='page'. |
| br-breadcrumb | wcag:4.1.2 | O item 'Home' do breadcrumb é um &lt;a href='/portal-mpa/'&gt; contendo um &lt;button&gt; \(conteúdo interativo aninhado\): Tab para duas vezes no mesmo item \(A e depois BUTTON\) e o papel exposto fica ambíguo \(link com botão dentro\). |
| br-breadcrumb | incerta | O link 'Home' do breadcrumb aponta para http&#58;//screens:3300/portal-mpa/ \(fora da base /pnip-f3/\); ao clicar, a navegação termina em 404. |
| br-header | incerta | O botão 'Menu' \(#navigation, data-target='#main-navigation'\) do cabeçalho não abre nada: não existe #main-navigation no documento, o botão não tem aria-expanded e nada muda na tela após o clique. |
| br-header | wcag:1.1.1 | O logotipo gov.br no cabeçalho \(img dentro do shadow root do br-header\) tem alt='logo', que não identifica a marca. |
| head &gt; title | wcag:2.4.2 | O título do documento é só 'PNIP' nesta tela e também nas telas de exportação e de detalhe do processo; não descreve a página. |
| main | emag:1.5 | Não há links de salto \('Ir para o conteúdo', etc.\): document.querySelectorAll\('a\[href^=&quot;#&quot;\]'\) retorna 0, e o primeiro Tab vai para o botão 'Menu' do cabeçalho. |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `bfccca3e662da8995ee5cdf994cb783fd4616cafc8e6eca35d01696721674110`

