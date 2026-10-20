# Julgamento cego da autora — como responder

**O que é.** São 10 cartões (alegações de defeito) escolhidos por sorteio, entre os que um juiz automático já decidiu
nesta coleta. Você julga cada um **sem saber de qual execução ele veio nem o que o juiz decidiu**. Depois, um script
compara a sua resposta com a do juiz: onde vocês concordam, a decisão passa a ser "ratificada pela autora"; onde
discordam, nada é sobrescrito, só fica registrado. Isso é revisão da pesquisadora, não validação por especialista
independente (protocolo NAT-78 §8.4).

**Tempo.** Uns 3 a 4 minutos por caso, uns 45 minutos no total. Pode parar e voltar: responda só os que der e marque o
resto com `nao-sei`.

**O que abrir.** Só esta pasta `autora/`: este LEIAME e o [casos.md](casos.md). **Não abra** `chave/`, `selecao.*`,
`manifesto.json` nem `cegueira.json`, na pasta de cima: eles dizem de onde cada caso veio.

## Como é cada caso

Cada caso (`R-01`, `R-02`…) traz o que o cartão diz que acontece, a correção que ele sugere, a regra que ele cita (o
texto da regra vem junto; o nome interno de regra do Design System aparece como "[regra citada]"), os elementos de que
ele fala, os passos até o estado em que o defeito apareceria e as evidências que o próprio cartão traz. No fim do
arquivo está a lista de defeitos da tela (14 itens).

A página é a Tela Solicitar serviço congelada (`/solicitacao.html`). No computador, para conferir na própria página: `npx tsx scripts/reanalise-nat74/e14-campanha.ts --servir ../govbr-resultados/sites/c3846c433f5d3cc6d6a54036aebdf8c39c9899e7f2b083a12bd4843305bb24db` e abra `http://127.0.0.1:3300/solicitacao.html` numa janela de 1280×900.
Pelo celular, julgue pelo texto do caso; se não der para decidir sem a página, responda `nao-sei`.

## As 4 perguntas (sempre nesta ordem; pare quando a resposta disser para parar)

1. **fato** — O que o cartão diz que acontece acontece mesmo, no estado descrito?
   `sim` · `nao` · `nao-sei`. Se `nao` ou `nao-sei`, **pare aqui**.
2. **descumpre** — Isso descumpre a regra citada (ela vale para esse elemento e foi descumprida)? Se o cartão não cita
   regra: descumpre uma norma pública (WCAG, e-MAG)? Recomendação conta como `sim`; regra que só *permite* algo, não.
   `sim` · `nao` · `nao-sei`. Se `nao` ou `nao-sei`, **pare aqui**.
3. **defeito** — É qual defeito da lista da tela (mesmo elemento, mesmo estado, mesmo fato)? O id (`A-01`…), ou
   `nenhum` (defeito real que não está na lista), ou `nao-sei`.
4. **quem-escreveu** — O que está errado foi escrito pela página ou veio pronto do Design System (o componente ou o CSS
   do DS, sem a página mexer)? `pagina` · `ds` · `nao-sei`.

## Como mandar

Uma linha por caso, num comentário do Linear (ou num arquivo de texto). Acentos, maiúsculas e vírgulas não importam;
"não sei" pode ir com espaço. Tudo depois de `#` é nota sua (opcional).

```
R-01: sim sim A-01 pagina
R-02: nao
R-03: sim nao
R-04: sim sim nenhum ds   # nota opcional
R-05: nao sei
```

Depois, o assistente grava as suas linhas com `npm run revisao:material-autora -- responder` (que recusa caso faltando
ou valor fora das listas e diz qual) e o recálculo lê esse arquivo no S4'.
