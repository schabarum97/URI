let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

let novosalario = 0
let reajuste = 0
percentual = 0 
salario = +lines.shift()

if (salario <= 400){
    percentual = 15
    novosalario = ((salario +(salario*percentual)/100))
    reajuste = ((salario * percentual)/100)
}else if ((salario > 400) && (salario <= 800)){
    percentual = 12
    novosalario = (salario + ((salario * percentual)/100))
    reajuste = ((salario * percentual) / 100)
} else if ((salario > 800) && (salario <=1200)){
    percentual = 10
    novosalario = (salario + ((salario * percentual)/100))
    reajuste = ((salario * percentual) / 100)
}else if ((salario >1200) && (salario <=2000)){
    percentual = 7
    novosalario = (salario + ((salario * percentual)/100))
    reajuste = ((salario * percentual) / 100)
}else if (salario >2000){
    percentual = 4
    novosalario = (salario + ((salario * percentual)/100))
    reajuste = ((salario * percentual)/100)
}
console.log(`Novo salario: ${novosalario.toFixed(2)}`)
console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
console.log(`Em percentual: ${percentual} %`)