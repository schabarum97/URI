let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let = lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(a => +a);
const [a,b,c] = pegarValores(lines.shift());

let possivel = 'N'
if (a == b || b == c || a == c) possivel = 'S'
if (a+b == c || b+c == a || a+c == b) possivel = 'S'

console.log(possivel)