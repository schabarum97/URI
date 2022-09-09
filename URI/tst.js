let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(a=> +(a))
let valor = pegarValores(lines.shift());

let maiorvalor = +lines.shift()
soma = 0

while (valor <= 0){
    valor = +lines.shift();
}
for (let i = 1; i <= valor; i++){
    soma += maiorvalor
    maiorvalor ++
}
console.log(soma)