let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')


function fatCalc(resto) {
    resp = 0
    fat = 1
    i = 1
    while (true) {
        fat *= i
        i += 1
        if (fat>resto) 
            break
        resp = fat
    }
    return resp
}

let valor = +lines.shift()

let minFat = 0
let qtdeFat = 0
let sumFat = 0

while (true) {
    if (sumFat < valor) {
        minFat = fatCalc(valor - sumFat)
        qtdeFat += 1
    } else break
    sumFat += minFat
}

console.log(qtdeFat)