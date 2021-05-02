/*
const nombre = "Nicolás Lopez"; // String
let edad = 27; // Number
let peso = 83.5; // Number
let altura = 1.70; // Number
let tienePrepaga = true; // Boolean 

const nombre = "Esteban Piazza"; // String
let edad = 28; // Number
let peso = 80.1; // Number
let altura = 1.76; // Number
let tienePrepaga = true // Boolean

const nombre = "José Fermoso"; // String
let edad = 33; // Number
let peso = 63.7; // Number
let altura = 1.53; // Number
let tienePrepaga = false; // Bollean -> Podría ir Null

const nombre = "Juana Fernandez"; // String
let edad = 26; // Number
let peso = 55.0; // Number
let altura = 1.62; // Number
let tienePrepaga = true; // Booolean 

let imc = peso / (altura ** 2) // ** es para elevar un núm a otro
*/


// Ejemplo con OBJETO LITERAL

const paciente1 = {
    nombre : "Nicolás Lopez", 
    edad : 27,
    peso : 83.5,
    altura : 1.70,
    prepaga : true
}

const paciente2 = {
    nombre : "Esteban Piazza",
    edad : 28,
    peso : 80.1,
    altura : 1.76,
    prepaga : true
}

const paciente3 = {
    nombre : "José Fermoso",
    edad : 33,
    peso : 63.7,
    altura : 1.53,
    prepaga : false
}

const paciente4 = {
    nombre : "Juana Fernandez",
    edad : 26,
    peso : 55.0,
    altura : 1.62,
    prepaga : true
}

const yo = {
    nombre : "Tatiana Rincon",
    edad : 24,
    peso : 58.0,
    altura : 1.63,
    prepaga : true
}

let nombre = paciente4.nombre;
let edad = paciente4.edad;
let peso = paciente4.peso;
let altura = paciente4.altura;
let tienePrepaga = paciente4.tienePrepaga;
const imc = peso / (altura**2);
const mensaje = nombre + " tiene " + edad + " años y su índice de masa corporal es de " + imc
console.log(mensaje);

/*
nicolasLopez.edad = 28;
console.log(nicolasLopez.edad); 
*/