let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

let a = +lines.shift()
let b = +lines.shift()

multiplcacao = (a * 3.5) + (b * 7.5)
resultado= multiplcacao/11
console.log(`MEDIA = ${resultado.toFixed(5)}`)


