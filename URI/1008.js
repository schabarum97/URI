let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

let id = +lines.shift()
let vHora = +lines.shift()
let horas = +lines.shift()
salario=(vHora*horas)
console.log(`NUMBER = ${id}`)
console.log(`SALRAY = U$ ${salario}`)