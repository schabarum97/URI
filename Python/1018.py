notas = int(input())
print(notas)
notas100 = notas // 100
notas = notas - notas100*100
notas50 = notas // 50
notas = notas - notas50*50
notas20 = notas // 20
notas = notas- notas20*20
notas10 = notas // 10
notas = notas - notas10*10
notas5 = notas // 5
notas = notas - notas5*5
notas2 = notas // 2
notas = notas - notas2*2
notas1 = notas // 1
notas = notas - notas1*1
print('{} nota(s) de R$ 100,00'.format(notas100))
print('{} nota(s) de R$ 50,00'.format(notas50))
print('{} nota(s) de R$ 20,00'.format(notas20))
print('{} nota(s) de R$ 10,00'.format(notas10))
print('{} nota(s) de R$ 5,00'.format(notas5))
print('{} nota(s) de R$ 2,00'.format(notas2))
print('{} nota(s) de R$ 1,00'.format(notas1))