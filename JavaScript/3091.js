var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
var lines = input.split('\n')

let a = +lines.shift() 
let b = +lines.shift() 

console.log(a%b)