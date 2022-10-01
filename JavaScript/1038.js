let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(a=> +(a))

const[a,b]=pegarValores(lines.shift())

if (a == '1'){
    console.log(`Total: R$ ${ (4.00*b).toFixed(2)}`)
}
if (a == '2'){
    console.log(`Total: R$ ${ (4.50*b).toFixed(2)}`)
}
if (a == '3'){
    console.log(`Total: R$ ${ (5.00*b).toFixed(2)}`)
}
if (a == '4'){
    console.log(`Total: R$ ${ (2.00*b).toFixed(2)}`)
}
if (a == '5'){
    console.log(`Total: R$ ${ (1.50*b).toFixed(2)}`)
}
