# Resumo da análise — Processos (processos-f2)

Revisão 1 · gerado em 2026-11-27T00:27:40.723Z (UTC)

## 1. Status técnico

Análise: **pronta**

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261127-000706-processos-f2-sem-4c3f | sem | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 45 cartão(ões), nenhum decidido |

Uma execução pode ter rodado bem e ainda estar esperando revisão: isso é normal. A pontuação só é final quando todos os cartões dela foram decididos.

## 2. Identidade

| | sem |
|---|---|
| Tela | Processos (processos-f2 @ govbr-telas-site-1f645f0440df) |
| Braço | sem oráculo |
| Modelo (família) | claude |
| ID pedido | claude-opus-5-5 |
| ID efetivo | claude-opus-5-5 (client-log) |
| Esforço | high |
| Cliente | claude-code 2.1.288 \(Claude Code\) |
| Início (UTC) | 2026-11-27T00:07:35Z |
| Início (local) | 26/11/2026, 21:07:35 (horário de Brasília) |
| Commit do harness | aec9a0b3b93b4951617150682f4a620f75cf0984 |
| Repetição · tentativa | 1 · 1 |
| Campanha · slot · par | portao-teto-f2-01 · s03 · p03 |

## 3. Resultado científico

| Medida | sem |
|---|---|
| Defeitos da referência confirmados | 0 de 69 (até agora) |
| Recall (cobertura da referência) | indisponível |
| Precisão sobre a referência — D/(D+F) | indisponível |
| Precisão das afirmações — (D+N)/(D+N+F) | indisponível |
| Afirmações incorretas (falsos positivos) | 0 |
| Defeitos novos corretos (fora da referência) | 0 |
| Duplicadas | 0 |
| Cartões pendentes de revisão | 45 |
| Maturidade | aguardando revisão — 45 cartão(ões), nenhum decidido |
| Entra na comparação principal | sim |
| Achados enviados | 45 |

Recall e precisão só aparecem com a revisão fechada; enquanto houver cartão pendente ficam “indisponível” (nunca 0). “Achados enviados = 0” é um resultado válido (o agente olhou e não alegou nada); submissão recusada ou ausente é outra coisa.

Linha de base: ausência planejada na campanha antes da coleta — Adendo 2 §5 e adendo da F §3/errata 1: o oráculo não roda na tela F2 antes de o portão de teto do sem passar \(nem varredura, nem verificação, nem linha de base\); a linha de base mede com o validator. O portão dispara com etapas = so-coleta e é analisado com --sem-linha-de-base.

## 4. MCP e isolamento

| | sem |
|---|---|
| Isolamento | passed |
| Oráculo anunciado ao cliente | não |
| Oráculo (pacote) | nenhum |
| Uso do oráculo | ausente (confirmado) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) |
| Protocolo | unverified |
| Ferramentas anunciadas | browser\_close, browser\_console\_messages, browser\_handle\_dialog, browser\_evaluate, browser\_fill\_form, browser\_press\_key, browser\_type, browser\_navigate, browser\_navigate\_back, browser\_network\_requests, browser\_take\_screenshot, browser\_snapshot, browser\_click, browser\_drag, browser\_hover, browser\_select\_option, browser\_tabs, browser\_wait\_for |
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_snapshot, browser\_console\_messages, browser\_take\_screenshot, browser\_click, browser\_press\_key, browser\_navigate\_back, browser\_type |
| Erros de ferramenta | 4 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 39 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | agente \(registro de inspeção inválido, lido do bruto\): 5 — tool-failure 1, unreachable 1, out-of-scope 1, other 2 |
| Registro de inspeção | registro inválido \(1 erro\(s\) de contrato; guardado à parte\) — achados aceitos normalmente; não é zero cobertura; 5 limitação\(ões\) declarada\(s\) no registro bruto |
| Auditoria do registro (processo, não pontua) | registro invalido; 0 candidato\(s\) de ferramenta recebido\(s\); auditoria: nada sinalizado. Relatório de processo: não pontua nem exclui. |

O registro de inspeção é declaração do agente sobre o inventário que ele mesmo descobriu; “com evento de ferramenta” só diz que o identificador citado aparece num evento gravado. Não pontua nem decide elegibilidade, e a cobertura da página continua desconhecida.

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 5. Custo e tempo

| | sem |
|---|---|
| Tempo de relógio (s) | 836 (runner) |
| Turnos | 135 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 134 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) |
| Tokens de entrada | 170 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 70171 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 8424502 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 203775 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 4.719200399999999 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 45 cartão(ões), estimativa 270 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 6. Detalhes e evidências

**sem** (20261127-000706-processos-f2-sem-4c3f): [pacote](../../../../restauracoes/20261127-000706-processos-f2-sem-4c3f/2026-11-27T00-07-06Z__processos-f2__opus__sem__rep-01__20261127-000706-processos-f2-sem-4c3f) · [run.json](../../../../restauracoes/20261127-000706-processos-f2-sem-4c3f/2026-11-27T00-07-06Z__processos-f2__opus__sem__rep-01__20261127-000706-processos-f2-sem-4c3f/run.json) · [findings.json](../../../../restauracoes/20261127-000706-processos-f2-sem-4c3f/2026-11-27T00-07-06Z__processos-f2__opus__sem__rep-01__20261127-000706-processos-f2-sem-4c3f/findings.json) · [isolation.json](../../../../restauracoes/20261127-000706-processos-f2-sem-4c3f/2026-11-27T00-07-06Z__processos-f2__opus__sem__rep-01__20261127-000706-processos-f2-sem-4c3f/isolation.json) · [eventos de ferramenta](../../../../restauracoes/20261127-000706-processos-f2-sem-4c3f/2026-11-27T00-07-06Z__processos-f2__opus__sem__rep-01__20261127-000706-processos-f2-sem-4c3f/tool-events.ndjson) · — · evidências: [#1](../../../../restauracoes/20261127-000706-processos-f2-sem-4c3f/2026-11-27T00-07-06Z__processos-f2__opus__sem__rep-01__20261127-000706-processos-f2-sem-4c3f/evidence/aderencia-oraculo.json) [#2](../../../../restauracoes/20261127-000706-processos-f2-sem-4c3f/2026-11-27T00-07-06Z__processos-f2__opus__sem__rep-01__20261127-000706-processos-f2-sem-4c3f/evidence/cliente.json) [#3](../../../../restauracoes/20261127-000706-processos-f2-sem-4c3f/2026-11-27T00-07-06Z__processos-f2__opus__sem__rep-01__20261127-000706-processos-f2-sem-4c3f/evidence/container-config.json) [#4](../../../../restauracoes/20261127-000706-processos-f2-sem-4c3f/2026-11-27T00-07-06Z__processos-f2__opus__sem__rep-01__20261127-000706-processos-f2-sem-4c3f/evidence/controles-positivos.json) [#5](../../../../restauracoes/20261127-000706-processos-f2-sem-4c3f/2026-11-27T00-07-06Z__processos-f2__opus__sem__rep-01__20261127-000706-processos-f2-sem-4c3f/evidence/mcp-config.json) [#6](../../../../restauracoes/20261127-000706-processos-f2-sem-4c3f/2026-11-27T00-07-06Z__processos-f2__opus__sem__rep-01__20261127-000706-processos-f2-sem-4c3f/evidence/preflight.json) [#7](../../../../restauracoes/20261127-000706-processos-f2-sem-4c3f/2026-11-27T00-07-06Z__processos-f2__opus__sem__rep-01__20261127-000706-processos-f2-sem-4c3f/evidence/prompt.txt) [#8](../../../../restauracoes/20261127-000706-processos-f2-sem-4c3f/2026-11-27T00-07-06Z__processos-f2__opus__sem__rep-01__20261127-000706-processos-f2-sem-4c3f/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../restauracoes/20261127-000706-processos-f2-sem-4c3f/2026-11-27T00-07-06Z__processos-f2__opus__sem__rep-01__20261127-000706-processos-f2-sem-4c3f/evidence/raw/browser/inventory.json) [#10](../../../../restauracoes/20261127-000706-processos-f2-sem-4c3f/2026-11-27T00-07-06Z__processos-f2__opus__sem__rep-01__20261127-000706-processos-f2-sem-4c3f/evidence/raw/browser/tool-events.ndjson) [#11](../../../../restauracoes/20261127-000706-processos-f2-sem-4c3f/2026-11-27T00-07-06Z__processos-f2__opus__sem__rep-01__20261127-000706-processos-f2-sem-4c3f/evidence/raw/collector/accepted-raw.txt) [#12](../../../../restauracoes/20261127-000706-processos-f2-sem-4c3f/2026-11-27T00-07-06Z__processos-f2__opus__sem__rep-01__20261127-000706-processos-f2-sem-4c3f/evidence/raw/collector/events.ndjson) [#13](../../../../restauracoes/20261127-000706-processos-f2-sem-4c3f/2026-11-27T00-07-06Z__processos-f2__opus__sem__rep-01__20261127-000706-processos-f2-sem-4c3f/evidence/raw/collector/findings.json) [#14](../../../../restauracoes/20261127-000706-processos-f2-sem-4c3f/2026-11-27T00-07-06Z__processos-f2__opus__sem__rep-01__20261127-000706-processos-f2-sem-4c3f/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../restauracoes/20261127-000706-processos-f2-sem-4c3f/2026-11-27T00-07-06Z__processos-f2__opus__sem__rep-01__20261127-000706-processos-f2-sem-4c3f/evidence/raw/egress-site/egress.ndjson) [#16](../../../../restauracoes/20261127-000706-processos-f2-sem-4c3f/2026-11-27T00-07-06Z__processos-f2__opus__sem__rep-01__20261127-000706-processos-f2-sem-4c3f/evidence/raw/probe/probe.json) [#17](../../../../restauracoes/20261127-000706-processos-f2-sem-4c3f/2026-11-27T00-07-06Z__processos-f2__opus__sem__rep-01__20261127-000706-processos-f2-sem-4c3f/evidence/raw/probe/sonda-escrita-1795738054726.txt) [#18](../../../../restauracoes/20261127-000706-processos-f2-sem-4c3f/2026-11-27T00-07-06Z__processos-f2__opus__sem__rep-01__20261127-000706-processos-f2-sem-4c3f/evidence/raw/task/mcp.json) [#19](../../../../restauracoes/20261127-000706-processos-f2-sem-4c3f/2026-11-27T00-07-06Z__processos-f2__opus__sem__rep-01__20261127-000706-processos-f2-sem-4c3f/evidence/raw/task/prompt.txt) [#20](../../../../restauracoes/20261127-000706-processos-f2-sem-4c3f/2026-11-27T00-07-06Z__processos-f2__opus__sem__rep-01__20261127-000706-processos-f2-sem-4c3f/evidence/uso.json) · logs: [#1](../../../../restauracoes/20261127-000706-processos-f2-sem-4c3f/2026-11-27T00-07-06Z__processos-f2__opus__sem__rep-01__20261127-000706-processos-f2-sem-4c3f/evidence/logs/agent.log) [#2](../../../../restauracoes/20261127-000706-processos-f2-sem-4c3f/2026-11-27T00-07-06Z__processos-f2__opus__sem__rep-01__20261127-000706-processos-f2-sem-4c3f/evidence/logs/browser.log) [#3](../../../../restauracoes/20261127-000706-processos-f2-sem-4c3f/2026-11-27T00-07-06Z__processos-f2__opus__sem__rep-01__20261127-000706-processos-f2-sem-4c3f/evidence/logs/collector.log) [#4](../../../../restauracoes/20261127-000706-processos-f2-sem-4c3f/2026-11-27T00-07-06Z__processos-f2__opus__sem__rep-01__20261127-000706-processos-f2-sem-4c3f/evidence/logs/egress-provider.log) [#5](../../../../restauracoes/20261127-000706-processos-f2-sem-4c3f/2026-11-27T00-07-06Z__processos-f2__opus__sem__rep-01__20261127-000706-processos-f2-sem-4c3f/evidence/logs/egress-site.log) [#6](../../../../restauracoes/20261127-000706-processos-f2-sem-4c3f/2026-11-27T00-07-06Z__processos-f2__opus__sem__rep-01__20261127-000706-processos-f2-sem-4c3f/evidence/logs/probe.log) [#7](../../../../restauracoes/20261127-000706-processos-f2-sem-4c3f/2026-11-27T00-07-06Z__processos-f2__opus__sem__rep-01__20261127-000706-processos-f2-sem-4c3f/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (45; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| br-tab | wcag:2.5.3 | Os botões das abas no shadow root de br-tab têm aria-label com o identificador interno \(&quot;AGUARDANDO\_ANALISE&quot;, &quot;TRAMITANDO&quot;, &quot;HISTORICO&quot;\), que substitui o texto visível &quot;Aguardando análise&quot;, &quot;Tramitando&quot;, &quot;Concluídos&quot;. |
| br-tab | wcag:4.1.2 | As abas são &lt;button&gt; dentro de &lt;nav&gt;&lt;ul&gt;&lt;li&gt;, sem role tablist/tab/tabpanel nem aria-selected; a aba ativa só é indicada pela classe visual &quot;active&quot; do &lt;li&gt;. |
| span.br-tag.interaction\[style\*=&quot;cursor&quot;\] | wcag:2.1.1 | Os 7 controles de filtro \(&quot;Meus processos&quot;, &quot;Aberto há&quot;, &quot;Tipo de processo&quot;, &quot;Status&quot;, &quot;Espécie alvo&quot;, &quot;Método de pesca&quot;, &quot;Petrecho&quot;\) são &lt;span&gt; com cursor:pointer e tabIndex -1; focus\(\) não os foca e não entram na sequ… |
| span.br-tag.interaction\[style\*=&quot;cursor&quot;\] | wcag:4.1.2 | Os mesmos &lt;span&gt; não têm role \(button\), nem aria-pressed \(&quot;Meus processos&quot;, que alterna entre ativo/inativo\) nem aria-expanded \(filtros que abrem lista de opções\); a árvore de acessibilidade os expõe como &quot;generic&quot;. |
| pnip-multiple-search-table-utils .br-item .br-radio | wcag:4.1.2 | As opções do filtro aberto \(&quot;Últimos 7 dias&quot;, &quot;Últimos 30 dias&quot;...\) são &lt;div class=&quot;br-radio&quot;&gt;&lt;label&gt; sem &lt;input type=radio&gt;, sem role e com tabIndex -1; aparecem como &quot;generic&quot; e não são focáveis. |
| pnip-multiple-search-table-utils .br-tag button.inverted | wcag:4.1.2 | O botão &quot;×&quot; que remove o filtro aplicado &quot;Últimos 7 dias&quot; contém apenas &lt;i class=&quot;fas fa-times&quot; aria-hidden=&quot;true&quot;&gt;; não tem aria-label, title nem texto: nome acessível vazio. |
| tbody a\[role=&quot;button&quot;\] | wcag:2.1.1 | Os números de processo são &lt;a role=&quot;button&quot;&gt; sem href e sem tabindex; focus\(\) não os foca e não entram na sequência de Tab, embora sejam clicáveis com o mouse. |
| thead input\[type=&quot;checkbox&quot;\] | wcag:4.1.2 | A caixa &quot;selecionar todos&quot; no cabeçalho não tem label, aria-label nem title \(labels.length 0\); nome acessível vazio. |
| tbody input\[type=&quot;checkbox&quot;\] | wcag:4.1.2 | As 6 caixas de seleção das linhas não têm label, aria-label nem title; nome acessível vazio. |
| br-input#search | emag:6.2 | O campo de busca \(input#search no shadow root\) não tem &lt;label&gt; nem aria-label; a única identificação é o placeholder &quot;Pesquise aqui ...&quot;, que desaparece ao digitar. |
| thead th:first-child | wcag:1.3.1 | O cabeçalho &quot;Aberto há&quot; exibe o ícone sort-down indicando a ordenação atual da tabela, mas o &lt;th&gt; não tem aria-sort \(nem texto alternativo para o ícone\). |
| pnip-mpa-processos iframe | wcag:4.1.2 | Há um &lt;iframe&gt; vazio \(sem src, 1160×500 px\) após o botão &quot;Voltar&quot;, sem title, que recebe foco na sequência de Tab \(tabIndex 0\) e ocupa área em branco de 500 px. |
| pnip-status-solicitacao-utils .bg-orange-vivid-40 &gt; div | wcag:1.4.3 | Texto branco \(#FFFFFF\) sobre laranja rgb\(230,111,14\), 14px peso 500: contraste 3,16:1 \(&quot;Em análise analista&quot;, &quot;Em análise supervisor&quot;, &quot;Em análise diretor&quot;\). |
| pnip-status-solicitacao-utils .bg-indigo-vivid-40 &gt; div | wcag:1.4.3 | Texto branco sobre rgb\(130,137,255\), 14px peso 500: contraste 3,01:1 \(&quot;Aguarda complementos&quot;\). |
| pnip-status-solicitacao-utils .bg-secondary-06 &gt; div | wcag:1.4.3 | Texto branco sobre cinza rgb\(136,136,136\), 14px peso 500: contraste 3,54:1 \(&quot;Aguardando plano de ação&quot;, &quot;Aguardando SFPA&quot;\). |
| .br-avatar &gt; span | wcag:1.4.3 | A inicial &quot;U&quot; do avatar é branca sobre rgb\(255,140,0\), 24,19px: contraste 2,33:1. |
| #avatar-dropdown-trigger | wcag:2.5.3 | O botão exibe &quot;Olá, Usuária de Teste, SUPERVISOR&quot;, mas o aria-label &quot;Avatar com dropdown&quot; substitui esse texto como nome acessível. |
| #avatar-menu | wcag:4.1.2 | O menu aberto tem role=&quot;menu&quot;, mas seus filhos são &lt;div&gt; e &lt;button&gt; sem role menuitem; &quot;Sair&quot; e &quot;Trocar unidade&quot; não são itens de menu. |
| #avatar-menu span\[style\*=&quot;cursor&quot;\] | wcag:2.1.1 | &quot;Trocar unidade&quot; é um &lt;span&gt; com cursor:pointer, tabIndex -1 e sem role; não pode ser focado nem acionado por teclado. |
| #avatar-menu img | wcag:1.1.1 | A imagem exit-icon.png dentro do botão &quot;Sair&quot; não tem atributo alt. |
| #avatar-dropdown-trigger | incerta | Com o menu do usuário aberto e o foco no botão, Escape não fecha o menu \(aria-expanded permanece &quot;true&quot;, #avatar-menu continua visível\). |
| br-header | wcag:1.1.1 | A imagem da marca gov.br no cabeçalho tem alt=&quot;logo&quot;, que não identifica a marca. |
| br-header | incerta | O botão &quot;Menu&quot; \(hambúrguer\) do cabeçalho aponta para data-target=&quot;#main-navigation&quot;, elemento inexistente; ao clicar, nada abre e não há aria-expanded. |
| br-breadcrumb | wcag:4.1.2 | O item &quot;Home&quot; da trilha é um &lt;a href=&quot;/portal-mpa/&quot;&gt; que contém um &lt;button&gt; \(aria-label=&quot;&quot;\) — controles interativos aninhados; Tab para no link e depois no botão interno \(duas paradas para o mesmo destino\). |
| head &gt; title | wcag:2.4.2 | O título do documento é apenas &quot;PNIP&quot; e não muda na tela Processos \(nem nos detalhes\). |
| pnip-mpa-processos h2 | emag:1.3 | A página não tem &lt;h1&gt;; o único cabeçalho da tela é o &lt;h2&gt; &quot;Processos&quot;. |
| main | emag:1.5 | Não há âncoras/atalhos para ir ao conteúdo, ao menu ou à busca no início da página; o primeiro elemento focável é o botão &quot;Menu&quot; do cabeçalho. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] | incerta | A paginação só tem o botão &quot;Página seguinte&quot;; não existe botão &quot;Página anterior&quot;, nem mesmo na página 2 de Concluídos. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] li &gt; li | wcag:1.3.1 | Cada número de página é um &lt;li&gt; aninhado diretamente dentro de outro &lt;li&gt; \(sem &lt;ul&gt;\), estrutura de lista inválida exposta como listitem dentro de listitem. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] a.page.active | wcag:1.3.1 | A página atual só é indicada pela classe visual &quot;active&quot; \(círculo preenchido\); o link não tem aria-current. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] button\[aria-label=&quot;Página seguinte&quot;\] | wcag:2.4.3 | Ao acionar &quot;Página seguinte&quot; para chegar à última página, o botão fica disabled e o foco cai no &lt;body&gt;. |
| #page | incerta | Na página 2 de Concluídos \(&quot;11–14 de 14 itens&quot;, página 2 ativa\), o seletor &quot;Página&quot; continua exibindo &quot;1&quot; \(a opção 2 está marcada internamente\). |
| #total, #page | wcag:4.1.2 | Os seletores &quot;Exibir&quot; e &quot;Página&quot; são &lt;input type=&quot;text&quot;&gt; editáveis sem role combobox, aria-expanded nem aria-controls; as opções são &lt;div class=&quot;br-item&quot;&gt; sem role, e o foco vai para essas &lt;div&gt;. |
| #total | wcag:2.4.3 | Ao escolher &quot;25&quot; no seletor &quot;Exibir&quot; pelo teclado \(ArrowDown, Enter\), a lista fecha e o foco vai para o &lt;body&gt;. |
| #page | incerta | Com a lista do seletor &quot;Página&quot; aberta, Escape não a fecha \(.br-list continua display:block\). |
| pnip-mpa-processos div.mt-5.text-center &gt; p | wcag:4.1.3 | Após a busca, a mensagem &quot;Não há processos para exibir.&quot; substitui a tabela sem role=status nem aria-live \(a região aria-live da paginação é removida\). |
| div.br-table &gt; table | incerta | Com a coluna de seleção exibida, a tabela termina em x=1242 px, enquanto o contêiner .br-table e o botão &quot;Exportar&quot; terminam em 1188 px \(overflow visível de 54 px; o botão &quot;Assinar&quot; ultrapassa a margem\). Sem a coluna \(M… |
| thead input\[type=&quot;checkbox&quot;\] | incerta | A caixa do cabeçalho está em x=212 px, enquanto as caixas das linhas estão em x=207 px \(margin-left:5px inline só no cabeçalho\), desalinhando a coluna. |
| .swal2-popup | wcag:4.1.2 | O modal de &quot;Assinar&quot; \(visualizador de PDF\) tem role=&quot;dialog&quot; com aria-labelledby=&quot;swal2-title&quot;, mas o h2#swal2-title está vazio e display:none: o diálogo fica sem nome acessível. |
| .swal2-close | wcag:3.1.2 | O botão de fechar do modal tem aria-label em inglês &quot;Close this dialog&quot; numa página lang=&quot;pt-br&quot;, sem marcação de idioma. |
| .swal2-html-container object | wcag:1.1.1 | O documento é incorporado com &lt;object type=&quot;application/pdf&quot;&gt; sem title, aria-label nem conteúdo alternativo; recebe o foco ao abrir o modal. |
| .swal2-popup | wcag:4.1.2 | O diálogo de confirmação &quot;Tem certeza que deseja desassociar...&quot; tem role=&quot;dialog&quot; e aria-labelledby apontando para h2#swal2-title vazio e oculto: sem nome acessível. |
| tbody tr:nth-child\(1\) br-button\[title=&quot;Desassociar processo do analista respons… | wcag:2.4.3 | Após abrir o diálogo pelo teclado e fechá-lo com Escape, o foco vai para o &lt;body&gt; em vez de voltar ao botão que o abriu; o mesmo ocorre ao fechar o modal de &quot;Assinar&quot;. |
| .swal2-html-container ul | incerta | O resumo do diálogo &quot;Confirma a assinatura de 6 processo\(s\)?&quot; mostra códigos internos &quot;HABILITACAO\_TR&quot; e &quot;VINCULACAO\_EMBARCACAO&quot; ao lado de rótulos legíveis \(&quot;CAOL&quot;, &quot;Higiênico-Sanitário \(HS\)&quot;\). |
| .swal2-actions | incerta | No diálogo de assinatura em lote, a ação principal &quot;Assinar&quot; fica à esquerda \(x=677\) e &quot;Cancelar&quot; à direita \(x=776\); nos diálogos &quot;Desassociar&quot; \(Não x=740 / Sim x=818\) e &quot;Assinar&quot; individual \(Solicitar Revisão / Assinar… |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `d4b646282ff068d68686bd64890959deb407d367f4f07c4bda48d8604c0a6837`

