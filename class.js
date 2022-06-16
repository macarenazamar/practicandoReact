//Destructuring de objetos, declaro una nueva posición de memoria
//Primero decalro objeto:
const personal = {
    nombre: "Oscar",
    apellido: "De la Hoya",
    edad: 45,
    estadoCivi: "soltero",
    cantidadCampeonatos: 30,
    nacionalidad: "mexicanoestadounidence",
}
//Para ingresar a una propiedad, por ejemplo al nombre debería:
// console.log(personal.nombre)
//A través del destruturin declaro en una nueva prsición de memoria 
const {nombre, edad, cantidadCampeonatos:campeonatos /*Re nombra la variable cantidadCampeonatos:campeonatos, ahora lo almacena como campeonatos  */} = personal;
// console.log(nombre);
// console.log(campeonatos); 

//Destructuring de ARRAYS
//Primero decalro un arrays
const personajes = ["superman", "batman", "superchica", "spiderman", "thor"]
// console.log(personajes[3]);
// accediendo a través del destructurin asignandole un nombre
const [primerPersonaje, segundoPersonaje, ... /* soread operation */restoPersonajes] = personajes;
// console.log(primerPersonaje);
// console.log(restoPersonajes); 

//Spread operator
const personal2 = {
    ...personal,
    sueldo: "23K UDS",
}
//console.log(personal2);

const copiaPersonajes = [...personajes];