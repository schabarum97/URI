let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

let notas = +lines.shift()
console.log(notas)
notas100 = 0
notas50 = 0
notas20 = 0
notas10 = 0
notas5 = 0
notas2 = 0
notas1 = 0

while (notas >=100){
    notas100 += 1
    notas = notas - 100
}
while (notas >=50){
    notas50 += 1
    notas = notas - 50
}
while (notas >=20){
    notas20 += 1
    notas = notas - 20
}
while (notas >=10){
    notas10 += 1
    notas = notas - 10
}
while (notas >=5){
    notas5 += 1
    notas = notas - 5
}
while (notas >=2){
    notas2 += 1
    notas = notas - 2
}
while (notas >=1){
    notas1 += 1
    notas = notas - 1
}

console.log(notas100 ,"nota(s) de R$ 100,00")
console.log(notas50,"nota(s) de R$ 50,00")
console.log(notas20, "nota(s) de R$ 20,00")
console.log(notas10, "nota(s) de R$ 10,00")
console.log(notas5,"nota(s) de R$ 5,00")
console.log(notas2, "nota(s) de R$ 2,00")
console.log(notas1, "nota(s) de R$ 1,00")
