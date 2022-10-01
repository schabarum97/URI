let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

let maiorvalor = +lines.shift();
let multiplo2 = 0
let multiplo3 = 0
let multiplo4 = 0
let multiplo5 = 0
const pegarValores = (line) => line.split(" ").map(a => +a);
let linha = pegarValores(lines.shift());

for (let i = 0; i < maiorvalor; i++){
    let calcula = +linha[i] % 2
    if (calcula === 0){
        multiplo2 += 1
    }
    calcula = +linha[i] % 3
    if (calcula === 0){
        multiplo3 += 1
    }
    calcula = +linha[i] % 4
    if (calcula === 0){
        multiplo4 += 1
    }
    calcula = +linha[i] % 5
    if (calcula === 0){
        multiplo5 += 1
    }
}
console.log(`${multiplo2} Multiplo(s) de 2`)
console.log(`${multiplo3} Multiplo(s) de 3`)
console.log(`${multiplo4} Multiplo(s) de 4`)
console.log(`${multiplo5} Multiplo(s) de 5`)