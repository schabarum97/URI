let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(a=> +(a))

const[x1,y1]=pegarValores(lines.shift())
const[x2,y2]=pegarValores(lines.shift())

distancia = Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1))
console.log(`${distancia.toFixed(4)}`)

