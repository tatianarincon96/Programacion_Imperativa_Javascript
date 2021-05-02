// Ejemplos if ternario

function semaforoPeatonal(verde) {
    return verde ? "Puede cruzar" : "Debe esperar"; 
}

console.log(semaforoPeatonal(true));
console.log(semaforoPeatonal(false));

function mayorDeEdad(edad) {
    return edad >= 18 ? "Es mayor de edad" : "Es menor de edad"; 
}

console.log(mayorDeEdad(18));
console.log(mayorDeEdad(15));
console.log(mayorDeEdad(21));

// Ejercicio 1: Par o Impar

function parOImpar(numero) {
    return numero % 2 === 0 ? "Par" : "Impar"; 
}

console.log(parOImpar(4));
console.log(parOImpar(5));

// Ejercicio 2: Pagó el peaje o no

function pagoElPeaje(pagado) {
    return pagado ? "Se levanta barrera" : "Barrera baja, pague el peaje";
}

console.log(pagoElPeaje(true));
console.log(pagoElPeaje(false));

// Ejercicio 3: Números al azar

function esElMismo(numero) {
    return numero === Math.floor(Math.random() * 11) ? true : false;
}

console.log(esElMismo(4));
console.log(esElMismo(10));
console.log(esElMismo(0));
console.log(esElMismo(2));
console.log(esElMismo(5));

// Ejercicio 4: Es navidad o no

function esNavidad(fecha) {
    const navidad = "25/12";
    return fecha === navidad ? true : false;
}

console.log(esNavidad("13/11"));
console.log(esNavidad("25/12"));

// Ejercicio 5: Cuántos días tiene el mes

function cuantosDiasTiene(mes) {
    switch(mes) {
        case "Febrero":
            return "Tiene 28 días";
            break;
        case "Abril":
        case "Junio": 
        case "Septiembre": 
        case "Noviembre":
            return "Tiene 30 días";
            break;
        default:
            return "Tiene 31 días";
    }
}

console.log(cuantosDiasTiene("Febrero"));
console.log(cuantosDiasTiene("Agosto"));
console.log(cuantosDiasTiene("Junio"));

// Ejercicio 6: Alumno aprueba o desapruba

function condicionDelAlumno(nota) {
    return nota < 4 ? "Recursa" : nota < 7 ? "Recuperatorio" : "Aprueba";
}

console.log(condicionDelAlumno(3));
console.log(condicionDelAlumno(7));
console.log(condicionDelAlumno(5));

// Ejercicio 7: Puede abrir paracaidas o no

function debeAbrirParacaidas(altura,velocidad) {
    let alturaMin = 2000;
    let alturaMax = 3000;
    let velocidadMax = 1000; 

    return altura >= alturaMin && altura <= alturaMax && velocidad < velocidadMax ? true : false;
}

console.log(debeAbrirParacaidas(2500,900));
console.log(debeAbrirParacaidas(3000,800));
console.log(debeAbrirParacaidas(1900,900));
console.log(debeAbrirParacaidas(2500,1000));

// Ejercicio 8: El sandwich

function precioSandwich(tomate,papa,huevo) {
    let precioBase = 150;
    let precioFinal = precioBase;
    let ingredientes = ["tomate", "papa", "huevo"];

    for (let i = 0; i < ingredientes.length; i++) {
        const elemento = ingredientes[i];
        switch (elemento) {
            case "tomate":
                tomate ? precioFinal += 20 : precioFinal;
                break;
            case "papa":
                papa ? precioFinal += 50 : precioFinal;
                break;
            default:
                huevo ? precioFinal += 60 : precioFinal;
        }   
    }

    return "El precio final del sandwich es $" + precioFinal;
}

console.log(precioSandwich(true,true,true));
console.log(precioSandwich(false,false,false));
console.log(precioSandwich(true,true,false));
console.log(precioSandwich(true,false,true));
console.log(precioSandwich(false,true,true));
console.log(precioSandwich(false,false,true));
console.log(precioSandwich(false,true,false));
console.log(precioSandwich(true,false,false));

// Resolución 2 del sandwich

function sandwich(tom,pap,hue) {
    let base = 150;
    const tomate = 20;
    const papa = 50;
    const huevo = 60;
    let precioFinal = base;

    if (tom) {
        precioFinal = precioFinal + tomate;
    }
    if (pap) {
        precioFinal = precioFinal + papa;
    }
    if (hue) {
        precioFinal = precioFinal + huevo;
    }
    return precioFinal;
}

// Resolución 3 del sandwich con if ternario

function sandwichPrecio(tomate,papas,huevo) {
    let base = 150;
    base += tomate ? 20 : 0;
    base += papas ? 50 : 0;
    base += huevo ? 60 : 0;
    return base;   
}

// Consigna SWITCH

function aQueEstacionPertenece(mes) {
    let estacionClimatica;
    
    switch (mes) {
        case "Enero":
        case "Febrero":    
            estacionClimatica = " pertenece al verano";
            break;
        case "Marzo": 
            estacionClimatica = " pertenece al verano y al otoño";
            break;
        case "Abril":
        case "Mayo":    
            estacionClimatica = " pertenece al otoño";
            break;
        case "Junio":
            estacionClimatica = " pertenece al otoño y al invierno";
            break; 
        case "Julio":
        case "Agosto":    
            estacionClimatica = " pertenece al invierno";
            break;  
        case "Septiembre": 
            estacionClimatica = " pertenece al invierno y a la primavera";
            break;  
        case "Diciembre": 
            estacionClimatica = " pertenece a la primavera y al verano";
            break; 
        default:
            estacionClimatica = " pertenece a la primavera";
    }
    return mes + estacionClimatica;  
}

console.log(aQueEstacionPertenece("Enero"));
console.log(aQueEstacionPertenece("Mayo"));
console.log(aQueEstacionPertenece("Agosto"));
console.log(aQueEstacionPertenece("Noviembre"));
console.log(aQueEstacionPertenece("Marzo"));
console.log(aQueEstacionPertenece("Junio"));
console.log(aQueEstacionPertenece("Septiembre"));
console.log(aQueEstacionPertenece("Diciembre"));

