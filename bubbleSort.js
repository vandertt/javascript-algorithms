// ES15
const swap = (arr, common) => {
  let temp;
  temp = arr[common];
  arr[common] = arr[common + 1];
  arr[common + 1] = temp;
  return temp;
};
// ES2015
const swapII = (arr, arr1, arr2) => {
  return ([arr[arr1], arr[arr2]] = [arr[arr2], arr[arr1]]);
};

const sortArr = (arr) => {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap(arr, j);
        swapII(arr, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
};

let storage = [32, 53, 21, 5, 12, 52];

console.log(sortArr(storage));
