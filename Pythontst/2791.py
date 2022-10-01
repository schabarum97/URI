linha = input().split(" ")

i = 0
for x in linha:
    i += 1
    x = int(x)
    if x > 0:
        print(i)