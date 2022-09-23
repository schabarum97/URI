let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

let n = +lines.shift()

for (let i = 1; i < 11; i++) {
  resultado = i*n
    console.log(`${i} x ${n} = ${resultado}`)  
}
