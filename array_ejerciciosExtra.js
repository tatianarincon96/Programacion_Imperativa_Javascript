// Ejercicio 1
console.log("-----------------------  EJERCICIO 1 ---------------------------");

function invertir(array) {
    let newArray = [];
    newArray.push(array.pop());
    newArray.push(array.pop());
    newArray.push(array.pop());
    newArray.push(array.pop());
    return newArray;
}

console.log(invertir([1,2,3,4]));
console.log(invertir(["A","B","C","D"]));


// Funcion invertir optimizada

function invertir1(array) {
    let condicion = array.length; // Creo una variable para guardar el valor del largo del array y que de esta manera no se modifique en la condicion del for cada vez que itera y extrae un valor con pop()
    let newArray = [];
    for (i = 0; i < condicion; i++) {
        newArray.push(array.pop());     
    }
    return newArray;
}

console.log(invertir1([1,2]));
console.log(invertir1([1,2,3,4,5,6]));

// Ejercicio 2
console.log("-----------------------  EJERCICIO 2 ---------------------------");

function pares(array) {
    let numerosPares = [];
    for (i = 0; i < array.length; i++) {
        let elemento = array[i];
        elemento % 2 === 0 ? numerosPares.push(elemento) : false;
    }
    return numerosPares;
}

console.log(pares([1,2,3,4]));
console.log(pares([21,24,33,56]));

// Ejercicio 3
console.log("-----------------------  EJERCICIO 3 ---------------------------");

function tipoArray1(tipoDato,array) {  
    esElMismoTipo = 0;
    typeof array[0] !== tipoDato ? esElMismoTipo += 1 : 0;
    typeof array[1] !== tipoDato ? esElMismoTipo += 1 : 0;
    typeof array[2] !== tipoDato ? esElMismoTipo += 1 : 0;
    typeof array[3] !== tipoDato ? esElMismoTipo += 1 : 0;
    return esElMismoTipo === 0 ? true : false;
}

console.log(tipoArray1("number", [1,2,3,4])); // Retorna true 
console.log(tipoArray1("number", [1,2,"hola", 4])); // Retorna false
console.log(tipoArray1("string", [1,2,"hola", "chau"])); // Retorna false
console.log(tipoArray1("string", ["hi","bonjour","hola", "bom dia"])); // Retorna true
console.log(tipoArray1("boolean", [1,true,"hola", false])); // Retorna false
console.log(tipoArray1("boolean", [true,true,false, false])); // Retorna true


// Segunda solución al ejercicio 3

function tipoArray(tipoDato,array) {
    let resultado = array.every(elemento => typeof elemento === tipoDato);
    return resultado;
}

console.log("-------------- Segunda Solución - Resultados --------------");
console.log(tipoArray("number", [1,2,3,4])); // Retorna true 
console.log(tipoArray("number", [1,2,"hola", 4])); // Retorna false
console.log(tipoArray("string", [1,2,"hola", "chau"])); // Retorna false
console.log(tipoArray("string", ["hi","bonjour","hola", "bom dia"])); // Retorna true
console.log(tipoArray("boolean", [1,true,"hola", false])); // Retorna false
console.log(tipoArray("boolean", [true,true,false, false])); // Retorna true

// Ejercicio 4
console.log("-----------------------  EJERCICIO 4 ---------------------------");

function sumatoriaConArrays(array) {
    let suma = 0;
    if (tipoArray("number", array)) {
        array.forEach(elemento => {
            suma += elemento;
        });
        return suma;
    } else return "Error: array corrupto";
}

console.log(sumatoriaConArrays([1,2,3,4])); // Retorna 10 
console.log(sumatoriaConArrays([1,2,"hola", 4])); // Retorna "Error: array corrupto"
console.log(sumatoriaConArrays([10,20,30,40,50])); // Retorna 150 


// Ejercicio 5
console.log("-----------------------  EJERCICIO 5 ---------------------------");

// Funciones extras 

function sonEnteros(array) {
    if (tipoArray("number", array)) {
        let resultado = array.every(elemento => Number.isInteger(elemento));
        return resultado;
    } else return "Alguno no es entero";
}

function impares(array) {
    let numerosImpares = [];
    for (i = 0; i < array.length; i++) {
        let elemento = array[i];
        elemento % 2 !== 0 ? numerosImpares.push(elemento) : false;
    }
    return numerosImpares;
}


// Conjunto de todas las funciones creadas anteriormente

function conjuntoDeFunciones(array) {
    let arrayPar = pares(array);
    let sumatoria = sumatoriaConArrays(arrayPar);
    let arrayNueva = impares(array);
    arrayNueva.push(sumatoria);
    return sonEnteros(arrayNueva) ? invertir1(arrayNueva) : arrayNueva;
}

console.log(conjuntoDeFunciones([1,2,3,4])); // Retorna [6,3,1] 
console.log(conjuntoDeFunciones([10,5,7,12])); // Retorna [22,7,5] 
console.log(conjuntoDeFunciones([1.5,2,3,4])); // Retorna [1.5,3,6] 


// Otro ejemplo de varias funciones con strings

function mensajeInverso(tipoDato,array) {
    return tipoArray(tipoDato,array) ? invertir1(array) : "Mensaje corrupto";
}

console.log(mensajeInverso("string",["A","H", "O", "L", "A"]));
console.log(mensajeInverso("string",["H", "O", "L", "A",22]));

// Extra

function aplanar(array) { // Se puede hacer con for anidados
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        const elemento = array[i];
        newArray.push(...elemento);
    }
    return newArray;
}

let arr = [[1,2,3],[4,5,6],[7,8,9],[10]]; // Primer array y primer elemento de ese => array[0][0]
console.log("------ Ejercicio Extra -----------");
console.log(aplanar(arr)); // [1,2,3,4,5,6,7,8,9,10]


