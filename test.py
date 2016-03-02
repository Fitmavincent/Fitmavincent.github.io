def printTriangle(n):
    for i in range(0, n+1):
        print (n-i)*" " + i*" *"

##printTriangle(6)

def load_data(filename):
    return [(b.split(",", 1)[0], [float(e) for e in b.split(",", 1)[1].split(",")])
            for b in open(filename, "r").read().strip().split("\n")]


def reverse(s):
    return s[::-1]

tx = "This is a reverse message"
print(reverse(tx))

