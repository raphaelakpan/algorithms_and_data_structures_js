function insertionSort(array) {
  let i, j;
  for (i = 1; i < array.length; i++) {
    let pivot = array[i];
    for (j = i - 1; j >= 0 && array[j] > pivot; j--) {
      array[j+1] = array[j];
    }
    array[j+1] = pivot;
  }
  return array;
}

console.log(insertionSort([3,2,9,6,5]));
