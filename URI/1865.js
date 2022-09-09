let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(a => a)
let maiorvalor = +lines.shift()

for (let i = 0;i < maiorvalor;i++){
    let [heroi, poder] = pegarValores(lines.shift());    
    if (heroi === 'Thor'){
        console.log('Y');
    }else{
        console.log('N');
    }
}