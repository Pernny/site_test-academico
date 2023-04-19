let nome = prompt('Qual o seu nome?');

while (nome == "") {
  nome = prompt("Nome não informado. Informe seu nome?");
}

document.write(`Olá, ${nome}!`);