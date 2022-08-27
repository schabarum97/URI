import math
n = int(input())
fib = (math.pow((1 + math.sqrt(5)) / 2, n) - math.pow((1 - math.sqrt(5)) / 2, n))/math.sqrt(5)
print('%0.1f'%fib)