const Sort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    // console.log(array);
    for (var j = i - 1; i >= 0 && array[j] > current; j--) {
      array[j + 1] = array[j];
      //   console.log(array[j + 1], array[i]);
    }
    // console.log(array[j + 1], current);
    // console.log("----------------------");
    array[j + 1] = current;
  }
  return array;
};

let storage = [32, 53, 21, 5, 12, 52];

console.log(Sort(storage));
