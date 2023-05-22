// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
  const arr = string.split(" ");
  return arr;
}

// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
  const rna = dna.replaceAll("T", "U");
  return rna;
}

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
  const smallestIndex = arr.indexOf(Math.min(...arr));
  return toReturn === 'value' ? Math.min(...arr) : smallestIndex;
}

// https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
function warnTheSheep(queue) {
  const sheepCount = queue.length - 1 - queue.indexOf('wolf');
  const message = sheepCount === 0 ? "Pls go away and stop eating my sheep" : "Oi! Sheep number " + sheepCount + "! You are about to be eaten by a wolf!";
  return message;
}

// https://www.codewars.com/kata/beginner-lost-without-a-map
const maps = x => x.map(el => el * 2);

// https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
const firstNonConsecutive = arr => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      return arr[i];
    }
  }
  return null;
};

// https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
const doubleInteger = (i) => i * 2;

// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
const century = (year) => Math.ceil(year / 100);

// https://www.codewars.com/kata/523b66342d0c301ae400003b/train/javascript
const multiply = (x, y) => x * y;

// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
const makeNegative = (num) => -Math.abs(num);
