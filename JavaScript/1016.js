let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

let numero = +lines.shift()
mult = numero *2 
console.log(`${mult} minutos`)