Valores = input().split(" ")
Resultado = "N"
MaxValue = 0
SomaValores = 0

for x in range(3):
    Valores[x] = int(Valores[x]) 

if ((Valores[0] == Valores[1]) or (Valores[1] == Valores[2]) or (Valores[0] == Valores[2])):
    Resultado = "S"

MaxValue = max(Valores)
for x in Valores:
    if x == MaxValue:
        continue
    SomaValores += x

if SomaValores == MaxValue:
   Resultado = "S" 
print(Resultado)
