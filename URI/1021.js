let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')
let total = +lines.shift()
let valor = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00, 1.00, 0.50, 0.25, 0.10, 0.05, 0.01]
let ajuda
console.log('NOTAS:')
for (let i = 0; i < 6; i++) {
    ajuda = Math.floor(total/valor[i])
    console.log(`${ajuda} nota(s) de R$ ${valor[i].toFixed(2)}`)
    total = total%valor[i]
}
console.log('MOEDAS:')
for (let cont = 6; cont < valor.length; cont++) {
    ajuda = Math.floor(total/valor[cont])
    console.log(`${ajuda} moeda(s) de R$ ${valor[cont].toFixed(2)}`)
    total = total%valor[cont]
}
