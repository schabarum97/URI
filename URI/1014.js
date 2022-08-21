let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

let distancia = +lines.shift()
let combust = +lines.shift()
gasto = distancia/combust
console.log(`${gasto.toFixed(3)} km/l`)
