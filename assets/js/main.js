function calcularIMC() {
  var peso = parseFloat(document.getElementById('peso').value);
  var altura = parseFloat(document.getElementById('altura').value);

  alturaFinal = altura / 100

  altura.toFixed(2)

  const IMC = peso / (alturaFinal * alturaFinal);
  var resultadoTexto;

  if (IMC < 18.5){
    resultadoTexto = 'Você está abaixo do peso!';
  } else if (IMC >= 18.5 && IMC < 25){
    resultadoTexto = 'Você está com o peso normal!';
  } else if (IMC >= 25 && IMC < 30){
    resultadoTexto = 'Você está acima do peso!';
  } else if (IMC >= 30 && IMC < 40){
    resultadoTexto = 'Você está OBESO!';
  } else if (IMC >= 40){
    resultadoTexto = 'VOCÊ ESTÁ COM OBESIDADE GRAVE!!!!!!';
  } else{
   resultadoTexto ="Resultado inválido! Tente novamente!!!"
  }

  // Atualiza o conteúdo do elemento <p> com a classe "resultado"
  document.querySelector('.resultado').innerHTML = 'Seu IMC é: ' + IMC.toFixed(2) + '.<br>' + resultadoTexto;
}