var today = new Date();
var day = today.getDay();//getDay volta um array com os dias semanas começando com Domingo = 0
var daylist = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabado"];
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

var prepand = (hour >= 12)? " PM ":" AM ";
if (hour===0 && prepand===' PM '){
  if (minute===0 && second===0){
    hour=12;
    prepand=' Noon';
}else{
  hour=12;
  prepand=' PM';
}
}
if (hour===0 && prepand===' AM '){
  if (minute===0 && second===0){
  hour=12;
  prepand=' Midnight';
}else{
  hour=12;
  prepand=' AM';
}
}

var dataDeHoje = document.querySelector(".data-hoje");
dataDeHoje.textContent = daylist[day] + ", " + hour + " : " + minute + " : " + second + prepand;
