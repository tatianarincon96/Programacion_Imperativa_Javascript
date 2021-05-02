const a = [23, 45, 32];
const b = [12, 67, 7];

function encontrarGanador(part1, part2) {
    let puntosParticipante1 = 0;
    let puntosParticipante2 = 0;

    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            puntosParticipante1++;
        } else if (a[i] < b[i]) {
            puntosParticipante2++
        } 
    }

    if (puntosParticipante1 > puntosParticipante2) {
        return "Ganó el participante 1!"
    } else return "Ganó el participante 2!"; 
}

console.log(encontrarGanador(a,b));