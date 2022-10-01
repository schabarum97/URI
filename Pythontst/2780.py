distancia = int(input())

ponto = 0
if distancia <= 800:
    ponto = 1
elif distancia > 800 and distancia <= 1400:
    ponto = 2
else:
    ponto = 3 

print(ponto)