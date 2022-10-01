let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

const area = (line) => line.split(" ").map(a=>Number(a))

const[a,b,c]=area(lines.shift())
pi=3.14159
triangulo=(a*c)/2
circulo=pi*c*c
trapezio=(a+b)*c/2
quadrado=b*b
retangulo=a*b
console.log(`TRIANGULO: ${triangulo.toFixed(3)}`)
console.log(`CIRCULO: ${circulo.toFixed(3)}`)
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`)
console.log(`QUADRADO: ${quadrado.toFixed(3)}`)
console.log(`RETANGULO: ${retangulo.toFixed(3)}`)





