// Objetos Literales
let arrayNombreAlumnos = ["Martin", "Juan"];

let tieneMascota = "gato"; // No es buena práctica tener esta variable global
let alumno = {
    nombre: "Tatiana",
    apellido: "Rincon",
    edad: 24,
    profesion: "Estudiante",
    vacunado: false,
    materias: ["Programación Imperativa", "Base de Datos I"],
    saludar(mascota = "Perro") { // Forma simplificada de escribir función, saca el ": function"
        return "Hola, mi nombre es " + this.nombre + " y mi mascota es: " + mascota; // Devuelve y sale - Corta ejecución
    } 
}

console.log(arrayNombreAlumnos[0]);
console.log(alumno.nombre);
console.log(alumno["apellido"]); // Lleva a errores, ya no se usa, se llama Bracket notation
console.log(alumno.saludar());

// Destructuring

let colores = ["rojo", "amarillo", "verde", "negro"];

let [rojo, amarillo, verde, negro] = colores;

console.log(rojo);
console.log(amarillo);
console.log(verde);
console.log(negro);

// Spread Operator 

let coloresPrimarios = ["rojo", "amarillo", "azul"];
let coloresSecundarios = ["naranja", "verde", "violeta"];

let todosLosColores = [...coloresPrimarios, ...coloresSecundarios];

console.log(todosLosColores);

let auto = {
    marca: "Peugeot",
    modelo: "2018"
}

