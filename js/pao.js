let ppaes = Number(prompt("Informe o valor unitário do pão: "));
for (cont = 1; cont <= 50; cont++) {
  document.write(`Para ${cont} pães o valor cobrado será: R$ ${(ppaes * cont).toFixed(2)}<br>`);
}