import math

Valor = int(input())
countFatorial = 0

Aux = True
count = 1
ResulFatorial = 0
ValorAux = Valor

while Aux:
    if math.factorial(count) > ValorAux:
        ResulFatorial += math.factorial(count - 1)
        ValorAux -= math.factorial(count - 1)
        countFatorial += 1
        count = 1
    if Valor == ResulFatorial:
        Aux = False
    count += 1

print(countFatorial)