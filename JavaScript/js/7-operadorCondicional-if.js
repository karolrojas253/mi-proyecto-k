"use strict"

//Operador condicional sencillo if
var passSB= "1234";
var passUser= 1234;

if (passSB == passUser){
    console.log("Bienvenido...");
}else{
    console.log("Acceso denegato...");
}

//Condicional con operador (ESTRICTAMENTE IGUAL)

if (passSB === passUser){
    console.log("Bienvenido...");
}else{
    console.log("Acceso denegato...");
}

//Condicional anidado
//Tiendas metro tiene descuento del 5% en cerveza, si la compra es igual o superior a $20.000 en cervezas tiene un 5% de descuento adiconal, declara 3 variables e inicializarlas y determinar el valor de cada uno.

var arroz_roa_libra = 2000;
var cerveza_coronaxund = 5000;

var productoCliente = "cerveza_coronaxund";
var cantidadesClientes = 4;
var costoProdcutoCliente = 0;


if (productoCliente === "cerveza_coronaxund" ){
    var CostoCerveza = cerveza_coronaxund * cantidadesClientes;
    cerveza_coronaxund = cerveza_coronaxund * .95;
    var auxCostoSinDescuento2 = cantidadesClientes * cerveza_coronaxund;
    if(CostoCerveza >= 20000){
        cerveza_coronaxund = cerveza_coronaxund * .95;
    }
    console.log("Costo total: "+ cerveza_coronaxund * cantidadesClientes);

}else if (productoCliente === "arroz_roa_libra"){
        console.log("Costo total: "+ costoProdcutoCliente * arroz_roa_libra);
}else{
    console.log("Seleccione un producto valido");
}