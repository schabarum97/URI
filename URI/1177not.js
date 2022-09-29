let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let = lines = input.split('\n')

let maior = +lines.shift()

for (let i = 0; i <= 1000;i++){
    for (let j = 0; j < maior; j++){
        console.log(`N[${i}] = ${j}`)
    }
}


