let input = require('fs').readFileSync('./dev/stdin/file.txt','utf8')
let lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(a => +a)

while (lines.length) {
    let linha = lines.shift()
    if (!linha) break
    let [foi, voltou] = pegarValores(linha)
    let sobreviventes = pegarValores(lines.shift())
    if (foi != voltou) {
        let faltando = ''
        for (let i = 1; i <= foi; i++) {
            if (!sobreviventes.includes(i))
                faltando += i.toString() + ' '        
        }
        console.log(faltando)
    } else console.log('*')
}