// It works by selecting one element called the pivot and placing it in the correct
// index where the pivot should end up
// For each pivot selected, it places all elements less than it to the left, and all
// elements greater than it to the right. The order doesn't matter.

// Helper function swap
function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// Helper function pivot
// [6,8,3,4] => 6,3,8,4 => 6,3,4,8 => 4,3,6,8
function pivot(array, start, end) {
  let pivot = array[start];
  let pivotIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (array[i] < pivot) {
      pivotIndex++;
      swap(array, i, pivotIndex);
    }
  }
  swap(array, pivotIndex, start);

  return pivotIndex;
}

function quickSort(array, left = 0, right = array.length - 1) {
  if (left >= right) return;
  let pivotIndex = pivot(array, left, right);
  quickSort(array, left, pivotIndex - 1);
  quickSort(array, pivotIndex + 1, right);
  return array;
}

// let array = [4,8,2,1,5,7,6,3]
let array = [4, 6, 9, 1, 2, 5];
quickSort(array);
// console.log(pivot(array));
// console.log(pivot(array,0,3));
// console.log(pivot(array,0,2));
console.log(array);
