"use strict"
/* hora automatica del navedor para sacar la hora  */

console.log(" ===FECHA Y HORA DEL NAVEGADOR===");
var timeGHT = new Date();
console.log(" la fecha y la hora actual es : "  +timeGHT);

/* ontener el dia actual de la semana  */
 var fechaActual = new Date();
 var diaSemanaStr = fechaActual.getDay();
 var diaSemanaStrr =["Domindo","lunes","martes","miercoles","jueves","viernes","sabado"];
 var dia=fechaActual.getDate();
 var mes = fechaActual.getMonth()+1;
 var año=fechaActual.getFullYear();
 var horaactual =fechaActual.getHours() + ":" + fechaActual.getMinutes() + ":" +
 fechaActual.getSeconds();
 console.log("Dia de la semana : " + diaSemanaStrr[diaSemanaStr]+"-"+dia+"-"+mes+"-"+año);



 console.log("Hora Actual:  " +horaactual);

 /* Establecer dias de diferencia */
 console.log("millisegundos: "+ fechaActual.getMilliseconds());

 /* establecer dias de diferencia */
var  nexyear=new Date("January 1,2022");
console.log(nexyear.getTime());

 var mscurrent=fechaActual.getTime();
 console.log(mscurrent);
  var diffMS = nexyear.getTime() -fechaActual.getTime();
  var diaMS = diffMS/(1000 * 60 * 60 *24);

  console.log(diaMS)