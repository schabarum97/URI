(Seg1, Seg2) = input().split(" ")

aux = True
voltas = 1
DifSeg = int(Seg2) - int(Seg1)
somaSegVolta = 0

while aux:
    somaSegVolta += DifSeg
    if somaSegVolta >= int(Seg1):
        aux = False

    voltas += 1      

print(voltas)