"use strict"

/* redondear de forma automatica*/
var valor1 = 4.3;
var valor1Redondeando = Math.round(valor1);
console.log("El valor 1 redondeando es: " + valor1Redondeando);

/*  valor dedondeando con un numero mayor me da 4.7 = 5*/
var valor2 = 4.7;
var valor2Redondeando = Math.round(valor2);
console.log("El valor 2 redondeando es: " + valor2Redondeando);


/*  valor dedondeando con un numero mayor me da 4.5 = 5*/
var valor3 = 4.5;
var valor3Redondeando = Math.round(valor3);
console.log("El valor 3 redondeando es: " + valor3Redondeando);

/*  valor dedondeando con un numero mayor me da 4.5 = 5*/
var valor4 = 4.99;
var valor4Redondeando = Math.floor(valor4);
console.log("El valor 4 redondeando es: " + valor4Redondeando);

/*  valor dedondeando  con ceil es que aunque la cifra este */
var valor5 = 4.0001;
var valor5Redondeando = Math.ceil(valor5);
console.log("El valor 5 redondeando es: " + valor5Redondeando);
