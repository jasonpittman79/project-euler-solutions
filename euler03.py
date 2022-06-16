pfs = []

def is_prime(n):
    if n == 1:
        return False

    i = 2
    while i * i <= n:
        if n % i == 0:
            return False
        i += 1
    return True

def findPrime(n):
  for i in range(1,n-1):
    if n % i == 0:
      pfs.append(i)
      # print(str(pfs))

  # Determine whether the candidate is a prime number
  for j in pfs:
    if is_prime(j):
      largest_pf = j
  return largest_pf

n = 600851475143
print(findPrime(n))