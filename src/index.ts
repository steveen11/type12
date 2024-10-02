"use strict";
let nombre = "Samuel";
nombre = "Ardila"
//console.log(nombre)

let numero: number= 23;
//console.log(numero)


type address = {
    city?: string;
    country?: string;
    ad: string;
}

// crear objeto

type estudiante = {
    firstName : string;
    lastName?: string;
    age?: number | string;
    address?: address
}

const e1 : estudiante = {
    firstName: "Samuel",
    lastName: "Ardila",
    age : 17,
    address : {
        city : "Bogota",
        country : "Colombia",
        ad : "Cra 73 64 53"
    }
}
const e2 : estudiante = {
    firstName: "Miguel",
    lastName: "Ortiz",
    age : 17,
    address : {
        city : "Bogota",
        country : "Colombia",
        ad : "Cra 1 20 19"
    }
}
const mostrarEstudiante = (estudiante: estudiante): string =>{
    const{firstName,lastName,age}= estudiante;
    return `Nombre de estudiante : ${firstName},
            Apellido: ${lastName},
            Edad: ${age}`
}

//console.log(mostrarEstudiante(e1))
//ARREGLOS
//Crear un arreglo de estudiante

let estudiantes: estudiante[]=[]
//Recorrer estudiante
estudiantes.forEach((estudiante) => {
  console.log(`Nombre: ${estudiante.firstName}, Apellido: ${estudiante.lastName}`)  
});

const agregarEstudiante = (estudiante: estudiante) => {
    estudiantes.push(estudiante)
}

const eliminarEstudiante = (indice: number) => {
    estudiantes.splice(indice, 1)
}

const eliminarEdad = (indice: number) => {
    if (estudiantes[indice]) {
        delete estudiantes[indice].age;
    }
};

const actualizarApellidoPorNombre = (nombre: string, nuevoApellido: string) => {
    estudiantes.forEach(estudiante => {
        if (estudiante.firstName === nombre) {
            estudiante.lastName = nuevoApellido;
        }
    });
};


agregarEstudiante({
    firstName: "Carlos",
    lastName: "Ortega",
    age: 18
})

agregarEstudiante({
    firstName: "Samuel",
    lastName: "Casallas",
    age: 19
})


actualizarApellidoPorNombre("Samuel", "Ardila")

console.log(estudiantes)
