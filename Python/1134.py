alcool = 0
diesel = 0
gasolina = 0
combustivel = int(input())
while combustivel != 4:
    combustivel = int(input())
    if combustivel == 1:
        alcool += 1
    if combustivel == 2:
        gasolina += 1
    if combustivel  == 3:
        diesel += 1

print('MUITO OBRIGADO') 
print('Alcool: %d'%alcool)
print('Gasolina: %0d'%gasolina)
print('Diesel: %0d'%diesel)   
