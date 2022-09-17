let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

alcool = 0
diesel = 0
gasolina = 0
let combustivel =+lines.shift()
while (combustivel != 4) {
    if (combustivel == 1){
        alcool += 1
    }else if (combustivel == 2){
        gasolina += 1
    }else if (combustivel ==3){
        diesel +=1
    } 
let combustivel =+lines.shift()   
}
console.log('MUITO OBRIGADO')
console.log(`Alcool: ${alcool}`)
console.log(`Gasolina: ${gasolina}`)
console.log(`Diesel: ${diesel}`)

