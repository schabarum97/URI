def tabuada(inicio,colunas):  # Tabuada 3x3
    for linha in range(1,11):
        for col in range(colunas):
            print(f'  {col+inicio:2} X {linha:2} = {(col+inicio)*linha:2}     ',end='')
        print()
    print()

print('  Tabuada (3x3) \n')
for t in (2,5,8):
    tabuada(t,3)
    print()