var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

if(dd<10){
  dd = "0" + dd;
}

if(mm<10){
  mm = "0" + mm;
}
today = dd + "/" + mm + "/" + yyyy;

var currentDate = document.querySelector(".current-date");
currentDate.textContent = today;


function pulaLinha(){
  document.write("<br>");
}
