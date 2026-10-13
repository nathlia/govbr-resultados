# Relatórios dos revisores cegos — t7b-sonnet-tela-a-01

## p02 (00:06–00:11Z, 5 min)
Agente 17: gab 7 · novo 5 · inc 5. Linha de base 8: gab 3 · novo 2 · inc 2 · dup 1.
- Inc difíceis: BRUpload aria-hidden (DS; parte secundária A-02 vale) C-8156 C-748d; setas do datepicker DS C-11b8 C-a35a C-b4dc C-9240; flatpickr Month/Year C-17af.
- Parciais: C-8535 (tabindex=1 ok, "pulado" falso); C-be3d (data não validada).
- Unidade não oferecida: P-02 rodapé C-cac4; P-01 header C-199e; A-01 foco no body C-623a C-c414.
- Novo: CPF "123" aceito C-e90e C-4b02; data não validada C-be3d.

## p01 (00:06–00:12Z, 5 min)
Agente 17: gab 8 · novo 2 · inc 7. Linha de base 8: gab 3 · novo 2 · inc 2 · dup 1.
- Inc difíceis: C-8c37 calendário aria-hidden (DS); C-6b99 C-84a7 31/02 rolado pelo flatpickr; C-b54e tabindex dias (DS); setas C-9b50 C-b4dc C-9240.
- Compostos: C-11df C-f21e BRUpload aria-hidden (DS) + tabindex=1 (A-02, secundário).
- Dup: C-5080 → C-beb7 (A-09).
- Unidade não oferecida: P-02 C-cac4; P-01 C-199e (P-01/P-02 creditadas por outros cartões).
- Novo: CPF "123" C-5e62 C-8a38. Revisor leu o bundle JS servido pelo site congelado para separar DS × página.

## p03 (00:06–00:12Z, 5 min)
Agente 15: gab 7 · novo 4 · inc 3. Linha de base 8: gab 4 · novo 2 · inc 2.
- Novo: CPF "123" #1 #2; datas 99/99/9999 e 31/02 aceitas #5 #6 (pede ratificação: validação de data é defeito da tela?).
- Inc: BRUpload aria-hidden #7 #11; setas datepicker #18 #19 #20.
- Unidade não oferecida: P-02 #14; P-01 #15.
- Compostos: #3 (secundário vale); #22 (secundário falso).
- #13 label-title-only: A-09 em vez de duplicada (p01 marcou dup) — inconsistência menor.

## p05 (00:06–00:13Z, 6,5 min)
Agente 17: gab 7 · novo 6 · inc 4. Linha de base 8: gab 3 · novo 2 · inc 2 · dup 1.
- Inc: botão calendário aria-hidden (DS) C-8499 C-8314; BRUpload C-e19c C-9460; setas C-b4dc C-9240.
- Unidade não oferecida: P-02 C-65aa C-cac4; P-01 C-73b9 C-199e; A-01 C-dc6c (A-01 só oferecida em outro cartão).
- Novo: CPF "123" C-8edf C-dee9; data 99/99/9999 C-7f25.
- Dup C-5080 → C-beb7.
- Cegueira: listou os nomes das pastas dos outros revisores no scratchpad, sem abrir (nomes não revelam braço).

## p04 (00:06–00:13Z, 7 min)
Agente 21: gab 7 · novo 5 · inc 9. Linha de base 8: gab 3 · novo 2 · inc 2 · dup 1.
- Unidade não oferecida: P-02 #6 #8; P-01 #7 #9; A-01 #20.
- Novo: CPF #23; data #25 (composto).
- Inc (DS core.js): BRUpload #2 #27; calendário #16 #26; Month/Year #22; BRSelect foco body #17; dias tabindex #5; setas #12 #13 #14 #29.
- Parcial #21 A-04 (borda).

## p06 (00:12–00:16Z, 4 min)
Agente 18: gab 10 · novo 5 · inc 3. Linha de base 8: gab 3 · novo 2 · inc 2 · dup 1.
- Inc: BRUpload #4; setas #13 #14 #15; Month/Year #22.
- Composto #19 A-02 (aria-hidden falso); parcial #21 A-04.
- Unidade não oferecida: P-02 #7 #9; P-01 #10 (#8 recebeu P-01).
- Novo: CPF #1 #23; data #24; aria-invalid persiste #3 (o mais duvidoso).
- Dup #6 → C-beb7.

## p07 (00:12–00:17Z, 4 min)
Agente 17: gab 9 · novo 3 · inc 5. Linha de base 8: gab 4 (inclui c6 label-title-only como A-09) · novo 2 · inc 2 (revisor escreveu 3/2; contagem real pelo summary).
- Inc: c21 31/02 rolado pelo datepicker DS (aqui inc; p03 novo — inconsistência na validação de data); BRUpload c3 c22; setas c13 c25 c14 c15.
- c20 A-08: marcou o 1º id; o painel só aceita unidade ancorada no sujeito (#servico), então a escolha confere.
- Unidade não oferecida: P-02 c7 c9; P-01 c10. Novo: CPF c18 c19.

## p10 (00:14–00:18Z, 4 min)
Agente 11: gab 5 · novo 1 · inc 5. Linha de base 8: gab 3 · novo 2 · inc 2 · dup 1.
- Inc: C-bc22 botão calendário (DS); C-eaff C-a1be BRUpload (A-02 secundário); setas/dias DS.
- Parcial C-1ce3 A-12. Unidade não oferecida: P-02 C-cac4; P-01 C-199e. Novo: CPF C-e0ed.

## p08 (00:12–00:18Z, 6 min)
Agente 18: gab 5 · novo 5 · inc 8. Linha de base 8: gab 4 · novo 2 · inc 2.
- Inc: #19 breadcrumb span (exemplo DS); #2 #17 botão calendário; #23 #24 datas rolagem DS (secundário de #24 vale); setas #13 #14 #15; compostos #3 #25.
- Parciais #8 A-02; #20 A-04 ×2.
- Unidade não oferecida: P-02 #6 #9; P-01 #7 #10. Novo: erros persistem #1; CPF #21 #22.

## p09 (00:14–00:18Z, 5 min)
Agente 19: gab 10 · novo 4 · inc 5. Linha de base 8: gab 3 · novo 2 · inc 2 · dup 1.
- Inc: #23 data rolada (DS); #18 Month/Year; setas #12 #13 #27; compostos BRUpload #3 #25.
- Unidade não oferecida: P-02 #6 #8; P-01 #9. Novo: CPF #19 #20; erro obsoleto #24.
