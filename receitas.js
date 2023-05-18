function exibirConversao() {
  var convertor = document.getElementById("tipos").value;
  var exibir = "";

  if (convertor == "Temperatura") {
    exibir = document.getElementById("temp");
    temp.style.display = "block"; 
    liq.style.display = "none";
    peso.style.display = "none";
    return function converterTemperatura() {
    };
    }
  if (convertor == "Liquidos") {
    exibir = document.getElementById("liq");
    liq.style.display = "block";  
    temp.style.display = "none";
    peso.style.display = "none";
    return function converterLiquidos() {
    };
  }
  if (convertor == "Massa") {
    exibir = document.getElementById("peso");
    peso.style.display = "block";
    temp.style.display = "none";
    liq.style.display = "none";
    return function converterMassa() {

    };
  }

  document.getElementById("exibir").innerHTML = exibir;
}

function converterLiquidos() {
  var quantidade = parseFloat(document.getElementById('quantidade').value);
  var unidadeOrigem = document.getElementById('unidadeOrigem').value;
  var unidadeDestino = document.getElementById('unidadeDestino').value;
  var resultado = 0;

  // Converter para mililitros
  switch (unidadeOrigem) {
    case 'mililitros':
      resultado = quantidade;
      break;
    case 'litros':
      resultado = quantidade * 1000;
      break;
    case 'galoes':
      resultado = quantidade * 3785.41;
      break;
  }

  // Converter para unidade de destino
  switch (unidadeDestino) {
    case 'mililitros':
      resultado = resultado;
      break;
    case 'litros':
      resultado = resultado / 1000;
      break;
    case 'galoes':
      resultado = resultado / 3785.41;
      break;
    case 'onzas':
      resultado = resultado / 29.5735;
      break;
    case 'pintas':
      resultado = resultado / 473.176;
      break;
  }

  document.getElementById('resultado').innerHTML = resultado.toFixed(2);
}

function converterTemperatura() {
  var opcao = document.getElementById("opcao").value;
  var temperatura = parseFloat(document.getElementById("temperatura").value);
  var resultado2 = document.getElementById("resultado2");

  if (opcao === "1") {
      var fahrenheit = (temperatura * 9/5) + 32;
      resultado2.innerHTML = "A temperatura em Fahrenheit é: " + fahrenheit.toFixed(2) + " °F";
  } else if (opcao === "2") {
      var celsius = (temperatura - 32) * 5/9;
      resultado2.innerHTML = "A temperatura em Celsius é: " + celsius.toFixed(2) + " °C";
  } else if (opcao === "3") {
      var kelvin = temperatura + 273.15;
      resultado2.innerHTML = "A temperatura em Kelvin é: " + kelvin.toFixed(2) + " K";
  } else if (opcao === "4") {
      var celsius = temperatura - 273.15;
      resultado2.innerHTML = "A temperatura em Celsius é: " + celsius.toFixed(2) + " °C";
  } else {
      resultado2.innerHTML = "Opção inválida. Por favor, escolha uma opção válida.";
  }
}

function converterMassa() {
  var opcao = document.getElementById("opcao").value;
  var valor = parseFloat(document.getElementById("valor").value);
  var resultado3 = document.getElementById("resultado3");

  if (opcao === "1") {
      var quilogramaParaGrama = valor * 1000;
      resultado3.innerHTML = "O valor em Gramas é: " + quilogramaParaGrama.toFixed(2) + " g";
  } else if (opcao === "2") {
      var gramaParaQuilograma = valor / 1000;
      resultado3.innerHTML = "O valor em Quilogramas é: " + gramaParaQuilograma.toFixed(2) + " kg";
  } else if (opcao === "3") {
      var quilogramaParaMiligrama = valor * 1000000;
      resultado3.innerHTML = "O valor em Miligramas é: " + quilogramaParaMiligrama.toFixed(2) + " mg";
  } else if (opcao === "4") {
      var miligramaParaGrama = valor / 1000;
      resultado3.innerHTML = "O valor em Gramas é: " + miligramaParaGrama.toFixed(2) + " g";
  } else {
      resultado.innerHTML = "Opção inválida. Por favor, escolha uma opção válida.";
  }
}