let Alumno = function (nombre, cantidadFaltas, notas) {
    this.nombre = nombre,
    this.cantidadFaltas = cantidadFaltas,
    this.notas = notas,
    this.calcularPromedio = function () {
        let sumatoria = 0;
        for (let i = 0; i < this.notas.length; i++) {
            const element = this.notas[i];
            sumatoria += element
        }
        let promedio = sumatoria / this.notas.length;
        return promedio; 
    },
    this.faltar = function () {
        this.cantidadFaltas++;
    }
}

let listaAlumnos = [new Alumno("Tatiana Rincon", 0, [6, 7, 8]), // Aprueba
    new Alumno("Juana Valente", 0, [6, 10, 9]), // Aprueba
    new Alumno("Sol Peralta", 2, [4, 6, 9]), // Desaprueba
    new Alumno("Rodrigo Guerrero", 1, [10, 6, 8]) // Aprueba
];

module.exports = {listaAlumnos,Alumno};


/* Promedio:
let cantidadNotas = this.notas.length;
        return cantidadNotas > 0 ?
            this.notas.reduce((acumulador, nota) => acumulador += nota) / cantidadNotas : -1;
*/
