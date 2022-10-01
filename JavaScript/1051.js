let input = require ('fs').readFileSync('./dev/stdin/file.txt','utf8')
let = lines = input.split('\n')

salarioInicio = +lines.shift()
imposto = 0
if ((salarioInicio > 0) && (salarioInicio <= 2000.00)){
    console.log('Isento')
}else if ((salarioInicio >2000.01 ) && (salarioInicio <= 3000.00)){
    salario = (salarioInicio - 2000.01)
    imposto = ((salario * 8) / 100 )
}else if ((salarioInicio >= 3000.01) && (salarioInicio <= 4500.00)){
    salario = (salarioInicio - 3000.01)
    imposto = ((salario * 18) / 100)
    imposto = (imposto + ((3000.00 - 2000.01)* 8)/100)
}
else if (salarioInicio > 4500.00){
    salario = salarioInicio - 4500.00
    imposto = (salario * 28) / 100
    imposto = (imposto + ((((3000.00 - 2000.01)* 8)/100) + (((4500.00 - 3000.01)*18)/100)))
}
if (imposto > 0){
    console.log(`R$ ${imposto.toFixed(2)}`)
}