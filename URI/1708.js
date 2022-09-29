let input = require('fs').readFileSync('./dev/stdin/file.txt','utf8')
let lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(a => +a)

let [primeiro, ultimo] = pegarValores(lines.shift())

let diferenca = ultimo - primeiro

let voltas = Math.ceil(ultimo / diferenca)

console.log(voltas)