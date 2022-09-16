var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');


let k = 60;
for (let i = 1; i <= 37; i+= 3){
    console.log(`I=${i} J=${k}`);
    k -= 5;
}