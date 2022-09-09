let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

let qtd = +lines.shift()
let soma = 0
for (let i = 0;i < qtd; i++){
    let valor = +lines.shift()
    soma = valor %2
    if (soma == 0){
        console.log(soma)
    }else
        console.log(1)
}