# Sensibilidade: respostas da autora como dadas inicialmente (26/11/2026)

As respostas cegas da autora (NAT-136, NAT-137) foram conferidas com o código da página congelada antes de
gravadas, e ela aceitou seis sugestões (10 das 20 linhas mudaram, só em "defeito" e "quem escreveu").
Registro da conferência: `thesis-workspace/planejamento/atual/gabarito-julgamento-d-e-2026-11-26.md`.
O protocolo congelado não previa essa conferência; ela é declarada como desvio na Seção 4.7.3.

Esta pasta repete o recálculo com as respostas **como dadas inicialmente**, para mostrar o efeito da conferência.
O recálculo que vale é `nat78-tela-{d,e}-01/recalculo-20261126T1/`.

| | Tela D, iniciais | Tela D, gravadas | Tela E, iniciais | Tela E, gravadas |
|---|---|---|---|---|
| Concordam com a passada (de 10) | 6 | 5 | 6 | 9 |
| D_fc por trio | igual | igual | igual | igual |
| Leitura primária | vantagem do com | vantagem do com | nenhuma diferença detectável | nenhuma diferença detectável |
| S4' muda alguma leitura? | não | não | não | não |

- `respostas-d/`, `respostas-e/`: saída do `revisao:material-autora responder` com as linhas iniciais.
- `recalculo-d/`, `recalculo-e/`: saída do `revisao:recalculo` com essas respostas (mesmas passada e origem do
  recálculo que vale). Foi gerado numa pasta temporária e copiado; os caminhos de `--ratificacoes` gravados em
  `recalculo.json › entradas` apontam para essa pasta temporária, com o mesmo sha256 dos arquivos de `respostas-*`.
