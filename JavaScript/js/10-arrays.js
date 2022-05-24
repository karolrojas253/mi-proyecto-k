"use strict"

//Forma uno de declarar e inicializar arreglos.
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

//Forma 2 de declarar e inicializar arreglos.
var instructor = new Array(1, "CC", "26582658", "Jesus Davida", "Calderon Gomez", "Calle-6 #4-56", "3224204727", "1970/11/05", true);

//Forma 3 de declarar e inicializar arreglos.
var titulados = [1, "2236074", "ADSI", "2021/01/24", "2022/07/05", "Sergio Jaramillo", true];

//Mostrar los nombres y apellidos del aprendiz, instructor, lider del titulado.
console.log("Nombre del Aprendiz: ",aprendiz[3],aprendiz[4], "\n", "Nombre del Instructor: ",instructor[3],instructor[4], "\n", "Nombre del Lider: ", titulados[5]);


//Metodo length.
//Si la frase supera las 20 letras, informar al usuairo.
var fraseUsuario = "Los aprendices del titulado están aprendiendo javaScript";
var cantCaracteresFrase = fraseUsuario.length;
if (cantCaracteresFrase > 20){
    console.log("La frase supera los 20 caracteres.")
}