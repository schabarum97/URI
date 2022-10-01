n = int(input())
intervalo = 0
foraint = 0
for i in range(1,n+1):
    x = int(input())
    if (x >=10) and (x<=20):
        intervalo = intervalo + 1
    else:
        foraint = foraint + 1 
print(intervalo, 'in')
print(foraint, 'out')
