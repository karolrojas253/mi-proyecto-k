"use strict"
 
/* convertir de forma implicita */
var num1 ="12";
var num2 = 4;
console.log ("el resultado de la suma es : " + (num2 + num1));
console.log ("el resultado de la resta es : " + (num2 - num1));
console.log ("el resultado de la multiplicación es : " + (num2 * num1));
console.log ("el resultado de la división es : " + (num2 / num1));

/* convertir de forma implicita */
var num1Int = parseInt(num1);
console.log("El resultado de la suma es: " + (num2 + num1Int));

/* convertir de forma string */
var num3 =12;
var num4 =12;
var num3Str = num3.toString(); /* toString significa cadena de texto o lo mismo que un varchar convertir todo en cadena de texto */
var num4Str = num4.toString();
console.log("El resultado de la suma es: " + (num3 + num4));
console.log("El resultado de la concatenación es: " + (num3Str + num4Str));