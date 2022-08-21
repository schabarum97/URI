let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

let raio = +lines.shift()

console.log(`A=${raio * raio * 3.14159.toFixed(4)}`)


