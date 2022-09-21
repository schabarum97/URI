let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let = lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(a => +a)
const [horaInicial, minutoInicial, horaFinal, minutoFinal] = pegarValores(lines.shift())
horas = 0
minutos = 0
if (horaInicial < horaFinal) {
        horas = (horaFinal - horaInicial)
 if (minutoInicial < minutoFinal) {
        minutos = minutoFinal - minutoInicial
}  if (minutoInicial > minutoFinal) {
        horas = horas- 1
        minutos = ((60 - minutoInicial) + minutoFinal)
} if (minutoInicial === minutoFinal) {
        minutos = 0
    }
}
if (horaInicial > horaFinal) {
        horas = (24 - horaInicial) + horaFinal
    if (minutoInicial < minutoFinal) {
        minutos = minutoFinal - minutoInicial
    } if (minutoInicial > minutoFinal) {
        horas = horas - 1
        minutos = ((60 - minutoInicial) + minutoFinal)
    } if (minutoInicial === minutoFinal) {
        minutos = 0
    }
}
if (horaInicial === horaFinal) {
    if (minutoInicial < minutoFinal) {
        minutos = minutoFinal - minutoInicial
        horas = 0
    } if (minutoInicial > minutoFinal) {
        minutos = ((60 - minutoInicial) + minutoFinal)
        horas = 23
    } if (minutoInicial === minutoFinal) {
        horas = 24
        minutos = 0
    }
}
console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)





