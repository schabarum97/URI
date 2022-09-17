let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

let palavra = lines.shift();

if (palavra.length >= 10){
    console.log('palavrao')
}else{
    console.log('palavrinha');
}