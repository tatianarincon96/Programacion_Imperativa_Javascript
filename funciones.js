// Funciones declaradas

function ejemplo() {
    return "hola, soy una función";
}

console.log(ejemplo());


// Funciones expresadas

let expresada = function() {
    return "hola, soy una función expresada";
}

console.log(expresada);


// Funciones con parámetros

function saludar(nombre, apellido) {
    return 'Hola, ' + nombre + ' ' + apellido + '!';
}


// Números pares (if/else)

function esPar(n) {
    if (n % 2 == 0) {
        return true
    }  else return false
}

console.log(esPar(10));

// Números pares SIN if/else

function esPar(n) {
    let resultado = n % 2 == 0;
    return resultado
}

console.log(esPar(3));

// Declarando 3 funciones y reutilizándolas

function anterior(n) {
    return n - 1;
}

function triple(n) {
    return n * 3;
}

function anteriorDelTriple(n) {
    return anterior(triple(n));
}

console.log(anterior(3));
console.log(triple(3));
console.log(anteriorDelTriple(3));

// Más ejemplos

function caminar(dir = "adelante") { // valores por defecto
    let pie1 = "Mover pie 1";
    let pie2 = "Mover pie 2";

    console.log("Hacia " + dir);
    console.log(pie1 + "\n" + pie2);
}

caminar();
caminar("la derecha");
caminar("la izquierda");

// procedimiento 
// console.log() -> Método - el .log() es un método de consola

// funciones -> 2x + 5 = f(x) -> función de x - Le meto x a la máquina, hace operación y me retorna resultado

function f(x) {
    return 2 * x + 5;
}

console.log(f(5));