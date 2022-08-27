laco = int(input())

maiorNota = 0
codigoNota = 0
while laco > 0:
    [codigo, nota] = input().split(" ")
    codigo = int(codigo)
    nota = float(nota)
    if maiorNota == 0 or nota > maiorNota:
        maiorNota = nota
        codigoNota = codigo
    laco -= 1

if maiorNota < 8:
    print('Minimum note not reached')
else:
    print(codigoNota)