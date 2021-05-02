let dato = true;

function condicionales(dato) {
    if (dato) {
        return "es true"; // si no fuese funcion, podría ir un console.log();
    } else {
        return "es false";
    }
}

console.log(condicionales(dato));

// Ejemplo 2

let lenguaje = "javascript";

if (lenguaje === "javascript") {
    return "Estoy aprendiendo";
} else {
    return "Lo aprenderé más adelante";
}

// Ejemplo 3

function puedePasar(nombre) {
    if (nombre === "Cosme Fulanito") {
        return false;
    } else {
        return true;
    }
}

// Ejemplo de if/else a switch

function finDeSemana (dia) {	
	if (dia === 'viernes') {
    	console.log('buen finde')
	} else if (dia === 'lunes') {
    	console.log('buena semana')
	} else {
    	console.log('buen dia')
	}
}

function finDeSemana(diaa) {	
	switch (diaa) {
        case 'viernes':
    	console.log('buen finde');
		break;
        case 'lunes':
    	console.log('buena semana');
        break;
        default:
    	console.log ('buen dia');
		break;
	}
}

// ejemplo switch

function tengoClases(dia) {
	switch (dia) {
    	case 'lunes' || 'miercoles' || 'viernes':
		console.log('tenés clases');
		break;
		default:
		console.log('no tenés clases');
		break;
	}
}


// uso del break

function tengoClases(dia) {
	switch (dia) {
    	case 'lunes':
		case 'miércoles':
		case 'viernes':
		console.log('tenés clases');
		break; // Hace solo un break acá porque es el momento en que cambia el console.log (???)
		default:
		console.log('no tenés clases');
	}
}