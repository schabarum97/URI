novosalario = 0
reajuste = 0 
percentual = 0
salario = float(input())

if salario <= 400:
    percentual = 15
    novosalario = salario + ((salario * percentual)/100)
    reajuste = ((salario * percentual) / 100)
elif salario > 400 and salario <= 800:
    percentual = 12
    novosalario = salario + ((salario * percentual)/100)
    reajuste = ((salario * percentual) / 100)
elif salario > 800 and salario <=1200:
    percentual = 10
    novosalario = salario + ((salario * percentual)/100)
    reajuste = ((salario * percentual) / 100)
elif salario >1200 and salario <=2000:
    percentual = 7
    novosalario = salario + ((salario * percentual)/100)
    reajuste = ((salario * percentual) / 100)
elif salario >2000 :
    percentual = 4
    novosalario = salario + ((salario * percentual)/100)
    reajuste = (salario * percentual)/100

print("Novo salario: %0.2f"%novosalario)
print("Reajuste ganho: %0.2f"%reajuste)
print('Em percentual:',percentual ,'%')
