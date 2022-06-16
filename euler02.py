# x, y, x + y, x + 2y, 2x + 3y, 3x + 5y

def calcIt():
	x = y = 1
	sum = 0
	while (x <= 4000000):
		sum += (x + y)
		x, y = x + 2 * y, 2 * x + 3 * y
	return sum

# print(calcIt())
calcIt()