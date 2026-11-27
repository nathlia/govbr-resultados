# Resumo da análise — Processos (processos-f2)

Revisão 1 · gerado em 2026-11-27T00:26:59.363Z (UTC)

## 1. Status técnico

Análise: **pronta**

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261126-233351-processos-f2-sem-0f80 | sem | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 42 cartão(ões), nenhum decidido |

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
| Início (UTC) | 2026-11-26T23:34:20Z |
| Início (local) | 26/11/2026, 20:34:20 (horário de Brasília) |
| Commit do harness | aec9a0b3b93b4951617150682f4a620f75cf0984 |
| Repetição · tentativa | 1 · 1 |
| Campanha · slot · par | portao-teto-f2-01 · s01 · p01 |

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
| Cartões pendentes de revisão | 42 |
| Maturidade | aguardando revisão — 42 cartão(ões), nenhum decidido |
| Entra na comparação principal | sim |
| Achados enviados | 42 |

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
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_snapshot, browser\_press\_key, browser\_click, browser\_navigate\_back, browser\_console\_messages, browser\_take\_screenshot, browser\_type |
| Erros de ferramenta | 3 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 39 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | agente \(registro de inspeção inválido, lido do bruto\): 5 — tool-failure 1, unreachable 1, out-of-scope 1, budget 1, other 1 |
| Registro de inspeção | registro inválido \(2 erro\(s\) de contrato; guardado à parte\) — achados aceitos normalmente; não é zero cobertura; 5 limitação\(ões\) declarada\(s\) no registro bruto |
| Auditoria do registro (processo, não pontua) | registro invalido; 0 candidato\(s\) de ferramenta recebido\(s\); auditoria: nada sinalizado. Relatório de processo: não pontua nem exclui. |

O registro de inspeção é declaração do agente sobre o inventário que ele mesmo descobriu; “com evento de ferramenta” só diz que o identificador citado aparece num evento gravado. Não pontua nem decide elegibilidade, e a cobertura da página continua desconhecida.

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 5. Custo e tempo

| | sem |
|---|---|
| Tempo de relógio (s) | 814 (runner) |
| Turnos | 104 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 103 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) |
| Tokens de entrada | 146 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 66960 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 5482281 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 180810 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 3.8827202000000005 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 42 cartão(ões), estimativa 252 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 6. Detalhes e evidências

**sem** (20261126-233351-processos-f2-sem-0f80): [pacote](../../../../restauracoes/20261126-233351-processos-f2-sem-0f80/2026-11-26T23-33-51Z__processos-f2__opus__sem__rep-01__20261126-233351-processos-f2-sem-0f80) · [run.json](../../../../restauracoes/20261126-233351-processos-f2-sem-0f80/2026-11-26T23-33-51Z__processos-f2__opus__sem__rep-01__20261126-233351-processos-f2-sem-0f80/run.json) · [findings.json](../../../../restauracoes/20261126-233351-processos-f2-sem-0f80/2026-11-26T23-33-51Z__processos-f2__opus__sem__rep-01__20261126-233351-processos-f2-sem-0f80/findings.json) · [isolation.json](../../../../restauracoes/20261126-233351-processos-f2-sem-0f80/2026-11-26T23-33-51Z__processos-f2__opus__sem__rep-01__20261126-233351-processos-f2-sem-0f80/isolation.json) · [eventos de ferramenta](../../../../restauracoes/20261126-233351-processos-f2-sem-0f80/2026-11-26T23-33-51Z__processos-f2__opus__sem__rep-01__20261126-233351-processos-f2-sem-0f80/tool-events.ndjson) · — · evidências: [#1](../../../../restauracoes/20261126-233351-processos-f2-sem-0f80/2026-11-26T23-33-51Z__processos-f2__opus__sem__rep-01__20261126-233351-processos-f2-sem-0f80/evidence/aderencia-oraculo.json) [#2](../../../../restauracoes/20261126-233351-processos-f2-sem-0f80/2026-11-26T23-33-51Z__processos-f2__opus__sem__rep-01__20261126-233351-processos-f2-sem-0f80/evidence/cliente.json) [#3](../../../../restauracoes/20261126-233351-processos-f2-sem-0f80/2026-11-26T23-33-51Z__processos-f2__opus__sem__rep-01__20261126-233351-processos-f2-sem-0f80/evidence/container-config.json) [#4](../../../../restauracoes/20261126-233351-processos-f2-sem-0f80/2026-11-26T23-33-51Z__processos-f2__opus__sem__rep-01__20261126-233351-processos-f2-sem-0f80/evidence/controles-positivos.json) [#5](../../../../restauracoes/20261126-233351-processos-f2-sem-0f80/2026-11-26T23-33-51Z__processos-f2__opus__sem__rep-01__20261126-233351-processos-f2-sem-0f80/evidence/mcp-config.json) [#6](../../../../restauracoes/20261126-233351-processos-f2-sem-0f80/2026-11-26T23-33-51Z__processos-f2__opus__sem__rep-01__20261126-233351-processos-f2-sem-0f80/evidence/preflight.json) [#7](../../../../restauracoes/20261126-233351-processos-f2-sem-0f80/2026-11-26T23-33-51Z__processos-f2__opus__sem__rep-01__20261126-233351-processos-f2-sem-0f80/evidence/prompt.txt) [#8](../../../../restauracoes/20261126-233351-processos-f2-sem-0f80/2026-11-26T23-33-51Z__processos-f2__opus__sem__rep-01__20261126-233351-processos-f2-sem-0f80/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../restauracoes/20261126-233351-processos-f2-sem-0f80/2026-11-26T23-33-51Z__processos-f2__opus__sem__rep-01__20261126-233351-processos-f2-sem-0f80/evidence/raw/browser/inventory.json) [#10](../../../../restauracoes/20261126-233351-processos-f2-sem-0f80/2026-11-26T23-33-51Z__processos-f2__opus__sem__rep-01__20261126-233351-processos-f2-sem-0f80/evidence/raw/browser/tool-events.ndjson) [#11](../../../../restauracoes/20261126-233351-processos-f2-sem-0f80/2026-11-26T23-33-51Z__processos-f2__opus__sem__rep-01__20261126-233351-processos-f2-sem-0f80/evidence/raw/collector/accepted-raw.txt) [#12](../../../../restauracoes/20261126-233351-processos-f2-sem-0f80/2026-11-26T23-33-51Z__processos-f2__opus__sem__rep-01__20261126-233351-processos-f2-sem-0f80/evidence/raw/collector/events.ndjson) [#13](../../../../restauracoes/20261126-233351-processos-f2-sem-0f80/2026-11-26T23-33-51Z__processos-f2__opus__sem__rep-01__20261126-233351-processos-f2-sem-0f80/evidence/raw/collector/findings.json) [#14](../../../../restauracoes/20261126-233351-processos-f2-sem-0f80/2026-11-26T23-33-51Z__processos-f2__opus__sem__rep-01__20261126-233351-processos-f2-sem-0f80/evidence/raw/collector/refused/001.json) [#15](../../../../restauracoes/20261126-233351-processos-f2-sem-0f80/2026-11-26T23-33-51Z__processos-f2__opus__sem__rep-01__20261126-233351-processos-f2-sem-0f80/evidence/raw/collector/refused/002.json) [#16](../../../../restauracoes/20261126-233351-processos-f2-sem-0f80/2026-11-26T23-33-51Z__processos-f2__opus__sem__rep-01__20261126-233351-processos-f2-sem-0f80/evidence/raw/egress-provider/egress.ndjson) [#17](../../../../restauracoes/20261126-233351-processos-f2-sem-0f80/2026-11-26T23-33-51Z__processos-f2__opus__sem__rep-01__20261126-233351-processos-f2-sem-0f80/evidence/raw/egress-site/egress.ndjson) [#18](../../../../restauracoes/20261126-233351-processos-f2-sem-0f80/2026-11-26T23-33-51Z__processos-f2__opus__sem__rep-01__20261126-233351-processos-f2-sem-0f80/evidence/raw/probe/probe.json) [#19](../../../../restauracoes/20261126-233351-processos-f2-sem-0f80/2026-11-26T23-33-51Z__processos-f2__opus__sem__rep-01__20261126-233351-processos-f2-sem-0f80/evidence/raw/probe/sonda-escrita-1795736060013.txt) [#20](../../../../restauracoes/20261126-233351-processos-f2-sem-0f80/2026-11-26T23-33-51Z__processos-f2__opus__sem__rep-01__20261126-233351-processos-f2-sem-0f80/evidence/raw/task/mcp.json) [#21](../../../../restauracoes/20261126-233351-processos-f2-sem-0f80/2026-11-26T23-33-51Z__processos-f2__opus__sem__rep-01__20261126-233351-processos-f2-sem-0f80/evidence/raw/task/prompt.txt) [#22](../../../../restauracoes/20261126-233351-processos-f2-sem-0f80/2026-11-26T23-33-51Z__processos-f2__opus__sem__rep-01__20261126-233351-processos-f2-sem-0f80/evidence/uso.json) · logs: [#1](../../../../restauracoes/20261126-233351-processos-f2-sem-0f80/2026-11-26T23-33-51Z__processos-f2__opus__sem__rep-01__20261126-233351-processos-f2-sem-0f80/evidence/logs/agent.log) [#2](../../../../restauracoes/20261126-233351-processos-f2-sem-0f80/2026-11-26T23-33-51Z__processos-f2__opus__sem__rep-01__20261126-233351-processos-f2-sem-0f80/evidence/logs/browser.log) [#3](../../../../restauracoes/20261126-233351-processos-f2-sem-0f80/2026-11-26T23-33-51Z__processos-f2__opus__sem__rep-01__20261126-233351-processos-f2-sem-0f80/evidence/logs/collector.log) [#4](../../../../restauracoes/20261126-233351-processos-f2-sem-0f80/2026-11-26T23-33-51Z__processos-f2__opus__sem__rep-01__20261126-233351-processos-f2-sem-0f80/evidence/logs/egress-provider.log) [#5](../../../../restauracoes/20261126-233351-processos-f2-sem-0f80/2026-11-26T23-33-51Z__processos-f2__opus__sem__rep-01__20261126-233351-processos-f2-sem-0f80/evidence/logs/egress-site.log) [#6](../../../../restauracoes/20261126-233351-processos-f2-sem-0f80/2026-11-26T23-33-51Z__processos-f2__opus__sem__rep-01__20261126-233351-processos-f2-sem-0f80/evidence/logs/probe.log) [#7](../../../../restauracoes/20261126-233351-processos-f2-sem-0f80/2026-11-26T23-33-51Z__processos-f2__opus__sem__rep-01__20261126-233351-processos-f2-sem-0f80/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (42; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| br-header | wcag:1.1.1 | A imagem do logotipo gov.br no shadow DOM do br-header \(img.large-img, src assets/images/govbr-logo.png\) tem alt=&quot;logo&quot;, que não identifica a imagem. |
| br-header | incerta | O botão &quot;Menu&quot; \(button#navigation, data-target=&quot;#main-navigation&quot;\) no shadow DOM do br-header não abre nada quando clicado: não existe #main-navigation no documento nem no shadow root, aria-expanded continua ausente e a… |
| br-breadcrumb | wcag:4.1.2 | O item Home do breadcrumb \(shadow DOM\) é um &lt;a href=&quot;/portal-mpa/&quot;&gt; que contém um &lt;button class=&quot;br-button&quot; aria-label=&quot;&quot;&gt;: dois controles interativos aninhados, que geram duas paradas de Tab consecutivas \(A e BUTTON\) p… |
| br-tab | wcag:2.5.3 | Os botões das abas têm aria-label com a constante interna \(&quot;AGUARDANDO\_ANALISE&quot;, &quot;TRAMITANDO&quot;, &quot;HISTORICO&quot;\), que substitui o texto visível \(&quot;Aguardando análise&quot;, &quot;Tramitando&quot;, &quot;Concluídos&quot;\). O nome acessível não contém … |
| br-tab | wcag:4.1.2 | A aba ativa só é indicada pela classe CSS li.tab-item.active. Os botões não têm aria-selected nem aria-current nem role=&quot;tab&quot;; conferido nas três abas depois de ativar cada uma. |
| #avatar-dropdown-trigger | wcag:2.5.3 | O botão do usuário mostra &quot;U Olá, Usuária de Teste, SUPERVISOR&quot;, mas aria-label=&quot;Avatar com dropdown&quot; substitui esse texto como nome acessível. |
| #avatar-dropdown-trigger .br-avatar &gt; span | wcag:1.4.3 | A inicial &quot;U&quot; do avatar é texto branco rgb\(255,255,255\) sobre laranja rgb\(255,140,0\), com 24,19px de fonte. Contraste medido: 2,33:1. |
| #avatar-menu | wcag:1.3.1 | O painel do usuário tem role=&quot;menu&quot;, mas nenhum filho tem role=&quot;menuitem&quot;: o conteúdo é texto, uma span clicável \(&quot;Trocar unidade&quot;\) e um button &quot;Sair&quot;. Com o menu aberto, Escape não o fecha \(aria-expanded continua &quot;true… |
| #avatar-menu .text-center &gt; span | wcag:2.1.1 | &quot;Trocar unidade&quot; é uma &lt;span&gt; com cursor:pointer, sem role, sem tabindex \(tabIndex -1\) e sem href: o teclado não alcança a ação. |
| #avatar-menu img | wcag:1.1.1 | O ícone de saída \(img src exit-icon.png\) dentro do botão &quot;Sair&quot; não tem atributo alt. |
| pnip-mpa-processos h2 | emag:1.3 | O título da página &quot;Processos&quot; é um h2 e não há nenhum h1 na página: a lista de cabeçalhos é só &quot;H2: Processos&quot;. |
| .br-tag.interaction.bg-pure-0 | wcag:2.1.1 | Os seis filtros \(&quot;Aberto há&quot;, &quot;Tipo de processo&quot;, &quot;Status&quot;, &quot;Espécie alvo&quot;, &quot;Método de pesca&quot;, &quot;Petrecho&quot;\) são &lt;span class=&quot;br-tag interaction&quot;&gt; que abrem a lista com o clique do mouse, mas têm tabIndex -1. Na sequência… |
| .br-tag.interaction.bg-pure-0 | wcag:4.1.2 | Os gatilhos dos filtros não têm papel \(são span\), nem estado aria-expanded, nem relação com a lista que abrem. Na árvore de acessibilidade aparecem como &quot;generic&quot;. |
| .br-list.d-block .br-radio label | wcag:2.1.1 | As opções da lista de filtro aberta \(&quot;Últimos 7 dias&quot; etc.\) são só &lt;label&gt; dentro de div.br-radio, sem input radio, sem tabindex e sem role: o teclado não alcança nem seleciona nenhuma delas. |
| .col-auto.mb-1 &gt; .br-tag.interaction | wcag:2.1.1 | O alternador &quot;Meus processos&quot; é uma &lt;span class=&quot;br-tag interaction&quot;&gt; com cursor:pointer e tabIndex -1. O clique muda a lista \(de 2 para 3 itens com o filtro de 7 dias\), mas o teclado não alcança o controle. |
| .col-auto.mb-1 &gt; .br-tag.interaction | wcag:4.1.2 | O estado ligado/desligado de &quot;Meus processos&quot; aparece só pela cor: fundo rgb\(19,81,180\) quando ligado, branco com borda quando desligado. Não há role nem aria-pressed. |
| .br-tag.interaction button.inverted.circle | wcag:4.1.2 | O botão para remover o filtro aplicado \(&quot;Últimos 7 dias&quot;\) só contém um ícone &lt;i aria-hidden=&quot;true&quot; class=&quot;fas fa-times&quot;&gt;; não tem aria-label, title nem texto, e o nome acessível fica vazio. |
| br-input#search | wcag:3.3.2 | O campo de pesquisa \(input#search no shadow DOM de br-input\) não tem &lt;label&gt; nem aria-label; o único rótulo é o placeholder &quot;Pesquise aqui ...&quot;, que some ao digitar. |
| thead input\[type=checkbox\] | wcag:4.1.2 | A caixa &quot;selecionar todos&quot; no cabeçalho da tabela não tem label, aria-label nem title; o nome acessível fica vazio \(na árvore aparece como &quot;checkbox&quot; sem nome\). |
| tbody input\[type=checkbox\] | wcag:4.1.2 | As caixas de seleção das linhas \(6 na aba Aguardando análise\) não têm label, aria-label nem title; o nome acessível fica vazio. |
| tbody a\[role=button\] | wcag:2.1.1 | Os números de processo são &lt;a role=&quot;button&quot;&gt; sem href e sem tabindex. Na sequência de Tab, o foco passa do checkbox do cabeçalho direto ao &quot;Ver processo&quot; da linha 1, pulando o número. O clique navega \(ex.: para /process… |
| thead th:first-child | wcag:1.3.1 | A coluna &quot;Aberto há&quot; \(e &quot;Data/Hora&quot; em Concluídos\) mostra um ícone sort-down indicando a ordenação, mas o th não tem aria-sort. O ícone é a única indicação. |
| thead th:last-child | wcag:1.3.1 | O cabeçalho da coluna de ações \(Ver processo, Desassociar, Assinar\) é um th scope=&quot;col&quot; vazio, sem texto nem nome acessível. |
| pnip-status-solicitacao-utils .bg-orange-vivid-40 &gt; .text-secondary-01 | wcag:1.4.3 | O selo de status laranja \(&quot;Em análise analista&quot;, &quot;Em análise supervisor&quot;, &quot;Em análise diretor&quot;\) tem texto branco sobre rgb\(230,111,14\), com 14px e peso 500. Contraste medido: 3,16:1. |
| pnip-status-solicitacao-utils .bg-indigo-vivid-40 &gt; .text-secondary-01 | wcag:1.4.3 | O selo de status &quot;Aguarda complementos&quot; tem texto branco sobre rgb\(130,137,255\), com 14px e peso 500. Contraste medido: 3,01:1. |
| pnip-status-solicitacao-utils .bg-secondary-06 &gt; .text-secondary-01 | wcag:1.4.3 | O selo de status cinza \(&quot;Aguardando plano de ação&quot;, &quot;Aguardando SFPA&quot;\) tem texto branco sobre rgb\(136,136,136\), com 14px e peso 500. Contraste medido: 3,54:1. |
| br-button\[title^=&quot;Desassociar&quot;\]\[disabled\] | incerta | Os botões &quot;Desassociar&quot; desabilitados ficam visualmente idênticos ao habilitado da linha 1: ícone rgb\(229,34,7\) e opacity 1 nos dois casos. Só o cursor muda \(not-allowed\). |
| .swal2-popup | wcag:4.1.2 | O diálogo de confirmação &quot;Tem certeza que deseja desassociar...&quot; \(role=&quot;dialog&quot;, aria-modal=&quot;true&quot;\) tem aria-labelledby=&quot;swal2-title&quot;, mas esse h2 está vazio e com display:none. O diálogo fica sem nome acessível. |
| .swal2-popup | wcag:4.1.2 | O diálogo de assinatura \(role=&quot;dialog&quot;, aria-modal=&quot;true&quot;, com a prévia em PDF e os botões &quot;Solicitar Revisão&quot;/&quot;Assinar com gov.br&quot;\) tem aria-labelledby=&quot;swal2-title&quot;, mas esse h2 está vazio e com display:none. O diálog… |
| .swal2-close | wcag:3.1.2 | O botão de fechar do diálogo de assinatura tem aria-label=&quot;Close this dialog&quot;, em inglês, numa página com lang=&quot;pt-br&quot; e sem lang=&quot;en&quot; no elemento. |
| .swal2-html-container object | wcag:1.1.1 | A prévia do documento é um &lt;object type=&quot;application/pdf&quot; data=&quot;blob:...&quot;&gt; sem title, aria-label nem conteúdo alternativo. Ao abrir o diálogo, o foco vai para esse objeto. |
| tbody tr:nth-child\(2\) br-button\[title=&quot;Assinar&quot;\] | wcag:2.4.3 | O diálogo foi aberto pelo teclado \(foco no botão &quot;Assinar&quot; da linha 2 e Enter\). Depois de fechado pelo botão ×, o foco vai para BODY em vez de voltar ao botão que o abriu. |
| .br-pagination.small li &gt; li | wcag:1.3.1 | Na paginação, cada link de página é um &lt;li&gt; dentro de outro &lt;li&gt;, sem ul/ol intermediário \(ul &gt; li &gt; li &gt; a.page\). A árvore de acessibilidade mostra listitem dentro de listitem. |
| .br-pagination a.page.active | wcag:1.3.1 | A página atual só é indicada pela classe &quot;active&quot; \(estilo visual\). O link não tem aria-current=&quot;page&quot;; conferido nas páginas 1 e 2 de Concluídos. |
| #page | incerta | Na aba Concluídos, depois de ir para a página 2 pelo link &quot;2&quot;, a paginação marca a 2 como ativa e mostra &quot;11–14 de 14 itens&quot;, mas o seletor &quot;Página&quot; \(input#page\) continua com o valor &quot;1&quot;. |
| nav\[aria-label=&quot;Paginação de resultados&quot;\] | incerta | A paginação tem só o botão &quot;Página seguinte&quot;; não há &quot;Página anterior&quot;. Na página 2 de Concluídos, só dá para voltar pelo link numérico &quot;1&quot;. |
| #total | wcag:2.4.3 | No seletor &quot;Exibir&quot;, escolhido o valor 25 pelo teclado \(ArrowDown e Enter\), a lista fecha e o foco vai para BODY em vez de voltar ao campo. |
| .mt-5.text-center &gt; p | wcag:4.1.3 | Quando a pesquisa não encontra nada, a tabela é trocada pela mensagem &quot;Não há processos para exibir.&quot;, que fica num &lt;p&gt; sem role=&quot;status&quot; nem aria-live; a região aria-live da paginação também sai da página. O resultado … |
| pnip-mpa-processos iframe | wcag:4.1.2 | Há um &lt;iframe&gt; vazio \(sem src\), visível, de 1160×500px no fim do conteúdo principal, sem atributo title nem nome acessível. |
| title | wcag:2.4.2 | O título do documento é só &quot;PNIP&quot;, igual em todas as rotas visitadas \(lista, detalhe, login\), e não indica a página &quot;Processos&quot;. |
| body | emag:1.5 | Não há links de salto para o conteúdo, o menu ou a busca: não existe nenhum a\[href^=&quot;#&quot;\], e o primeiro Tab vai direto ao botão &quot;Menu&quot; do cabeçalho. |
| main h4 | emag:1.3 | No detalhe do processo de Alteração de Certificado, o título é h2 \(&quot;Alteração de Certificado&quot;\) e as seções \(&quot;1. Dados da embarcação&quot; etc.\) são h4, sem h3 entre eles. |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `0797d11433ade2e90379f7632a5ae4da17ff78e0bc44bbefec8a7a0c88ddeff5`

