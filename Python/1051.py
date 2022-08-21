salarioInicio = float(input())
imposto = 0
if salarioInicio > 0 and salarioInicio <= 2000.00:
    print('Isento')
elif salarioInicio >= 2000.01 and salarioInicio <= 3000.00:
    salario = salarioInicio - 2000.01
    imposto = (salario * 8) / 100 
elif salarioInicio >= 3000.01 and salarioInicio <= 4500.00:
    salario = salarioInicio - 3000.01
    imposto = (salario * 18) / 100
    imposto = imposto + ((3000.00 - 2000.01)* 8)/100
elif salarioInicio > 4500.00:
    salario = salarioInicio - 4500.00
    imposto = (salario * 28) / 100
    imposto = imposto + ((((3000.00 - 2000.01)* 8)/100) + (((4500.00 - 3000.01)*18)/100))
if imposto > 0:
    print('R$ %0.2f'%imposto)

   
