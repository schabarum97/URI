let input = require('fs').readFileSync('./dev/stdin/file.txt','utf8')
let lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(a => +a)
let [jogadores, partidas] = pegarValores(lines.shift())

qtdeGolsTodas = 0

for (let i = 0; i < jogadores; i++) {
    gols = pegarValores(lines.shift())
    todos = gols.every(a => a != 0)
    if (todos) qtdeGolsTodas += 1
}
console.log(qtdeGolsTodas)