# Resumo da análise — Processos (processos-f3)

Revisão 1 · gerado em 2026-11-27T07:16:43.307Z (UTC)

## 1. Status técnico

Análise: **pronta**

| Execução | Braço | O que aconteceu | Etapa / motivo | Submissão | Pontuação |
|---|---|---|---|---|---|
| 20261127-065713-processos-f3-ferramentas-298d | ferramentas | rodou até o fim e o relatório foi aceito | — | aceita | aguardando revisão — 33 cartão(ões), nenhum decidido |

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
| Início (UTC) | 2026-11-27T06:57:43Z |
| Início (local) | 27/11/2026, 03:57:43 (horário de Brasília) |
| Commit do harness | cce6dd825ae84448f49a8a01267ac05a70d6325b |
| Repetição · tentativa | 1 · 1 |
| Campanha · slot · par | portao-ferramentas-f3-01 · s03 · p03 |

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
| Cartões pendentes de revisão | 33 |
| Maturidade | aguardando revisão — 33 cartão(ões), nenhum decidido |
| Entra na comparação principal | sim |
| Achados enviados | 33 |

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
| Ferramentas usadas | browser\_navigate, browser\_evaluate, browser\_snapshot, scan\_page, get\_finding\_details, browser\_press\_key, browser\_click, browser\_wait\_for, browser\_navigate\_back, browser\_take\_screenshot, browser\_console\_messages, browser\_type, verify\_finding |
| Erros de ferramenta | 3 (tool-events.ndjson \(eventos com isError: true\)) |
| Checks negativos | 47 aprovado(s); falhos: nenhum; não exercitados: texto-da-tarefa-entregue |
| Controles positivos | 10 aprovado(s); falhos: nenhum |
| Limitações declaradas | agente \(registro de inspeção\): 8 — tool-failure 1, other 4, unreachable 1, budget 1, out-of-scope 1 |
| Registro de inspeção | registro parcial pelo agente: 8 de 11 região\(ões\) que ele mesmo descobriu inspecionadas; 21 estado\(s\) \(19 confirmado\(s\) por ele, 19 com evento de ferramenta\); 47 candidato\(s\); 8 limitação\(ões\). Cobertura da página: desconhecida. |
| Auditoria do registro (processo, não pontua) | registro registrado; 160 candidato\(s\) de ferramenta recebido\(s\) — aceitos 49, rejeitados 3, incertos 5, não examinados 103; auditoria: regiao-nao-percorrida 3, reproducao-nao-comprovada 2, candidato-sem-destino 103 · parcial \(registro-parcial, limitacao:tool-failure, limitacao:budget; 103 conhecido\(s\) não revisado\(s\)\). Relatório de processo: não pontua nem exclui. |

O registro de inspeção é declaração do agente sobre o inventário que ele mesmo descobriu; “com evento de ferramenta” só diz que o identificador citado aparece num evento gravado. Não pontua nem decide elegibilidade, e a cobertura da página continua desconhecida.

Contagem de chamadas não prova causa: o resumo mostra uso e resultado lado a lado, sem atribuir efeito.

## 5. Custo e tempo

| | ferramentas |
|---|---|
| Tempo de relógio (s) | 907 (runner) |
| Turnos | 103 (stream-json do cliente \(result.num\_turns\)) |
| Chamadas de ferramenta | 102 (ponte MCP) |
| Chamadas ao oráculo | 24 (ponte MCP do oráculo) |
| Tokens de entrada | 126 (stream-json do cliente \(result.usage\)) |
| Tokens de saída | 72619 (stream-json do cliente \(result.usage\)) |
| Tokens lidos do cache | 8688887 (stream-json do cliente \(result.usage\)) |
| Tokens gravados no cache | 287157 (stream-json do cliente \(result.usage\)) |
| Custo estimado (US$, preço de referência) | 5.4879174 (estimativa do cliente \(result.total\_cost\_usd\)) |
| Cobrança efetiva (US$) | desconhecido |

“Desconhecido” é o que o cliente/runner não mediu — nunca vira 0. Estimativa a preço de referência não é fatura.

Custo de revisão (separado do custo de executar): 33 cartão(ões), estimativa 198 min — 3 min/cartão +3 sem evidência — DECLARADA, não medida: nenhuma sessão de revisão foi cronometrada até aqui.

## 6. Detalhes e evidências

**ferramentas** (20261127-065713-processos-f3-ferramentas-298d): [pacote](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d) · [run.json](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/run.json) · [findings.json](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/findings.json) · [isolation.json](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/isolation.json) · [eventos de ferramenta](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/tool-events.ndjson) · — · evidências: [#1](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/evidence/aderencia-oraculo.json) [#2](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/evidence/cliente.json) [#3](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/evidence/container-config.json) [#4](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/evidence/controles-positivos.json) [#5](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/evidence/mcp-config.json) [#6](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/evidence/preflight.json) [#7](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/evidence/prompt.txt) [#8](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/evidence/raw/agent/claude-stream.ndjson) [#9](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/evidence/raw/browser/inventory.json) [#10](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/evidence/raw/browser/tool-events.ndjson) [#11](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/evidence/raw/collector/accepted-raw.txt) [#12](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/evidence/raw/collector/events.ndjson) [#13](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/evidence/raw/collector/findings.json) [#14](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/evidence/raw/collector/refused/001.json) [#15](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/evidence/raw/egress-provider/egress.ndjson) [#16](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/evidence/raw/egress-site/egress.ndjson) [#17](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/evidence/raw/oracle/inventory.json) [#18](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/evidence/raw/oracle/oracle-telemetry.ndjson) [#19](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/evidence/raw/oracle/tool-events.ndjson) [#20](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/evidence/raw/probe/probe.json) [#21](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/evidence/raw/probe/sonda-escrita-1795762663557.txt) [#22](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/evidence/raw/task/mcp.json) [#23](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/evidence/raw/task/prompt.txt) [#24](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/evidence/uso.json) [#25](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/evidence/vazamento-conhecimento.json) · logs: [#1](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/evidence/logs/agent.log) [#2](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/evidence/logs/browser.log) [#3](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/evidence/logs/collector.log) [#4](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/evidence/logs/egress-provider.log) [#5](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/evidence/logs/egress-site.log) [#6](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/evidence/logs/oracle.log) [#7](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/evidence/logs/probe.log) [#8](../../../../restauracoes/20261127-065713-processos-f3-ferramentas-298d/2026-11-27T06-57-13Z__processos-f3__opus__ferramentas__rep-01__20261127-065713-processos-f3-ferramentas-298d/evidence/logs/screens.log) · [binding](analysis-binding.ferramentas.json)

Achados enviados (33; texto do agente, escapado — dado não confiável):

| Seletor | Regra | Observado |
|---|---|---|
| pnip-status-solicitacao-utils .bg-orange-vivid-40 &gt; .text-secondary-01 | wcag:1.4.3 | Etiquetas de status \(Em análise analista/supervisor/diretor\) com texto branco #ffffff sobre #e66f0e, 14px normal: contraste 3,16:1 |
| pnip-status-solicitacao-utils .bg-indigo-vivid-40 &gt; .text-secondary-01 | wcag:1.4.3 | Etiqueta &quot;Aguarda complementos&quot;: texto branco sobre #8289ff, 14px normal: contraste 3,01:1 |
| pnip-status-solicitacao-utils .bg-secondary-06 &gt; .text-secondary-01 | wcag:1.4.3 | Etiquetas &quot;Aguardando plano de ação&quot; e &quot;Aguardando SFPA&quot;: texto branco sobre #888888, 14px normal: contraste 3,54:1 |
| .br-avatar .bg-orange-vivid-30 | wcag-1.4.3 | Inicial &quot;U&quot; do avatar: texto branco #ffffff sobre #ff8c00, 24,19px bold \(texto grande\): contraste 2,33:1 |
| table input\[type=&quot;checkbox&quot;\] | wcag:4.1.2 | 7 caixas de seleção da tabela \(1 no cabeçalho, 6 nas linhas\) sem label, aria-label nem aria-labelledby; nome acessível vazio |
| thead th:last-child | wcag:1.3.1 | Cabeçalho da coluna de ações \(Ver processo/Desassociar/Assinar\) é um th vazio |
| iframe | wcag:4.1.2 | iframe \(about:blank, 1160x500px\) sem title, aria-label ou aria-labelledby |
| nav.br-pagination li &gt; li | wcag:1.3.1 | Na paginação, o li do número de página está aninhado diretamente em outro li \(li &gt; li\), sem ul/ol pai |
| main h2 | emag:1.3 | O título principal &quot;Processos&quot; é h2; a página não tem nenhum h1 |
| br-tab | wcag:2.5.3 | Botões das abas \(no shadow root de br-tab\) têm aria-label com identificadores técnicos &quot;AGUARDANDO\_ANALISE&quot;, &quot;TRAMITANDO&quot;, &quot;HISTORICO&quot;, enquanto o texto visível é &quot;Aguardando análise&quot;, &quot;Tramitando&quot;, &quot;Concluídos&quot; |
| br-tab | wcag:4.1.2 | A aba ativa é indicada só pela classe CSS li.tab-item.active; os botões das abas não têm role=&quot;tab&quot;, aria-selected nem aria-current |
| #avatar-dropdown-trigger | wcag:2.5.3 | Botão do usuário com aria-label=&quot;Avatar com dropdown&quot;; o texto visível é &quot;Olá, Usuária de Teste, SUPERVISOR&quot; |
| span.br-tag.interaction | wcag:2.1.1 | Filtros &quot;Meus processos&quot;, &quot;Aberto há&quot;, &quot;Tipo de processo&quot;, &quot;Status&quot;, &quot;Espécie alvo&quot;, &quot;Método de pesca&quot; e &quot;Petrecho&quot; são span com cursor:pointer e clique, sem tabindex nem role; tabIndex -1 e ignorados na navegação por T… |
| tbody a\[role=&quot;button&quot;\] | wcag:2.1.1 | Números de processo são a\[role=button\] sem href nem tabindex; focus\(\) não os foca e a navegação por Tab os ignora |
| br-header | wcag:1.1.1 | Logotipo do cabeçalho \(img no shadow root de br-header\) com alt=&quot;logo&quot; |
| span.br-tag &gt; i:not\(\[aria-hidden\]\), span.br-tag &gt; span.fas, div.mb-2 &gt; i.fa-clo… | wcag:1.1.1 | 13 ícones decorativos \(ícones e setas dos filtros, relógio de &quot;Última atualização&quot;\) sem aria-hidden; aparecem na árvore de acessibilidade como caracteres de uso privado |
| title | wcag:2.4.2 | Título da página é apenas &quot;PNIP&quot; |
| br-header | emag:1.5 | Não há link de salto para o conteúdo: o primeiro Tab vai para o botão Menu do cabeçalho |
| br-breadcrumb | incerta | Link &quot;Home&quot; da trilha aponta para /portal-mpa/ \(fetch: HTTP 404\) e o item &quot;Processos&quot; usa href relativo &quot;portal-mpa/processos&quot; \(resolve para /pnip-f3/portal-mpa/portal-mpa/processos\) |
| #avatar-menu | wcag:4.1.2 | Menu do usuário aberto tem role=&quot;menu&quot;, mas os filhos não são menuitem \(div, span e button &quot;Sair&quot;\) |
| #avatar-menu img | wcag:1.1.1 | Imagem exit-icon.png do botão &quot;Sair&quot; sem atributo alt |
| #avatar-menu span.text-blue-vivid-60 | wcag:2.1.1 | &quot;Trocar unidade&quot; é span com cursor:pointer, sem tabindex nem role \(tabIndex -1\) |
| .br-list.d-block .br-item | wcag:2.1.1 | Opções do filtro Status aberto: div.br-item &gt; div.br-radio &gt; label sem input, sem tabindex nem role; lista rolável sem foco |
| .swal2-popup | wcag:4.1.2 | Diálogo de &quot;Assinar&quot; \(role=dialog, aria-modal\) com aria-labelledby=&quot;swal2-title&quot;, que está oculto e vazio: sem nome acessível |
| .swal2-close | wcag:3.1.2 | Botão fechar do diálogo de assinatura tem aria-label em inglês &quot;Close this dialog&quot; numa página lang=&quot;pt-br&quot;, sem lang próprio |
| .swal2-html-container object | wcag:1.1.1 | Pré-visualização do PDF \(object type=application/pdf\) sem title, aria-label nem conteúdo alternativo |
| .swal2-popup | wcag:4.1.2 | Diálogo de confirmação &quot;Desassociar&quot; \(role=dialog\) com aria-labelledby apontando para swal2-title oculto e vazio: sem nome acessível |
| a\[role=&quot;button&quot;\] | wcag:4.1.2 | No detalhe de Alteração de Certificado \(00000.000010/2026-00\), a célula Protocolo tem a\[role=button\] vazio, sem nome acessível |
| tbody br-icon-base\[icon-name^=&quot;file&quot;\] | wcag:2.1.1 | Ícones clicáveis de Ofício e Certificado \(cursor:pointer\) no detalhe de Alteração de Certificado sem role, nome nem foco \(tabIndex -1\) |
| a\[role=&quot;button&quot;\] | wcag:4.1.2 | No detalhe de CAOL, a\[role=button\] vazio na tabela de resumo, sem nome acessível |
| a\[role=&quot;button&quot;\] | wcag:4.1.2 | No detalhe de Habilitação para mercados específicos \(uniao-europeia, Deferida\), a\[role=button\] vazio, sem nome acessível |
| td:nth-child\(6\) &gt; br-button | wcag:4.1.2 | No detalhe de Desvínculo \(Cancelada\), botão da coluna Ofício TR \(shadow de br-button\) com aria-label=&quot;&quot; e sem texto: sem nome acessível |
| a\[role=&quot;button&quot;\] | wcag:4.1.2 | No detalhe de Alteração de Certificado \(00000.000028/2026-00, Em análise diretor\), a\[role=button\] vazio na célula Protocolo, sem nome acessível |

Análise: [revisão (cega)](revisao/review.md) · [decisões](revisao/reviews.json) · [score.json](score.json) · [pacote de revisão](revisao/package.json) · [entradas](entradas)

## Como revisar e recalcular

1. Abra `revisao/review.md` (renderização cega) e decida cada cartão em `revisao/reviews.json` (vocabulário em `docs/semantic-scoring.md`).
2. Rode a análise de novo com `--decisoes <reviews.json> --anterior <esta pasta> --saida <pasta nova>`: sai uma revisão nova ligada a esta; o pacote bruto não muda.
3. A pontuação só é final quando a fila ativa zera.

Hash do conteúdo científico: `eb242193f1c4495f47fc782e70fe38705955f67b45d97d3ad46aa5fd591d9d2d`

