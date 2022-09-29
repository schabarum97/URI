let input = require('fs').readFileSync('./dev/stdin/file.txt','utf8')
let lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(a => +a)

while (lines.length > 0) {
    let linha = lines.shift()
    if (!linha) 
        break;
    
    let [dist, vlFug, vlGua] = pegarValores(linha)
    let somaQ = (dist * dist) + (12 * 12)
    let hipo = Math.sqrt(somaQ)
    if (hipo/vlGua <= 12/vlFug) console.log('S')
    else console.log('N')
}