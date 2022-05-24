 
class Automovil {
    constructor(marca, modelo, version, anyo, precio, kilometraje, motor, ciudad, imagen) {
        this.marca = marca;
        this.modelo = modelo;
        this.version = version;
        this.anyo = anyo;
        this.precio = precio;
        this.kilometraje = kilometraje;
        this.motor = motor;
        this.ciudad = ciudad;
        this.imagen = imagen;
    }
}

let auto1 = new Automovil(" TOYOTA", "1", "Corolla y RAV4 .", 2015,  132.2   , 17.3, 2021, "Bogotá", "img/toyota .jpg");
let auto2 = new Automovil("Mercedes AMG Vision ", "1", "Prime", 1952,  5.5, 12650, 2000, "Cali", "img/mercedes.jpg");
let auto3 = new Automovil("BMW", "2", "Serie 2 Coupé ", 2019, 73900000, 22090, 2022, "Mexico", "img/BMW.jpeg");
let auto4 = new Automovil(" Audi RS 6 Avant eléctrico", "1", "Touring", 2019, 147.920 , 2209, 2000, "Medellín", "img/audi.jpg");
let auto5 = new Automovil("Jeep", " Wrangler Unlimited Polar", "Seg", 2020, 32695, 907, 2000, "Italia", "img/jeep .jpg");

function mostrarVehiculo(auto) {
    let contenedorPrincipal = document.getElementById("main-content");
    let contenedorImg = document.createElement("div");
    contenedorPrincipal.appendChild(contenedorImg);
    contenedorImg.setAttribute("class", "style-contentImg");

    let imgAuto = document.createElement("img");
    imgAuto.setAttribute("src", auto.imagen);
    imgAuto.setAttribute("class", "img-style");
    contenedorImg.appendChild(imgAuto);

    let valorAuto = document.createElement("label");
/*     alert(auto.precio); */
    let precioFormat = new Intl.NumberFormat('es-ES', {}).format(auto.precio);
    
    
    let textoValorAuto = document.createTextNode("$" + precioFormat);
    valorAuto.appendChild(textoValorAuto);
    valorAuto.setAttribute("class", "style-precio");
    contenedorImg.appendChild(valorAuto);

    let descripcionVehiculo = document.createElement("label");
    let textoDescripcionVehiculo = document.createTextNode(auto.marca + " " + auto.version);
    descripcionVehiculo.appendChild(textoDescripcionVehiculo);
    descripcionVehiculo.setAttribute("class", "style-descripcion");
    contenedorImg.appendChild(descripcionVehiculo);

    /* let contenedorSeparador = document.createElement("div"); */
    let anyoVehiculo = document.createElement("label");
    let textoAnyoVehiculo = document.createTextNode(auto.anyo);
    anyoVehiculo.appendChild(textoAnyoVehiculo);

    
    let kilometrajeVehiculo = document.createElement("label");
    let textoKilometrajeVehiculo = document.createTextNode(auto.anyo + " - " + auto.kilometraje + "km" + " - " + auto.ciudad);
    kilometrajeVehiculo.appendChild(textoKilometrajeVehiculo);
    kilometrajeVehiculo.setAttribute("class", "style-kilometraje");
    contenedorImg.appendChild(kilometrajeVehiculo);
    
    anyoVehiculo.setAttribute("class", "style-anyo");
}

window.addEventListener("keydown", function(event) {
    let busqueda = document.getElementById("textoBusqueda").value;
    if(event.key == "Enter") {
        limpiarVentana();
        if (busqueda == "Carros") {
            mostrarVehiculo(auto1);
            mostrarVehiculo(auto2);
             mostrarVehiculo(auto3);  
            mostrarVehiculo(auto4);
            mostrarVehiculo(auto5);
        }
        else if (busqueda == "Toyota Corolla") {
            mostrarVehiculo(auto5);
        }
        else {
        this.alert("No se han encontrado coincidencias.");
        }
    }
});
function limpiarVentana() {
    document.getElementById("main-content").innerHTML = "";
}
