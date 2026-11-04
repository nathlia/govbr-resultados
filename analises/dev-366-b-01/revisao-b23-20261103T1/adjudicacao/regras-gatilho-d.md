# Revisão de campanha nova — gatilho (d): unidade por regra publicada (regras fixas)

**Quando foram escritas:** 03/11/2026 (D-165), DEPOIS da 1ª passada de dev-366-b-01 e da divergência que as motivou. Não
mudam os gatilhos (a)–(c) nem o `regras.md` da revisão (sha256 inalterado); valem para toda campanha v2 nova e toda regra
publicada que use este gatilho. O sha256 deste arquivo vai para o manifesto da adjudicação que o usa.

1. **Regra publicada.** Um arquivo Markdown congelado (sem a marca de rascunho), passado com o sha256 esperado; sha256
   diferente, marca de rascunho, ou bloco mecânico ausente, repetido ou inválido → para, nada gravado. O bloco mecânico é
   um único trecho ```json regra-mecanica``` no próprio arquivo (logo, coberto pelo mesmo sha256): diz a derivação
   (`template-x-registro-1.0.0`) e os parâmetros dela.
2. **Cartões afetados, mecanicamente.** A derivação lê só os cartões da passada, a chave, a referência congelada de cada
   análise (`entradas/referencia.json`, sha256 gravado) e a 1ª passada congelada (o crédito que ela deu; `julgamentos.json`
   conferido pelo sha256), nunca uma resposta da adjudicação. `template-x-registro-1.0.0`: parada em rota de registro =
   parada da referência cujo `path` termina num identificador (expressão `identificadorDeRegistro` do bloco); spec abrangida =
   spec cujo `state` é uma dessas paradas, salvo as da casca da aplicação (primeiro seletor composto da âncora numa lista
   `casca` do bloco, declarada por tela, vazia se for o caso); cartão afetado = credita uma spec abrangida na 1ª passada,
   ou a tem em `candidatas`, ou o `observado` contém o segmento da rota que precede o identificador (ex.: `agendar-vistoria`)
   ou o identificador de um registro da referência. Tela com parada de registro sem casca declarada, ou nenhuma parada de
   registro em nenhuma tela → a lista não é derivável: para.
3. **Unidades.** Uma unidade por spec abrangida (os cartões que a creditam na 1ª passada ou a têm em `candidatas`); specs
   que compartilham cartão formam uma unidade só; cartão afetado só pelo `observado` forma unidade sozinho. A lista
   (`afetados.json`, sha256 no manifesto) é gravada antes de qualquer lote. Unidades (d) se juntam às de (a)–(c) que
   compartilham cartão, como entre os demais gatilhos.
4. **Instruções.** O lote de uma unidade com (d) traz a regra como terceiro arquivo de instruções (`instrucoesDaRegra`,
   sha256 no lote e no manifesto), a evidência arquivada dada (`evidenciaArquivada`, sha256), e pede, além das respostas
   de sempre, `leiturasDaRegra`: a leitura adotada (identidade demonstrada ou não), a evidência que a sustenta, e por
   cartão o registro alcançado e a spec que ele credita em CADA leitura (ou `null`). A spec creditada pela resposta tem de
   ser a da leitura adotada. A cegueira cobre os arquivos novos como os demais.
5. **Sensibilidade.** A aplicação grava `adjudicacao/sensibilidade-regra.json` (por cartão: as duas leituras); a tabela de
   detecção (`e14-deteccao --sensibilidade-regra`) mostra a contagem por braço em cada leitura, em número.
6. **Sem confiabilidade.** Com regra publicada, a amostra de confiabilidade é opcional. Sem ela, a rodada é SÓ do (d):
   (a) e (c) não entram nesta rodada (contados no manifesto) e (b) não é avaliável; o manifesto grava o motivo. Nada
   disso muda uma rodada sem regra publicada (byte a byte).
