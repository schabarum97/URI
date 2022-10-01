let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

let vend = lines.shift()
let salfix = +lines.shift()
let salvend = +lines.shift()
salbonus = (salvend*15/100)
total= salfix+salbonus 
console.log(`TOTAL = R$ ${total.toFixed(2)}`)

