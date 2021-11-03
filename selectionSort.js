const Sort = (arr) => {
  const swapII = (arr, arr1, arr2) => {
    return ([arr[arr1], arr[arr2]] = [arr[arr2], arr[arr1]]);
  };

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      // console.log(arr, arr[lowest], arr[j]);
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    // console.log(lowest, i);
    if (i !== lowest) swapII(arr, i, lowest);
  }
  return arr;
};

let storage = [32, 53, 21, 5, 12, 52];

console.log(Sort(storage));
