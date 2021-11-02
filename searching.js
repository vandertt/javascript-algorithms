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

// console.log(binarySearch(number, 28));
