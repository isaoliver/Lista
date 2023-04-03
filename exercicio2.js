let numero = parseInt(prompt("Digite um número inteiro de 1 a 10:"));

if (numero >= 1 && numero <= 10) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    document.write(numero + " x " + i + " = " + resultado + "<br>");
  }
} else {
  alert("Número inválido! Digite um número inteiro de 1 a 10.");
}

if (numero==0) {
    alert("BURRÃO!")
}