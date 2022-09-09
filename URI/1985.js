let input = require('fs').readFileSync('./dev/stdin/file.txt','utf8')
let lines = input.split('\n')

const lenha = (line) => line.split(" ").map (a=> +a)
let produtos= +lines.shift()
let compra = 0
for(let i = 0; i<produtos; i++){
    let [codigo,qtd] = lenha(lines.shift())
    if(codigo == 1001){
        compra = compra+(qtd * 1.50)
    }
    if(codigo == 1002){
        compra = compra+(qtd * 2.50)
    }
    if(codigo == 1003){
        compra = compra+(qtd * 3.50)
    }
    if(codigo == 1004){
        compra = compra+(qtd * 4.50)
    }
    if(codigo == 1005){
        compra = compra+(qtd * 5.50)
    }
}
console.log(compra.toFixed(2)) 