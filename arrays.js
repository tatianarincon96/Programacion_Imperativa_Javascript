let films = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"];
let cartoons = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

console.log("-----------------Ejercicio 1-------------------");

function segundoElemento() { 
    return films[1];
}

console.log(segundoElemento());

console.log("-----------------Ejercicio 2 - ToUpperCase-----------------");

function upperCase(array) {
    let newArray = [];
    
    newArray[0] = array[0].toUpperCase();
    newArray[1] = array[1].toUpperCase();
    newArray[2] = array[2].toUpperCase();
    newArray[3] = array[3].toUpperCase();
    newArray[4] = array[4].toUpperCase();

    return newArray;
}

console.log(films);
console.log(upperCase(films));

console.log("-----------------Ejercicio 2 - Otra solución--------------------");

let allFilms = [];
const arrayToUpperCase = function (array, index) {
    allFilms[index] = array[index].toUpperCase();
};

console.log(films);
arrayToUpperCase(films, 0);
arrayToUpperCase(films, 1);
arrayToUpperCase(films, 2);
arrayToUpperCase(films, 3);
arrayToUpperCase(films, 4);
console.log(allFilms);

console.log("------------------Ejercicio 3 y 4--------------------");

function pushItem(array, index) {
    films.push(array[index])
};

console.log(films);

let videojuegos = [cartoons.pop()];

pushItem(cartoons,0);
pushItem(cartoons,1);
pushItem(cartoons,2);
pushItem(cartoons,3);
pushItem(cartoons,4);
console.log(films);
console.log(videojuegos);

console.log("------------------Ejercicio 5--------------------");

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9];

function comparandoCalificaciones(array1, array2, index) {
    return array1[index] === array2[index] ? "Son iguales" : "Son distintas"; // con if ternario
}

/* if (array1[index] === array2[index]) {
    return "Son iguales";
   } else return "Son distintas";
   Con if/else normal 
*/ 

console.log(comparandoCalificaciones(asiaScores,euroScores,0)); // true, son iguales
console.log(comparandoCalificaciones(asiaScores,euroScores,1)); // true, son iguales
console.log(comparandoCalificaciones(asiaScores,euroScores,2)); // true, son iguales
console.log(comparandoCalificaciones(asiaScores,euroScores,3)); // false, son distintas
console.log(comparandoCalificaciones(asiaScores,euroScores,4)); // true, son iguales
console.log(comparandoCalificaciones(asiaScores,euroScores,5)); // true, son iguales
console.log(comparandoCalificaciones(asiaScores,euroScores,6)); // false, son distintas
console.log(comparandoCalificaciones(asiaScores,euroScores,7)); // false, son distintas


