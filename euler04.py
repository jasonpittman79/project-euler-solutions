largestPalindrome = 0

def isPalindrome(n):
  numstr = str(n)
  return numstr == numstr[::-1]

for a in range (100, 999):
  for b in range (100, 999):
    product = a * b
    if isPalindrome(product) and product > largestPalindrome:
      largestPalindrome = product
print(largestPalindrome)