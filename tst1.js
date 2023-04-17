function calcularIMC(peso, altura) {
    altura = altura / 100; // Converter altura de centímetros para metros
    var imc = peso / (altura * altura);
  
    var classificacao = '';
  
    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
      classificacao = 'Peso normal';
    } else if (imc >= 25 && imc <= 29.9) {
      classificacao = 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
      classificacao = 'Obesidade grau 1';
    } else if (imc >= 35 && imc <= 39.9) {
      classificacao = 'Obesidade grau 2';
    } else if (imc >= 40) {
      classificacao = 'Obesidade grau 3';
    }
  
    return {
      imc: imc.toFixed(2),
      classificacao: classificacao
    };
  }
  
  // Exemplo de uso:
  var resultado = calcularIMC(130, 195); // Peso: 70 kg, altura: 170 cm
  console.log('IMC: ' + resultado.imc);
  console.log('Classificação: ' + resultado.classificacao);
  