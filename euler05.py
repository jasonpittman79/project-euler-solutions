n = 20
inc = 20
found = {}

while n > 0:
  for i in range(20, 0, -1):
    if n % i == 0:
      found[i] = 1
    else:
      found[i] = 0
  if len(list(set(list(found.values())))) == 1:
    break
  n = n + inc

print(str(found))