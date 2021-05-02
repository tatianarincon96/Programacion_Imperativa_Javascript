let estudiantes = require("./estudiantes");

let listaAlumnos = estudiantes.listaAlumnos;
let Alumno = estudiantes.Alumno;

let curso = {
    nombreCurso: "Progamación Imperativa",
    notaAprobacion: 6,
    faltasMaximas: 1,
    listaEstudiantes: listaAlumnos,
    agregarAlumno: function (nombre, faltas, notas) {
        nuevoAlumno = new Alumno(nombre, faltas, notas);
        this.listaEstudiantes.push(nuevoAlumno);
    },
    validarAprobacion: function (alumno) {
        if (alumno.calcularPromedio() > this.notaAprobacion && alumno.cantidadFaltas < this.faltasMaximas) {
            return true;
        } else if (alumno.cantidadFaltas === this.faltasMaximas && alumno.calcularPromedio() > this.notaAprobacion * 1.10) {
            return true;
        } else return false;
    },
    estudianteAprobados: function () {
        let aprobadosYDesaprobados = [];
        for (let i = 0; i < this.listaEstudiantes.length; i++) {
            const element = this.listaEstudiantes[i];
            aprobadosYDesaprobados.push(this.validarAprobacion(element));
        }
        return aprobadosYDesaprobados;
    }
}


console.log(curso.estudianteAprobados());
console.log(listaAlumnos);
curso.agregarAlumno("Karen Gomez", 0, [3,7,5]);
console.log(listaAlumnos);
console.log(curso.estudianteAprobados());
listaAlumnos[0].faltar();
console.log(curso.estudianteAprobados());