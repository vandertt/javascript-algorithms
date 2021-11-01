const addToUp = (n) => {
  let total = 0;
  for (var i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};

const addToUpFast = (n) => {
  return (n * (n + 1)) / 2;
};

const logAtLeast5 = (n) => {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
};

const logAtLeastFast = (n) => {
  return (n * Math.max(5, n)) / n;
};

function sum(arr) {
  let result = 1;
  for (let i = 1; i <= arr.length; i++) {
    result += arr[i];
  }
  return result;
}

function multipleSumToArray(arr) {
  let newArray = [];
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    newArray.push(2 * arr[i]);
    total += newArray[i];
  }
  return newArray;
  // return total;
}

const frequancyCount = (array1, array2) => {
  if (array1.length != array2.length) {
    return false;
  }
  const object1 = {};
  const object2 = {};
  for (let key of array1) {
    object1[key] = (object1[key] || 0) + 1;
  }
  for (let key of array2) {
    object2[key] = (object2[key] || 0) + 1;
  }
  console.log(object1);
  console.log(object2);
  for (let key in object1) {
    if (!(key ** 2 in object2)) {
      return false;
    }
    if (object2[key ** 2] != object1[key]) {
      return false;
    }
  }
  return true;
};

let number, check;

number = [2, 3, 3, 6];
check = [9, 25, 9, 4];

const validString = (first, second) => {
  if (first.length != second.length) {
    return false;
  }

  let lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
};

let sumValue = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

const countUniqeValue = (arr) => {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i;
};

const maxSubArraySum = (array, number) => {
  if (number > array.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < array.length - number + 1; i++) {
    temp = 0;
    for (let j = 0; j < number; j++) {
      temp += array[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
};

const maxSum = (array, number) => {
  if (number > array.length) return null;
  let tempSum = 0;
  let maxSum = 0;
  for (let i = 0; i < number; i++) {
    maxSum += array[i];
  }
  tempSum = maxSum;
  for (let i = number; i < array.length; i++) {
    tempSum = tempSum - array[i - number] + array[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

let num = [2, 5, 2, 3, 5, 7, 8];
let condition = 3;

console.log(maxSum(num, 3));
