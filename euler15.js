// n x n grid = n*2n - n possibilities
// 2*(1+2)
// n*(n-1+n)
// 3*(2+3)
// 2x2 n*(n-1 + n) + 2 = 6: 0011, 0101, 0110, 1001, 1010, 1100
// 3x3 n*n + 2 = 20: 000111, (001011, 001110, 001101), (010011, 010101, 010110), (011100, 011010, 011001), (110100, 110010, 110100), (101100, 101010, 101001), (100101, 100110, 100011), 111000)
// 2x2 = n*(1+n)
// 3x3 = n*((n-1)+n)
// 4x4 n*n(n-1) + 2 = 50
// ... How many 40 bit integers have 20 of each bit type?
//
// n*n must have n 0s and n 1s per instance
const startTime = window.performance.now();

let array = [];
const reducer = (accumulator, curr) => accumulator + curr;

function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

function gridSize(n) {
  result = factorialize(2 * n) / (factorialize(n) * factorialize(n));
  return result;
}

function solution(n) {
  // n is the number of elements in the array
  for (var i = 1, c = 1; i <= n; i++) {
    // i is the current element
    c = (c * (n + i)) / i; // c is the current product
  }
  return c; // return the product
}

console.log(gridSize(20));
console.log("ms: " + (window.performance.now() - startTime));
