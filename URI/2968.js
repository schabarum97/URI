let input = require('fs').readFileSync('./dev/stdin/file.txt','utf8')
let lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(a => +a)

let [voltas, placas] = pegarValores(lines.shift())

let totalPlacas = voltas * placas

let texto = []

for (let i = 0; i < 9; i++) {
    texto.push(Math.ceil(totalPlacas * ((i+1)/10)))        
}
console.log(texto.join(' '))