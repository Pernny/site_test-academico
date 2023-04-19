let entrada = Number(prompt('Informe um número para entrar no ciclo Fibonacci:'))
let atual = 0
let valor1 = 1
let valor2 = 0

for (cont = 1; cont <= entrada; cont++) {
  atual = valor1 + valor2
  document.write(`cont:${atual}<br>`);
  if (cont == 1)
    continue;
  valor2 = valor1
  valor1 = atual
}