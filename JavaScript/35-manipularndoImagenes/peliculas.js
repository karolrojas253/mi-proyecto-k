"use strict"
 
function hacer_invisible() {
    document.getElementById("jhon-1").className = "hidden";
}
function intercambiar() {
    document.getElementById("dama").src ="img/3.jpg";
}
function retornar() {
    document.getElementById("dama").src ="img/4.jpg";
}

function interConArg(idPic, ruta) {
let newPic = document.getElementById(idPic);
newPic.src = "img/4.jpg";
/*     document.getElementById(id).src ="img/4.jpg"; */
}
