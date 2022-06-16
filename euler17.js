/* 
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

Answer: 21124
*/

const startTime = window.performance.now();

let sum = 0;

const singles = {
  0: "".length,
  1: "one".length,
  2: "two".length,
  3: "three".length,
  4: "four".length,
  5: "five".length,
  6: "six".length,
  7: "seven".length,
  8: "eight".length,
  9: "nine".length
};

const teens = {
  10: "ten".length,
  11: "eleven".length,
  12: "twelve".length,
  13: "thirteen".length,
  14: "fourteen".length,
  15: "fifteen".length,
  16: "sixteen".length,
  17: "seventeen".length,
  18: "eighteen".length,
  19: "nineteen".length
};

const twentyUp = {
  20: "twenty".length,
  30: "thirty".length,
  40: "forty".length,
  50: "fifty".length,
  60: "sixty".length,
  70: "seventy".length,
  80: "eighty".length,
  90: "ninety".length
};

const hundreds = {
  0: "".length,
  100: "onehundred".length,
  200: "twohundred".length,
  300: "threehundred".length,
  400: "fourhundred".length,
  500: "fivehundred".length,
  600: "sixhundred".length,
  700: "sevenhundred".length,
  800: "eighthundred".length,
  900: "ninehundred".length
};
const AND = 3;
const ONETHOUSAND = "onethousand".length;

// (20,29)= 10*6+36
// 1 - 199 sum 3005
// Answer: 21124

for (const [hundredsK, hundredsV] of Object.entries(hundreds)) {
  for (const [singlesK, singlesV] of Object.entries(singles)) {
    if (singlesV === 0) sum += hundredsV;
    // 100, 200 ...
    else if (hundredsV === 0) sum += singlesV;
    // 001, 002 ...
    else sum += hundredsV + AND + singlesV; // 101, 102 ...
  }

  for (const [teensK, teensV] of Object.entries(teens)) {
    if (hundredsV === 0) sum += teensV; // 010, 011 ...
    sum += hundredsV + AND + teensV; // 110, 111 ...
  }

  for (const [twentyUpK, twentyUpV] of Object.entries(twentyUp)) {
    for (const [singlesK, singlesV] of Object.entries(singles)) {
      if (hundredsV === 0) sum += twentyUpV + singlesV;
      // 020-099
      else sum += hundredsV + AND + twentyUpV + singlesV; // 120-199 ... 920-999
    }
  }
}

// special case: 1000
sum += ONETHOUSAND;

console.log("sum: " + sum);
console.log("ms: " + (window.performance.now() - startTime));