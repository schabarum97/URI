let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(a => +a)
let [inicio, final] = pegarValores(lines.shift())

let resultado = 0
if (inicio === final){
    resultado = 24
}else if (inicio < final){
    resultado = final - inicio
}else{
    resultado = final + 24 - inicio
}

console.log(`O JOGO DUROU ${resultado} HORA(S)`)