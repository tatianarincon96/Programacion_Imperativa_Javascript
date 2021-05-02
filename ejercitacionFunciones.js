let suma = function(n1, n2) {
    return n1 + n2;
}

let resta = function(n1, n2) {
    return n1 - n2;
}

let multiplicacion = function(n1, n2) {
    return n1 * n2;
}

let division = function(n1, n2) {
    return n1 / n2;
}

// console.log(suma(2,2));


let nombreJugador = "Lucas";
let golesJugador = 0;
let precioEnDolares = 0;

function hacerGol() {
   golesJugador++;
   console.log("GOOOOOOL!!!!!!"); 
   precioEnDolares += 10000;
   console.log ("La cantidad de goles de " + nombreJugador + " es " + golesJugador + " y el precio del jugador es $" + precioEnDolares);
}

function hattrick () {
    
    hacerGol();
    hacerGol();
    hacerGol();

    precioEnDolares = 1.10 * precioEnDolares;
    console.log(nombreJugador + " obtuvo un 10% extra anual por ser goleador y ahora su precio en dólares es " + precioEnDolares);
}

hattrick();
