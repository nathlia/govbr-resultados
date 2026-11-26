# Resumo da análise — Processos (processos-f)

Revisão 1 · gerado em 2026-11-26T17:55:25.418Z (UTC)

## 1. Status técnico

Análise: **pronta**

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261126-174016-processos-f-sem-75a6 | sem | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 43 cartão(ões), nenhum decidido |

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
| Início (UTC) | 2026-11-26T17:40:52Z |
| Início (local) | 26/11/2026, 14:40:52 (horário de Brasília) |
| Commit do harness | 0be3a071cdc96ced852dac8d75e3305d29a95f90 |
| Repetição · tentativa | 1 · 1 |
| Campanha · slot · par | portao-teto-f-01 · s03 · p03 |

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
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_snapshot, browser\_click, browser\_press\_key, browser\_console\_messages, browser\_navigate\_back, browser\_wait\_for, browser\_take\_screenshot |
| Erros de ferramenta | 3 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 39 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | agente \(registro de inspeção inválido, lido do bruto\): 5 — tool-failure 1, unreachable 2, out-of-scope 1, other 1 |
| Registro de inspeção | registro inválido \(3 erro\(s\) de contrato; guardado à parte\) — achados aceitos normalmente; não é zero cobertura; 5 limitação\(ões\) declarada\(s\) no registro bruto |
| Auditoria do registro (processo, não pontua) | registro invalido; 0 candidato\(s\) de ferramenta recebido\(s\); auditoria: nada sinalizado. Relatório de processo: não pontua nem exclui. |

O registro de inspeção é declaração do agente sobre o inventário que ele mesmo descobriu; “com evento de ferramenta” só diz que o identificador citado aparece num evento gravado. Não pontua nem decide elegibilidade, e a cobertura da página continua desconhecida.

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 5. Custo e tempo

| | sem |
|---|---|
| Tempo de relógio (s) | 746 (runner) |
| Turnos | 135 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 134 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) |
| Tokens de entrada | 140 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 58999 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 5990445 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 153707 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 3.608284999999999 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 43 cartão(ões), estimativa 258 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 6. Detalhes e evidências

**sem** (20261126-174016-processos-f-sem-75a6): [pacote](../../../../restauracoes/20261126-174016-processos-f-sem-75a6/2026-11-26T17-40-16Z__processos-f__opus__sem__rep-01__20261126-174016-processos-f-sem-75a6) · [run.json](../../../../restauracoes/20261126-174016-processos-f-sem-75a6/2026-11-26T17-40-16Z__processos-f__opus__sem__rep-01__20261126-174016-processos-f-sem-75a6/run.json) · [findings.json](../../../../restauracoes/20261126-174016-processos-f-sem-75a6/2026-11-26T17-40-16Z__processos-f__opus__sem__rep-01__20261126-174016-processos-f-sem-75a6/findings.json) · [isolation.json](../../../../restauracoes/20261126-174016-processos-f-sem-75a6/2026-11-26T17-40-16Z__processos-f__opus__sem__rep-01__20261126-174016-processos-f-sem-75a6/isolation.json) · [eventos de ferramenta](../../../../restauracoes/20261126-174016-processos-f-sem-75a6/2026-11-26T17-40-16Z__processos-f__opus__sem__rep-01__20261126-174016-processos-f-sem-75a6/tool-events.ndjson) · — · evidências: [#1](../../../../restauracoes/20261126-174016-processos-f-sem-75a6/2026-11-26T17-40-16Z__processos-f__opus__sem__rep-01__20261126-174016-processos-f-sem-75a6/evidence/aderencia-oraculo.json) [#2](../../../../restauracoes/20261126-174016-processos-f-sem-75a6/2026-11-26T17-40-16Z__processos-f__opus__sem__rep-01__20261126-174016-processos-f-sem-75a6/evidence/cliente.json) [#3](../../../../restauracoes/20261126-174016-processos-f-sem-75a6/2026-11-26T17-40-16Z__processos-f__opus__sem__rep-01__20261126-174016-processos-f-sem-75a6/evidence/container-config.json) [#4](../../../../restauracoes/20261126-174016-processos-f-sem-75a6/2026-11-26T17-40-16Z__processos-f__opus__sem__rep-01__20261126-174016-processos-f-sem-75a6/evidence/controles-positivos.json) [#5](../../../../restauracoes/20261126-174016-processos-f-sem-75a6/2026-11-26T17-40-16Z__processos-f__opus__sem__rep-01__20261126-174016-processos-f-sem-75a6/evidence/mcp-config.json) [#6](../../../../restauracoes/20261126-174016-processos-f-sem-75a6/2026-11-26T17-40-16Z__processos-f__opus__sem__rep-01__20261126-174016-processos-f-sem-75a6/evidence/preflight.json) [#7](../../../../restauracoes/20261126-174016-processos-f-sem-75a6/2026-11-26T17-40-16Z__processos-f__opus__sem__rep-01__20261126-174016-processos-f-sem-75a6/evidence/prompt.txt) [#8](../../../../restauracoes/20261126-174016-processos-f-sem-75a6/2026-11-26T17-40-16Z__processos-f__opus__sem__rep-01__20261126-174016-processos-f-sem-75a6/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../restauracoes/20261126-174016-processos-f-sem-75a6/2026-11-26T17-40-16Z__processos-f__opus__sem__rep-01__20261126-174016-processos-f-sem-75a6/evidence/raw/browser/inventory.json) [#10](../../../../restauracoes/20261126-174016-processos-f-sem-75a6/2026-11-26T17-40-16Z__processos-f__opus__sem__rep-01__20261126-174016-processos-f-sem-75a6/evidence/raw/browser/tool-events.ndjson) [#11](../../../../restauracoes/20261126-174016-processos-f-sem-75a6/2026-11-26T17-40-16Z__processos-f__opus__sem__rep-01__20261126-174016-processos-f-sem-75a6/evidence/raw/collector/accepted-raw.txt) [#12](../../../../restauracoes/20261126-174016-processos-f-sem-75a6/2026-11-26T17-40-16Z__processos-f__opus__sem__rep-01__20261126-174016-processos-f-sem-75a6/evidence/raw/collector/events.ndjson) [#13](../../../../restauracoes/20261126-174016-processos-f-sem-75a6/2026-11-26T17-40-16Z__processos-f__opus__sem__rep-01__20261126-174016-processos-f-sem-75a6/evidence/raw/collector/findings.json) [#14](../../../../restauracoes/20261126-174016-processos-f-sem-75a6/2026-11-26T17-40-16Z__processos-f__opus__sem__rep-01__20261126-174016-processos-f-sem-75a6/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../restauracoes/20261126-174016-processos-f-sem-75a6/2026-11-26T17-40-16Z__processos-f__opus__sem__rep-01__20261126-174016-processos-f-sem-75a6/evidence/raw/egress-site/egress.ndjson) [#16](../../../../restauracoes/20261126-174016-processos-f-sem-75a6/2026-11-26T17-40-16Z__processos-f__opus__sem__rep-01__20261126-174016-processos-f-sem-75a6/evidence/raw/probe/probe.json) [#17](../../../../restauracoes/20261126-174016-processos-f-sem-75a6/2026-11-26T17-40-16Z__processos-f__opus__sem__rep-01__20261126-174016-processos-f-sem-75a6/evidence/raw/probe/sonda-escrita-1795714852204.txt) [#18](../../../../restauracoes/20261126-174016-processos-f-sem-75a6/2026-11-26T17-40-16Z__processos-f__opus__sem__rep-01__20261126-174016-processos-f-sem-75a6/evidence/raw/task/mcp.json) [#19](../../../../restauracoes/20261126-174016-processos-f-sem-75a6/2026-11-26T17-40-16Z__processos-f__opus__sem__rep-01__20261126-174016-processos-f-sem-75a6/evidence/raw/task/prompt.txt) [#20](../../../../restauracoes/20261126-174016-processos-f-sem-75a6/2026-11-26T17-40-16Z__processos-f__opus__sem__rep-01__20261126-174016-processos-f-sem-75a6/evidence/uso.json) · logs: [#1](../../../../restauracoes/20261126-174016-processos-f-sem-75a6/2026-11-26T17-40-16Z__processos-f__opus__sem__rep-01__20261126-174016-processos-f-sem-75a6/evidence/logs/agent.log) [#2](../../../../restauracoes/20261126-174016-processos-f-sem-75a6/2026-11-26T17-40-16Z__processos-f__opus__sem__rep-01__20261126-174016-processos-f-sem-75a6/evidence/logs/browser.log) [#3](../../../../restauracoes/20261126-174016-processos-f-sem-75a6/2026-11-26T17-40-16Z__processos-f__opus__sem__rep-01__20261126-174016-processos-f-sem-75a6/evidence/logs/collector.log) [#4](../../../../restauracoes/20261126-174016-processos-f-sem-75a6/2026-11-26T17-40-16Z__processos-f__opus__sem__rep-01__20261126-174016-processos-f-sem-75a6/evidence/logs/egress-provider.log) [#5](../../../../restauracoes/20261126-174016-processos-f-sem-75a6/2026-11-26T17-40-16Z__processos-f__opus__sem__rep-01__20261126-174016-processos-f-sem-75a6/evidence/logs/egress-site.log) [#6](../../../../restauracoes/20261126-174016-processos-f-sem-75a6/2026-11-26T17-40-16Z__processos-f__opus__sem__rep-01__20261126-174016-processos-f-sem-75a6/evidence/logs/probe.log) [#7](../../../../restauracoes/20261126-174016-processos-f-sem-75a6/2026-11-26T17-40-16Z__processos-f__opus__sem__rep-01__20261126-174016-processos-f-sem-75a6/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (43; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| br-tab | wcag:2.5.3 | Os botões das abas \(no shadow root de br-tab\) têm aria-label=&quot;AGUARDANDO\_ANALISE&quot;, &quot;TRAMITANDO&quot; e &quot;HISTORICO&quot;, que substituem o texto visível &quot;Aguardando análise&quot;, &quot;Tramitando&quot; e &quot;Concluídos&quot;; o nome acessível não conté… |
| br-tab | wcag:1.3.1 | A aba ativa \(Tramitando\) é indicada só visualmente \(classe &quot;active&quot;, borda inferior de 4px em rgb\(12,50,111\)\); os botões não têm aria-selected, aria-current nem aria-pressed. |
| #avatar-dropdown-trigger | wcag:2.5.3 | O botão exibe &quot;Olá, Usuária de Teste, SUPERVISOR&quot;, mas aria-label=&quot;Avatar com dropdown&quot; substitui esse texto no nome acessível. |
| br-header | wcag:1.1.1 | A imagem do logotipo gov.br \(no shadow root de br-header, src assets/images/govbr-logo.png\) tem alt=&quot;logo&quot;, que não descreve a marca. |
| pnip-mpa-processos h2 | emag:1.3 | A página não tem h1; o único título é o h2 &quot;Processos&quot;. |
| br-breadcrumb | wcag:4.1.2 | No shadow root de br-breadcrumb, o item Home é um &lt;a href=&quot;/portal-mpa/&quot;&gt; que contém um &lt;button aria-label=&quot;&quot;&gt;; controle interativo aninhado em outro, com duas paradas de Tab para o mesmo destino. |
| br-input#search | wcag:3.3.2 | O campo de busca \(input#search no shadow root\) não tem &lt;label&gt; nem aria-label; a única identificação é o placeholder &quot;Pesquise aqui ...&quot;, que desaparece ao digitar. |
| thead input\[type=checkbox\] | wcag:4.1.2 | A caixa de seleção do cabeçalho \(seleciona todas as linhas\) não tem label, aria-label nem title: nome acessível vazio. |
| tbody input\[type=checkbox\] | wcag:4.1.2 | As 6 caixas de seleção das linhas não têm label, aria-label nem title: nome acessível vazio. |
| span.br-tag.interaction\[style\*=&quot;cursor: pointer&quot;\] | wcag:2.1.1 | Os 6 filtros \(Aberto há, Tipo de processo, Status, Espécie alvo, Método de pesca, Petrecho\) e o &quot;Meus processos&quot; são &lt;span&gt; com click e cursor:pointer, sem role nem tabindex \(tabIndex -1\); na sequência de Tab o foco pas… |
| span.br-tag.interaction\[style\*=&quot;border-radius&quot;\] | wcag:4.1.2 | &quot;Meus processos&quot; funciona como alternância \(ligado: fundo rgb\(19,81,180\); desligado: fundo branco e 9→10 linhas\), mas não tem role=&quot;button&quot; nem aria-pressed; o estado não é exposto. |
| pnip-multiple-search-table-utils .br-select .br-radio label | wcag:2.1.1 | As opções do filtro aberto \(&quot;Últimos 7 dias&quot; etc.\) são apenas &lt;label&gt; dentro de div.br-radio, sem input; não recebem foco e só funcionam com clique. |
| pnip-multiple-search-table-utils span.br-tag button.br-button.circle | wcag:4.1.2 | O botão de remover o filtro aplicado \(&quot;Últimos 7 dias&quot;\) contém só um ícone aria-hidden; não tem aria-label nem title: nome acessível vazio. |
| tbody a\[role=&quot;button&quot;\] | wcag:2.1.1 | Os números de processo são &lt;a role=&quot;button&quot;&gt; sem href nem tabindex; element.focus\(\) não os foca \(activeElement continua outro\) e eles ficam fora da sequência de Tab, embora estejam expostos como botões que abrem o proce… |
| thead th:first-child br-icon-base | wcag:2.1.1 | O ícone de ordenação no cabeçalho &quot;Aberto há&quot; alterna sort-down/sort-up ao clique de mouse, mas não é focável nem tem papel de botão. |
| thead th:first-child | wcag:1.3.1 | O cabeçalho &quot;Aberto há&quot; mostra o ícone de direção de ordenação \(sort-down/sort-up\) sem aria-sort. |
| thead th:last-child | wcag:1.3.1 | O último cabeçalho da tabela \(coluna de ações\) é um th vazio, sem texto nem nome acessível. |
| pnip-status-solicitacao-utils .bg-orange-vivid-40 &gt; .text-secondary-01 | wcag:1.4.3 | Texto branco rgb\(255,255,255\) de 14px/peso 500 sobre rgb\(230,111,14\) \(Em análise analista/supervisor/diretor\): contraste 3,16:1. |
| pnip-status-solicitacao-utils .bg-indigo-vivid-40 &gt; .text-secondary-01 | wcag:1.4.3 | Texto branco de 14px/peso 500 sobre rgb\(130,137,255\) \(&quot;Aguarda complementos&quot;\): contraste 3,01:1. |
| pnip-status-solicitacao-utils .bg-secondary-06 &gt; .text-secondary-01 | wcag:1.4.3 | Texto branco de 14px/peso 500 sobre rgb\(136,136,136\) \(&quot;Aguardando plano de ação&quot;, &quot;Aguardando SFPA&quot;; também &quot;Aguardando análise&quot; na aba correspondente\): contraste 3,54:1. |
| #avatar-dropdown-trigger .br-avatar .content | wcag:1.4.3 | A letra &quot;U&quot; do avatar \(24,19px, negrito, branca\) sobre rgb\(255,140,0\): contraste 2,33:1. |
| pnip-mpa-processos iframe | wcag:4.1.2 | Há um iframe sem title \(sem src, documento vazio, 1160x500px, no fim do main\) que recebe foco na sequência de navegação. |
| nav.br-pagination ul &gt; li &gt; li | wcag:1.3.1 | Na paginação, cada número de página é um &lt;li&gt; aninhado diretamente dentro de outro &lt;li&gt; \(ul &gt; li &gt; li\), estrutura de lista inválida. |
| nav.br-pagination a.page.active | wcag:1.3.1 | A página atual é indicada só pela classe &quot;active&quot;; o link não tem aria-current=&quot;page&quot;. |
| #total, #page | wcag:4.1.2 | Os seletores &quot;Exibir&quot; e &quot;Página&quot; são input type=text que abrem uma lista \(br-list\); não têm role=&quot;combobox&quot;, aria-expanded nem aria-controls. |
| #total | wcag:2.4.3 | Ao escolher &quot;25&quot; no seletor &quot;Exibir&quot; com ArrowDown e Enter, o valor é aplicado e o foco vai para o &lt;body&gt;. |
| #avatar-menu | wcag:4.1.2 | O menu do usuário tem role=&quot;menu&quot;, mas não contém elementos role=&quot;menuitem&quot;: &quot;Trocar unidade&quot; é um span e &quot;Sair&quot; é um button sem papel de item. |
| #avatar-menu span.text-blue-vivid-60.text-weight-bold | wcag:2.1.1 | &quot;Trocar unidade&quot; é um &lt;span&gt; com cursor:pointer, sem tabindex nem role: não é alcançável por teclado. |
| #avatar-menu button.dropdown-button img | wcag:1.1.1 | A imagem exit-icon.png dentro do botão &quot;Sair&quot; não tem atributo alt. |
| #avatar-menu | incerta | Com o menu do usuário aberto e o foco no gatilho, Escape não fecha o menu \(hidden=false; aria-expanded continua &quot;true&quot;\). |
| br-header | incerta | O botão &quot;Menu&quot; \(#navigation no shadow root de br-header\) tem data-target=&quot;#main-navigation&quot;, mas esse elemento não existe; ao clicar, nada é aberto nem muda de estado. |
| pnip-mpa-processos div.mt-5.text-center &gt; p | wcag:4.1.3 | Na busca sem resultados \(&quot;xq&quot;\), a tabela e a paginação \(que tinha aria-live\) são removidas e aparece &quot;Não há processos para exibir.&quot; num &lt;p&gt; fora de qualquer região viva ou role=status. |
| .swal2-popup | wcag:4.1.2 | O diálogo de confirmação &quot;Tem certeza que deseja desassociar…&quot; \(role=dialog, aria-modal\) usa aria-labelledby=&quot;swal2-title&quot;, que aponta para um h2 vazio com display:none: o diálogo fica sem nome acessível. |
| .swal2-popup | wcag:4.1.2 | O diálogo de assinatura \(pré-visualização em PDF + &quot;Solicitar Revisão&quot;/&quot;Assinar com gov.br&quot;\) usa aria-labelledby=&quot;swal2-title&quot;, que aponta para um h2 vazio e oculto: sem nome acessível. |
| .swal2-close | wcag:3.1.2 | O botão de fechar do diálogo de assinatura tem aria-label=&quot;Close this dialog&quot; em inglês, numa página com lang=&quot;pt-br&quot; e sem lang no elemento. |
| .swal2-html-container object | wcag:1.1.1 | A pré-visualização do documento é um &lt;object type=&quot;application/pdf&quot;&gt; sem title, aria-label nem conteúdo alternativo. |
| tbody br-button\[title^=&quot;Desassociar&quot;\]:not\(\[disabled\]\) | wcag:2.4.3 | Depois de abrir o diálogo de desassociação a partir deste botão e fechá-lo com Escape, o foco vai para o &lt;body&gt;, não para o gatilho. |
| tbody br-button\[title=&quot;Assinar&quot;\] | wcag:2.4.3 | Depois de abrir o diálogo de assinatura e fechá-lo com Escape, o foco vai para o &lt;body&gt;, não para o botão &quot;Assinar&quot;. |
| tbody td\[style\*=&quot;max-width: 90px&quot;\] | incerta | As células de Solicitante têm max-width:90px com overflow:hidden e white-space:nowrap; o texto é cortado \(&quot;Pessoa Exemp&quot;, scrollWidth 332 vs clientWidth 120\) e não há title nem outro meio de ver o conteúdo completo. |
| thead th\[style\*=&quot;pure-0&quot;\] | incerta | O cabeçalho &quot;Téc. Adm.&quot; tem style=&quot;background-color: var\(--pure-0\)&quot; \(branco\), enquanto os outros th do mesmo thead são rgb\(240,240,240\); a faixa do cabeçalho fica interrompida. |
| .br-table table | incerta | A tabela vai de x=92 a x=1242px, mas o contêiner .br-table vai de x=92 a x=1188 \(overflow visible\): 54px passam do alinhamento da página \(botão Exportar e divisória terminam em 1188/1220\). |
| button\[aria-label=&quot;Buscar&quot;\] | incerta | O botão Buscar tem margin-top:-12px e fica abaixo do campo \(y 430–462\) em vez de dentro dele \(campo em y 402–434\), separado do campo de busca. |
| br-input\[label=&quot;Armazenamento total&quot;\] | wcag:2.4.6 | Na página de detalhe \(Vinculação de embarcação\), os 4 campos da seção &quot;Dados estruturais&quot; têm o mesmo rótulo &quot;Armazenamento total&quot;. |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `41ecad833725c3062e1939152308891c6c642478ffcdd6457bfc3978460a23d9`

