let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

let x = +lines.shift() 

for (let i = 0;i < (x+1);i ++) {
   if(i %2 == 1 ){
    console.log(i)
   }
}
