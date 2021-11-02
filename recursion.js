// SumRange
const sumRange = (num) => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
};

const factorial = (num) => {
  if (num === 1) return 1;
  return num * factorial(num - 1);
};

const collectOddValue = (input) => {
  let result = [],
    oddEvenValue = [];
  const helper = (inputHelper) => {
    if (inputHelper.length === 0) {
      return;
    }
    if (inputHelper[0] % 2 !== 0) {
      result.push(inputHelper[0]);
    }
    if (inputHelper[0] % 2 == 0) {
      oddEvenValue.push(inputHelper[0]);
    }
    helper(inputHelper.slice(1));
  };
  helper(input);
  return ["Odd: ", result, "Even:", oddEvenValue];
};

// Pure recursion
const pureOddCollect = (array) => {
  let collect = [],
    even = [];
  if (array.length === 0) {
    return collect;
  }
  if (array[0] % 2 !== 0) {
    collect.push(array[0]);
  }
  collect = collect.concat(pureOddCollect(array.slice(1)));
  return collect;
};

const data = [3, 5, 1, 3, 7, 8, 6, 2];

// console.log(data);
// console.log(collectOddValue(data));
// console.log(data.concat([1, 2, 3]));
console.log(pureOddCollect(data));
