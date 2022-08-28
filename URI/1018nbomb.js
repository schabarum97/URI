let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

let notas = +lines.shift()
console.log(notas)
notas100 = notas / 100
notas = notas - notas100*100
notas50 = notas / 50
notas = notas - notas50*50
notas20 = notas / 20
notas = notas- notas20*20
notas10 = notas / 10
notas = notas - notas10*10
notas5 = notas / 5
notas = notas - notas5*5
notas2 = notas / 2
notas = notas - notas2*2
notas1 = notas / 1
notas = notas - notas1*1
console.log(`${notas100} nota(s) de R$ 100,00`)
console.log(`${notas50} nota(s) de R$ 50,00`)
console.log(`${notas20} nota(s) de R$ 20,00`)
console.log(`${notas10} nota(s) de R$ 10,00`)
console.log(`${notas5} nota(s) de R$ 5,00`)
console.log(`${notas2} nota(s) de R$ 2,00`)
console.log(`${notas1} nota(s) de R$ 1,00`)
