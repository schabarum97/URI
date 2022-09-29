let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

let palavra = lines.shift();

if (palavra.length > 140){
    console.log('MUTE')
}else{
    console.log('TWEET')
}
