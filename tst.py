senha = input('Insira sua senha: ')
print(len(senha))

if len(senha) < 10 or len(senha) > 15:
    print('Senha Invalida')