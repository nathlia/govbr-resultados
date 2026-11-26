# Resumo da análise — Processos (processos-f)

Revisão 1 · gerado em 2026-11-26T17:26:09.420Z (UTC)

## 1. Status técnico

Análise: **pronta**

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261126-170754-processos-f-sem-b696 | sem | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 43 cartão(ões), nenhum decidido |

Uma execução pode ter rodado bem e ainda estar esperando revisão: isso é normal. A pontuação só é final quando todos os cartões dela foram decididos.

## 2. Identidade

| | sem |
|---|---|
| Tela | Processos (processos-f @ govbr-telas-site-03af89205307) |
| Braço | sem oráculo |
| Modelo (família) | claude |
| ID pedido | claude-opus-5-5 |
| ID efetivo | claude-opus-5-5 (client-log) |
| Esforço | high |
| Cliente | claude-code 2.1.288 \(Claude Code\) |
| Início (UTC) | 2026-11-26T17:08:28Z |
| Início (local) | 26/11/2026, 14:08:28 (horário de Brasília) |
| Commit do harness | 0be3a071cdc96ced852dac8d75e3305d29a95f90 |
| Repetição · tentativa | 1 · 1 |
| Campanha · slot · par | portao-teto-f-01 · s01 · p01 |

## 3. Resultado científico

| Medida | sem |
|---|---|
| Defeitos da referência confirmados | 0 de 77 (até agora) |
| Recall (cobertura da referência) | indisponível |
| Precisão sobre a referência — D/(D+F) | indisponível |
| Precisão das afirmações — (D+N)/(D+N+F) | indisponível |
| Afirmações incorretas (falsos positivos) | 0 |
| Defeitos novos corretos (fora da referência) | 0 |
| Duplicadas | 0 |
| Cartões pendentes de revisão | 43 |
| Maturidade | aguardando revisão — 43 cartão(ões), nenhum decidido |
| Entra na comparação principal | sim |
| Achados enviados | 43 |

Recall e precisão só aparecem com a revisão fechada; enquanto houver cartão pendente ficam “indisponível” (nunca 0). “Achados enviados = 0” é um resultado válido (o agente olhou e não alegou nada); submissão recusada ou ausente é outra coisa.

Linha de base: ausência planejada na campanha antes da coleta — Adendo de 26/11 §3: o oráculo não roda na tela F antes do congelamento da referência \(nem varredura, nem verificação, nem linha de base\); a linha de base mede com o validator. O portão dispara com etapas = so-coleta e é analisado com --sem-linha-de-base.

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
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_snapshot, browser\_take\_screenshot, browser\_press\_key, browser\_console\_messages, browser\_click, browser\_type, browser\_navigate\_back |
| Erros de ferramenta | 2 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 39 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | agente \(registro de inspeção inválido, lido do bruto\): 5 — tool-failure 1, unreachable 1, out-of-scope 1, budget 1, other 1 |
| Registro de inspeção | registro inválido \(1 erro\(s\) de contrato; guardado à parte\) — achados aceitos normalmente; não é zero cobertura; 5 limitação\(ões\) declarada\(s\) no registro bruto |
| Auditoria do registro (processo, não pontua) | registro invalido; 0 candidato\(s\) de ferramenta recebido\(s\); auditoria: nada sinalizado. Relatório de processo: não pontua nem exclui. |

O registro de inspeção é declaração do agente sobre o inventário que ele mesmo descobriu; “com evento de ferramenta” só diz que o identificador citado aparece num evento gravado. Não pontua nem decide elegibilidade, e a cobertura da página continua desconhecida.

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 5. Custo e tempo

| | sem |
|---|---|
| Tempo de relógio (s) | 729 (runner) |
| Turnos | 161 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 160 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) |
| Tokens de entrada | 134 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 58386 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 6162331 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 184265 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 3.8748422000000007 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 43 cartão(ões), estimativa 258 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 6. Detalhes e evidências

**sem** (20261126-170754-processos-f-sem-b696): [pacote](../../../../restauracoes/20261126-170754-processos-f-sem-b696/2026-11-26T17-07-54Z__processos-f__opus__sem__rep-01__20261126-170754-processos-f-sem-b696) · [run.json](../../../../restauracoes/20261126-170754-processos-f-sem-b696/2026-11-26T17-07-54Z__processos-f__opus__sem__rep-01__20261126-170754-processos-f-sem-b696/run.json) · [findings.json](../../../../restauracoes/20261126-170754-processos-f-sem-b696/2026-11-26T17-07-54Z__processos-f__opus__sem__rep-01__20261126-170754-processos-f-sem-b696/findings.json) · [isolation.json](../../../../restauracoes/20261126-170754-processos-f-sem-b696/2026-11-26T17-07-54Z__processos-f__opus__sem__rep-01__20261126-170754-processos-f-sem-b696/isolation.json) · [eventos de ferramenta](../../../../restauracoes/20261126-170754-processos-f-sem-b696/2026-11-26T17-07-54Z__processos-f__opus__sem__rep-01__20261126-170754-processos-f-sem-b696/tool-events.ndjson) · — · evidências: [#1](../../../../restauracoes/20261126-170754-processos-f-sem-b696/2026-11-26T17-07-54Z__processos-f__opus__sem__rep-01__20261126-170754-processos-f-sem-b696/evidence/aderencia-oraculo.json) [#2](../../../../restauracoes/20261126-170754-processos-f-sem-b696/2026-11-26T17-07-54Z__processos-f__opus__sem__rep-01__20261126-170754-processos-f-sem-b696/evidence/cliente.json) [#3](../../../../restauracoes/20261126-170754-processos-f-sem-b696/2026-11-26T17-07-54Z__processos-f__opus__sem__rep-01__20261126-170754-processos-f-sem-b696/evidence/container-config.json) [#4](../../../../restauracoes/20261126-170754-processos-f-sem-b696/2026-11-26T17-07-54Z__processos-f__opus__sem__rep-01__20261126-170754-processos-f-sem-b696/evidence/controles-positivos.json) [#5](../../../../restauracoes/20261126-170754-processos-f-sem-b696/2026-11-26T17-07-54Z__processos-f__opus__sem__rep-01__20261126-170754-processos-f-sem-b696/evidence/mcp-config.json) [#6](../../../../restauracoes/20261126-170754-processos-f-sem-b696/2026-11-26T17-07-54Z__processos-f__opus__sem__rep-01__20261126-170754-processos-f-sem-b696/evidence/preflight.json) [#7](../../../../restauracoes/20261126-170754-processos-f-sem-b696/2026-11-26T17-07-54Z__processos-f__opus__sem__rep-01__20261126-170754-processos-f-sem-b696/evidence/prompt.txt) [#8](../../../../restauracoes/20261126-170754-processos-f-sem-b696/2026-11-26T17-07-54Z__processos-f__opus__sem__rep-01__20261126-170754-processos-f-sem-b696/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../restauracoes/20261126-170754-processos-f-sem-b696/2026-11-26T17-07-54Z__processos-f__opus__sem__rep-01__20261126-170754-processos-f-sem-b696/evidence/raw/browser/inventory.json) [#10](../../../../restauracoes/20261126-170754-processos-f-sem-b696/2026-11-26T17-07-54Z__processos-f__opus__sem__rep-01__20261126-170754-processos-f-sem-b696/evidence/raw/browser/tool-events.ndjson) [#11](../../../../restauracoes/20261126-170754-processos-f-sem-b696/2026-11-26T17-07-54Z__processos-f__opus__sem__rep-01__20261126-170754-processos-f-sem-b696/evidence/raw/collector/accepted-raw.txt) [#12](../../../../restauracoes/20261126-170754-processos-f-sem-b696/2026-11-26T17-07-54Z__processos-f__opus__sem__rep-01__20261126-170754-processos-f-sem-b696/evidence/raw/collector/events.ndjson) [#13](../../../../restauracoes/20261126-170754-processos-f-sem-b696/2026-11-26T17-07-54Z__processos-f__opus__sem__rep-01__20261126-170754-processos-f-sem-b696/evidence/raw/collector/findings.json) [#14](../../../../restauracoes/20261126-170754-processos-f-sem-b696/2026-11-26T17-07-54Z__processos-f__opus__sem__rep-01__20261126-170754-processos-f-sem-b696/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../restauracoes/20261126-170754-processos-f-sem-b696/2026-11-26T17-07-54Z__processos-f__opus__sem__rep-01__20261126-170754-processos-f-sem-b696/evidence/raw/egress-site/egress.ndjson) [#16](../../../../restauracoes/20261126-170754-processos-f-sem-b696/2026-11-26T17-07-54Z__processos-f__opus__sem__rep-01__20261126-170754-processos-f-sem-b696/evidence/raw/probe/probe.json) [#17](../../../../restauracoes/20261126-170754-processos-f-sem-b696/2026-11-26T17-07-54Z__processos-f__opus__sem__rep-01__20261126-170754-processos-f-sem-b696/evidence/raw/probe/sonda-escrita-1795712908050.txt) [#18](../../../../restauracoes/20261126-170754-processos-f-sem-b696/2026-11-26T17-07-54Z__processos-f__opus__sem__rep-01__20261126-170754-processos-f-sem-b696/evidence/raw/task/mcp.json) [#19](../../../../restauracoes/20261126-170754-processos-f-sem-b696/2026-11-26T17-07-54Z__processos-f__opus__sem__rep-01__20261126-170754-processos-f-sem-b696/evidence/raw/task/prompt.txt) [#20](../../../../restauracoes/20261126-170754-processos-f-sem-b696/2026-11-26T17-07-54Z__processos-f__opus__sem__rep-01__20261126-170754-processos-f-sem-b696/evidence/uso.json) · logs: [#1](../../../../restauracoes/20261126-170754-processos-f-sem-b696/2026-11-26T17-07-54Z__processos-f__opus__sem__rep-01__20261126-170754-processos-f-sem-b696/evidence/logs/agent.log) [#2](../../../../restauracoes/20261126-170754-processos-f-sem-b696/2026-11-26T17-07-54Z__processos-f__opus__sem__rep-01__20261126-170754-processos-f-sem-b696/evidence/logs/browser.log) [#3](../../../../restauracoes/20261126-170754-processos-f-sem-b696/2026-11-26T17-07-54Z__processos-f__opus__sem__rep-01__20261126-170754-processos-f-sem-b696/evidence/logs/collector.log) [#4](../../../../restauracoes/20261126-170754-processos-f-sem-b696/2026-11-26T17-07-54Z__processos-f__opus__sem__rep-01__20261126-170754-processos-f-sem-b696/evidence/logs/egress-provider.log) [#5](../../../../restauracoes/20261126-170754-processos-f-sem-b696/2026-11-26T17-07-54Z__processos-f__opus__sem__rep-01__20261126-170754-processos-f-sem-b696/evidence/logs/egress-site.log) [#6](../../../../restauracoes/20261126-170754-processos-f-sem-b696/2026-11-26T17-07-54Z__processos-f__opus__sem__rep-01__20261126-170754-processos-f-sem-b696/evidence/logs/probe.log) [#7](../../../../restauracoes/20261126-170754-processos-f-sem-b696/2026-11-26T17-07-54Z__processos-f__opus__sem__rep-01__20261126-170754-processos-f-sem-b696/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (43; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| br-tab | wcag:2.5.3 | Os botões de aba \(no shadow DOM de br-tab\) têm aria-label &quot;AGUARDANDO\_ANALISE&quot;, &quot;TRAMITANDO&quot; e &quot;HISTORICO&quot;, enquanto os textos visíveis são &quot;Aguardando análise&quot;, &quot;Tramitando&quot; e &quot;Concluídos&quot;. |
| br-tab | wcag:4.1.2 | A aba ativa só é indicada pela classe &quot;active&quot; no li; os botões não têm role=&quot;tab&quot;, aria-selected nem aria-current, então a aba selecionada não chega à tecnologia assistiva. |
| br-breadcrumb | wcag:4.1.2 | O item &quot;Home&quot; da trilha é um &lt;a href=&quot;/portal-mpa/&quot;&gt; que contém um &lt;button aria-label=&quot;&quot;&gt; \(controle interativo aninhado em outro\); a árvore de acessibilidade mostra link &quot;Home&quot; &gt; button &quot;Home&quot;. |
| br-header | wcag:1.1.1 | A imagem do logotipo gov.br no cabeçalho \(shadow DOM de br-header\) tem alt=&quot;logo&quot;. |
| br-header | incerta | Clicar no botão &quot;Menu&quot; \(#navigation, data-target=&quot;#main-navigation&quot;\) não abre nada: #main-navigation não existe no DOM, o botão não tem aria-expanded e nada muda na tela. |
| #avatar-dropdown-trigger | wcag:2.5.3 | O botão do usuário mostra &quot;Olá, Usuária de Teste, SUPERVISOR&quot;, mas tem aria-label=&quot;Avatar com dropdown&quot;, que substitui esse texto e não o contém. |
| #avatar-menu | wcag:4.1.2 | O menu do usuário aberto tem role=&quot;menu&quot;, mas nenhum descendente tem role=&quot;menuitem&quot;: os filhos são spans, um span clicável \(&quot;Trocar unidade&quot;\) e um button &quot;Sair&quot;. |
| #avatar-menu .text-center &gt; span | wcag:2.1.1 | &quot;Trocar unidade&quot; é um &lt;span&gt; com cursor:pointer e ação de clique, sem tabindex nem role; focus\(\) não o torna elemento ativo. |
| #avatar-menu img | wcag:1.1.1 | O ícone de saída \(exit-icon.png\) no botão &quot;Sair&quot; não tem atributo alt. |
| div.col-auto.mb-1 &gt; span.br-tag.interaction | wcag:2.1.1 | O controle &quot;Meus processos&quot; é um &lt;span class=&quot;br-tag interaction&quot;&gt; clicável, sem tabindex nem role; não entra na ordem de tabulação. |
| pnip-multiple-search-table-utils .row.align-items-center span.br-tag.interaction | wcag:2.1.1 | Os chips de filtro \(Aberto há, Tipo de processo, Status, Espécie alvo, Método de pesca, Petrecho\) são &lt;span&gt; com cursor:pointer, sem tabindex/role; focus\(\) não os ativa e Tab os pula. |
| pnip-multiple-search-table-utils .br-item | wcag:2.1.1 | As opções do filtro &quot;Aberto há&quot; \(&quot;Últimos 7 dias&quot; etc.\) são div.br-item &gt; div.br-radio &gt; label, sem input, tabindex nem role \(tabIndex -1\). |
| pnip-multiple-search-table-utils .br-tag &gt; button.br-button.circle | wcag:4.1.2 | O botão &quot;x&quot; que remove o filtro aplicado &quot;Últimos 7 dias&quot; só tem um ícone com aria-hidden; não tem aria-label, title nem texto \(nome acessível vazio\). |
| br-input#search | wcag:3.3.2 | O campo de busca não tem rótulo visível nem label associado; só há o placeholder &quot;Pesquise aqui ...&quot;, que some ao digitar. |
| thead input\[type=&quot;checkbox&quot;\] | wcag:4.1.2 | A caixa &quot;selecionar todos&quot; no cabeçalho da tabela não tem label, aria-label nem title \(nome acessível vazio\). |
| tbody input\[type=&quot;checkbox&quot;\] | wcag:4.1.2 | As caixas de seleção das linhas não têm label, aria-label nem title \(nome acessível vazio\). |
| thead th:last-child | wcag:1.3.1 | A última coluna \(ações: Ver processo, Desassociar, Assinar\) tem um &lt;th&gt; sem texto. |
| thead th:first-child | wcag:1.3.1 | O cabeçalho &quot;Aberto há&quot; mostra um ícone sort-down indicando a ordenação, mas o th não tem aria-sort. |
| tbody a\[role=&quot;button&quot;\] | wcag:2.1.1 | Os números de processo \(ex.: 00000.000010/2026-00\) são &lt;a role=&quot;button&quot;&gt; sem href nem tabindex, com handler de clique que abre o detalhe; focus\(\) não os ativa e Tab os pula. |
| pnip-status-solicitacao-utils .bg-orange-vivid-40 &gt; div | wcag:1.4.3 | Etiquetas &quot;Em análise analista/supervisor/diretor&quot;: texto rgb\(255,255,255\) sobre rgb\(230,111,14\), 14px peso 500, contraste 3,16:1. |
| pnip-status-solicitacao-utils .bg-indigo-vivid-40 &gt; div | wcag:1.4.3 | Etiqueta &quot;Aguarda complementos&quot;: texto rgb\(255,255,255\) sobre rgb\(130,137,255\), 14px peso 500, contraste 3,01:1. |
| pnip-status-solicitacao-utils .bg-secondary-06 &gt; div | wcag:1.4.3 | Etiquetas &quot;Aguardando plano de ação&quot;, &quot;Aguardando SFPA&quot; e \(na aba Aguardando análise\) &quot;Aguardando análise&quot;: texto rgb\(255,255,255\) sobre rgb\(136,136,136\), 14px peso 500, contraste 3,54:1. |
| td\[style\*=&quot;max-width: 90px&quot;\] | incerta | As células &quot;Solicitante&quot; têm max-width:90px, white-space:nowrap e overflow:hidden; o texto é cortado sem reticências nem title \(scrollWidth 187–454px contra clientWidth 120px; aparece só &quot;Pessoa Exemp&quot;\). |
| div.br-table &gt; table | incerta | A tabela mede 1150px \(borda direita em x=1242\) dentro de div.br-table de 1096px \(borda em x=1188\), com overflow visible: as colunas Status e ações invadem a margem do conteúdo. |
| thead th\[style\*=&quot;pure-0&quot;\] | incerta | O cabeçalho &quot;Téc. Adm.&quot; tem style background-color: var\(--pure-0\) \(branco\), enquanto os demais th têm fundo rgb\(240,240,240\), o que quebra a faixa cinza do cabeçalho. |
| div.d-flex.justify-content-end &gt; button.br-button.secondary | incerta | O botão &quot;Voltar&quot; \(x 1091–1188, y 1663–1703\) fica sobre o seletor &quot;Página&quot; da paginação \(#page, x 1092–1180, y 1647–1679\); elementFromPoint no centro de #page devolve o botão Voltar. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] a.page.active | wcag:1.3.1 | A página atual da paginação só é indicada pela classe &quot;active&quot;; o link não tem aria-current=&quot;page&quot;. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] li &gt; li | wcag:1.3.1 | Os itens de número de página são &lt;li&gt; aninhados diretamente dentro de outro &lt;li&gt;, sem ul/ol intermediário \(a árvore mostra listitem dentro de listitem\). |
| #total, #page | wcag:4.1.2 | Os seletores &quot;Exibir&quot; e &quot;Página&quot; são input type=text com lista suspensa, mas sem role=&quot;combobox&quot;, aria-expanded nem aria-controls; a árvore os expõe como textbox. |
| nav\[aria-label=&quot;paginação&quot;\] .br-list | wcag:2.4.7 | A lista de opções do seletor \(div.br-list tabindex=0\) recebe foco por Tab, mas o estilo não muda: outline none e o mesmo box-shadow rgba\(0,0,0,.16\) 0 3px 6px de antes do foco. Na mesma passagem o console registrou &quot;Type… |
| #page | incerta | Depois de ir à página 2 pelo link &quot;2&quot; \(texto &quot;11– 14 de 14 itens&quot;\), o seletor &quot;Página&quot; continua mostrando o valor &quot;1&quot;. |
| main iframe | wcag:4.1.2 | Há um &lt;iframe&gt; sem title e sem src, com 500px de altura, no fim do conteúdo, e ele recebe foco pelo teclado. |
| main div.mt-5.text-center &gt; p | wcag:4.1.3 | Depois da busca sem resultados aparece &quot;Não há processos para exibir.&quot;, num &lt;p&gt; sem role=status nem aria-live em nenhum ancestral. |
| .swal2-popup | wcag:4.1.2 | O diálogo aberto por &quot;Assinar&quot; \(role=dialog, aria-modal=true\) aponta aria-labelledby=&quot;swal2-title&quot;, mas o h2#swal2-title está vazio e com display:none: o diálogo fica sem nome acessível. |
| .swal2-popup | wcag:4.1.2 | O diálogo de confirmação &quot;Tem certeza que deseja desassociar esse processo do analista responsável?&quot; aponta aria-labelledby=&quot;swal2-title&quot;, mas o h2#swal2-title está vazio e com display:none: o diálogo fica sem nome aces… |
| .swal2-close | wcag:3.1.2 | O botão de fechar dos diálogos tem aria-label=&quot;Close this dialog&quot;, em inglês, numa página lang=&quot;pt-br&quot; e sem lang no elemento. |
| .swal2-html-container object | wcag:1.1.1 | O documento PDF a assinar é exibido num &lt;object type=&quot;application/pdf&quot;&gt; sem title, aria-label nem conteúdo alternativo interno. No ambiente avaliado o PDF não carregou \(&quot;Failed to load PDF document&quot;\). |
| tbody br-button\[title=&quot;Assinar&quot;\], tbody br-button\[title^=&quot;Desassociar&quot;\]:not\(\[di… | wcag:2.4.3 | Ao fechar pelo teclado o diálogo aberto com Enter em &quot;Assinar&quot; \(fechado pelo botão ×\) ou em &quot;Desassociar&quot; \(fechado com Escape\), o foco vai para o BODY em vez de voltar ao botão que abriu o diálogo. |
| head &gt; title | wcag:2.4.2 | O título do documento é só &quot;PNIP&quot; na lista de processos e também nas telas de detalhe. |
| main h2 | emag:1.3 | O título da página &quot;Processos&quot; é um h2, e a página não tem nenhum h1. |
| main | emag:1.5 | A página não oferece atalhos para o conteúdo: o primeiro elemento focável é o botão &quot;Menu&quot;, não há link &quot;Ir para o conteúdo&quot; e main não tem id/âncora de destino. |
| main td br-icon-base\[icon-name=&quot;file&quot;\], main td br-icon-base\[icon-name=&quot;file-pd… | wcag:2.1.1 | Na tela de detalhe, os ícones &quot;Ofício&quot; e &quot;Certificado&quot; são br-icon-base com cursor:pointer, sem tabindex, role nem nome; focus\(\) não os ativa. |
| main h4 | emag:1.3 | Na tela de detalhe, depois do h2 &quot;Alteração de Certificado&quot;, as seções &quot;1. Dados da embarcação&quot; a &quot;4. Dados do técnico responsável&quot; são h4, pulando o nível h3. |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `2d5c00de0b3b7864a0a6d3e65fca7c487d1f2d8768fd7b1e34148c1c9f23e555`

