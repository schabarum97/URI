lista = []
for x in range(0,100):
    lista.append (float(input()))

for y in range(0,100):
    if lista[y] <= 10:
        print("A [%0d] ="%y,lista[y])

for y in range(0,100):
    x = input()
    if x <= 10:
        print('A [{}] = {:0.2f}'.format (y, x))
        y += 1