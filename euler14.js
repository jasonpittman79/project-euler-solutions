
var startTime = window.performance.now();

const total = 1000000;

function collatzNum(n) {
  if (n % 2 === 0) return n / 2;
  else return n * 3 + 1;
}

function collatzSequence(n) {
  let counter = 1;
  while (n !== 1) {
    n = collatzNum(n);
    counter++;
  }
  return counter;
}

function longestChain(n) {
  let count = 0;
  let max = 0;
  let maxIndex;

  for (let i = 1; i < n; i++) {
    count = collatzSequence(i);

    if (count > max) {
      // console.log(count);
      max = count;
      maxIndex = i;
    }
  }

  return maxIndex;
}

console.log(longestChain(total));
console.log("ms: " + (window.performance.now() - startTime));
