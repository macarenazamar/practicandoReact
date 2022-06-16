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

//Función map
// const personajesProcesados = [
//     {nombre: "Superman", nombreReal: "Calark Kent"},
//     {nombre: "Batman", nombreReal: "Bruce Wayne"},
//     {nombre: "Superchica", nombreReal: "Linda Lee"},
//     {nombre: "Spiderman", nombreReal: "Peter Parker"},
//     {nombre: "Thor", nombreReal: "Thor Odinson"}, 
// ]
// const nombrePersonajes = personajesProcesados.map((el)=>el.nombreReal)
// console.log(nombrePersonajes)

const personajesProcesados = personajes.map(personaje => {
    return `<p>${personaje}<p/>` /* COMILLAS SIMPLES alt gr + } o alt 96*/
})

//console.log(personajesProcesados);

//Función find
const personajeEncontrado = personajes.find(personaje => personaje === "superchica");
console.log(personajeEncontrado);