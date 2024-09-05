document.write("<h2> Первая программа на JavaScript</h2>");

// rps(scissors, rock);

// sum(numbers);
// console.log(x);

document.write("<h3> x </h3>");

const numbers = new Array(1, -3, -5, 11, 17, 4);

const empty = [];

function countPositivesSumNegatives(input) {
  if (input.length == 0) {
    const arr1 = [];
    return arr1;
  }
  let sum = 0;
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] < 0) {
      sum += input[i];
    }
    if (input[i] > 0) {
      count++;т
    }
  }

  const arr = new Array(count, sum);

  console.log(arr);

  return arr;
}

console.log(countPositivesSumNegatives(numbers));
console.log(countPositivesSumNegatives(empty));
