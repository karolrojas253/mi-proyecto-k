  
class  vuelos {
    constructor(origen,destino,precio,horaSalida){
        this.origen = origen;
        this.destino = destino;
        this.precio = precio;
        this.hora = hora;
        this.horaSalida = horaSalida;
    }
}
let horaSalida = new Date(2022, 02, 13, 12, 12, 0);
let horaSalidaStr = horaSalida.getHours().toString()
+":"+ horaSalida.getMinutes().toString();
 
let vuelo =[{
 "origen":"BOG",
 "destino":"CTG",
"precio":375000,
"horaSalidaStr":horaSalidaStr,
"directo":"Directo",
"Duracion":"Duracion",
"eco":"Mas economico",
}];

function Mostrarvuelo(){
    document.getElementById("main-content").innerHTML=
(vuelo[0].origen+" "+
     vuelo[0].destino+" "+
    vuelo[0].precio+" "+
    vuelo[0].horaSalidaStr +" "+
   vuelo[0].directo +" "+
   vuelo[0].Duracion +" "+
   vuelo[0].eco);
     
}
let directo = document.createElement("label");
contentVuelo.appendChild(directo);
directo.setAttribute("class", "style-escalas");

let Duracion = document.createElement("label");
contentVuelo.appendChild(Duracion);
   

let  eco = document.createElement("label");
contentVuelo.appendChild(eco);
