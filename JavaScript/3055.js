var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var lines = input.split('\n')

let a = +lines.shift() 
let m = +lines.shift() 
calc = a - m
resultado = m - calc
console.log(resultado)