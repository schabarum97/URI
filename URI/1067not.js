let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

let x = +lines.shift() 
let divisao = 0

for (let i = 0;i< x;i ++) {
   divisao = i%2
   if(divisao !== 0 ){
    console.log(i)
   }
}
