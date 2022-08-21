let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

let x = +lines.shift()
let y = +lines.shift()

console.log(`SOMA = ${x + y }`)