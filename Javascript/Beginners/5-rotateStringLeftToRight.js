var tituloRotate = document.querySelector("#titulo-javascript");
tituloRotate.addEventListener("click", function(){
  var textNode = tituloRotate.childNodes[0];
  console.log(textNode);
  var text = textNode.data;
  console.log("O text.data é: " + text);

  setInterval(function ()
  {
   text = text[text.length - 1] + text.substring(0, text.length - 1);
    textNode.data = text;
  }, 200);
});

// function animate_string()
// {
//
// var textNode = tituloRotate.childNodes[0];
// console.log(textNode);
// var text = textNode.data;
// console.log("O text.data é: " + text);
//
// setInterval(function ()
// {
//  text = text[text.length - 1] + text.substring(0, text.length - 1);
//   textNode.data = text;
// }, 100);
// }
