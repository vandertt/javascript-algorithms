const Sort = (arr1, arr2) => {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  //   while (i < arr1.length) {
  //     result.push(arr1[i]);
  //     i++;
  //   }
  //   while (j < arr1.length) {
  //     result.push(arr2[j]);
  //     j++;
  //   }
  return result;
};
console.log(Sort([100, 5], [1, 44, 3, 7]));
