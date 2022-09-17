let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let = lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(a => +a)
const [horaInicial, minutoInicial, horaFinal, minutoFinal] = pegarValores(lines.shift())

inicio = horaInicial * 60 + minutoInicial 

fim = horaFinal * 60 + minutoFinal 

diferenca = fim - inicio

if (diferenca <= 0) {
    diferenca = diferenca + 24 * 60
}

hora = diferenca / 60

minuto = (diferenca % 60)

console.log(`O JOGO DUROU ${hora.toFixed(0)} HORA(S) E ${minuto.toFixed()} MINUTO(S)`)





