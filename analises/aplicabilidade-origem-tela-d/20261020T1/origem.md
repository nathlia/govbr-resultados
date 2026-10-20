# Origem medida (D-129) — sujeitos declarados (aplicabilidade)

> **sujeitos declarados à mão (prova de aplicabilidade): não são cartões, não entram em recálculo**

Método nat78-origem-medida-1.0.0, sem modelo. Medidos 7 cartão(ões) (ds-entregue 3, pagina 3, pagina-copiando-exemplo-ds 1); pulados 0 (sem violação). Bytes: site 2e99f4109fc9…; pacotes @govbr-ds/core@3.4.1, @govbr-ds/webcomponents@1.16.0.

| cartão | regra citada | origem | regra | por quê | classe antes → depois |
|---|---|---|---|---|---|
| S-D-01 | — | **ds-entregue** | sujeitos | todos os 1 sujeito(s): ds-entregue | — |
| S-D-02 | — | **ds-entregue** | sujeitos | todos os 1 sujeito(s): ds-entregue | — |
| S-D-03 | — | **pagina** | sujeitos | todos os 1 sujeito(s): pagina | — |
| S-D-04 | — | **pagina** | sujeitos | todos os 1 sujeito(s): pagina | — |
| S-D-05 | — | **pagina** | sujeitos | todos os 1 sujeito(s): pagina | — |
| S-D-06 | — | **pagina-copiando-exemplo-ds** | sujeitos | todos os 1 sujeito(s): pagina-copiando-exemplo-ds | — |
| S-D-07 | ds:token-color | **ds-entregue** | sujeitos | todos os 1 sujeito(s): ds-entregue | — |

## Por sujeito

### S-D-01 — ds-entregue

Traços: aria-label.

- `body>pnip-root>pnip-header>br-header >>> header` @ 1280x900@inicial (inicial): **ds-entregue** (R1) — interior de shadow root aberto por código do DS
  - criação: createElement, ds — script do DS em execução (@govbr-ds/webcomponents@1.16.0, região UMD "webcomponents" umd) · /pnip-d/scripts.fc2a7d38df25b0e7.js:1:198747 (createElement)
  - nome calculado (árvore de acessibilidade): ""
  - shadow root de <br-header> (open): ds — script do DS em execução (@govbr-ds/webcomponents@1.16.0, região UMD "webcomponents" umd)
  - aria-label = null: ds — ausente, sem escrita: de quem controla o elemento (R3) · /pnip-d/scripts.fc2a7d38df25b0e7.js:1:198747

### S-D-02 — ds-entregue

Traços: aria-label.

- `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>br-breadcrumb >>> div` @ 1280x900@inicial (inicial): **ds-entregue** (R1) — interior de shadow root aberto por código do DS
  - criação: createElement, ds — script do DS em execução (@govbr-ds/webcomponents@1.16.0, região UMD "webcomponents" umd) · /pnip-d/scripts.fc2a7d38df25b0e7.js:1:198747 (createElement)
  - nome calculado (árvore de acessibilidade): ""
  - shadow root de <br-breadcrumb> (open): ds — script do DS em execução (@govbr-ds/webcomponents@1.16.0, região UMD "webcomponents" umd)
  - aria-label = null: ds — o DS escreveu o valor final · /pnip-d/scripts.fc2a7d38df25b0e7.js:1:209220

### S-D-03 — pagina

Traços: aria-level.

- `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(1)>div:nth-of-type(1)>h2` @ 1280x900@inicial (inicial): **pagina** (R3) — a página escreve aria-level; sem componente do DS na cadeia (exemplo não se aplica)
  - criação: createElement, pagina — script da aplicação (fora das regiões do DS) · /pnip-d/main.1f20d928d4f24c93.js:1:1034249 (pe.createElement)
  - aria-level = null: pagina — ausente, sem escrita: de quem controla o elemento (R3) · /pnip-d/main.1f20d928d4f24c93.js:1:1034249

### S-D-04 — pagina

Traços: aria-label, role.

- `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>br-tab` @ 1280x900@inicial (inicial): **pagina** (R3) — a página escreve aria-label, role; sem componente do DS na cadeia (exemplo não se aplica)
  - criação: createElement, pagina — script da aplicação (fora das regiões do DS) · /pnip-d/main.1f20d928d4f24c93.js:1:1034249 (pe.createElement)
  - aria-label = null: pagina — ausente, sem escrita: de quem controla o elemento (R3) · /pnip-d/main.1f20d928d4f24c93.js:1:1034249
  - role = null: pagina — ausente, sem escrita: de quem controla o elemento (R3) · /pnip-d/main.1f20d928d4f24c93.js:1:1034249

### S-D-05 — pagina

Traços: title.

- `head>title` @ 1280x900@inicial (inicial): **pagina** (R3) — a página escreve title; sem componente do DS na cadeia (exemplo não se aplica)
  - criação: html-estatico, pagina — sem registro de criação: HTML estático do documento (parser)
  - title = null: pagina — ausente, sem escrita: de quem controla o elemento (R3)

### S-D-06 — pagina-copiando-exemplo-ds

Traços: role, tabindex.

- `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>govbr-custom-pagination>div>div:nth-of-type(3)>nav>div:nth-of-type(1)>br-select-pnip>div>div:nth-of-type(2)>div:nth-of-type(1)` @ 1280x900@lista-exibir (lista-exibir): **pagina-copiando-exemplo-ds** (R2) — a página escreve role, tabindex; o exemplo oficial select (3.4.1) tem o mesmo padrão
  - criação: createElement, pagina — script da aplicação (fora das regiões do DS) · /pnip-d/main.1f20d928d4f24c93.js:1:1034249 (Ye.createElement)
  - role = null: pagina — ausente, sem escrita: de quem controla o elemento (R3) · /pnip-d/main.1f20d928d4f24c93.js:1:1034249
  - tabindex = "-1": pagina — a página escreveu o valor final (R2) · /pnip-d/main.1f20d928d4f24c93.js:1:1034914
  - exemplo oficial @govbr-ds/core@3.4.1/dist/components/select/examples.html (sha256 a342d54cc47e…): 2 elemento(s) de mesma assinatura; mesmo padrão: sim

### S-D-07 — ds-entregue

Traços: css color.

- `body>pnip-root>main>pnip-mpa>pnip-mpa-processos>div>div:nth-of-type(1)>div:nth-of-type(1)>h2` @ 1280x900@inicial (inicial): **ds-entregue** (R1) — o DS escreve color
  - criação: createElement, pagina — script da aplicação (fora das regiões do DS) · /pnip-d/main.1f20d928d4f24c93.js:1:1034249 (pe.createElement)
  - color = "rgb(0, 94, 162)": ds — declaração da folha do DS (@govbr-ds/core@3.4.1) que a página não sobrescreve; --blue-vivid-60: ds (declaração da folha do DS (@govbr-ds/core@3.4.1) que a página não sobrescreve · :root) · `.text-blue-vivid-60` {color: var(--blue-vivid-60) !important} em /pnip-d/styles.0756bc3ea9d8bc23.css
