let input = require('fs').readFileSync('./dev/stdin/file.txt','utf8')
let lines = input.split('\n')

while (lines.length > 0) {
    let linha =+lines.shift()
    soma=linha-1
    if (soma>=1000){
    console.log(soma)
    }
}