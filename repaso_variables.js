let vaso1 = "rojo";
let vaso2 = "azul";

console.log("Vaso 1: " + vaso1 + "\nVaso 2: " + vaso2); // \n salto de línea
console.log("---------------");

let aux = vaso1;
vaso1 = vaso2;
vaso2 = aux;
console.log("Vaso 1: " + vaso1 + "\nVaso 2: " + vaso2);

let n1 = 18;
let n2 = 18;

console.log(17 == n1--); // primero compara y después resta
console.log(17 == --n2); // primero resta y después compara

let num = 3;
console.log(num--); // Ejecuta operación después de hacer el console.log
console.log(num); //a-- * 2 = a * 2 y después a - 1
