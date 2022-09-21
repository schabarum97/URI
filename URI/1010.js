let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(a=>Number(a))

const [id1,qnt1,valPeca1]=pegarValores(lines.shift())
const [id2,qnt2,valPeca2]=pegarValores(lines.shift())

const precoAPagar1 = qnt1 * valPeca1
const precoAPagar2 = qnt2 * valPeca2

let mensagem = `VALOR A PAGAR: R$ ${(precoAPagar1 + precoAPagar2).toFixed(2)}`

console.log(mensagem)