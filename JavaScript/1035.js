let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(a => +a)
const [a, b, c, d] = pegarValores(lines.shift())
x = c+d
y = a+b
if ((b > c) && (d>a) && (x>y) && (c>0) && (d>0) && (a % 2 === 0)) {
    console.log('Valores aceitos')
}
else{
    console.log('Valores nao aceitos')
}
    

