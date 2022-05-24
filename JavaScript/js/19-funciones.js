"use strict"
/* funcion sin parametros y sin retorno */
function mostrarHora() {
    var fechaActual = new Date();
    var horaActual =  fechaActual.getHours();
    var minutosActual = fechaActual.getMinutes();
    var minutosActualStr = minutosActual.toString();

    if (horaActual > 12 ) {
        horaActual = horaActual - 12;
    }
    if (minutosActual < 10){ 
        minutosActualStr = "0" + minutosActualStr;
    }
    alert("Hora Actual: " + horaActual + ":" + minutosActualStr);
}   
  /* funcion con parametros y sin retorno */

   function saludo(bienvenido) {
    alert(bienvenido);
}

  function presentacion(nombre , edad , titulado){
      alert(" Mi Nombre es : " +  nombre + "  tengo  " + edad + " soy del titulado "  + titulado);

    }
  /* funcion sin retorno */
  function validarDescuento(valorProducto) {
      var total = 0;
/* si la compra es igual o mayor a 10000 tiene el descuento de 10%
y si esta entre 5000 y 9999 tiene descuento del 5%*/
      if(valorProducto >=10000) {
          total = valorProducto * .9;
  
      } 
      else if(valorProducto >= 5000 && valorProducto <= 9999) {
          total = valorProducto * .95;
      }
      return total;
}
function calcularDescuento(valorProducto) {
    alert("costo total del descuento: " + validarDescuento(valorProducto));
}