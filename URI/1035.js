let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

let a = +lines.shift()
let b = +lines.shift()
let c = +lines.shift()
let d = +lines.shift()
x = c+d
y = a+b
if ((b > c) && (d>a) && (x>y) && (c>0) && (d>0) && (a % 2 == 0)) {
    console.log('Valores aceitos')
}else{
    console.log('Valores nao aceitos')
}
    

