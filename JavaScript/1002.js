let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

const n = 3.14159;

let raio = Number.parseFloat(lines.shift())

console.log(`A=${(n*Math.pow(raio, 2)).toFixed(4)}`)