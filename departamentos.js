let fs = require('fs');
let contenido = fs.readFileSync('./departamentos.json', 'utf-8');
let departamentos = JSON.parse(contenido);

console.log("------------------ Corroborando que el archivo se haya parseado --------------------");
console.log(departamentos);


const inmobiliaria = {
    departamentos: departamentos,
    departamentosDisponibles: function () {
        return this.departamentos.filter(depto => depto.disponible);
    },
    listarDepartamentos: function (departamentos) {
        departamentos.forEach(depto => console.log("Depto ID: " + depto.id + ". Precio alquiler: " + depto.precioAlquiler + ". Disponibilidad: " + (depto.disponible ? "Disponible" : "Alquilado")));
    },
    buscarPorId: function (identificador) {
        return this.departamentos.find(depto => depto.id === identificador ? depto : 0);
    },
    buscarPorPrecio: function(precio) {
        return this.departamentosDisponibles().filter(depto => depto.precioAlquiler <= precio);
    },
    ordenarPorPrecio: function() {
        return this.departamentos.sort((a,b) => a.precioAlquiler - b.precioAlquiler);
    },
    precioConImpuesto: function(porcentaje){
        return this.departamentos.map(depto => `Precio alquiler del depto ${depto.id} incrementado: $` + (depto.precioAlquiler * (1 + porcentaje / 100)).toFixed(2));
    },
    alquilar: function(id) {
        return this.departamentosDisponibles().find(depto => depto.id === id ? depto.disponible = false : 0);
    },
    calcularElIngreso: function() {
        let alquilados = this.departamentos.filter(depto => depto.disponible === false ? depto : 0);
        let ingresoPorAlquiler = alquilados.map(depto => depto.precioAlquiler);
        let ingresoTotal = ingresoPorAlquiler.reduce((acum,suma) => {
            return acum + suma; 
        }); 
        return "La suma de ingresos de los deptos alquilados es: $" + ingresoTotal.toFixed(2);
    },
    comentar: function (comentario,puntuacion) {
        this.departamentos.forEach(depto => (depto.comentarios.comentario = comentario) && (depto.comentarios.puntuacion = puntuacion));
        return "Comentario realizado con éxito";
    },
    preferenciasCliente: function (cantHabitaciones,mascotas,cantPersonas,precioAlquiler) {
        let deptosDisponibles = this.departamentosDisponibles();
        return deptosDisponibles.filter(depto => (depto.cantidadHabitacion === cantHabitaciones) && (depto.aceptaMascotas === mascotas) && (depto.cantidadPersonas === cantPersonas) && (depto.precioAlquiler <= precioAlquiler));
    }
}


console.log("------------------ Departamentos Disponibles --------------------");
console.log(inmobiliaria.departamentosDisponibles());
console.log("------------------ Listar Departamentos --------------------");
inmobiliaria.listarDepartamentos(departamentos);
console.log("------------------ Buscar por ID --------------------");
console.log(inmobiliaria.buscarPorId(17));
console.log("------------------ Buscar por Precio --------------------");
console.log(inmobiliaria.buscarPorPrecio(1000));
console.log("------------------ Ordenar por Precio --------------------");
console.log(inmobiliaria.ordenarPorPrecio());
console.log("------------------ Precio con Immpuesto --------------------");
console.log(inmobiliaria.precioConImpuesto(10));
console.log("------------------ Alquilar --------------------");
console.log(inmobiliaria.buscarPorId(17));
inmobiliaria.alquilar(17);
console.log(inmobiliaria.buscarPorId(17));
console.log("------------------ Calcular Ingreso --------------------");
console.log(inmobiliaria.calcularElIngreso());
console.log("------------------ Comentario --------------------");
console.log(inmobiliaria.comentar("Hola",5));
console.log(inmobiliaria.departamentos);
console.log("------------------ Características requeridas por cliente --------------------");
console.log(inmobiliaria.preferenciasCliente(3,true,4,8000));
