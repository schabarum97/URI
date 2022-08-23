let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

let caiFora = false

while (!caiFora) {
    let linha = +lines.shift()
    if (!linha){
    caiFora = true
    break
    }
    console.log(linha)
}