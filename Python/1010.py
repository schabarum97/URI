l1=input().split(" ")
l2=input().split(" ")
cod1, qtd1, valor1 = l1
cod2, qtd2, valor2 = l2
total=(int(qtd1)*float(valor1))+(int(qtd2)*float(valor2))
print("VALOR A PAGAR: R$ %0.2f"%total)