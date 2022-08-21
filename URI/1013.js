let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(a=> +(a))

const[a,b,c]=pegarValores(lines.shift())

maior = ((a + b) + Math.abs(a - b))/2
resultado = ((maior + c) + Math.abs(maior - c))/2
console.log(`${resultado} eh o maior`)
