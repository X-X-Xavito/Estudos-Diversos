
// var lista1DeJaneiro = document.querySelector("#primeiroJaneiro-domingo");
// lista1DeJaneiro.innerHTML = "";
// var primeiroJaneiro = document.createElement("li");

primeiroJaneiro();

function primeiroJaneiro(ano){
  var lista1DeJaneiro = document.querySelector("#primeiroJaneiro-domingo");
  lista1DeJaneiro.innerHTML = "";

  for (var ano = 2018; ano <= 2050; ano++){
    var primeiroJaneiro = document.createElement("li");
    var d = new Date(ano, 0, 1);
    if(d.getDay() === 0)
    primeiroJaneiro.textContent = "1º de janeiro caiu em um domingo no " + ano;
    lista1DeJaneiro.appendChild(primeiroJaneiro);
  }
}
