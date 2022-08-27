lista1 = input().split(" ")
lista2 = input().split(" ")
resto = 0
total = 0
for x in range (0,3):
    resto = int(lista2[x]) - int(lista1[x]) 
    if resto > 0:
        total += resto

print(total)