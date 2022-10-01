let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')
let contadorDePositos = 0
for (let i = 0; i < 6; i++) {
    if (+lines.shift()>0)
    contadorDePositos ++
}
console.log(`${contadorDePositos} valores positivos`)