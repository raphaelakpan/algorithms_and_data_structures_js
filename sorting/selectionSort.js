function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minimum = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minimum]) minimum = j;
    }
    if (minimum !== i) swap(array, i, minimum);
  }

  return array;
}

console.log(selectionSort([3, 2, 9, 6, 5]));
// [4,5,1,2]
//
