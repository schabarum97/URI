let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

let a = +lines.shift()
let b = +lines.shift()
let c = +lines.shift()
console.log(`MEDIA = ${((a*0.2)+(b*0.3)+(c*0.5)).toFixed(1)}`)





