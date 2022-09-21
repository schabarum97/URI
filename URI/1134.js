let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')
let combustivel  
alcool = 0
diesel = 0
gasolina = 0
while (combustivel != 4) {
    combustivel =+lines.shift()  
    if (combustivel === 1){
        alcool = alcool + 1
    }else if (combustivel === 2){
        gasolina = gasolina + 1
    }else if (combustivel ===3){
        diesel = diesel +1
    } 
}
console.log('MUITO OBRIGADO')
console.log(`Alcool: ${alcool}`)
console.log(`Gasolina: ${gasolina}`)
console.log(`Diesel: ${diesel}`)

