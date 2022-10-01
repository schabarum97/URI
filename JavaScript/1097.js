var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');


let j = 7;
for (let i = 1; i <= 9; i += 2){
    for (let k = 0; k < 3; k++){
        console.log(`I=${i} J=${j}`);
        j--;
    }
    j += 5;
}