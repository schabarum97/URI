n = int(input())
anos = n // 365
n = n -anos * 365
meses = n // 30
n = n - meses * 30
dias = n

print("%.0d ano(s)"%anos)
print("%.0d mes(es)"%meses)
print("%.0d dia(s)"%dias)


