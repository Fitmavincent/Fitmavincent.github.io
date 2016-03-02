import math

def count(n):
    c = 0
    i = 0
    while ( i < math.pow(2, n)):
        i += 1
        c += 1
        
    print long(c)

count(32)

