alturaMin = 120;
alturaMax = 200;

// Versión 1

const puedeSubirValen = function (altura, tieneCompania, penalizado) {
	return ((altura > 140 && altura < 200) || 
	(altura >= 120 && altura <= 140 && tieneCompania)) && !penalizado;
}

// Versión 2

function puedeSubir(altura,vieneAcompañado, penalizado) {
	let podraSubir = false; // buena práctica verlo en variable
	
	if(altura >= 140 && altura <= alturaMax) {
		podraSubir = true;
	} else if (altura >= alturaMin && altura <= 140 && vieneAcompañado) {
		podraSubir = true;
	} else podraSubir = false;

	return podraSubir;
} // falta optimizacion, pero bien

/*
else if (altura < alturaMin || altura > alturaMax || (altura >= alturaMin && !vieneAcompañado) || penalizado) {
		podraSubir = false;
	}
*/ 

console.log(puedeSubir(145, false, false));
console.log(puedeSubir(145, true, false));

console.log(puedeSubir(122, false, false));
console.log(puedeSubir(122, true, false));

console.log(puedeSubir(119, true, false));
console.log(puedeSubir(119, false, false));

console.log(puedeSubir(201, true, false));
console.log(puedeSubir(201, false, false));

console.log(puedeSubir(120,true, false));
console.log(puedeSubir(140,false, false));
console.log(puedeSubir(140,true, false));
console.log(puedeSubir(200,true, true));
console.log("--------------------");

// Versión 3

function sube(altura, acompañado, penalizado) {
	if (altura > alturaMax || altura < alturaMin || penalizado) {
		return false;
	} else if (altura >= 140) {
		return true;
	} else if (acompañado) {
		return true;
	} else {
		return false;
	}
}
/*
console.log(sube(145, false, true));
console.log(sube(145, true, false));

console.log(sube(122, false, false));
console.log(sube(122, true, false));

console.log(sube(119, true, false));
console.log(sube(119, false, false));

console.log(sube(201, true, false));
console.log(sube(201, false, false));
*/