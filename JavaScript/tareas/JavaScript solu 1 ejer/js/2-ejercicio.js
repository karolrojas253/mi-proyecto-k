"use strict"

var nombreEncontrado = false;
var nombreBuscar = "MARY";
    var lstNombres = [];
    lstNombres.push("DEIBER");
    lstNombres.push("MARY");
    lstNombres.push("JOSELO");

    for(var i=0;i<lstNombres.length;i++){
        if(lstNombres[i] == nombreBuscar){
            nombreEncontrado = true;
           break;
        }
    }if(nombreEncontrado){
        console.log('NOMBRE ENCONTRADO');
    }else{
        console.log('NOMBRE NO ENCONTRADO');
    }
