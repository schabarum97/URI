let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

let lista = [];

for (let i = 0;i < 100;i++){
    lista.push(+lines.shift());
}

for (let j in lista){
    if (lista[j] <= 10){
        console.log(`A[${j}] = ${(lista[j]).toFixed(1)}`);
    }
}