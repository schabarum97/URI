let input = require('fs').readFileSync('./dev/stdin/file.txt','utf8')
let lines = input.split('\n')

cifra = lines.shift()
code = lines.shift()
bateu = 0

for (let i = 0; i < (cifra.length - code.length+1); i++) {
    nova = true
    for (let y = 0; y < code.length; y++) {
        if (cifra[i+y] == code[y]) {
            nova = false
            break
        }
    }
    if (nova)
        bateu += 1    
}
console.log(bateu)