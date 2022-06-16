// Euler 16
// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
// What is the sum of the digits of the number 2^1000?

const startTime = window.performance.now();
const pow = 1000;

function sumDigits(n) {
  const sum = String(BigInt(2 ** n))
    .split("")
    .map(Number)
    .reduce((partialSum, a) => partialSum + a, 0);

  return sum;
}

console.log(sumDigits(pow));
console.log("ms: " + (window.performance.now() - startTime));
