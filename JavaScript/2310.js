let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

let jogadores = +lines.shift();
const pegarValores = (line) => line.split(" ").map(a => +a);

let saqueAcerto  = 0
let bloquieoAcerto = 0
let ataqueAcerto = 0
let saque       = 0
let bloquieo     = 0
let ataque      = 0
for (let i = 0; i < jogadores;i++){
    let jogador = +lines.shift()
    let [a,b,c] = pegarValores(lines.shift())
    let [d,e,f] = pegarValores(lines.shift())
        saque += a
        bloquieo += b
        ataque += c
        saqueAcerto += d
        bloquieoAcerto += e
        ataqueAcerto += f
}
console.log(`Pontos de Saque: ${((saqueAcerto * 100)/saque).toFixed(2)} %.`)
console.log(`Pontos de Bloqueio: ${((bloquieoAcerto * 100)/bloquieo).toFixed(2)} %.`)
console.log(`Pontos de Ataque: ${((ataqueAcerto*100)/ataque).toFixed(2)} %.`)