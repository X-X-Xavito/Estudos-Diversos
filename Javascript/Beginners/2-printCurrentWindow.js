var botaoImprimir = document.querySelector("#botao-imprimir");

botaoImprimir.addEventListener("click", function(event){
  event.preventDefault();
  window.print();
})
