let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

let tempo = +lines.shift()
let velmedia = +lines.shift()
let consumo = 12
gasto = tempo*velmedia / consumo
console.log(`${gasto.toFixed(3)}`)