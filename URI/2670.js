let input = require('fs').readFileSync('./dev/stdin/file.txt','utf8')
let [A1, A2, A3] = input.split('\n')

let g1 = A2 * 2 + A3 * 4
let g2 = A1 * 2 + A3 * 2
let g3 = A1 * 4 + A2 * 2

let menor = Math.min(...[g1, g2, g3])

console.log(menor)