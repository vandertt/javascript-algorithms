// Linear search
const linearSearch = (element, value) => {
  for (let i = 0; i < element.length; i++) {
    if (element[i] === value) {
      return i;
    }
  }
  return -1;
};

const number = [2, 4, 5, 6, 8, 15, 18, 22];

const binarySearch = (array, element) => {
  let start = 0,
    end = array.length - 1,
    middle = Math.floor((start + end) / 2);
  console.log(start, middle, end);
  while (array[middle] !== element && start <= end) {
    if (element < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  console.log(start, middle, end);
  //   if (array[middle] === element) {
  //     return middle;
  //   }
  //   return -1;
  return array[middle] === element ? middle : -1;
};

const binarySearch_ = (arr, ele) => {
  let start = 0,
    end = arr.length - 1,
    middle = Math.floor((start + end) / 2);
  console.log(start, middle, end);
  while (arr[middle] !== ele && start <= end) {
    if (ele < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  console.log(start, middle, end);
  return arr[middle] === ele ? middle : -1;
};

// console.log(binarySearch_(number, 15));

const naiveSearchString = (array, find) => {
  let count = 0;
  let startPosition, endPosition;
  let stringSlice;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < find.length; j++) {
      console.log(find[j], array[i + j]);
      if (find[j] !== array[i + j]) {
        console.log("Break;");
        break;
      }
      if (j === find.length - 1) {
        count++;
      }
      endPosition = i + j;
    }
  }
  startPosition = endPosition - find.length + 1;
  stringSlice = array.slice(startPosition, endPosition + 1);
  return [
    count === 1 ? "find" : "not find",
    [startPosition, endPosition],
    stringSlice,
  ];
};

console.log(naiveSearchString("hello i am yours", "am"));
