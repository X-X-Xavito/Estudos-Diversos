
var campoAno = document.querySelector("#input-anoBisexto");
var botaoAnoBisexto = document.querySelector("#botao-anoBisexto");

botaoAnoBisexto.addEventListener("click", function(event){
  event.preventDefault();

  var form = document.querySelector("#formulario-Ano")

  var ano = obtemAno(form);

  var erros = validaCampo(ano);
  console.log(erros);

  if(erros.length > 0){
    exibeMensagemDeErroAnoBisexto(erros);
    return;
  }


  var resultadoCampo = document.querySelector("#resultado-anoBisexto");
  if(calculaAnoBisexto(ano)){
    console.log("o resuultado do campo é " + ano);
    resultadoCampo.innerHTML = "O ano " + ano + " é bisexto!";
  }else{
    console.log("o resuultado do campo else é " + ano);
    resultadoCampo.innerHTML = "O ano " + ano + " não é bisexto!";
  }

form.reset();
var mensagensErro = document.querySelector("#mensagem-erroAno");
mensagensErro.innerHTML = "";

})

function obtemAno(form){
  var ano = form.valorAno.value;
  console.log(ano);
  return ano;
}


function calculaAnoBisexto(ano){


  if ( ( ano % 4 == 0 && ano % 100 != 0 ) || (ano % 400 == 0) ) {
  return true;
  } else {
  return false
   }
}

function validaAno(ano){
  if(ano >= 0){
    return true;
  }else{
    return false;
  }
}

function validaCampo(ano){

  var erros = [];

  if(!validaAno(ano)){
    erros.push("O ano é inválido");
  };

  if(ano.length == 0){
    erros.push("O campo não pode ser em branco");
  };

  return erros;
}

function exibeMensagemDeErroAnoBisexto(erros){
  var ul = document.querySelector("#mensagem-erroAno");
  ul.innerHTML = "";
  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  })
}
