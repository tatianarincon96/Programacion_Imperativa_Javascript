// Cuenta Bancaria

let cuenta = {
    numeroCuenta: 2341938366, 
    saldo: 0,
    titular: "Tatiana Rincon",
    deposito: function(cantidadDinero) {
        this.saldo += cantidadDinero;
        return "Se realizó el depósito con éxito. Su saldo actual es: $" + this.saldo;
    },
    extraccion: function(cantidadDinero) {
        if (this.saldo < cantidadDinero) {
            return "Fondos insuficientes";
        } else {
            this.saldo -= cantidadDinero;
            return "Se realizó la extracción con éxito. Su saldo actual es: $" + this.saldo;    
        }
    }    
}

console.log(cuenta.deposito(3000));
console.log(cuenta.extraccion(2500));


function CreadorDeCuentas(numeroCuenta,saldo,titular) {
    this.numeroCuenta = numeroCuenta,
    this.saldo = saldo,
    this.titular = titular,
    this.deposito = function(cantidadDinero) {
        this.saldo += cantidadDinero;
        return "Se realizó un depósito. Su saldo actual es: $" + this.saldo;
    },
    this.extraccion = function(cantidadDinero) {
        if (this.saldo < cantidadDinero) {
            return "Fondos insuficientes";
        } else {
            this.saldo -= cantidadDinero;
            return "Se realizó una extracción. Su saldo actual es: $" + this.saldo;    
        }
    }
}

let cuenta2 = new CreadorDeCuentas(3245526,3000,"Jorgito");
let cuenta3 = new CreadorDeCuentas(5436352,2000,"Lisa");
let cuenta4 = new CreadorDeCuentas(7643672,1000,"Mona");

console.log();
console.log(cuenta2.extraccion(2000));
console.log(cuenta3.deposito(1000));
console.log(cuenta3.extraccion(3000));
console.log(cuenta4.extraccion(3000));


// Calculador de notas

let alumno = {
    nombre: "Tatiana",
    numeroLegajo: 1234,
    listaNotas: [9,7,8,10,4,6,2],
    sacarPromedio: function () {
        let sumaDeNotas = 0;
        let cantidadNotas = this.listaNotas.length;
        let promedio;
        for (let i = 0; i < this.listaNotas.length; i++) {
            const element = this.listaNotas[i];
            sumaDeNotas += element;    
        }
        return promedio = sumaDeNotas / cantidadNotas; 
    },
    estaAprobadoONo: function (notaAprobacion) {
        if (this.sacarPromedio() >= notaAprobacion) {
            return this.nombre + " estás aprobad@, felicitaciones!";
        } else return `${this.nombre} estás desaprobad@, deberías esforzarte más.`;
    }
}

console.log("--------------- Calculador de notas --------------");
console.log(alumno.estaAprobadoONo(7));
// Refactorizar