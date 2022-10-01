let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(a=> +(a))

const[x,y]=pegarValores(lines.shift())

if ((x>0) && (y>0)){
    console.log("Q1")      
}
else if ((x<0) && (y>0)) {
    console.log("Q2")
}
else if ((x<0) && (y<0)){
    console.log("Q3")
}
else if ((x>0) && (y<0)){
    console.log("Q4")
}
else if ((x == 0) && (y==0)){
    console.log("Origem")
}
else if (x == 0){
    console.log("Eixo Y")
}
else
    console.log("Eixo X")