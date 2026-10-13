// Sensibilidade da t7-tela-b-01: credita, por braço, as specs que os revisores nomearam como
// "unidade que cabe, não oferecida" em cartões do agente decididos defeito-novo-correto.
const fs = require('fs'), path = require('path');
const base = process.argv[2];
const walk = (o, f) => { if (o && typeof o === 'object') { if (o.unitId && o.specId) f(o); for (const k in o) walk(o[k], f); } };
const out = [];
for (const par of fs.readdirSync(base).filter(d => /^p\d\d$/.test(d)).sort()) {
  const revs = fs.readdirSync(path.join(base, par, 'revisoes')).filter(d => /^rev-\d+$/.test(d)).sort();
  const rev = path.join(base, par, 'revisoes', revs[revs.length - 1]);
  const spec = {}; walk(JSON.parse(fs.readFileSync(path.join(rev, 'summary.json'))), u => spec[u.unitId] = u.specId);
  const pk = JSON.parse(fs.readFileSync(path.join(rev, 'revisao', 'package.json')));
  const runs = pk.runs.filter(r => r.kind === 'agente');
  const sc = JSON.parse(fs.readFileSync(path.join(rev, 'score.json')));
  const dfile = fs.readdirSync(path.join(base, par, 'decisoes')).sort().pop();
  const dec = JSON.parse(fs.readFileSync(path.join(base, par, 'decisoes', dfile))).decisions;
  const byCard = Object.fromEntries(dec.map(d => [d.cardId, d]));
  const res = { par };
  for (const r of runs) {
    const arm = /-com-/.test(r.id) ? 'com' : 'sem';
    const s = sc.scores.find(x => x.runId === r.id);
    const conf = new Set(s.matched.map(m => spec[m.unitId]).filter(Boolean));
    const cards = new Set(s.assertions.map(a => a.cardId));
    const named = {};
    for (const c of cards) {
      const d = byCard[c]; if (!d) continue;
      if (!d.atoms.some(a => a.decisao === 'defeito-novo-correto')) continue;
      const t = d.rationale || '';
      // só a menção ligada a "oferecid"/"cabe"/"veredito real"
      const OK = new Set(['01','02','04','05','06','07','08','26']);
      for (const m of t.matchAll(/B-(\d\d)/g)) {
        if (!OK.has(m[1])) continue;
        const win = t.slice(Math.max(0, m.index - 140), m.index + 140);
        if (/oferecid|ofertad|candidat|cabe |veredito real|corresponde/i.test(win) && !/não se aplica|outro elemento|outro diálogo|não é a B-|exclui/i.test(win))
          (named['B-' + m[1]] ||= []).push(c.slice(2, 10));
      }
    }
    const extra = Object.keys(named).filter(k => !conf.has(k)).sort();
    res[arm] = { conf: conf.size, extra, named };
  }
  res.D = res.com.conf - res.sem.conf;
  res.Dsens = (res.com.conf + res.com.extra.length) - (res.sem.conf + res.sem.extra.length);
  out.push(res);
}
for (const r of out) console.log(r.par, 'D', r.D, '→', r.Dsens, '| sem +', r.sem.extra.join(','), '| com +', r.com.extra.join(','));
const Ds = out.map(r => r.Dsens), mean = Ds.reduce((a, b) => a + b, 0) / Ds.length;
const sorted = [...Ds].sort((a, b) => a - b);
console.log('média', mean.toFixed(2), 'mediana', ((sorted[4] + sorted[5]) / 2).toFixed(2), 'com>sem', Ds.filter(x => x > 0).length, 'sem>com', Ds.filter(x => x < 0).length);
if (process.argv[3]) for (const r of out) console.log(r.par, JSON.stringify({ sem: r.sem.named, com: r.com.named }));
