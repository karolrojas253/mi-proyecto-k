"use strict"

for (var i = 1; i <= 10; i++){
    console.log("Numero N. ",i);
}

var aprendiz = new Array();
aprendiz[0] = 1;
aprendiz[1] = "CC";
aprendiz[2] = "1004446520";
aprendiz[3] = "Marily";
aprendiz[4] = "Zuleta Rojas";
aprendiz[5] = "Calle-5 Saladoblanco";
aprendiz[6] = "3203351402";
aprendiz[7] = "2003/03/08";
aprendiz[8] = true;
var instructor = new Array(1, "CC", "26582658", "Jesus Davida", "Calderon Gomez", "Calle-6 #4-56", "3224204727", "1970/11/05", true);

var titulados = [1, "2236074", "ADSI", "2021/01/24", "2022/07/05", "Sergio Jaramillo", true];

//Mostrar los elementos de un arreglo.
for (var i=0; i<= aprendiz.length -1; i++){
    console.log(aprendiz[i]);
}
