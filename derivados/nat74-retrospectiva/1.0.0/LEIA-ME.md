# nat74-retrospectiva-1.0.0

**Retrospectiva · exploratória · mudança de medida.** Derivado da NAT-74. Não substitui o resultado oficial
(`govbr-resultados/RESULTADOS.md`; D-97, D-111, D-112). Versão nova = pasta irmã, nunca sobrescrita.

- Plano: `thesis-workspace/planejamento/atual/plano-nat74-reanalise-2026-10-16.md`.
- Política: `politica-normativa-1.2.0` (sha256 em `entradas/ferramenta.json`), 1.1.0 ao lado (S1).
- Scorer: `flow-semantic-1.7.0` para as três campanhas (P2); G0, bijeção, G1 e G2 em `verificacao/portoes.json`.
- E14 (fila T3) **não rodou**: os átomos T2/T3 estão pendentes e os rótulos de maturidade dizem quantos.

## Errata da política (P17)

O texto 1.2.0 foi congelado como está. Dois deslizes: o §5 ainda diz "aplicar a v1.1"; o exemplo da R15 lista R-04 como
B-02, mas R-04 é a B-26 (`empty-table-header`). Corrigir o texto = 1.2.1 e o derivado roda de novo.

## Desvios desta versão

- E7 não fez medidas novas: usa as medidas congeladas da NAT-73 (origem D-129 e B-16). Átomos da fila T2 (R2 nome, R4 *token*) ficam pendentes.
- `trilha-atomos.json` traz só a variante principal; o CSV traz as sete.
- O bloco do painel sai em `painel-bloco.json` (o gerador do painel não foi editado nesta etapa).
