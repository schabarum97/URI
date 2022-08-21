let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

let raio = +lines.shift()
pi = 3.14159
volume = (4.0*pi*(raio*raio*raio)/3)
console.log(`VOLUME = ${volume.toFixed(3)}`)