let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let = lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(a => +a)
const [horaInicial, minutoInicial, horaFinal, minutoFinal] = pegarValores(lines.shift())
horas = 0
minutos = 0
if (horaInicial < horaFinal) {
    horas = (horaFinal - horaInicial)
} else if (minutoInicial < minutoFinal) {
    minutos = (minutoFinal - minutoInicial)
} else if (minutoInicial > minutoFinal) {
    horas -= 1
    minutos = ((60 - minutoInicial) + minutoFinal)
} else if (minutoInicial == minutoFinal) {
    minutos = 0
}
if (horaInicial > horaFinal) {
    horas = (24 - horaInicial) + horaFinal
} else if (minutoInicial < minutoFinal) {
    minutos = minutoFinal - minutoInicial
} else if (minutoInicial > minutoFinal) {
    horas -= 1
    minutos = (60 - minutoInicial) + minutoFinal
} else if (minutoInicial == minutoFinal) {
    minutos = 0
}
if ((horaInicial == horaFinal) && (minutoInicial < minutoFinal)) {
    minutos = minutoFinal - minutoInicial
    horas = 0
} else if (minutoInicial > minutoFinal) {
    minutos = (60 - minutoInicial) + minutoFinal
    horas = 23
} else if (minutoInicial == minutoFinal) {
    horas = 24
    minutos = 0
}

console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)




