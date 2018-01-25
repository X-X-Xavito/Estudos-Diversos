var numeroPensado = Math.round(Math.random()*10);
var resultadoJogoAdivinha = document.querySelector("#resultado-jogoAdivinha");
var botaoJogoAdivinha = document.querySelector("#botao-jogoAdivinha");

botaoJogoAdivinha.addEventListener("click", function(event){
  event.preventDefault();
  var input = document.querySelector("#input-jogo-adivinha")
  var campoAdivinha = input.value;


  var chute = campoAdivinha;

  var erros = validaCampoJogoAdivinha(chute);
  console.log(erros);

  if(erros.length > 0){
    exibeMensagemDeErroJogoAdivinha(erros);
    return;
  }

  if(campoAdivinha == numeroPensado){
    resultadoJogoAdivinha.innerHTML = "Você acertou!";
  }else{
    resultadoJogoAdivinha.innerHTML = "Você errou!";
  }
  input.value = "";
  var mensagensErro = document.querySelector("#mensagem-erroJogoAdivinha");
  mensagensErro.innerHTML = "";
})







function validaChute(chute){
  if(chute >= 1 && chute <=10){
    return true;
  }else{
    return false;
  }
}


function validaCampoJogoAdivinha(chute){

  var erros = [];

  if(!validaChute(chute)){
    erros.push("O chute é inválido");
  };

  if(chute.length == 0){
    erros.push("O campo não pode ser em branco");
  };

  return erros;
}

function exibeMensagemDeErroJogoAdivinha(erros){
  var ul = document.querySelector("#mensagem-erroJogoAdivinha");
  ul.innerHTML = "";
  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  })
}
