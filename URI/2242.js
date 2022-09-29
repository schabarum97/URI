let input = require('fs').readFileSync('./dev/stdin/file.txt','utf8')
let lines = input.split('\n')

const vogais = ['a', 'e', 'i', 'o', 'u']

let texto = lines.shift()
let textoVogaisOrdem = []

for (const item of texto) {
    if (vogais.includes(item))
        textoVogaisOrdem.push(item)
}

let reverseVogais = textoVogaisOrdem.map(a=>a)
reverseVogais = reverseVogais.reverse()

if (reverseVogais.join('') == textoVogaisOrdem.join('')) console.log('S')
else console.log('N')