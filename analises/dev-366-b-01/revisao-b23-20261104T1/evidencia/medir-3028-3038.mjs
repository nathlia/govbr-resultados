/**
 * Medição SEM MODELO na página congelada da tela B (Vistorias), para a regra "template × registro" (D-165): registros de
 * detalhe 3028 (o que a receita "olho da linha 1" alcança) e 3038 (parada `detalhe` da referência), e 3046 (parada
 * `detalhe-menu`, só como domínio declarado de B-21). Para cada registro: rota alcançada, elementos que casam os seletores
 * da referência (B-23, B-21) e os seletores citados pelos cartões, texto, cores computadas, fundo efetivo, contraste, fonte.
 * Serve o dist/ congelado pelas regras da superfície (govbr-eval/tela-b/vistorias/comum.mjs › servir, com o manifesto
 * pnip/ conferido) e usa Playwright headless. Uso (de qualquer pasta):
 *   node medir-3028-3038.mjs <saida.json>
 */
import { writeFileSync } from "node:fs";
const C = await import("file:///F:/Dev%20Nath/TCC/govbr-eval/tela-b/vistorias/comum.mjs");
const manifesto = C.exigirManifesto();
const REF = JSON.parse((await import("node:fs")).readFileSync("F:/Dev Nath/TCC/govbr-eval/ground-truth-vistorias.json", "utf8"));
const spec = id => REF.violations.find(v => v.id === id);
const SELETORES = {
  "B-23 (referência)": spec("B-23").anchor,
  "B-21 (referência)": spec("B-21").anchor,
  "seletor citado por cartão (a)": "pnip-propesc-agendar-vistoria .text-secondary-01",
  "seletor citado por cartão (b)": ".bg-secondary-06 > .text-secondary-01.text-center",
  "h1/h2 em todo o documento (light DOM)": "h1, h2",
  "títulos do detalhe (h1–h6)": "pnip-propesc-agendar-vistoria h1, pnip-propesc-agendar-vistoria h2, pnip-propesc-agendar-vistoria h3, pnip-propesc-agendar-vistoria h4, pnip-propesc-agendar-vistoria h5, pnip-propesc-agendar-vistoria h6",
};
const ESTADOS = REF._meta.states;
const OLHO_LINHA_1 = "pnip-propesc-vistorias tbody tr:nth-child(1) br-button[icon=eye] button";
const ROTEIROS = [
  { registro: "3028", como: "receita dos cartões: carga da entrada + clique no olho da 1ª linha (aba padrão)", passos: [{ action: "navigate", selector: OLHO_LINHA_1, waitFor: "pnip-propesc-agendar-vistoria" }] },
  { registro: "3038", como: "parada `detalhe` da referência: carga da entrada + navigate ao path da parada (pushState, sem recarga)", passos: [{ action: "navigate", path: ESTADOS.find(s => s.id === "detalhe").path, waitFor: "br-button[label=\"Trocar embarcação da vistoria\"]" }] },
  { registro: "3046", como: "parada `detalhe-menu` da referência (sem abrir o menu): carga da entrada + navigate ao path (domínio declarado de B-21)", passos: [{ action: "navigate", path: ESTADOS.find(s => s.id === "detalhe-menu").path, waitFor: "pnip-propesc-detalhes-vistoria" }] },
];
const { servidor, base } = await C.servir();
const nav = await C.abrirNavegador();
const registros = [];
try {
  for (const r of ROTEIROS) {
    const { contexto, pagina, externos, escritas, erros } = await C.novaPagina(nav);
    await C.carregar(pagina, base);
    await C.executarPassos(pagina, r.passos);
    const path = await pagina.evaluate(() => location.pathname);
    const medidas = await pagina.evaluate(({ SELETORES, PRELUDIO }) => {
      // eslint-disable-next-line no-new-func
      const P = new Function(PRELUDIO + "; return { chave, visivel };")();
      const rgba = s => { const m = /rgba?\(([^)]+)\)/.exec(s); if (!m) return null; const v = m[1].split(/[ ,/]+/).filter(Boolean).map(Number); return { r: v[0], g: v[1], b: v[2], a: v.length > 3 ? v[3] : 1 }; };
      const comp = (f, b) => ({ r: f.r * f.a + b.r * (1 - f.a), g: f.g * f.a + b.g * (1 - f.a), b: f.b * f.a + b.b * (1 - f.a), a: 1 });
      const fundo = el => { const pilha = []; for (let e = el; e; e = e.parentElement || (e.getRootNode().host ?? null)) { const c = rgba(getComputedStyle(e).backgroundColor); if (c && c.a > 0) pilha.push({ c, de: e.tagName.toLowerCase() + (e.className && typeof e.className === "string" ? "." + e.className.trim().split(/\s+/).join(".") : "") }); if (c && c.a === 1) break; }
        let b = { r: 255, g: 255, b: 255, a: 1 }; for (const x of pilha.reverse()) b = comp(x.c, b); return { cor: b, camadas: pilha.reverse().map(x => x.de) }; };
      const lum = c => { const f = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b); };
      const hex = c => "#" + [c.r, c.g, c.b].map(v => Math.round(v).toString(16).padStart(2, "0")).join("");
      const out = {};
      for (const [nome, sel] of Object.entries(SELETORES)) {
        out[nome] = { seletor: sel, elementos: [...document.querySelectorAll(sel)].map(el => {
          const cs = getComputedStyle(el), fg0 = rgba(cs.color), bg = fundo(el), fg = fg0.a < 1 ? comp(fg0, bg.cor) : fg0;
          const L1 = lum(fg), L2 = lum(bg.cor), cr = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
          const rect = el.getBoundingClientRect();
          return { chave: P.chave(el), tag: el.tagName.toLowerCase(), classes: typeof el.className === "string" ? el.className : null, texto: (el.textContent || "").replace(/\s+/g, " ").trim(),
            visivel: P.visivel(el), retangulo: { x: Math.round(rect.x), y: Math.round(rect.y), w: Math.round(rect.width), h: Math.round(rect.height) },
            cor: cs.color, corHex: hex(fg), fundoEfetivo: hex(bg.cor), fundoCamadas: bg.camadas, contraste: Math.round(cr * 100) / 100,
            fonte: { tamanho: cs.fontSize, peso: cs.fontWeight }, secao: (() => { for (let e = el.parentElement; e; e = e.parentElement) { const h = e.querySelector("h4"); if (h && !el.matches("h1,h2,h3,h4,h5,h6")) return h.textContent.replace(/\s+/g, " ").trim(); } return null; })() };
        }) };
      }
      return out;
    }, { SELETORES, PRELUDIO: C.PRELUDIO });
    registros.push({ registro: r.registro, como: r.como, passos: r.passos, path, recarregou: false, externos: externos().length, escritas: escritas().length, errosDaPagina: erros, seletores: medidas });
    await contexto.close();
  }
} finally { await nav.close(); servidor.close(); }
const doc = { formato: "d165-medicao-registros-1.0.0", aviso: "medição sem modelo na página congelada; não é julgamento", tela: "vistorias",
  referencia: { arquivo: "govbr-eval/ground-truth-vistorias.json", versao: REF._meta.version ?? null }, manifestoPnip: { sha256: manifesto.manifestoSha, arquivos: manifesto.n },
  janela: C.VIEWPORT, navegador: "chromium headless (Playwright, govbr-eval/node_modules)", contraste: "WCAG 2.x (luminância relativa), fundo efetivo = composição dos fundos não transparentes dos ancestrais sobre branco",
  registros };
writeFileSync(process.argv[2], JSON.stringify(doc, null, 2) + "\n");
for (const r of registros) { console.log(`${r.registro}: ${r.path} (externos ${r.externos}, escritas ${r.escritas}, erros ${r.errosDaPagina.length})`);
  for (const [k, v] of Object.entries(r.seletores)) console.log(`  ${k}: ${v.elementos.length} → ${v.elementos.map(e => `"${e.texto.slice(0, 40)}" ${e.corHex}/${e.fundoEfetivo} ${e.contraste}:1 ${e.fonte.tamanho}/${e.fonte.peso}${e.visivel ? "" : " (invisível)"}${e.secao ? ` [seção ${e.secao}]` : ""}`).join(" | ")}`); }
