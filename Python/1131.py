somaGolInter = 0
somaGolGremio = 0
somaTotal = 0
grenal = 0
somaImp = 0
novoGrenal = 1
while novoGrenal != 2:
            gols=input().split(" ")
            Ngolinter ,NgolGremio = gols
            grenal += 1
            if Ngolinter > NgolGremio:
                somaGolInter += 1
            elif Ngolinter < NgolGremio:
                somaGolGremio += 1
            elif Ngolinter == NgolGremio:
                somaTotal += 1
            print('Novo grenal (1-sim 2-nao)')
            novoGrenal = int(input())
            somaImp += 1
print(grenal, 'grenais')
print('Inter:%0d'% somaGolInter)
print('Gremio:%0d'%somaGolGremio)
print('Empates:%0d'%somaTotal)
if somaGolInter > somaGolGremio:
    print('Inter venceu mais')
elif somaGolInter < somaGolGremio:
    print('Gremio venceu mais')
elif somaTotal > somaGolInter and somaGolGremio:
    print('Nao houve vencedor')

