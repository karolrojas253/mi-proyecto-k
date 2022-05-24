"use strict"

console.log("Operador AND ...... &&");
console.log("Operador OR  ...... ||");
console.log("Operador logico ... !=");

//Operador AND
var nameUser = "Andres";
var passUser= "1998";
var nameBD = "Andres";
var passBD= "1998";

if(nameUser == nameBD && passUser === passBD){
    console.log("Bienvenido...");
}else{
    console.log("Usuario y/o contraseña incorrecta...")
}

//Operador OR
//Si no hay fluido electrico o no hay transporte se suspendde el evento.
var transporte = true;
var electricidad = false;
if(transporte === false || electricidad === false){
    console.log("El evento ha sido suspendido")
}else{
    console.log("El evento no ha sufrido modificaciones")
}

//Operador logico
var estado = true;
if (estado != false){
    console.log("Algoritmo ejecutando");
}