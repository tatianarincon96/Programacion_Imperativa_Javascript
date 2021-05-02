// let clases = require('./clases.json'); Requerir al json directamente

let fs = require ("fs");

let contenido = fs.readFileSync('clases.json','utf-8'); // {encoding:'utf-8'} antes

let clases = JSON.parse(contenido);

//clases.forEach(e => console.log(e.titulo));

function clasificar(array, estado) {
    let ordenadaPorEstado = [];
    array.filter(clase => clase.estado === estado ? ordenadaPorEstado.push(clase) : 0);
    return ordenadaPorEstado;
}


let terminadas = clasificar(clases,"terminada");
let paraRepasar = clasificar(clases,"repasar");
let pendientes = clasificar(clases,"pendiente");


let archivoTerminadas = () => { 
    clasesTerminadas = JSON.stringify(terminadas);
    fs.writeFileSync('terminadas.json', clasesTerminadas);
}
let archivoParaRepasar = () => { 
    clasesParaRepasar = JSON.stringify(paraRepasar);
    fs.writeFileSync('paraRepasar.json', clasesParaRepasar);
} 
let archivoPendientes = () => { 
    clasesPendientes = JSON.stringify(pendientes);
    fs.writeFileSync('pendientes.json', clasesPendientes);
} 

archivoTerminadas();
archivoParaRepasar();
archivoPendientes();

/*
console.log("----- Resultado -----");
console.log(clasificar(clases,"terminada"));
console.log(clasificar(clases,"repasar"));
console.log(clasificar(clases,"pendiente"));
*/