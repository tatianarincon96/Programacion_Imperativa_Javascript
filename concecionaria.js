let autos = require("./evaluacion");

let concesionaria = {
    autos: autos,
    buscarAuto: function (patente) {
        for (let i = 0; i < this.autos.length; i++) {
            const elemento = this.autos[i];
            if (elemento.patente === patente) {
                return elemento;
            }
        }
        return null; // Usarlo afuera del for.. sino va a romper antes y no itera la cant. de veces que debería
    },
    venderAuto: function (patente) {
        let auto = this.buscarAuto(patente);
        return auto != null ? auto.vendido = true : false;
    },
    autosParaLaVenta: function() {
        let autosParaVender = [];
        for (let i = 0; i < autos.length; i++) {
            const elemento = autos[i];
            elemento.vendido == false ? autosParaVender.push(elemento) : false;
        }
        return autosParaVender;
    }, 
    autosNuevos: function() {
        let autosParaVender = this.autosParaLaVenta();
        let autos0km = [];
        for (let i = 0; i < autosParaVender.length; i++) {
            const elemento = autosParaVender[i];
            elemento.km < 100 ? autos0km.push(elemento) : false;
        }
        return autos0km;
    },
    listaDeVentas: function() {
        let listaPrecios = [];
        for (let i = 0; i < autos.length; i++) {
            const elemento = autos[i];
            elemento.vendido ? listaPrecios.push(elemento.precio) : false;
        }
        return listaPrecios;
    },
    totalDeVentas: function() {
        let listaPrecios = this.listaDeVentas();
        let totalVentas = 0;
        for (let i = 0; i < listaPrecios.length; i++) {
            const elemento = listaPrecios[i];
            totalVentas += elemento;
        }
        return totalVentas;
    },
    puedeComprar: function(auto,persona) {
        if (auto.precio <= persona.capacidadDePagoTotal && auto.precio / auto.cuotas <= persona.capacidadDePagoEnCuotas) {
            return true;
        } else return false; 
    },
    autosQuePuedeComprar: function(persona) {
        let autosVenta = this.autosParaLaVenta();
        let efectivamentePuedeComprar = [];
        for (let i = 0; i < autosVenta.length; i++) {
            const elemento = autosVenta[i];
            if (this.puedeComprar(elemento,persona)) {
                efectivamentePuedeComprar.push(elemento);
            } else false;
        }
        return efectivamentePuedeComprar;
    }
}

let persona = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
}


console.log("-------------");
//concesionaria.venderAuto("APL123");
//console.log(autos);
console.log(concesionaria.buscarAuto("APL123"));
console.log("-------------");
console.log(concesionaria.buscarAuto("JJK116"));
//console.log(concesionaria.autosParaLaVenta());
//console.log(concesionaria.autosNuevos());
//console.log(concesionaria.listaDeVentas());
//console.log(concesionaria.totalDeVentas());
//console.log(concesionaria.buscarAuto("ffff"));


/*
buscarAuto: function (patente) {
      return this.autos.find(auto => auto.patente == patente);
   },

function buscarAuto(patente) {
    let buscandoAuto = autos.filter(function(numero){
        return numero.patente == patente
    }) 
    return buscandoAuto

buscarAuto:function(patente) {
      return autos.find(auto => auto.patente === patente) || null;
   }
};
*/
