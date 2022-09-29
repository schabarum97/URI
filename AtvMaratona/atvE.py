(nJogador, nJogos) = input().split(" ")
ResultCount = 0

for x in range(int(nJogador)):
    listGols = input().split(" ")
    acrecenta = True

    for x in listGols:
        if int(x) == 0:
            acrecenta = False
            
    if acrecenta:
        ResultCount += 1

print(ResultCount) 