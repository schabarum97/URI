a = float(input())
b = float(input())
c = float(input())
d = float(input())
e = float(input())
f = float(input())
media = 0
cont = 0
t = [a,b,c,d,e,f]
for x in t: 
    if x > 0:
        cont = cont + 1
        media = media + (x)
print('{} valores positivos'.format(cont))
print('{:.1f}'.format(media/cont))