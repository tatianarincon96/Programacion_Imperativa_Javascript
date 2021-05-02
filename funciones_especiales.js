// Arrow-Functions

let laMitad = (numero) => numero / 2;
console.log(laMitad(8));

let division = (numA, numB) => numA / numB; // Acá solo hago unna operación en 1 línea de código
console.log(division(20, 4));

let tengoQueTrabajar = (dia) => {
  if (dia == "Sábado" || dia == "Domingo") {
    return "No tenés que trabajar";
  } else {
    return "Si, tenés que trabajar";
  }
};
console.log(tengoQueTrabajar("Sábado"));

console.log("------Práctica 2-----");
let esPar = (n) => n % 2 === 0;
console.log(esPar(8));
console.log(esPar(5));

let tipoArray = (tipoDato, array) => {
  let resultado = array.every((elemento) => typeof elemento === tipoDato);
  return resultado;
};

let sumatoriaConArrays = (array) => {
  let suma = 0;
  if (tipoArray("number", array)) {
    array.forEach((elemento) => {
      suma += elemento;
    });
    return suma;
  } else return "Error: array corrupto";
};

console.log("------Arrow function ejemplo con arrays-----");
console.log(sumatoriaConArrays([1, 2, 3, 4])); // Retorna 10
console.log(sumatoriaConArrays([1, 2, "hola", 4])); // Retorna "Error: array corrupto"
console.log(sumatoriaConArrays([10, 20, 30, 40, 50])); // Retorna 150

// Arrow Function Ejercicio extra (con param) - Clase 7

let fizzbuzz = (n1, n2, palabra1, palabra2) => {
  // Multiplos: b es multiplo de a si b = a * n // Osea que b % a = 0 => 14 es multiplo de 7 - 14 = 7*2 y 14%7=0
  let numeros = [];
  for (let i = 1; i <= 100; i++) {
    if (i % n1 === 0 && i % n2 === 0) {
      numeros.push(palabra1 + palabra2);
    } else if (i % n1 === 0) {
      numeros.push(palabra1);
    } else if (i % n2 === 0) {
      numeros.push(palabra2);
    } else numeros.push(i);
  }
  return numeros;
};
console.log(fizzbuzz(2, 4, "Fizz", "Buzz")); // (de 1 a 5) => 1, fizz, 3, fizzbuzz, 5 || (de 1 a 10) => 1, fizz, 3, fizzbuzz, 5, fizz, 7, fizzbuzz, 9, fizz

// AltGr + shift + flechita para seleccionar

// Callbacks

let sumar = (num1, num2) => num1 + num2;
let restar = (num1, num2) => num1 - num2;
let multiplicar = (num1, num2) => num1 * num2;
let dividir = (num1, num2) => num1 / num2;

let calculadora = (num1, num2, operacion) => operacion(num1, num2);
console.log(calculadora(18, 3, dividir));

// Closures

function saludar(persona) {
  let mensaje = "Bienvenidx";
  function nombre() {
    return mensaje + " " + persona;
  }
  return nombre();
}

console.log(saludar("Nacho"));

// Práctica EXTRA CALLBACKS - Microdesafío Paso I

const a = [23, 45, 32];
const b = [12, 67, 75];

const encontrarGanador = function (
  primerParticipante,
  segundoParticipante,
  callback
) {
  let puntajeParticipanteA = 0;
  let puntajeParticipanteB = 0;
  for (let i = 0; i < 3; i++) {
    if (primerParticipante[i] > segundoParticipante[i]) {
      puntajeParticipanteA++;
    } else if (primerParticipante[i] < segundoParticipante[i]) {
      puntajeParticipanteB++;
    }
  }
  return callback(puntajeParticipanteA, puntajeParticipanteB); // Siempre hacer return en función
};

console.log("------ RESULTADOS ------");
console.log(
  "El ganador es el" + encontrarGanador(a, b, enFormatoTexto) + " participante"
);

function enFormatoTexto(puntajeA, puntajeB) {
  let ganador = puntajeA > puntajeB ? "primer" : "segundo";
  return " " + ganador; // Siempre hacer return en función
}

const enFormatoTabla = (jugador1, jugador2) =>
  console.table({ jugador1, jugador2 });

encontrarGanador(a, b, enFormatoTexto);
encontrarGanador(a, b, enFormatoTabla);

// Microdesafío Paso II

function agregarHttp(url) {
  return "http://" + url;
}

function procesar(array, callback) {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    let elemento = array[i];
    newArray.push(callback(elemento));
  }
  return newArray;
}

console.log(procesar(["www.google.com", "www.yahoo.com"], agregarHttp));

// Microdesafío II

let nombresPaginas = ["google", "vivalapepa", "youtube"];

function creadorUrls(elemento) {
  return "www." + elemento + ".com";
}

function arrayUrls(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    const elemento = array[i];
    newArray.push(callback(elemento));
  }
  return newArray;
}

console.log(arrayUrls(nombresPaginas, creadorUrls));

// Microdesafío Paso III
// Sin cortar ejecución

let segundos = 11;
function startCountDown(callback) {
    setInterval(function () {
    segundos--;
    callback();
    }, 3000);
}

// Cortando ejecución con clearInterval()

let seconds = 5;
let stop = setInterval(() => {  // setInterval() retorna un id, en este caso lo llamé stop y que lo necesita clearInterval(stop) para cortar
  console.log(seconds)
  if (seconds === 0) clearInterval(stop)
  seconds--;
}, 1000);

console.log("--------------Ultimo ejercicio----------------");
startCountDown(() => console.log(seconds));
console.log(stop);