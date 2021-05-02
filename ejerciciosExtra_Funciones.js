// ¿Qué devuelve la consola?
// Ejercicio 1

function test1(x,y) {
    return y - x;
}

test1(10,40); // Devuelve 30

// Ejercio 2
function test2(x,y) {
    return x * 2; // return corta ejecución, el resto NO SE EJECUTA
    console.log(x);
    return x / 2;
}

test2(10);

// Ejercicios varios
// Primer ejercicio

function dePulgadasACentimetros(pulgadas) {
    return pulgadas * 2.54;
}

console.log(dePulgadasACentimetros(2));

// Segundo ejercicio

function creandoUrls(string) {
    return "http://www." + string + ".com";
}

console.log(creandoUrls("pepito"));

// Tercer ejercicio

function conAdmiracion(string) {
    return "¡" + string + "!";
}

console.log(conAdmiracion("Hola mundo"));

// Cuarto ejercicio

function edadEnAñosDePerros(edad) {
    return edad * 7;
}

console.log(edadEnAñoDePerros(2));

// Quinto ejercicio

function estaEnMayus(string) {
    return string.toUpperCase() === string ? true : false;
}

console.log(estaEnMayus("hola"));
console.log(estaEnMayus("HOLA"));

// Sexto ejercicio

function tipoDeDato(dato) {
    return typeof dato; // typeof devuelve el tipo de dato
}

console.log(tipoDeDato("Hi"));
console.log(tipoDeDato(true));
console.log(tipoDeDato(13));

// Séptimo ejercicio

function cifradoCesar(string,corrimiento) {
    for (let i = 0; i < string.length; i++) {
        const element = string.indexOf(i);
        
    }
}