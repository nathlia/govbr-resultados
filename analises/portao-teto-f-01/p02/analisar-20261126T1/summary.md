# Resumo da análise — Processos (processos-f)

Revisão 1 · gerado em 2026-11-26T17:39:35.714Z (UTC)

## 1. Status técnico

Análise: **pronta**

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261126-172403-processos-f-sem-beb3 | sem | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 39 cartão(ões), nenhum decidido |

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
| Início (UTC) | 2026-11-26T17:24:33Z |
| Início (local) | 26/11/2026, 14:24:33 (horário de Brasília) |
| Commit do harness | 0be3a071cdc96ced852dac8d75e3305d29a95f90 |
| Repetição · tentativa | 1 · 1 |
| Campanha · slot · par | portao-teto-f-01 · s02 · p02 |

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
| Cartões pendentes de revisão | 39 |
| Maturidade | aguardando revisão — 39 cartão(ões), nenhum decidido |
| Entra na comparação principal | sim |
| Achados enviados | 39 |

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
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_snapshot, browser\_take\_screenshot, browser\_press\_key, browser\_click, browser\_navigate\_back, browser\_console\_messages, browser\_type |
| Erros de ferramenta | 3 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 39 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | agente \(registro de inspeção inválido, lido do bruto\): 5 — tool-failure 1, out-of-scope 1, other 2, unreachable 1 |
| Registro de inspeção | registro inválido \(2 erro\(s\) de contrato; guardado à parte\) — achados aceitos normalmente; não é zero cobertura; 5 limitação\(ões\) declarada\(s\) no registro bruto |
| Auditoria do registro (processo, não pontua) | registro invalido; 0 candidato\(s\) de ferramenta recebido\(s\); auditoria: nada sinalizado. Relatório de processo: não pontua nem exclui. |

O registro de inspeção é declaração do agente sobre o inventário que ele mesmo descobriu; “com evento de ferramenta” só diz que o identificador citado aparece num evento gravado. Não pontua nem decide elegibilidade, e a cobertura da página continua desconhecida.

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 5. Custo e tempo

| | sem |
|---|---|
| Tempo de relógio (s) | 760 (runner) |
| Turnos | 142 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 141 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) |
| Tokens de entrada | 138 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 60597 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 5870504 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 163430 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 3.6940328000000004 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 39 cartão(ões), estimativa 234 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 6. Detalhes e evidências

**sem** (20261126-172403-processos-f-sem-beb3): [pacote](../../../../restauracoes/20261126-172403-processos-f-sem-beb3/2026-11-26T17-24-03Z__processos-f__opus__sem__rep-01__20261126-172403-processos-f-sem-beb3) · [run.json](../../../../restauracoes/20261126-172403-processos-f-sem-beb3/2026-11-26T17-24-03Z__processos-f__opus__sem__rep-01__20261126-172403-processos-f-sem-beb3/run.json) · [findings.json](../../../../restauracoes/20261126-172403-processos-f-sem-beb3/2026-11-26T17-24-03Z__processos-f__opus__sem__rep-01__20261126-172403-processos-f-sem-beb3/findings.json) · [isolation.json](../../../../restauracoes/20261126-172403-processos-f-sem-beb3/2026-11-26T17-24-03Z__processos-f__opus__sem__rep-01__20261126-172403-processos-f-sem-beb3/isolation.json) · [eventos de ferramenta](../../../../restauracoes/20261126-172403-processos-f-sem-beb3/2026-11-26T17-24-03Z__processos-f__opus__sem__rep-01__20261126-172403-processos-f-sem-beb3/tool-events.ndjson) · — · evidências: [#1](../../../../restauracoes/20261126-172403-processos-f-sem-beb3/2026-11-26T17-24-03Z__processos-f__opus__sem__rep-01__20261126-172403-processos-f-sem-beb3/evidence/aderencia-oraculo.json) [#2](../../../../restauracoes/20261126-172403-processos-f-sem-beb3/2026-11-26T17-24-03Z__processos-f__opus__sem__rep-01__20261126-172403-processos-f-sem-beb3/evidence/cliente.json) [#3](../../../../restauracoes/20261126-172403-processos-f-sem-beb3/2026-11-26T17-24-03Z__processos-f__opus__sem__rep-01__20261126-172403-processos-f-sem-beb3/evidence/container-config.json) [#4](../../../../restauracoes/20261126-172403-processos-f-sem-beb3/2026-11-26T17-24-03Z__processos-f__opus__sem__rep-01__20261126-172403-processos-f-sem-beb3/evidence/controles-positivos.json) [#5](../../../../restauracoes/20261126-172403-processos-f-sem-beb3/2026-11-26T17-24-03Z__processos-f__opus__sem__rep-01__20261126-172403-processos-f-sem-beb3/evidence/mcp-config.json) [#6](../../../../restauracoes/20261126-172403-processos-f-sem-beb3/2026-11-26T17-24-03Z__processos-f__opus__sem__rep-01__20261126-172403-processos-f-sem-beb3/evidence/preflight.json) [#7](../../../../restauracoes/20261126-172403-processos-f-sem-beb3/2026-11-26T17-24-03Z__processos-f__opus__sem__rep-01__20261126-172403-processos-f-sem-beb3/evidence/prompt.txt) [#8](../../../../restauracoes/20261126-172403-processos-f-sem-beb3/2026-11-26T17-24-03Z__processos-f__opus__sem__rep-01__20261126-172403-processos-f-sem-beb3/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../restauracoes/20261126-172403-processos-f-sem-beb3/2026-11-26T17-24-03Z__processos-f__opus__sem__rep-01__20261126-172403-processos-f-sem-beb3/evidence/raw/browser/inventory.json) [#10](../../../../restauracoes/20261126-172403-processos-f-sem-beb3/2026-11-26T17-24-03Z__processos-f__opus__sem__rep-01__20261126-172403-processos-f-sem-beb3/evidence/raw/browser/tool-events.ndjson) [#11](../../../../restauracoes/20261126-172403-processos-f-sem-beb3/2026-11-26T17-24-03Z__processos-f__opus__sem__rep-01__20261126-172403-processos-f-sem-beb3/evidence/raw/collector/accepted-raw.txt) [#12](../../../../restauracoes/20261126-172403-processos-f-sem-beb3/2026-11-26T17-24-03Z__processos-f__opus__sem__rep-01__20261126-172403-processos-f-sem-beb3/evidence/raw/collector/events.ndjson) [#13](../../../../restauracoes/20261126-172403-processos-f-sem-beb3/2026-11-26T17-24-03Z__processos-f__opus__sem__rep-01__20261126-172403-processos-f-sem-beb3/evidence/raw/collector/findings.json) [#14](../../../../restauracoes/20261126-172403-processos-f-sem-beb3/2026-11-26T17-24-03Z__processos-f__opus__sem__rep-01__20261126-172403-processos-f-sem-beb3/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../restauracoes/20261126-172403-processos-f-sem-beb3/2026-11-26T17-24-03Z__processos-f__opus__sem__rep-01__20261126-172403-processos-f-sem-beb3/evidence/raw/egress-site/egress.ndjson) [#16](../../../../restauracoes/20261126-172403-processos-f-sem-beb3/2026-11-26T17-24-03Z__processos-f__opus__sem__rep-01__20261126-172403-processos-f-sem-beb3/evidence/raw/probe/probe.json) [#17](../../../../restauracoes/20261126-172403-processos-f-sem-beb3/2026-11-26T17-24-03Z__processos-f__opus__sem__rep-01__20261126-172403-processos-f-sem-beb3/evidence/raw/probe/sonda-escrita-1795713872563.txt) [#18](../../../../restauracoes/20261126-172403-processos-f-sem-beb3/2026-11-26T17-24-03Z__processos-f__opus__sem__rep-01__20261126-172403-processos-f-sem-beb3/evidence/raw/task/mcp.json) [#19](../../../../restauracoes/20261126-172403-processos-f-sem-beb3/2026-11-26T17-24-03Z__processos-f__opus__sem__rep-01__20261126-172403-processos-f-sem-beb3/evidence/raw/task/prompt.txt) [#20](../../../../restauracoes/20261126-172403-processos-f-sem-beb3/2026-11-26T17-24-03Z__processos-f__opus__sem__rep-01__20261126-172403-processos-f-sem-beb3/evidence/uso.json) · logs: [#1](../../../../restauracoes/20261126-172403-processos-f-sem-beb3/2026-11-26T17-24-03Z__processos-f__opus__sem__rep-01__20261126-172403-processos-f-sem-beb3/evidence/logs/agent.log) [#2](../../../../restauracoes/20261126-172403-processos-f-sem-beb3/2026-11-26T17-24-03Z__processos-f__opus__sem__rep-01__20261126-172403-processos-f-sem-beb3/evidence/logs/browser.log) [#3](../../../../restauracoes/20261126-172403-processos-f-sem-beb3/2026-11-26T17-24-03Z__processos-f__opus__sem__rep-01__20261126-172403-processos-f-sem-beb3/evidence/logs/collector.log) [#4](../../../../restauracoes/20261126-172403-processos-f-sem-beb3/2026-11-26T17-24-03Z__processos-f__opus__sem__rep-01__20261126-172403-processos-f-sem-beb3/evidence/logs/egress-provider.log) [#5](../../../../restauracoes/20261126-172403-processos-f-sem-beb3/2026-11-26T17-24-03Z__processos-f__opus__sem__rep-01__20261126-172403-processos-f-sem-beb3/evidence/logs/egress-site.log) [#6](../../../../restauracoes/20261126-172403-processos-f-sem-beb3/2026-11-26T17-24-03Z__processos-f__opus__sem__rep-01__20261126-172403-processos-f-sem-beb3/evidence/logs/probe.log) [#7](../../../../restauracoes/20261126-172403-processos-f-sem-beb3/2026-11-26T17-24-03Z__processos-f__opus__sem__rep-01__20261126-172403-processos-f-sem-beb3/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (39; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| br-tab | wcag:2.5.3 | Os botões das abas \(no shadow DOM de br-tab\) têm aria-label=&quot;AGUARDANDO\_ANALISE&quot;, &quot;TRAMITANDO&quot; e &quot;HISTORICO&quot;, que substituem os textos visíveis &quot;Aguardando análise&quot;, &quot;Tramitando&quot; e &quot;Concluídos&quot;; o nome acessível é um có… |
| br-tab | wcag:4.1.2 | A aba ativa \(&quot;Tramitando&quot;\) só é indicada pela classe CSS &quot;active&quot; no li e pelo sublinhado; os botões não têm role=&quot;tab&quot;, aria-selected nem aria-current, e não há tablist/tabpanel associados. |
| br-header | wcag:1.1.1 | A imagem do logotipo gov.br \(no shadow DOM de br-header\) tem alt=&quot;logo&quot;, que não identifica o conteúdo da imagem. |
| br-breadcrumb | wcag:4.1.2 | No breadcrumb, o item Home é um &lt;a href=&quot;/portal-mpa/&quot;&gt; que contém um &lt;button class=&quot;br-button&quot; aria-label=&quot;&quot;&gt;: elemento interativo aninhado em outro, gerando duas paradas de tabulação para o mesmo destino. |
| pnip-mpa-processos h2.text-bold | emag:1.3 | O título principal da tela, &quot;Processos&quot;, é um &lt;h2&gt; e não há nenhum &lt;h1&gt; na página \(único cabeçalho do documento\). |
| #avatar-dropdown-trigger | wcag:2.5.3 | O botão do avatar exibe &quot;Olá, Usuária de Teste, SUPERVISOR&quot;, mas seu aria-label é &quot;Avatar com dropdown&quot;, que não contém o texto visível. |
| pnip-multiple-search-table-utils span.br-tag.bg-pure-0 | wcag:2.1.1 | Os seis filtros \(&quot;Aberto há&quot;, &quot;Tipo de processo&quot;, &quot;Status&quot;, &quot;Espécie alvo&quot;, &quot;Método de pesca&quot;, &quot;Petrecho&quot;\) são &lt;span class=&quot;br-tag interaction&quot;&gt; com cursor:pointer que abrem listas ao clique, mas não têm tabindex nem ro… |
| pnip-mpa-processos .tab-panel &gt; .col &gt; .row:first-child span.br-tag | wcag:2.1.1 | O controle &quot;Meus processos&quot; é um &lt;span class=&quot;br-tag interaction&quot;&gt; com cursor:pointer que alterna a lista \(9 ↔ 10 linhas\) ao clique, mas não é focalizável \(tabIndex -1, sem role\). |
| pnip-mpa-processos .tab-panel &gt; .col &gt; .row:first-child span.br-tag | wcag:4.1.2 | O estado ligado/desligado de &quot;Meus processos&quot; é comunicado só pela troca de cores \(fundo azul quando ativo; classes bg-pure-0/text-gray-50 quando inativo\); não há aria-pressed nem outro estado programático. |
| pnip-multiple-search-table-utils .br-list .br-item | wcag:4.1.2 | As opções da lista do filtro &quot;Aberto há&quot; \(&quot;Últimos 7/30/60/90 dias&quot;\) são &lt;div class=&quot;br-item&quot;&gt;&lt;div class=&quot;br-radio&quot;&gt;&lt;label&gt;…&lt;/label&gt;&lt;/div&gt;&lt;/div&gt; sem input, sem role \(option/radio/menuitem\), sem tabindex e sem estado sel… |
| pnip-multiple-search-table-utils .row.pl-2 button.br-button | wcag:4.1.2 | O botão de remover do chip do filtro aplicado &quot;Últimos 7 dias&quot; contém apenas o ícone &lt;i class=&quot;fas fa-times&quot; aria-hidden=&quot;true&quot;&gt; e não tem aria-label, title nem texto: nome acessível vazio. |
| br-input#search | wcag:3.3.2 | O campo de busca \(input#search no shadow DOM de br-input\) não tem &lt;label&gt;, aria-label nem aria-labelledby; a única identificação é o placeholder &quot;Pesquise aqui ...&quot;, que desaparece ao digitar. |
| pnip-search-table-utils button\[aria-label=&quot;Buscar&quot;\] | incerta | O botão &quot;Buscar&quot; fica abaixo do campo \(input em y 402–434, botão em y 430–462; style margin-top:-12px\), sobrepondo 4 px a borda inferior do campo e fora do alinhamento, em vez de integrado ao campo. |
| table.table input\[type=&quot;checkbox&quot;\] | wcag:4.1.2 | As caixas de seleção da tabela \(a de &quot;selecionar todos&quot; no cabeçalho e as 6 das linhas\) não têm label, aria-label nem title: nome acessível vazio \(aparecem como &quot;checkbox&quot; sem nome na árvore de acessibilidade\). |
| thead th:nth-child\(2\) input\[type=&quot;checkbox&quot;\] | incerta | A caixa &quot;selecionar todos&quot; do cabeçalho está em x=212 px, enquanto as caixas das linhas da mesma coluna estão em x=207 px \(style margin-left:5px só no cabeçalho\): desalinhamento de 5 px entre instâncias do mesmo control… |
| thead th:first-child | wcag:1.3.1 | A coluna &quot;Aberto há&quot; mostra o ícone de ordenação &quot;sort-down&quot; indicando que a lista está ordenada por ela, mas o th não tem aria-sort; a informação de ordenação é apenas visual. |
| tbody a\[role=&quot;button&quot;\] | wcag:2.1.1 | Os números de processo são &lt;a role=&quot;button&quot;&gt; sem href e sem tabindex: não recebem foco \(element.focus\(\) falha; Tab pula para os botões de ação\). Ao clique levam a rotas próprias \(ex.: linha 00000.000011 → /certificacao-… |
| tbody td:nth-child\(5\) | incerta | As células &quot;Solicitante&quot; têm max-width:90px, white-space:nowrap e overflow:hidden; o texto é cortado sem reticências nem title \(ex.: &quot;Pessoa Exemplo Dias / Barco Exemplo Alfa&quot; aparece como &quot;Pessoa Exemp&quot;; scrollWidth 18… |
| pnip-status-solicitacao-utils .bg-orange-vivid-40 &gt; div | wcag:1.4.3 | Texto branco \(#FFFFFF\) dos selos laranja &quot;Em análise analista/supervisor/diretor&quot; sobre fundo rgb\(230,111,14\): contraste 3,16:1, com texto de 14 px e peso 500. |
| pnip-status-solicitacao-utils .bg-indigo-vivid-40 &gt; div | wcag:1.4.3 | Texto branco do selo &quot;Aguarda complementos&quot; sobre fundo rgb\(130,137,255\): contraste 3,01:1, com texto de 14 px e peso 500. |
| pnip-status-solicitacao-utils .bg-secondary-06 &gt; div | wcag:1.4.3 | Texto branco dos selos &quot;Aguardando plano de ação&quot; e &quot;Aguardando SFPA&quot; \(e &quot;Aguardando análise&quot; na outra aba\) sobre fundo rgb\(136,136,136\): contraste 3,54:1, com texto de 14 px e peso 500. |
| thead th:nth-child\(7\) | incerta | O cabeçalho &quot;Téc. Adm.&quot; tem style background-color:var\(--pure-0\) \(branco\), enquanto os outros 8 cabeçalhos da mesma linha têm fundo rgb\(240,240,240\): a faixa do cabeçalho fica interrompida. |
| pnip-mpa-processos table.table | incerta | Na aba &quot;Tramitando&quot;, a tabela tem 1150 px de largura \(x 92–1242\) e ultrapassa em 54 px o contêiner .br-table \(x 92–1188\) e o alinhamento das abas e do botão Exportar; nas abas &quot;Aguardando análise&quot; e &quot;Concluídos&quot; ela ter… |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] a.page.active | wcag:1.3.1 | A página corrente da paginação é indicada só pela classe &quot;active&quot; \(círculo azul\); o link não tem aria-current=&quot;page&quot; e tem href=&quot;javascript:void\(0\)&quot;. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] li &gt; li | wcag:1.3.1 | Na lista da paginação, cada link de página está num &lt;li&gt; aninhado diretamente dentro de outro &lt;li&gt; \(&lt;li&gt;&lt;li&gt;&lt;a&gt;1&lt;/a&gt;&lt;/li&gt;&lt;/li&gt;\), estrutura de lista inválida. |
| #page | incerta | Depois de ir à página 2 na aba &quot;Concluídos&quot; \(paginação mostra &quot;2&quot; ativo e &quot;11 – 14 de 14 itens&quot;\), o seletor &quot;Página&quot; continua mostrando o valor &quot;1&quot;, e nenhuma opção da lista dele fica marcada. |
| pnip-mpa-processos &gt; div &gt; div.d-flex &gt; button.br-button.secondary | incerta | O botão &quot;Voltar&quot; \(style margin-top:-20px\) está sobre o seletor &quot;Página&quot; da paginação: Voltar ocupa x 1091–1188, y 1663–1703; o campo #page ocupa x 1092–1180, y 1647–1679. elementFromPoint no centro do campo devolve o bo… |
| pnip-mpa-processos &gt; iframe | wcag:4.1.2 | No fim da tela há um &lt;iframe&gt; vazio \(sem src\), de 1160×500 px, sem title, que recebe foco por Tab \(o foco sai de &quot;Voltar&quot; e entra nele\). |
| pnip-multiple-search-table-utils span.br-tag &gt; i, pnip-mpa-processos div.mb-2 &gt;… | wcag:1.1.1 | Os ícones decorativos de fonte \(relógio, gráfico, ampulheta, peixe, âncora, rede dos filtros e o relógio de &quot;Última atualização&quot;\) não têm aria-hidden; o glifo de uso privado aparece como texto na árvore de acessibilidad… |
| #avatar-menu | wcag:4.1.2 | O painel do avatar tem role=&quot;menu&quot;, mas não contém nenhum elemento com role=&quot;menuitem&quot;; o conteúdo é texto, um &lt;span&gt; clicável e um &lt;button&gt; comum. |
| #avatar-menu .text-center &gt; span | wcag:2.1.1 | &quot;Trocar unidade&quot; é um &lt;span&gt; com cursor:pointer que navega para /portal-mpa ao clique, mas não é focalizável: com o menu aberto, Tab vai do avatar direto para &quot;Sair&quot;. |
| #avatar-menu img | wcag:1.1.1 | A imagem do botão &quot;Sair&quot; \(assets/images/exit-icon.png\) não tem atributo alt. |
| br-header | incerta | O botão &quot;Menu&quot; do cabeçalho \(no shadow DOM de br-header, data-target=&quot;#main-navigation&quot;\) não produz nenhuma mudança ao clique: não existe #main-navigation na página e o botão não tem aria-expanded. |
| .swal2-popup | wcag:4.1.2 | O diálogo de confirmação &quot;Tem certeza que deseja desassociar…&quot; tem role=&quot;dialog&quot; e aria-labelledby=&quot;swal2-title&quot;, mas o h2#swal2-title está vazio e com display:none: o diálogo fica sem nome acessível. |
| tbody br-button\[title^=&quot;Desassociar&quot;\]:not\(\[disabled\]\) | wcag:2.4.3 | Com o foco no botão &quot;Desassociar processo do analista responsável&quot;, Enter abre o diálogo; ao fechá-lo com Escape \(e também ao confirmar\), o foco vai para o &lt;body&gt; em vez de voltar ao botão que abriu o diálogo. |
| .swal2-popup | wcag:4.1.2 | O diálogo aberto por &quot;Assinar&quot; \(visualização do PDF, &quot;Solicitar Revisão&quot; e &quot;Assinar com gov.br&quot;\) tem aria-labelledby=&quot;swal2-title&quot;, mas o título está vazio e com display:none: o diálogo fica sem nome acessível. |
| .swal2-html-container object | wcag:1.1.1 | O documento do diálogo de assinatura é um &lt;object type=&quot;application/pdf&quot;&gt; sem title, aria-label nem conteúdo alternativo interno \(no mock o PDF não carregou e mostra &quot;Failed to load PDF document.&quot;\). |
| .swal2-close | wcag:3.1.2 | O botão de fechar do diálogo de assinatura tem aria-label=&quot;Close this dialog&quot;, em inglês, numa página lang=&quot;pt-br&quot;, sem marcação de idioma. |
| pnip-mpa-processos .mt-5.text-center &gt; p | wcag:4.1.3 | Depois de uma busca sem resultados \(&quot;xyz&quot;\), a tabela e a paginação somem e aparece o &lt;p&gt;&quot;Não há processos para exibir.&quot;&lt;/p&gt;, que não está em região aria-live nem tem role=&quot;status&quot;; a contagem antiga \(aria-live polite\) t… |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `738a77463663df9a640c261c0e7122fb56c00424b9214fec12dcfb05de08bef7`

