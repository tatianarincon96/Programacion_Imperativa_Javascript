// MICRODESAFÍOS
// Ejercicio 1

function cuenta(array) {
    let sumatoria = array.reduce( function (acum,numero) {
        return acum + numero;
    });
    let newArray = array.map(e => e / sumatoria);
    return newArray;
}
console.log("------------ EJERCICIO 1 -----------------");
console.log(cuenta([10,10,10]));

// Ejercicio 1
function filtrando(array, numero) {
    let newArray = array.filter(e => e.length > numero);
    return newArray;
}

console.log("------------ EJERCICIO 2 -----------------");
console.log(filtrando(["coca","leche","pan"],3));

// Ejercicio 3

let estudiantes = [
    alumno = {
        nombre: "Joaquin",
        notas: [9,7,9],
    },
    alumno2 = {
        nombre: "Luna",
        notas: [10,5,8],
    },
    alumno3 = {
        nombre: "Agustina",
        notas: [7,6,8],
    }
];

function ordenarNombres(array) {
    return array.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
}

function ordenarNotas(array) {
    return array.sort((a,b) => (a.notas.sort((a, b) => a - b) < b.notas.sort((a,b) => a - b)) ? 1 : -1);
} // Revisar esta funcion

console.log("------------ EJERCICIO 3 -----------------");
console.log(estudiantes);
console.log("------------ Ordenar Nombres -----------------");
console.log(ordenarNombres(estudiantes));
console.log("------------ Ordenar Notas -----------------");
console.log(ordenarNotas(estudiantes));