let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

let a = +lines.shift()
let b = +lines.shift()
let c = +lines.shift()
let d = +lines.shift()
diferenca=(a*b)-(c*d)
console.log(`DIFERENCA = ${diferenca}`)
