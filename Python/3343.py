qtde, mtMuralha = input().split()
gigantes = input()
p, m, g = input().split()

muralhas = [int(mtMuralha)] * int(qtde)

tp, tm, tg = [0, 0, 0]

for a in gigantes:
    if a == 'P':
        while muralhas[tp] < int(p):
            tp += 1
        muralhas[tp] -= int(p)
    elif a == 'M':
        while muralhas[tm] < int(m):
            tm += 1
        muralhas[tm] -= int(m)
    elif a == 'G':
        while muralhas[tg] < int(g):
            tg += 1
        muralhas[tg] -= int(g)

print(max(tp, tm, tg)+1)