//Primero creamos la fecha del dia de arequipa
const diaArequipa = new Date("2023-08-16");
// Fecha actual
const fechaActual=new Date();
// Fecha actual auxiliar
const uxiliar=new Date();



console.log(diaArequipa)
console.log(fechaActual);



// Calcular milisegundos 
const minuto = 1000 * 60;
const hora = minuto * 60;
const dia = hora * 24;
const año = dia * 365;

// Dividimos para obtener el tiempo
var diasActuales = Math.round(fechaActual.getTime() / dia);
console.log(diasActuales)

var diasArequipa = Math.round(diaArequipa.getTime() / dia);
console.log(diasArequipa)

//si restamos sabremos cuantos dias faltan

var faltan=diasArequipa-diasActuales;
document.getElementById("dias").innerHTML=faltan+" DIAS";

var h2 = document.getElementById('dias');
h2.style.fontSize = "50px";







//funciones para recordar...
/*
    .getDate()  ----> Me retorna el dia del mes (0-31)
    .getMonth() ----> Me retorna el mes (0-11)
    .getTime()  ----> Devuelte el

*/