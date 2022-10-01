paisagens = int(input())
montanhas = [int(x) for x in input().split()]
if paisagens == 2 and montanhas[0] == montanhas[1]:
    pico = 0
else:
    pico = 1
    for i in range(1, paisagens-1):
        if not ((montanhas[i] < montanhas[i-1] and montanhas[i] < montanhas[i+1]) or (montanhas[i] > montanhas[i-1] and montanhas[i] > montanhas[i+1])):
            pico = 0
            break
print(pico)