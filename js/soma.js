function soma(n1, n2) {
    return Number(n1) + Number(n2);
  }
  
  let num1 = prompt("Informe valor para A: ");
  let num2 = prompt("Informe valor para B: ");
  
  document.write(`O resultado da soma é ${soma(num1, num2)}`);