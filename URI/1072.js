let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

let maior = +lines.shift()
let countIn = 0
let countOut = 0

for (let i = 0;i < maior;i++){
    let valor = +lines.shift()
    if (valor >= 10 && valor <= 20){
        countIn++
    }else{
        countOut++
    }
}
console.log(`${countIn} in`)
console.log(`${countOut} out`)