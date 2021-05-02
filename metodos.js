let numeros = [12,3,8,10];
let palabras = ["a", "b", "c", "d"];


//let cortar = numeros.slice(0,3); // No incluye al último número
// console.log("----- SLICE -------");
// console.log(cortar);

//let cortar2 = numeros.splice(0,4,10); // Corta, guarda en variable eso eliminado y agrega el último item
/*console.log("----- SPLICE -------");
console.log(numeros);
console.log(cortar2);
*/
function compare(a,b) {
    return a - b;
}
let ordenar = numeros.sort(compare);
console.log("----- SORT -------");
console.log(ordenar);

console.log("----- SORT -------");

