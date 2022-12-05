let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let = lines = input.split('\n')
const pegarValores = (line) => line.split(" ").map(a => +(a))

const [notaA, notaB, notaC, notaD] = pegarValores(lines.shift())
media = ((notaA * 2) + (notaB * 3) + (notaC * 4) + (notaD * 1)) / 10
console.log(`Media: ${media.toFixed(1)}`)
if (media >= 7) {
    console.log('Aluno aprovado.')
} else if (media < 5) {
    console.log('Aluno reprovado.')
} else {
    let notaExame = +lines.shift()
    console.log('Aluno em exame.')
    console.log(`Nota do exame: ${notaExame.toFixed(1)}`)
    let mediaExame = (notaExame + media) / 2
    if (mediaExame >= 5) {
        console.log('Aluno aprovado.')
    } else {
        console.log('Aluno reprovado.')
    }
    console.log(`Media final: ${mediaExame.toFixed(1)}`)
}
