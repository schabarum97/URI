let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')
let dividir = 0
let contadorDePares = 0
let contadorDeImpares = 0
let contadorDePositos = 0
let contadorDeNegativos = 0
for (let i = 0; i <5; i++) {
    let valor = +lines.shift()
    dividir = valor%2
    if((dividir===0)||(valor ===0)){
        contadorDePares++
    }else{
        contadorDeImpares ++
    }
    if (valor>0){
        contadorDePositos++
    }else if (valor < 0){
        contadorDeNegativos++
    }
}
console.log(`${contadorDePares} valor(es) par(es)`)
console.log(`${contadorDeImpares} valor(es) impar(es)`)
console.log(`${contadorDePositos} valor(es) positivo(s)`)
console.log(`${contadorDeNegativos} valor(es) negativo(s)`)
