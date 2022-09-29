import math
(Voltas, Lombadas) = input().split(" ")

valTotalLombadas = int(Voltas) * int(Lombadas)
aux = 10
ArrayResult = ""
for x in range(9):
    ArrayResult += str(math.ceil(valTotalLombadas * aux / 100))
    if x != 8:
        ArrayResult += " "
    aux += 10

print(ArrayResult)