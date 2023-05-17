function exibirConversao() {
  var convertor = document.getElementById("tipos").value;
  var exibir = "";

  if (convertor == "Temperatura") {
    exibir = "m";
    }
  if (convertor == "Liquidos") {
    exibir = document.getElementById("liq");
    liq.style.display = "block";  
    return function converterLiquidos() {
    };
  }
  if (convertor == "Massa") {
    exibir = "<h2> Selecione qual conversão quer fazer 3</h2>";
  }

  document.getElementById("exibir").innerHTML = exibir;
}