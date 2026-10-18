# nat74-retrospectiva-1.2.0

**Retrospectiva · exploratória · mudança de medida.** Derivado da NAT-74. Não substitui o resultado oficial
(`govbr-resultados/RESULTADOS.md`; D-97, D-111, D-112). Versão nova = pasta irmã, nunca sobrescrita; a 1.0.0 fica como está.

Estado (variante principal): A Opus: PROVISORIO · A Sonnet: FINAL-DERIVADO · B: PROVISORIO. FINAL-DERIVADO = pontuação completa da variante, não validação humana nem de especialista.

**Reanálise histórica limitada**: a evidência principal é a avaliação nova.

- Fila T3 = **primeira passada cega** (juízes LLM, um por lote; `govbr-resultados/derivados/nat74-retrospectiva/1.0.0/fila-t3/julgamentos-1a-passada.json` sha256 `9689c773b861…`) + **adjudicação informada** (115 respostas sobrescritas; classe mudou em 49, crédito em 6; `govbr-resultados/derivados/nat74-retrospectiva/1.0.0/fila-t3/desempate/sobrescritas.json` sha256 `c66dceaba87e…`) → `govbr-resultados/derivados/nat74-retrospectiva/1.0.0/fila-t3/julgamentos.json` sha256 `514b4a44456c…`.
- Segunda leitura lote-d05: não resolvida (leituras plausíveis incompatíveis): os membros ficam incerta (evidência indisponível); sensibilidade: creditam 21/21 se a regra se aplica, 0/21 se não se aplica.
- Materiais (P5 a; unidade na tela A, spec na B): 136 átomos decidem crédito não confirmado de outro jeito; **10 selecionados para a autora, ainda NÃO revistos por ela**; 126 "julgado só por LLM" (`govbr-resultados/derivados/nat74-retrospectiva/1.0.0/fila-t3/materiais.json` sha256 `6b83bf6f9182…`).
- **FINAL-DERIVADO** quer dizer só que a pontuação daquela variante está completa (nenhum pendente nos braços). Não é validação humana nem de especialista: os vereditos novos são sobretudo de LLM.

- Plano: `thesis-workspace/planejamento/atual/plano-nat74-reanalise-2026-10-16.md` (E14 = fila T3).
- Política: `politica-normativa-1.2.0` (sha256 em `entradas/ferramenta.json`), 1.1.0 ao lado (S1).
- Entradas fixadas (E0): arquivo original em `b69857f` (fora de derivados/, idêntico), derivado 1.0.0 em `da42f24` (pacotes flow-semantic-1.7.0 reutilizados, não repreparados), julgamentos e medidas da T2 por sha256 (`entradas/ferramenta.json`).
- Julgamentos da fila T3 (LLM cego por lote, D-130): `govbr-resultados/derivados/nat74-retrospectiva/1.0.0/fila-t3/julgamentos.json` (285/285, completo).
- Medidas da T2 (`medidas/t2/medidas-t2.json`): R2-nome · chipData · violacao-pagina (16); R2-nome · chipFiltro · violacao-pagina (17); R2-nome · chipFiltro+chipData · violacao-pagina (3); R2-nome · selectAtribuir · violacao-pagina (19); R2-nome · sem decisão: R2 restrita à alegação de nome ausente; esta alega papel/estado (6); R4-token · buscarMargem · violacao-pagina (13); R4-token · limparMargem · violacao-pagina (14); R4-token · sairRaio · evidencia-indisponivel (20); R4-token · sairRaio · violacao-pagina (12).
- D: pontual (com IC e p) quando não há pendente; senão **envoltória conservadora** por par (união das candidatas admissíveis, não os extremos exatos atingíveis). Os antigos "limite inferior/superior" da 1.0.0 eram cenários e saem com esse nome.

## Errata da política (P17)

O texto 1.2.0 foi congelado como está. Dois deslizes: o §5 ainda diz "aplicar a v1.1"; o exemplo da R15 lista R-04 como
B-02, mas R-04 é a B-26 (`empty-table-header`). Corrigir o texto = 1.2.1 e o derivado roda de novo.

## Desvios desta versão

- E3 não reprepara: os 30 pacotes 1.7.0 são os da 1.0.0 (sha256 em `verificacao/hashes-antes.json`).
- `trilha-atomos.json` traz só a variante principal; o CSV traz as sete.
- O bloco do painel sai em `painel-bloco.json` (o gerador do painel não foi editado nesta etapa).
