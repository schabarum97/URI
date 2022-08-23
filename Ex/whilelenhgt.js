let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

while (lines.lenght) {
    console.log(+lines.shift())
}