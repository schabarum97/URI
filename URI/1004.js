let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

let a = +lines.shift()
let b = +lines.shift()

console.log(`PROD = ${a * b }`)