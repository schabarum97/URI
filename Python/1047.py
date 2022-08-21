x = input().split()
horaInicial, minutoInicial, horaFinal, minutoFinal = x

horaInicial = int(x[0])
minutoInicial = int(x[1])
horaFinal = int(x[2])
minutoFinal = int(x[3])

if horaInicial < horaFinal:
    horas = horaFinal - horaInicial
    if minutoInicial < minutoFinal:
        minutos = minutoFinal - minutoInicial
    if minutoInicial > minutoFinal:
        
        horas -= 1
        minutos = (60 - minutoInicial) + minutoFinal
    if minutoInicial == minutoFinal:
        minutos = 0
if horaInicial > horaFinal:
    horas = (24 - horaInicial) + horaFinal
    if minutoInicial < minutoFinal:
        minutos = minutoFinal - minutoInicial
    if minutoInicial > minutoFinal:
        horas -=  1
        minutos = (60 - minutoInicial) + minutoFinal
    if minutoInicial == minutoFinal:
        minutos = 0
if horaInicial == horaFinal:
    if minutoInicial < minutoFinal:
        minutos = minutoFinal - minutoInicial
        horas = 0
    if minutoInicial > minutoFinal:
        minutos = (60 - minutoInicial) + minutoFinal
        horas = 23
    if minutoInicial == minutoFinal:
        horas = 24
        minutos = 0
    
print('O JOGO DUROU {} HORA(S) E {} MINUTO(S)'.format(horas, minutos))