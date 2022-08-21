a = []
for cont in range(5):
    n = int(input())
    a.append(int(n))

i = 0
for j in range(5):
    if a[j] % 2 == 0:
        i +=  1
print(i, 'valores pares')