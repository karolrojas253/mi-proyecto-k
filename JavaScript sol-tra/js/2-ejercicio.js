"use strict"

const personas = [
    { nombre : "Andres"},
    { nombre : "Marily"},
    { nombre : "Juan"},
]

function buscarnombre (){
        let nombreBuscar = "Andres"
        let existe
        for (let i = 0; i < personas.length; i++) {
            if (existe){
                break;
            }
            for (const key in personas[i]){
                if(key === "nombre"){
                    if (personas[i][key] === nombreBuscar){
                        console.log("existe")
                        existe = true
                        return existe
                    }else{
                        console.log("no existe")
                        existe = false
                        continue;
                    }
                    }else{
                        continue;
                    }
                }
            }
            
        }


