let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

let a = lines.shift()
let texto = 'Ho '
console.log(texto.repeat(a-1).trim(),'Ho!')