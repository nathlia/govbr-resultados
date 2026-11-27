# Resumo da análise — Processos (processos-f2)

Revisão 1 · gerado em 2026-11-27T00:27:20.212Z (UTC)

## 1. Status técnico

Análise: **pronta**

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261126-235057-processos-f2-sem-785b | sem | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 45 cartão(ões), nenhum decidido |

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
| Início (UTC) | 2026-11-26T23:51:27Z |
| Início (local) | 26/11/2026, 20:51:27 (horário de Brasília) |
| Commit do harness | aec9a0b3b93b4951617150682f4a620f75cf0984 |
| Repetição · tentativa | 1 · 1 |
| Campanha · slot · par | portao-teto-f2-01 · s02 · p02 |

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
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_snapshot, browser\_console\_messages, browser\_press\_key, browser\_click, browser\_navigate\_back |
| Erros de ferramenta | 4 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 39 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 9 aprovado(s); falhos: nenhum |
| Limitações declaradas | agente \(registro de inspeção inválido, lido do bruto\): 4 — tool-failure 1, out-of-scope 1, budget 1, other 1 |
| Registro de inspeção | registro inválido \(1 erro\(s\) de contrato; guardado à parte\) — achados aceitos normalmente; não é zero cobertura; 4 limitação\(ões\) declarada\(s\) no registro bruto |
| Auditoria do registro (processo, não pontua) | registro invalido; 0 candidato\(s\) de ferramenta recebido\(s\); auditoria: nada sinalizado. Relatório de processo: não pontua nem exclui. |

O registro de inspeção é declaração do agente sobre o inventário que ele mesmo descobriu; “com evento de ferramenta” só diz que o identificador citado aparece num evento gravado. Não pontua nem decide elegibilidade, e a cobertura da página continua desconhecida.

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 5. Custo e tempo

| | sem |
|---|---|
| Tempo de relógio (s) | 772 (runner) |
| Turnos | 110 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 109 (ponte MCP) |
| Chamadas ao oráculo | 0 (inventário: oráculo ausente no braço sem) |
| Tokens de entrada | 136 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 56733 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 5848134 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 154617 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 3.541766800000001 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 45 cartão(ões), estimativa 270 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 6. Detalhes e evidências

**sem** (20261126-235057-processos-f2-sem-785b): [pacote](../../../../restauracoes/20261126-235057-processos-f2-sem-785b/2026-11-26T23-50-57Z__processos-f2__opus__sem__rep-01__20261126-235057-processos-f2-sem-785b) · [run.json](../../../../restauracoes/20261126-235057-processos-f2-sem-785b/2026-11-26T23-50-57Z__processos-f2__opus__sem__rep-01__20261126-235057-processos-f2-sem-785b/run.json) · [findings.json](../../../../restauracoes/20261126-235057-processos-f2-sem-785b/2026-11-26T23-50-57Z__processos-f2__opus__sem__rep-01__20261126-235057-processos-f2-sem-785b/findings.json) · [isolation.json](../../../../restauracoes/20261126-235057-processos-f2-sem-785b/2026-11-26T23-50-57Z__processos-f2__opus__sem__rep-01__20261126-235057-processos-f2-sem-785b/isolation.json) · [eventos de ferramenta](../../../../restauracoes/20261126-235057-processos-f2-sem-785b/2026-11-26T23-50-57Z__processos-f2__opus__sem__rep-01__20261126-235057-processos-f2-sem-785b/tool-events.ndjson) · — · evidências: [#1](../../../../restauracoes/20261126-235057-processos-f2-sem-785b/2026-11-26T23-50-57Z__processos-f2__opus__sem__rep-01__20261126-235057-processos-f2-sem-785b/evidence/aderencia-oraculo.json) [#2](../../../../restauracoes/20261126-235057-processos-f2-sem-785b/2026-11-26T23-50-57Z__processos-f2__opus__sem__rep-01__20261126-235057-processos-f2-sem-785b/evidence/cliente.json) [#3](../../../../restauracoes/20261126-235057-processos-f2-sem-785b/2026-11-26T23-50-57Z__processos-f2__opus__sem__rep-01__20261126-235057-processos-f2-sem-785b/evidence/container-config.json) [#4](../../../../restauracoes/20261126-235057-processos-f2-sem-785b/2026-11-26T23-50-57Z__processos-f2__opus__sem__rep-01__20261126-235057-processos-f2-sem-785b/evidence/controles-positivos.json) [#5](../../../../restauracoes/20261126-235057-processos-f2-sem-785b/2026-11-26T23-50-57Z__processos-f2__opus__sem__rep-01__20261126-235057-processos-f2-sem-785b/evidence/mcp-config.json) [#6](../../../../restauracoes/20261126-235057-processos-f2-sem-785b/2026-11-26T23-50-57Z__processos-f2__opus__sem__rep-01__20261126-235057-processos-f2-sem-785b/evidence/preflight.json) [#7](../../../../restauracoes/20261126-235057-processos-f2-sem-785b/2026-11-26T23-50-57Z__processos-f2__opus__sem__rep-01__20261126-235057-processos-f2-sem-785b/evidence/prompt.txt) [#8](../../../../restauracoes/20261126-235057-processos-f2-sem-785b/2026-11-26T23-50-57Z__processos-f2__opus__sem__rep-01__20261126-235057-processos-f2-sem-785b/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../restauracoes/20261126-235057-processos-f2-sem-785b/2026-11-26T23-50-57Z__processos-f2__opus__sem__rep-01__20261126-235057-processos-f2-sem-785b/evidence/raw/browser/inventory.json) [#10](../../../../restauracoes/20261126-235057-processos-f2-sem-785b/2026-11-26T23-50-57Z__processos-f2__opus__sem__rep-01__20261126-235057-processos-f2-sem-785b/evidence/raw/browser/tool-events.ndjson) [#11](../../../../restauracoes/20261126-235057-processos-f2-sem-785b/2026-11-26T23-50-57Z__processos-f2__opus__sem__rep-01__20261126-235057-processos-f2-sem-785b/evidence/raw/collector/accepted-raw.txt) [#12](../../../../restauracoes/20261126-235057-processos-f2-sem-785b/2026-11-26T23-50-57Z__processos-f2__opus__sem__rep-01__20261126-235057-processos-f2-sem-785b/evidence/raw/collector/events.ndjson) [#13](../../../../restauracoes/20261126-235057-processos-f2-sem-785b/2026-11-26T23-50-57Z__processos-f2__opus__sem__rep-01__20261126-235057-processos-f2-sem-785b/evidence/raw/collector/findings.json) [#14](../../../../restauracoes/20261126-235057-processos-f2-sem-785b/2026-11-26T23-50-57Z__processos-f2__opus__sem__rep-01__20261126-235057-processos-f2-sem-785b/evidence/raw/egress-provider/egress.ndjson) [#15](../../../../restauracoes/20261126-235057-processos-f2-sem-785b/2026-11-26T23-50-57Z__processos-f2__opus__sem__rep-01__20261126-235057-processos-f2-sem-785b/evidence/raw/egress-site/egress.ndjson) [#16](../../../../restauracoes/20261126-235057-processos-f2-sem-785b/2026-11-26T23-50-57Z__processos-f2__opus__sem__rep-01__20261126-235057-processos-f2-sem-785b/evidence/raw/probe/probe.json) [#17](../../../../restauracoes/20261126-235057-processos-f2-sem-785b/2026-11-26T23-50-57Z__processos-f2__opus__sem__rep-01__20261126-235057-processos-f2-sem-785b/evidence/raw/probe/sonda-escrita-1795737086959.txt) [#18](../../../../restauracoes/20261126-235057-processos-f2-sem-785b/2026-11-26T23-50-57Z__processos-f2__opus__sem__rep-01__20261126-235057-processos-f2-sem-785b/evidence/raw/task/mcp.json) [#19](../../../../restauracoes/20261126-235057-processos-f2-sem-785b/2026-11-26T23-50-57Z__processos-f2__opus__sem__rep-01__20261126-235057-processos-f2-sem-785b/evidence/raw/task/prompt.txt) [#20](../../../../restauracoes/20261126-235057-processos-f2-sem-785b/2026-11-26T23-50-57Z__processos-f2__opus__sem__rep-01__20261126-235057-processos-f2-sem-785b/evidence/uso.json) · logs: [#1](../../../../restauracoes/20261126-235057-processos-f2-sem-785b/2026-11-26T23-50-57Z__processos-f2__opus__sem__rep-01__20261126-235057-processos-f2-sem-785b/evidence/logs/agent.log) [#2](../../../../restauracoes/20261126-235057-processos-f2-sem-785b/2026-11-26T23-50-57Z__processos-f2__opus__sem__rep-01__20261126-235057-processos-f2-sem-785b/evidence/logs/browser.log) [#3](../../../../restauracoes/20261126-235057-processos-f2-sem-785b/2026-11-26T23-50-57Z__processos-f2__opus__sem__rep-01__20261126-235057-processos-f2-sem-785b/evidence/logs/collector.log) [#4](../../../../restauracoes/20261126-235057-processos-f2-sem-785b/2026-11-26T23-50-57Z__processos-f2__opus__sem__rep-01__20261126-235057-processos-f2-sem-785b/evidence/logs/egress-provider.log) [#5](../../../../restauracoes/20261126-235057-processos-f2-sem-785b/2026-11-26T23-50-57Z__processos-f2__opus__sem__rep-01__20261126-235057-processos-f2-sem-785b/evidence/logs/egress-site.log) [#6](../../../../restauracoes/20261126-235057-processos-f2-sem-785b/2026-11-26T23-50-57Z__processos-f2__opus__sem__rep-01__20261126-235057-processos-f2-sem-785b/evidence/logs/probe.log) [#7](../../../../restauracoes/20261126-235057-processos-f2-sem-785b/2026-11-26T23-50-57Z__processos-f2__opus__sem__rep-01__20261126-235057-processos-f2-sem-785b/evidence/logs/screens.log) · [binding](analysis-binding.sem.json)

Achados enviados (45; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| br-header | wcag:1.1.1 | A imagem do logotipo dentro do shadow DOM de br-header \(img src=assets/images/govbr-logo.png\) tem alt=&quot;logo&quot;, que descreve o tipo de elemento e não a marca. |
| title | wcag:2.4.2 | O título do documento é só &quot;PNIP&quot;. Ele não muda com a tela nem identifica a página de Processos. |
| h2 | emag:1.3 | A página não tem h1: o título principal &quot;Processos&quot; é um h2 \(document.querySelectorAll\('h1'\).length = 0\), e o nome do sistema no cabeçalho é um div. |
| body | emag:1.5 | Não há links de atalho para o conteúdo, o menu ou a busca: nenhum a\[href^='#'\] na página nem no shadow DOM de br-header, e o primeiro Tab vai direto ao botão 'Menu'. |
| #avatar-dropdown-trigger | wcag:2.5.3 | O botão mostra o texto &quot;Olá, Usuária de Teste, SUPERVISOR&quot;, mas o nome acessível vem de aria-label=&quot;Avatar com dropdown&quot;, que não contém o texto visível. |
| .br-avatar &gt; span | wcag:1.4.3 | A letra &quot;U&quot; do avatar \(24,19px, negrito\) é rgb\(255,255,255\) sobre rgb\(255,140,0\): contraste de 2,33:1. |
| br-header | incerta | O botão 'Menu' \(#navigation, no shadow DOM de br-header, data-target=#main-navigation\) não abre nada ao ser clicado: não existe #main-navigation nem menu visível, e o botão não expõe aria-expanded. |
| br-breadcrumb | wcag:4.1.2 | No shadow DOM de br-breadcrumb, o item Home é um &lt;a href=&quot;/portal-mpa/&quot;&gt; que contém um &lt;button aria-label=&quot;&quot;&gt;: são elementos interativos aninhados, que geram duas paradas de Tab \(A e BUTTON\) para o mesmo destino. |
| br-tab | wcag:2.5.3 | Os botões das abas \(no shadow DOM de br-tab\) mostram 'Aguardando análise', 'Tramitando' e 'Concluídos', mas os nomes acessíveis vêm de aria-label com os ids internos: &quot;AGUARDANDO\_ANALISE&quot;, &quot;TRAMITANDO&quot; e &quot;HISTORICO&quot;. |
| br-tab | wcag:4.1.2 | A aba ativa só é indicada pela classe li.tab-item.active e pela borda inferior. Os botões não têm aria-selected, aria-current nem papel tab/tablist; o estado selecionado não é exposto. |
| .tab-panel &gt; .col &gt; .row &gt; .col-auto &gt; span.br-tag | wcag:2.1.1 | O alternador 'Meus processos' é um span.br-tag com cursor:pointer e handler de clique, mas tabIndex=-1, sem role: não recebe foco pelo Tab e não pode ser acionado pelo teclado. |
| .tab-panel &gt; .col &gt; .row &gt; .col-auto &gt; span.br-tag | wcag:4.1.2 | O estado ligado/desligado de 'Meus processos' só aparece pela cor \(fundo azul rgb\(19,81,180\) quando ligado; contorno cinza quando desligado\). Não há role nem aria-pressed. |
| #searchTableUtils .row.align-items-center span.br-tag | wcag:2.1.1 | Os 6 acionadores de filtro \('Aberto há', 'Tipo de processo', 'Status', 'Espécie alvo', 'Método de pesca', 'Petrecho'\) são span com cursor:pointer, tabIndex=-1, e só abrem a lista com o mouse. |
| #searchTableUtils .row.align-items-center span.br-tag | wcag:4.1.2 | Os acionadores de filtro não têm papel de botão nem aria-expanded; abrir a lista só troca o ícone fa-caret-down por fa-caret-up. |
| #searchTableUtils .br-list .br-radio &gt; label | wcag:4.1.2 | As opções do filtro aberto \('Últimos 7 dias', '30', '60', '90'\) são &lt;label&gt; dentro de div.br-radio sem input associado: não têm papel \(radio/option\), estado de seleção nem foco pelo teclado. |
| #searchTableUtils span.br-tag &gt; i:not\(\[aria-hidden\]\), #searchTableUtils span.br… | wcag:1.1.1 | Os ícones decorativos dos filtros \(i.fa-clock, fa-chart-bar, fa-hourglass-start, fa-fish, fa-anchor, fa-network-wired e os span.fa-caret-down\) não têm aria-hidden, e o glifo de uso privado aparece como texto na árvore d… |
| #searchTableUtils .row.pl-2 span.br-tag &gt; button | wcag:4.1.2 | O botão de remover o filtro aplicado \('Últimos 7 dias'\) só contém o ícone i.fa-times com aria-hidden e não tem aria-label nem texto: o nome acessível é vazio. |
| br-input#search | emag:6.2 | O campo de busca \(input#search no shadow DOM de br-input\) não tem label: a identificação vem só do placeholder 'Pesquise aqui ...', que desaparece ao digitar. |
| table input\[type=checkbox\] | wcag:4.1.2 | As caixas de seleção da tabela \(a do cabeçalho e as 6 das linhas\) não têm label, aria-label nem aria-labelledby: o nome acessível é vazio. |
| tbody td &gt; a\[role=button\] | wcag:2.1.1 | Os números de processo são &lt;a role=&quot;button&quot;&gt; sem href nem tabindex, com handler de clique. O Tab vai da caixa do cabeçalho direto para 'Ver processo', pulando o número. |
| thead th:first-child br-icon-base | wcag:2.1.1 | O ícone de ordenação da coluna 'Aberto há' \(br-icon-base, tabIndex=-1, glifo com aria-hidden\) inverte a ordem da tabela ao ser clicado, mas não recebe foco e não tem nome acessível. |
| thead th:first-child | wcag:1.3.1 | O cabeçalho ordenável 'Aberto há' não tem aria-sort; a direção da ordenação só aparece pelo ícone sort-down/sort-up. |
| thead th:last-child | incerta | O cabeçalho da coluna de ações \(Ver processo, Desassociar, Assinar\) é um th scope=col vazio: as células dessa coluna ficam sem cabeçalho. |
| table.table | emag:3.9 | A tabela de processos não tem caption nem outro título associado \(aria-labelledby/aria-label\). |
| pnip-status-solicitacao-utils .bg-orange-vivid-40 &gt; .text-center | wcag:1.4.3 | Nos selos de status laranja \('Em análise analista', 'Em análise supervisor', 'Em análise diretor'\), o texto é rgb\(255,255,255\) sobre rgb\(230,111,14\), com 14px e peso 500: contraste de 3,16:1. |
| pnip-status-solicitacao-utils .bg-indigo-vivid-40 &gt; .text-center | wcag:1.4.3 | No selo 'Aguarda complementos', o texto é rgb\(255,255,255\) sobre rgb\(130,137,255\), com 14px: contraste de 3,01:1. |
| pnip-status-solicitacao-utils .bg-secondary-06 &gt; .text-center | wcag:1.4.3 | Nos selos 'Aguardando plano de ação' e 'Aguardando SFPA', o texto é rgb\(255,255,255\) sobre rgb\(136,136,136\), com 14px: contraste de 3,54:1. |
| div.br-table | wcag:2.2.2 | A tabela se atualiza sozinha a cada \~1 minuto \('Última atualização' passou de 09:33 para 09:34 em 53 s\) e as linhas são recriadas. Não há controle para pausar, parar ou ajustar a atualização. |
| tbody tr:first-child br-button\[title=&quot;Ver processo&quot;\] | wcag:2.4.3 | Com o foco no botão 'Ver processo' da primeira linha, a atualização automática recriou as linhas \(o tr original saiu do DOM\) e o foco passou para o body. |
| nav.br-pagination.small &gt; ul &gt; li &gt; li | wcag:1.3.1 | Na paginação, cada número de página é um &lt;li&gt; aninhado diretamente em outro &lt;li&gt; \(ul &gt; li &gt; li &gt; a\): a estrutura de lista é inválida. |
| nav.br-pagination.small a.page.active | wcag:1.3.1 | A página atual só é indicada pela classe 'active'. O link não tem aria-current=&quot;page&quot; e só tem o texto '1' ou '2', sem contexto. |
| #page | incerta | Depois de ir à página 2 \(informação '11–14 de 14 itens', link '2' ativo\), o seletor 'Página' \(#page\) continua com o valor '1'. |
| nav.br-pagination.small | incerta | A paginação só tem o botão 'Página seguinte'; mesmo na página 2 não há botão 'Página anterior' \(nem primeira/última\). |
| #total | wcag:4.1.2 | Com a lista do seletor 'Exibir' aberta \(div.br-list com atributo expanded\), o input #total não tem role=combobox, aria-expanded nem aria-controls: o estado aberto e a relação com a lista não são expostos. |
| iframe | wcag:4.1.2 | No fim da página há um iframe vazio \(src vazio, 1160×500 px, focável pelo Tab\) sem atributo title. |
| #avatar-menu | wcag:1.3.1 | O menu do usuário tem role=&quot;menu&quot;, mas nenhum filho com role menuitem: o único controle é um &lt;button&gt; 'Sair' comum, e 'Trocar unidade' é um span. |
| #avatar-menu img | wcag:1.1.1 | O ícone &lt;img src=&quot;../../../assets/images/exit-icon.png&quot;&gt; do botão 'Sair' não tem atributo alt. |
| #avatar-menu span.text-blue-vivid-60 | wcag:2.1.1 | 'Trocar unidade' é um span com cursor:pointer que navega ao ser clicado \(leva a /portal-mpa/selecionar-unidade\), mas não é focável \(tabIndex=-1, sem role\). |
| .swal2-popup | wcag:4.1.2 | O diálogo de confirmação 'Tem certeza que deseja desassociar...' \(SweetAlert2, role=dialog\) usa aria-labelledby=&quot;swal2-title&quot;, mas o h2#swal2-title está vazio e com display:none: o diálogo não tem nome acessível. |
| .swal2-popup | wcag:4.1.2 | O diálogo de assinatura \(pré-visualização do PDF com 'Solicitar Revisão' e 'Assinar com gov.br'\) usa aria-labelledby=&quot;swal2-title&quot; apontando para um h2 vazio e oculto: o diálogo não tem nome acessível. |
| .swal2-close | wcag:3.1.2 | No diálogo de assinatura, o botão de fechar tem aria-label=&quot;Close this dialog&quot;, em inglês, numa página com lang=pt-br, sem lang no elemento. |
| .swal2-html-container object | wcag:1.1.1 | O documento PDF exibido no diálogo de assinatura é um &lt;object type=&quot;application/pdf&quot;&gt; sem title, sem aria-label e sem conteúdo alternativo \(innerHTML vazio\). |
| .swal2-close | wcag:1.4.11 | Ao receber foco pelo teclado, o botão de fechar do diálogo mostra só um box-shadow inset rgba\(100,150,200,0.5\) de 3px \(outline:none\). Sobre o fundo branco isso dá \~rgb\(178,203,228\), contraste de \~1,7:1. |
| td br-button\[title^=&quot;Desassociar&quot;\]:not\(\[disabled\]\), td br-button\[title=&quot;Assinar… | wcag:2.4.3 | Abrindo o diálogo 'Desassociar' ou 'Assinar' pelo teclado \(Enter\) e fechando com Esc, o foco vai para o body em vez de voltar ao botão que abriu o diálogo. |
| div.mt-5.text-center &gt; p | wcag:4.1.3 | Depois da busca, a mensagem 'Não há processos para exibir.' aparece num &lt;p&gt; fora de qualquer região viva \(sem role=status, alert ou aria-live\): a mudança não é anunciada. |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `14b6d784859536c9d80838c916bea13268db3ca9784605dfd1cd53856b01495e`

