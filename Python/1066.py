a = []
j = 0
k = 0
p = 0
l = 0
for i in range(5):
    x = int(input())
    if x % 2 == 0:
        j += 1
    if x % 2 == 1:
        k += 1
    if x > 0:
        p += 1
    if x < 0:
        l += 1

print(j, 'valor(es) par(es)')
print(k, 'valor(es) impar(es)')
print(p, 'valor(es) positivo(s)')
print(l, 'valor(es) negativo(s)')