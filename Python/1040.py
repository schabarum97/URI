x = input().split()
n1,n2,n3,n4 = x
media = (float(n1) * 2 + float(n2) * 3 + float(n3) * 4 + float(n4) * 1) / 10
print("Media: %0.1f"%media)
if media >= 7:
    print('Aluno aprovado.')
elif media < 5:
    print('Aluno reprovado.')
if 5.0 <=  media <= 6.9:
    print('Aluno em exame.')
    nExame = float(input())
    print("Nota do exame: %0.1f"% nExame)
    nFinal = (nExame + media) / 2
    if nFinal >= 5:
        print('Aluno aprovado.')
        print("Media final: %0.1f" % nFinal)
    else:
        print('Aluno reprovado.')
        print("Media final: %0.1f" % nFinal)