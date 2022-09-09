let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')
let contadorDePositos = 0
let total = 0
let valor 
for (let i = 0; i < 6; i++) {
    valor = +lines.shift()
    if (valor>0){
        contadorDePositos ++
        total = total + valor
    }    
}
console.log(`${contadorDePositos} valores positivos`)
console.log((total/contadorDePositos).toFixed(1))