let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')
let contadorDePares = 0
let dividir = 0
for (let i = 0; i < 5; i++) {
    let valor = +lines.shift()
    dividir = valor%2
    if(dividir === 0){
        contadorDePares++
    }
}
console.log(`${contadorDePares} valores pares`)