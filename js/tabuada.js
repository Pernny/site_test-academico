let calculo = Number(prompt("Informe o número que você quer ver a tabuada: "))
document.write(`Calculando a tabuada de ${calculo}<br>`)
for (cont = 0; cont <= 10; cont++) {
  document.write(`${calculo} x ${cont} = ${calculo * cont}<br>`);
}