// Bucles - Ciclo FOR

function noParesDeContarImparesHasta(numero){
    let impares = 0;
    for(i=0; i<=numero; i++) {
        i % 2 !== 0 ? impares += 1 : 0;
    }
    return impares;
}

// console.log(noParesDeContarImparesHasta(4));

// Práctica extra Bucles CS6

const puntajes = [12, 34, 56, 34, 5, 8, 76, 4, 1, 90];
for (let index = 0; index < puntajes.length; index++) {
    console.log(puntajes[index]);
}

console.log("------------------- EJERCICIO 2 -----------------");

const preciosSinIva = [1200, 340, 560, 30400, 500, 80, 1000, 90000];
const iva = 1.21;
const limiteParaDescuento = 4000;
const descuento = 0.75; // Esto equivale al 25% de descuento

function guardarPreciosConIva(preciosSinIva) {
    let preciosConIva = []; // No usar variables globales
    for (let i = 0; i < preciosSinIva.length; i++) {
        preciosConIva.push(preciosSinIva[i] * iva);
    }
    return preciosConIva; // Mejor así y hacer return en función
}

function aplicarDescuento(array) { /*en la definición de la función
    puedo llamar como quiera a mis parámetros, de hecho si puedo poner
    nombres muy genéricos como en este caso, puedo pasar cualquier array y
    se puede reutilizar este fragmento para otros propósitos. */
    let res = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > limiteParaDescuento) {
            res.push(array[i] * descuento);
        }
    }
    return res;
}
    
function mostrarPrecios(array) { // Nombre "mostrar array" cualquiera, desacoplar de la otra función
    for (let i = 0; i < array.length; i++) { // Es recomendable empezar let i = 0 por performance, en vez de 1
        console.log(array[i]);
    }
}

const preciosConIva = guardarPreciosConIva(preciosSinIva); // Toda variable que almacena resultado / return de una función ponerla con CONST para resguardar datos
const preciosConDescuento = aplicarDescuento(preciosConIva);
console.log("----- Precios Con IVA -----");
mostrarPrecios(preciosConIva);
console.log("----- Precios Con Descuento -----");
mostrarPrecios(preciosConDescuento);

// Funciones que reciban y retornen algo idealmente

console.log("-------");
console.log("3" * 2);
console.log("3" * "2");
