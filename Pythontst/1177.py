t = int(input())
n = [] 
for i in range(1000):
    j = 0
    while j < t:
        n.append(j)
        j = j + 1
    print('N[{0}] = {1}'.format(i,n [i]))